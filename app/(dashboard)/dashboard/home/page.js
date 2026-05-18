/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { homeApi } from "@/utils/api";
import toast from "react-hot-toast";
import { getImageUrl } from "@/utils/getImageUrl";
import {
    Save,
    Plus,
    Trash2,
    Edit,
    Eye,
    X,
    Loader2,
    Globe,
    Layers,
    DollarSign,
    MessageSquare,
    Briefcase,
    Star,
    Shield,
} from "lucide-react";
import Image from "next/image";

export default function HomeManagementPage() {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("hero");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Hero state
    const [hero, setHero] = useState({
        eyebrow: "",
        headingPlain: "",
        headingItalic: "",
        paragraph: "",
        primaryBtn: { label: "", href: "" },
        secondaryBtn: { label: "", href: "" },
        heroImage: "",
    });

    // Collections state
    const [stats, setStats] = useState([]);
    const [services, setServices] = useState([]);
    const [differences, setDifferences] = useState([]);
    const [pricing, setPricing] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [logos, setLogos] = useState([]);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [modalType, setModalType] = useState("");
    const [formData, setFormData] = useState({});
    const [heroImageFile, setHeroImageFile] = useState(null);
    const [uploadedImagePreview, setUploadedImagePreview] = useState(null);

    // ── Fetch all data ──────────────────────────────────────────────

    const fetchAllData = async () => {
        setLoading(true);
        try {
            const [heroRes, statsRes, servicesRes, diffRes, pricingRes, faqsRes, logosRes] =
                await Promise.all([
                    homeApi.getHero().catch(() => ({ data: { data: null } })),
                    homeApi.getStats().catch(() => ({ data: { data: [] } })),
                    homeApi.getServices().catch(() => ({ data: { data: [] } })),
                    homeApi.getDifferences().catch(() => ({ data: { data: [] } })),
                    homeApi.getPricing().catch(() => ({ data: { data: [] } })),
                    homeApi.getFAQs().catch(() => ({ data: { data: [] } })),
                    homeApi.getLogos().catch(() => ({ data: { data: [] } })),
                ]);

            setHero(heroRes.data.data || getDefaultHero());
            setStats(statsRes.data.data || []);
            setServices(servicesRes.data.data || []);
            setDifferences(diffRes.data.data || []);
            setPricing(pricingRes.data.data || []);
            setFaqs(faqsRes.data.data || []);
            setLogos(logosRes.data.data || []);
        } catch (error) {
            toast.error("Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    const getDefaultHero = () => ({
        eyebrow: "Welcome to Our Platform",
        headingPlain: "Professional",
        headingItalic: "Services",
        paragraph: "We provide high-quality services tailored to your needs.",
        primaryBtn: { label: "Get Started", href: "#" },
        secondaryBtn: { label: "Learn More", href: "#" },
        heroImage: "",
    });

    useEffect(() => {
        fetchAllData();
    }, []);

    // ── Hero Update ────────────────────────────────────────────────
    const handleHeroUpdate = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate required fields
        if (
            !hero.primaryBtn?.label ||
            !hero.primaryBtn?.href ||
            !hero.secondaryBtn?.label ||
            !hero.secondaryBtn?.href
        ) {
            toast.error("All button fields are required");
            setIsSubmitting(false);
            return;
        }

        const formDataToSend = new FormData();

        // Add all hero fields to FormData
        Object.keys(hero).forEach((key) => {
            if (key === "primaryBtn" || key === "secondaryBtn") {
                // Send button objects as JSON strings
                formDataToSend.append(key, JSON.stringify(hero[key]));
            } else if (key === "heroImage") {
                // Skip heroImage if no new file is uploaded
                if (!heroImageFile) {
                    formDataToSend.append(key, hero[key]);
                }
            } else {
                formDataToSend.append(key, hero[key]);
            }
        });

        // Add new image file if exists
        if (heroImageFile) {
            formDataToSend.append("heroImage", heroImageFile);
        }

        try {
            await homeApi.updateHero(formDataToSend);
            toast.success("Hero updated successfully");
            setHeroImageFile(null);
            setUploadedImagePreview(null);
            fetchAllData();
        } catch (error) {
            console.error("Hero update error:", error);
            const errorMessage = error.response?.data?.error || "Failed to update hero";
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // ── CRUD Operations ──────────────────────────────────────────────
    const handleCreate = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await homeApi[`create${modalType}`](formData);
            toast.success(`${modalType} created successfully`);
            setShowModal(false);
            setFormData({});
            setEditingItem(null);
            fetchAllData();
        } catch (error) {
            toast.error(`Failed to create ${modalType}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await homeApi[`update${modalType}`](editingItem._id, formData);
            toast.success(`${modalType} updated successfully`);
            setShowModal(false);
            setFormData({});
            setEditingItem(null);
            fetchAllData();
        } catch (error) {
            toast.error(`Failed to update ${modalType}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (type, id) => {
        if (!confirm("Are you sure you want to delete this item? This action cannot be undone."))
            return;
        try {
            await homeApi[`delete${type}`](id);
            toast.success(`${type} deleted successfully`);
            fetchAllData();
        } catch (error) {
            toast.error(`Failed to delete ${type}`);
        }
    };

    const openCreateModal = (type) => {
        setModalType(type);
        setEditingItem(null);
        setFormData(getDefaultFormData(type));
        setShowModal(true);
    };

    const openEditModal = (type, item) => {
        setModalType(type);
        setEditingItem(item);
        setFormData(item);
        setShowModal(true);
    };

    const getDefaultFormData = (type) => {
        const defaults = {
            Stat: { value: "", description: "", suffix: "", color: "primary" },
            Service: { title: "", description: "", icon: "" },
            DifferenceItem: { title: "", description: "", builtFor: [], images: [] },
            PricingPlan: {
                name: "",
                subtitle: "",
                price: 0,
                features: [],
                equivalent: "",
                buttonText: "",
            },
            FAQ: { question: "", answer: "" },
            CompanyLogo: { src: "", altText: "" },
        };
        return defaults[type] || {};
    };

    // ── Render ──────────────────────────────────────────────────────────
    const tabs = [
        { id: "hero", label: "Hero Section", icon: Globe },
        { id: "logos", label: "Company Logos", icon: Shield },
        { id: "services", label: "Services", icon: Briefcase },
        { id: "differences", label: "Differences", icon: Star },
        { id: "stats", label: "Stats", icon: Layers },
        { id: "pricing", label: "Pricing", icon: DollarSign },
        { id: "faqs", label: "FAQs", icon: MessageSquare },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-3 border-secondary border-t-transparent mx-auto"></div>
                    <p className="mt-4 text-gray-500 font-medium">Loading home data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* ── Header ──────────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Home Management</h1>
                    <p className="text-gray-500 mt-1">
                        Manage all home page content from one place
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
            </div>

            {/* ── Tabs ────────────────────────────────────────────────── */}
            <div className="flex flex-wrap gap-1 border-b border-gray-200">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                                activeTab === tab.id
                                    ? "border-secondary text-secondary bg-secondary/5"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* ── Content ──────────────────────────────────────────────── */}
            <div className="min-h-100">
                {/* ── Hero Tab ──────────────────────────────────────── */}
                {activeTab === "hero" && (
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">Hero Section</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Configure the main hero section of your homepage
                            </p>
                        </div>
                        <form onSubmit={handleHeroUpdate} className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Eyebrow Text <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.eyebrow}
                                        onChange={(e) =>
                                            setHero({ ...hero, eyebrow: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. Welcome to Our Platform"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Heading Plain <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.headingPlain}
                                        onChange={(e) =>
                                            setHero({ ...hero, headingPlain: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. Professional"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Heading Italic <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.headingItalic}
                                        onChange={(e) =>
                                            setHero({ ...hero, headingItalic: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. Services"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Paragraph <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={hero.paragraph}
                                        onChange={(e) =>
                                            setHero({ ...hero, paragraph: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        rows={3}
                                        placeholder="Enter a compelling description"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Primary Button Label <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.primaryBtn?.label || ""}
                                        onChange={(e) =>
                                            setHero({
                                                ...hero,
                                                primaryBtn: {
                                                    ...hero.primaryBtn,
                                                    label: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. Get Started"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Primary Button Href <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.primaryBtn?.href || ""}
                                        onChange={(e) =>
                                            setHero({
                                                ...hero,
                                                primaryBtn: {
                                                    ...hero.primaryBtn,
                                                    href: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. /services"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Secondary Button Label{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.secondaryBtn?.label || ""}
                                        onChange={(e) =>
                                            setHero({
                                                ...hero,
                                                secondaryBtn: {
                                                    ...hero.secondaryBtn,
                                                    label: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. Learn More"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Secondary Button Href{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={hero.secondaryBtn?.href || ""}
                                        onChange={(e) =>
                                            setHero({
                                                ...hero,
                                                secondaryBtn: {
                                                    ...hero.secondaryBtn,
                                                    href: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="e.g. /about"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Hero Image <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                        <div className="relative w-full">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    setHeroImageFile(file);
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onload = (ev) =>
                                                            setUploadedImagePreview(
                                                                ev.target.result,
                                                            );
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-secondary/10 file:text-secondary file:font-medium hover:file:bg-secondary/20"
                                            />
                                        </div>
                                        {(hero.heroImage || uploadedImagePreview) && (
                                            <div className="flex items-center gap-3 shrink-0">
                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                                                    <Image
                                                        fill
                                                        src={
                                                            uploadedImagePreview ||
                                                            getImageUrl(hero.heroImage)
                                                        }
                                                        alt="Hero preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <a
                                                    href={getImageUrl(hero.heroImage)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-gray-400 hover:text-secondary rounded-lg hover:bg-gray-50 transition-colors"
                                                    title="View full image"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Recommended size: 1920x1080px. Max size: 5MB
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Updating...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="w-4 h-4" />
                                            Update Hero
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* ── Other Tabs ──────────────────────────────────────── */}
                {["stats", "services", "differences", "pricing", "faqs", "logos"].includes(
                    activeTab,
                ) && (
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 capitalize">
                                    {activeTab}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    Manage {activeTab} items for your homepage
                                </p>
                            </div>
                            <button
                                onClick={() => openCreateModal(getModalType(activeTab))}
                                className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all shadow-sm hover:shadow-md"
                            >
                                <Plus className="w-4 h-4" />
                                Add New
                            </button>
                        </div>

                        <div className="p-6">
                            {getItems(activeTab).length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                        <Layers className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        No items found
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        Get started by creating your first {activeTab.slice(0, -1)}
                                    </p>
                                    <button
                                        onClick={() => openCreateModal(getModalType(activeTab))}
                                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add New {activeTab.slice(0, -1)}
                                    </button>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">
                                                    #
                                                </th>
                                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Title / Name
                                                </th>
                                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Details
                                                </th>
                                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {getItems(activeTab).map((item, index) => (
                                                <tr
                                                    key={item._id}
                                                    className="hover:bg-gray-50 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm text-gray-500">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <p className="font-medium text-gray-900">
                                                            {item.name ||
                                                                item.title ||
                                                                item.question ||
                                                                item.value ||
                                                                "Untitled"}
                                                        </p>
                                                        <p className="text-xs text-gray-500 truncate max-w-xs">
                                                            {item.email ||
                                                                item.description ||
                                                                item.subtitle ||
                                                                ""}
                                                        </p>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {activeTab === "logos" && item.src && (
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                src={getImageUrl(item.src)}
                                                                alt={item.altText}
                                                                className="h-8 object-contain"
                                                            />
                                                        )}
                                                        {activeTab === "services" && item.icon && (
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                src={getImageUrl(item.icon)}
                                                                alt={item.title}
                                                                className="w-8 h-8 object-cover rounded-lg"
                                                            />
                                                        )}
                                                        {activeTab === "differences" &&
                                                            item.images &&
                                                            item.images.length > 0 && (
                                                                <div className="flex gap-2">
                                                                    {item.images.map((img, idx) => (
                                                                        <Image
                                                                            width={100}
                                                                            height={100}
                                                                            key={idx}
                                                                            src={getImageUrl(img)}
                                                                            alt={`Before/After ${idx}`}
                                                                            className="w-8 h-8 object-cover rounded-lg"
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        {activeTab === "pricing" && (
                                                            <span className="text-sm font-medium text-gray-900">
                                                                ${item.price}
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span
                                                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                                                item.isActive !== false
                                                                    ? "bg-green-50 text-green-700 border border-green-200"
                                                                    : "bg-red-50 text-red-700 border border-red-200"
                                                            }`}
                                                        >
                                                            <div
                                                                className={`w-1.5 h-1.5 rounded-full ${
                                                                    item.isActive !== false
                                                                        ? "bg-green-600"
                                                                        : "bg-red-600"
                                                                }`}
                                                            ></div>
                                                            {item.isActive !== false
                                                                ? "Active"
                                                                : "Inactive"}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        <div className="flex items-center justify-end gap-1">
                                                            <button
                                                                onClick={() =>
                                                                    openEditModal(
                                                                        getModalType(activeTab),
                                                                        item,
                                                                    )
                                                                }
                                                                className="p-2 text-gray-400 hover:text-secondary rounded-lg hover:bg-amber-50 transition-colors"
                                                                title="Edit"
                                                            >
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        getModalType(activeTab),
                                                                        item._id,
                                                                    )
                                                                }
                                                                className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
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
                )}
            </div>

            {/* ── Modal ────────────────────────────────────────────────── */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-hidden">
                        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {editingItem ? "Edit" : "Create"} {modalType}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    {editingItem
                                        ? `Update ${modalType} details`
                                        : `Add a new ${modalType}`}
                                </p>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <form
                                onSubmit={editingItem ? handleUpdate : handleCreate}
                                className="space-y-4"
                            >
                                {getFormFields(modalType)}
                                <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                {editingItem ? "Updating..." : "Creating..."}
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4" />
                                                {editingItem ? "Update" : "Create"}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    // ── Helper Functions ───────────────────────────────────────────────

    function getModalType(tab) {
        const types = {
            stats: "Stat",
            services: "Service",
            differences: "DifferenceItem",
            pricing: "PricingPlan",
            faqs: "FAQ",
            logos: "CompanyLogo",
        };
        return types[tab] || "Stat";
    }

    function getItems(tab) {
        const items = {
            stats,
            services,
            differences,
            pricing,
            faqs,
            logos,
        };
        return items[tab] || [];
    }

    function getFormFields(type) {
        const commonField = (label, key, type = "text", required = true) => (
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                    type={type}
                    value={formData[key] || ""}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    required={required}
                />
            </div>
        );

        const textareaField = (label, key, required = true) => (
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                    value={formData[key] || ""}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    rows={3}
                    required={required}
                />
            </div>
        );

        switch (type) {
            case "Stat":
                return (
                    <>
                        {commonField("Value", "value")}
                        {commonField("Description", "description")}
                        {commonField("Suffix", "suffix", "text", false)}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Color
                            </label>
                            <select
                                value={formData.color || "primary"}
                                onChange={(e) =>
                                    setFormData({ ...formData, color: e.target.value })
                                }
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                            >
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                            </select>
                        </div>
                    </>
                );

            case "Service":
                return (
                    <>
                        {commonField("Title", "title")}
                        {textareaField("Description", "description")}
                        {commonField("Icon URL", "icon")}
                    </>
                );

            case "DifferenceItem":
                return (
                    <>
                        {commonField("Title", "title")}
                        {textareaField("Description", "description")}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Built For (comma separated)
                            </label>
                            <input
                                type="text"
                                value={(formData.builtFor || []).join(", ")}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        builtFor: e.target.value.split(",").map((s) => s.trim()),
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="e.g. Designers, Developers, Agencies"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Images (comma separated URLs)
                            </label>
                            <input
                                type="text"
                                value={(formData.images || []).join(", ")}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        images: e.target.value.split(",").map((s) => s.trim()),
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="Image URL 1, Image URL 2"
                            />
                        </div>
                    </>
                );

            case "PricingPlan":
                return (
                    <>
                        {commonField("Plan Name", "name")}
                        {commonField("Subtitle", "subtitle")}
                        {commonField("Price", "price", "number")}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Features (comma separated)
                            </label>
                            <input
                                type="text"
                                value={(formData.features || []).join(", ")}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        features: e.target.value.split(",").map((s) => s.trim()),
                                    })
                                }
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="Feature 1, Feature 2, Feature 3"
                            />
                        </div>
                        {commonField("Equivalent Rate", "equivalent")}
                        {commonField("Button Text", "buttonText")}
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isDark || false}
                                    onChange={(e) =>
                                        setFormData({ ...formData, isDark: e.target.checked })
                                    }
                                    className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                                />
                                <span className="text-sm text-gray-700">Dark Theme</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isPopular || false}
                                    onChange={(e) =>
                                        setFormData({ ...formData, isPopular: e.target.checked })
                                    }
                                    className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                                />
                                <span className="text-sm text-gray-700">Popular</span>
                            </label>
                        </div>
                    </>
                );

            case "FAQ":
                return (
                    <>
                        {commonField("Question", "question")}
                        {textareaField("Answer", "answer")}
                    </>
                );

            case "CompanyLogo":
                return (
                    <>
                        {commonField("Image URL", "src")}
                        {commonField("Alt Text", "altText", "text", false)}
                    </>
                );

            default:
                return <p className="text-gray-500">Form fields not configured for {type}</p>;
        }
    }
}
