/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { Trash2, Power, Shield, X, Key, UserPlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { authApi } from "@/utils/api";
import toast from "react-hot-toast";

export default function UserManagementPage() {
    const { user, register } = useAuth();
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "admin",
    });
    const [newPassword, setNewPassword] = useState("");

    const fetchAdmins = async () => {
        try {
            setLoading(true);
            const response = await authApi.getAllAdmins();
            // Handle different response formats
            const adminData = Array.isArray(response.data)
                ? response.data
                : response.data.admins || [];
            setAdmins(adminData);
        } catch (err) {
            console.error("Error fetching admins:", err);
            toast.error(err.response?.data?.error || "Failed to fetch admins");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.role === "super_admin") {
            fetchAdmins();
        }
    }, [user]);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            toast.success("User created successfully");
            setShowModal(false);
            setFormData({ name: "", email: "", password: "", role: "admin" });
            fetchAdmins();
        } catch (err) {
            toast.error(err.message || "Failed to create user");
        }
    };

    const handleToggleStatus = async (adminId, currentStatus) => {
        try {
            await authApi.updateAdminStatus(adminId, !currentStatus);
            toast.success(`User ${!currentStatus ? "activated" : "deactivated"} successfully`);
            fetchAdmins();
        } catch (err) {
            toast.error(err.response?.data?.error || "Failed to update status");
        }
    };

    const handleDeleteUser = async (adminId) => {
        if (!confirm("Are you sure you want to delete this user? This action cannot be undone."))
            return;
        try {
            await authApi.deleteAdmin(adminId);
            toast.success("User deleted successfully");
            fetchAdmins();
        } catch (err) {
            toast.error(err.response?.data?.error || "Failed to delete user");
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (!selectedAdmin) return;
        try {
            await authApi.changeAdminPassword(selectedAdmin._id, newPassword);
            toast.success(`Password changed successfully for ${selectedAdmin.name}`);
            setShowPasswordModal(false);
            setNewPassword("");
            setSelectedAdmin(null);
        } catch (err) {
            toast.error(err.response?.data?.error || "Failed to change password");
        }
    };

    const openPasswordModal = (admin) => {
        setSelectedAdmin(admin);
        setNewPassword("");
        setShowPasswordModal(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-secondary mx-auto"></div>
                    <p className="mt-3 text-gray-500">Loading users...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="text-gray-500 mt-1">Manage admin users and permissions</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-white rounded-xl shadow-sm hover:shadow-md"
                >
                    <UserPlus className="w-4 h-4" />
                    <span>Add New User</span>
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{admins.length}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Active Users</p>
                    <p className="text-2xl font-bold text-green-600">
                        {admins.filter((a) => a.isActive).length}
                    </p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Super Admins</p>
                    <p className="text-2xl font-bold text-amber-600">
                        {admins.filter((a) => a.role === "super_admin").length}
                    </p>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Last Login
                                </th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {admins.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-5 py-12 text-center text-gray-400"
                                    >
                                        No users found
                                    </td>
                                </tr>
                            ) : (
                                admins.map((admin) => (
                                    <tr
                                        key={admin._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-5 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-linear-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white font-medium shadow-sm">
                                                    {admin.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {admin.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {admin.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3">
                                            <span
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                                    admin.role === "super_admin"
                                                        ? "bg-amber-100 text-amber-700"
                                                        : "bg-blue-100 text-blue-700"
                                                }`}
                                            >
                                                <Shield className="w-3 h-3" />
                                                {admin.role === "super_admin"
                                                    ? "Super Admin"
                                                    : "Admin"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3">
                                            <span
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                                    admin.isActive
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                            >
                                                <div
                                                    className={`w-1.5 h-1.5 rounded-full ${admin.isActive ? "bg-green-600" : "bg-red-600"}`}
                                                ></div>
                                                {admin.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3 text-sm text-gray-500">
                                            {admin.lastLogin
                                                ? new Date(admin.lastLogin).toLocaleDateString()
                                                : "Never"}
                                        </td>
                                        <td className="px-5 py-3">
                                            <div className="flex items-center gap-1">
                                                {/* Don't show actions for current user or super_admin (except can't delete/modify super_admin) */}
                                                {admin._id !== user?._id &&
                                                    admin.role !== "super_admin" && (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    handleToggleStatus(
                                                                        admin._id,
                                                                        admin.isActive,
                                                                    )
                                                                }
                                                                className="p-2 text-gray-400 hover:text-secondary transition-colors rounded-lg hover:bg-amber-50"
                                                                title={
                                                                    admin.isActive
                                                                        ? "Deactivate"
                                                                        : "Activate"
                                                                }
                                                            >
                                                                <Power className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    openPasswordModal(admin)
                                                                }
                                                                className="p-2 text-gray-400 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                                                                title="Change Password"
                                                            >
                                                                <Key className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDeleteUser(admin._id)
                                                                }
                                                                className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                                                                title="Delete"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}
                                                {admin._id === user?._id && (
                                                    <span className="text-xs text-gray-400 px-2">
                                                        (You)
                                                    </span>
                                                )}
                                                {admin.role === "super_admin" &&
                                                    admin._id !== user?._id && (
                                                        <span className="text-xs text-gray-400 px-2">
                                                            Protected
                                                        </span>
                                                    )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create User Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl font-bold text-gray-900">Create New Admin</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleCreateUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="admin@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    required
                                    minLength={6}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Role
                                </label>
                                <select
                                    value={formData.role}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            role: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="super_admin">Super Admin</option>
                                </select>
                            </div>
                            <div className="flex gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2.5 bg-secondary text-white rounded-xl transition-colors font-medium"
                                >
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Change Password Modal */}
            {showPasswordModal && selectedAdmin && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">
                            Changing password for{" "}
                            <span className="font-medium text-gray-900">{selectedAdmin.name}</span>
                        </p>
                        <form onSubmit={handleChangePassword} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    required
                                    minLength={6}
                                />
                            </div>
                            <div className="flex gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordModal(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2.5 bg-secondary text-white rounded-xl hover:bg-amber-700 transition-colors font-medium"
                                >
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
