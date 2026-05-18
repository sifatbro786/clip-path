/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import {
    Mail,
    Eye,
    EyeOff,
    Search,
    Trash2,
    Loader2,
    CheckCircle,
    AlertCircle,
    RefreshCw,
    Clock,
    User,
    Building,
    Phone,
    MessageSquare,
} from "lucide-react";
import { contactApi } from "@/utils/api";

export default function ContactManagement() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRead, setFilterRead] = useState("all");
    const [selectedContact, setSelectedContact] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const response = await contactApi.getAll();
            setContacts(response.data);
        } catch (err) {
            console.error("Error fetching contacts:", err);
            setError(err.response?.data?.error || "Failed to fetch contacts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleToggleRead = async (id, currentStatus) => {
        try {
            await contactApi.toggleRead(id);
            setSuccess(`Message marked as ${!currentStatus ? "read" : "unread"}`);
            setTimeout(() => setSuccess(""), 3000);
            fetchContacts();
        } catch (err) {
            setError(err.response?.data?.error || "Failed to update status");
            setTimeout(() => setError(""), 3000);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this message? This action cannot be undone."))
            return;
        try {
            await contactApi.delete(id);
            setSuccess("Message deleted successfully!");
            setTimeout(() => setSuccess(""), 3000);
            fetchContacts();
            if (selectedContact?._id === id) {
                setShowModal(false);
                setSelectedContact(null);
            }
        } catch (err) {
            setError(err.response?.data?.error || "Failed to delete message");
            setTimeout(() => setError(""), 3000);
        }
    };

    const handleViewDetails = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
        if (!contact.isRead) {
            handleToggleRead(contact._id, false);
        }
    };

    const filteredContacts = contacts.filter((contact) => {
        const matchesSearch =
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (contact.companyName &&
                contact.companyName.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesFilter =
            filterRead === "all" ||
            (filterRead === "read" && contact.isRead) ||
            (filterRead === "unread" && !contact.isRead);

        return matchesSearch && matchesFilter;
    });

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto mb-3" />
                    <p className="text-gray-500">Loading messages...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-360 mx-auto p-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-1 bg-linear-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Contact Messages
                            </h1>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Manage and respond to customer inquiries
                        </p>
                    </div>
                    <button
                        onClick={fetchContacts}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-all"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                </div>

                {/* Messages */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-700">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <p className="text-green-700">{success}</p>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <Mail className="w-6 h-6 text-blue-600 mb-2" />
                        <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
                        <p className="text-sm text-gray-500">Total Messages</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <Eye className="w-6 h-6 text-green-600 mb-2" />
                        <p className="text-2xl font-bold text-gray-900">
                            {contacts.filter((c) => c.isRead).length}
                        </p>
                        <p className="text-sm text-gray-500">Read</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <EyeOff className="w-6 h-6 text-orange-600 mb-2" />
                        <p className="text-2xl font-bold text-gray-900">
                            {contacts.filter((c) => !c.isRead).length}
                        </p>
                        <p className="text-sm text-gray-500">Unread</p>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name, email, company, or message..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <select
                            value={filterRead}
                            onChange={(e) => setFilterRead(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                            <option value="all">All Messages</option>
                            <option value="read">Read</option>
                            <option value="unread">Unread</option>
                        </select>
                    </div>
                </div>

                {/* Contacts Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {filteredContacts.length === 0 ? (
                        <div className="text-center py-16">
                            <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                No messages found
                            </h3>
                            <p className="text-gray-500">
                                {searchTerm || filterRead !== "all"
                                    ? "Try adjusting your search or filter criteria"
                                    : "Contact messages will appear here"}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Name / Company
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Contact
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Message
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredContacts.map((contact) => (
                                        <tr
                                            key={contact._id}
                                            className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                                                !contact.isRead ? "bg-blue-50/30" : ""
                                            }`}
                                            onClick={() => handleViewDetails(contact)}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    {!contact.isRead ? (
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                            <span className="text-xs font-medium text-blue-600">
                                                                New
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {contact.name}
                                                    </p>
                                                    {contact.companyName && (
                                                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                                            <Building className="w-3 h-3" />
                                                            {contact.companyName}
                                                        </p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="space-y-1">
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <Mail className="w-3 h-3" />
                                                        {contact.email}
                                                    </p>
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <Phone className="w-3 h-3" />
                                                        {contact.phone}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">
                                                    {contact.message}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                                    <Clock className="w-3 h-3" />
                                                    {formatDate(contact.createdAt)}
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() =>
                                                            handleToggleRead(
                                                                contact._id,
                                                                contact.isRead,
                                                            )
                                                        }
                                                        className={`p-2 rounded-lg transition-colors ${
                                                            contact.isRead
                                                                ? "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                                                                : "text-blue-600 hover:bg-blue-50"
                                                        }`}
                                                        title={
                                                            contact.isRead
                                                                ? "Mark as unread"
                                                                : "Mark as read"
                                                        }
                                                    >
                                                        {contact.isRead ? (
                                                            <EyeOff className="w-4 h-4" />
                                                        ) : (
                                                            <Eye className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(contact._id)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Message Details Modal */}
            {showModal && selectedContact && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-6 h-6 text-blue-600" />
                                <h2 className="text-xl font-bold text-gray-900">Message Details</h2>
                            </div>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedContact(null);
                                }}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <EyeOff className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                            {/* Sender Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">
                                        Name
                                    </label>
                                    <p className="text-gray-900 font-medium mt-1 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" />
                                        {selectedContact.name}
                                    </p>
                                </div>
                                {selectedContact.companyName && (
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">
                                            Company
                                        </label>
                                        <p className="text-gray-900 font-medium mt-1 flex items-center gap-2">
                                            <Building className="w-4 h-4 text-gray-400" />
                                            {selectedContact.companyName}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">
                                        Email
                                    </label>
                                    <a
                                        href={`mailto:${selectedContact.email}`}
                                        className="text-blue-600 font-medium mt-1 block hover:underline"
                                    >
                                        {selectedContact.email}
                                    </a>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">
                                        Phone
                                    </label>
                                    <a
                                        href={`tel:${selectedContact.phone}`}
                                        className="text-blue-600 font-medium mt-1 block hover:underline"
                                    >
                                        {selectedContact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <label className="text-xs font-semibold text-gray-500 uppercase">
                                    Date Received
                                </label>
                                <p className="text-gray-900 mt-1">
                                    {new Date(selectedContact.createdAt).toLocaleString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2 mb-3">
                                    <MessageSquare className="w-4 h-4" />
                                    Message
                                </label>
                                <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {selectedContact.message}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button
                                    onClick={() => {
                                        window.location.href = `mailto:${selectedContact.email}`;
                                    }}
                                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Reply via Email
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedContact._id)}
                                    className="px-6 py-2.5 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors font-medium"
                                >
                                    Delete Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
