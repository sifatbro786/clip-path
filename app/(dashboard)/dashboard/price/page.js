/* eslint-disable react-hooks/set-state-in-effect */
// app/(dashboard)/dashboard/price/page.js
"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
    Plus,
    Edit,
    Trash2,
    X,
    Image as ImageIcon,
    DollarSign,
    Package,
    Star,
    TrendingUp,
    HelpCircle,
    CheckCircle,
} from "lucide-react";
import { priceApi } from "@/services/priceApi";
import Image from "next/image";

export default function PriceManagementPage() {
    const [pricingData, setPricingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("hero");
    const [editingItem, setEditingItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [formData, setFormData] = useState({});
    const [imageFiles, setImageFiles] = useState({ afterImage: null, beforeImage: null });
    const [imagePreviews, setImagePreviews] = useState({ afterImage: "", beforeImage: "" });

    // Fetch pricing data
    const fetchPricingData = async () => {
        try {
            setLoading(true);
            const response = await priceApi.getPricingData();
            setPricingData(response.data.data);
        } catch (error) {
            console.error("Error fetching pricing data:", error);
            toast.error("Failed to load pricing data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPricingData();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle array field changes
    const handleArrayChange = (field, index, value) => {
        const currentArray = [...(formData[field] || [])];
        currentArray[index] = value;
        setFormData((prev) => ({ ...prev, [field]: currentArray }));
    };

    const addArrayItem = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: [...(prev[field] || []), ""],
        }));
    };

    const removeArrayItem = (field, index) => {
        const currentArray = [...(formData[field] || [])];
        currentArray.splice(index, 1);
        setFormData((prev) => ({ ...prev, [field]: currentArray }));
    };

    // Handle image upload
    const handleImageUpload = (type, e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFiles((prev) => ({ ...prev, [type]: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => ({ ...prev, [type]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Hero Section Handlers
    const handleHeroUpdate = async () => {
        try {
            await priceApi.updateHero(formData);
            toast.success("Hero section updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error updating hero:", error);
        }
    };

    // Per-Image Rates Handlers
    const handlePerImageMetaUpdate = async () => {
        try {
            await priceApi.updatePerImageMeta(formData);
            toast.success("Per-image rates meta updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error updating meta:", error);
        }
    };

    const handleAddRate = async () => {
        try {
            await priceApi.addPerImageRate(formData);
            toast.success("Rate added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding rate:", error);
        }
    };

    const handleUpdateRate = async () => {
        try {
            await priceApi.updatePerImageRate(editingItem._id, formData);
            toast.success("Rate updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating rate:", error);
        }
    };

    const handleDeleteRate = async (rateId) => {
        if (confirm("Are you sure you want to delete this rate?")) {
            try {
                await priceApi.deletePerImageRate(rateId);
                toast.success("Rate deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting rate:", error);
            }
        }
    };

    const handleAddTier = async () => {
        try {
            await priceApi.addTierDefinition(formData);
            toast.success("Tier definition added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding tier:", error);
        }
    };

    const handleUpdateTier = async () => {
        try {
            await priceApi.updateTierDefinition(editingItem._id, formData);
            toast.success("Tier updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating tier:", error);
        }
    };

    const handleDeleteTier = async (tierId) => {
        if (confirm("Are you sure you want to delete this tier?")) {
            try {
                await priceApi.deleteTierDefinition(tierId);
                toast.success("Tier deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting tier:", error);
            }
        }
    };

    // Sample Handlers
    const handleAddSample = async () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key !== "afterImage" && key !== "beforeImage") {
                formDataObj.append(key, formData[key]);
            }
        });
        if (imageFiles.afterImage) {
            formDataObj.append("afterImage", imageFiles.afterImage);
        }
        if (imageFiles.beforeImage) {
            formDataObj.append("beforeImage", imageFiles.beforeImage);
        }

        try {
            await priceApi.addSample(formDataObj);
            toast.success("Sample added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
            setImageFiles({ afterImage: null, beforeImage: null });
            setImagePreviews({ afterImage: "", beforeImage: "" });
        } catch (error) {
            console.error("Error adding sample:", error);
        }
    };

    const handleUpdateSample = async () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key !== "afterImage" && key !== "beforeImage") {
                formDataObj.append(key, formData[key]);
            }
        });
        if (imageFiles.afterImage) {
            formDataObj.append("afterImage", imageFiles.afterImage);
        }
        if (imageFiles.beforeImage) {
            formDataObj.append("beforeImage", imageFiles.beforeImage);
        }

        try {
            await priceApi.updateSample(editingItem._id, formDataObj);
            toast.success("Sample updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
            setImageFiles({ afterImage: null, beforeImage: null });
            setImagePreviews({ afterImage: "", beforeImage: "" });
        } catch (error) {
            console.error("Error updating sample:", error);
        }
    };

    const handleDeleteSample = async (sampleId) => {
        if (confirm("Are you sure you want to delete this sample?")) {
            try {
                await priceApi.deleteSample(sampleId);
                toast.success("Sample deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting sample:", error);
            }
        }
    };

    // Plan Handlers
    const handleAddPlan = async () => {
        try {
            const data = {
                ...formData,
                features: JSON.stringify(formData.features || []),
            };
            await priceApi.addPlan(data);
            toast.success("Plan added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding plan:", error);
        }
    };

    const handleUpdatePlan = async () => {
        try {
            const data = {
                ...formData,
                features: JSON.stringify(formData.features || []),
            };
            await priceApi.updatePlan(editingItem._id, data);
            toast.success("Plan updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating plan:", error);
        }
    };

    const handleDeletePlan = async (planId) => {
        if (confirm("Are you sure you want to delete this plan?")) {
            try {
                await priceApi.deletePlan(planId);
                toast.success("Plan deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting plan:", error);
            }
        }
    };

    // Retouching Service Handlers
    const handleAddService = async () => {
        try {
            await priceApi.addRetouchingService(formData);
            toast.success("Service added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };

    const handleUpdateService = async () => {
        try {
            await priceApi.updateRetouchingService(editingItem._id, formData);
            toast.success("Service updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating service:", error);
        }
    };

    const handleDeleteService = async (serviceId) => {
        if (confirm("Are you sure you want to delete this service?")) {
            try {
                await priceApi.deleteRetouchingService(serviceId);
                toast.success("Service deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting service:", error);
            }
        }
    };

    // Volume Tier Handlers
    const handleAddVolumeTier = async () => {
        try {
            await priceApi.addVolumeTier(formData);
            toast.success("Volume tier added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding tier:", error);
        }
    };

    const handleUpdateVolumeTier = async () => {
        try {
            await priceApi.updateVolumeTier(editingItem._id, formData);
            toast.success("Volume tier updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating tier:", error);
        }
    };

    const handleDeleteVolumeTier = async (tierId) => {
        if (confirm("Are you sure you want to delete this volume tier?")) {
            try {
                await priceApi.deleteVolumeTier(tierId);
                toast.success("Volume tier deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting tier:", error);
            }
        }
    };

    // Feature Handlers
    const handleAddFeature = async () => {
        try {
            await priceApi.addFeature(formData);
            toast.success("Feature added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding feature:", error);
        }
    };

    const handleUpdateFeature = async () => {
        try {
            await priceApi.updateFeature(editingItem._id, formData);
            toast.success("Feature updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating feature:", error);
        }
    };

    const handleDeleteFeature = async (featureId) => {
        if (confirm("Are you sure you want to delete this feature?")) {
            try {
                await priceApi.deleteFeature(featureId);
                toast.success("Feature deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting feature:", error);
            }
        }
    };

    // FAQ Handlers
    const handleAddFaq = async () => {
        try {
            await priceApi.addFaq(formData);
            toast.success("FAQ added successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding FAQ:", error);
        }
    };

    const handleUpdateFaq = async () => {
        try {
            await priceApi.updateFaq(editingItem._id, formData);
            toast.success("FAQ updated successfully!");
            fetchPricingData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating FAQ:", error);
        }
    };

    const handleDeleteFaq = async (faqId) => {
        if (confirm("Are you sure you want to delete this FAQ?")) {
            try {
                await priceApi.deleteFaq(faqId);
                toast.success("FAQ deleted successfully!");
                fetchPricingData();
            } catch (error) {
                console.error("Error deleting FAQ:", error);
            }
        }
    };

    // Tabs configuration
    const tabs = [
        { id: "hero", label: "Hero Section", icon: <Star size={16} /> },
        { id: "perImage", label: "Per-Image Rates", icon: <DollarSign size={16} /> },
        { id: "samples", label: "Recent Work", icon: <ImageIcon size={16} /> },
        { id: "packages", label: "Monthly Packages", icon: <Package size={16} /> },
        { id: "retouching", label: "High-End Retouching", icon: <TrendingUp size={16} /> },
        { id: "volume", label: "Volume Discounts", icon: <TrendingUp size={16} /> },
        { id: "features", label: "Always Included", icon: <CheckCircle size={16} /> },
        { id: "faq", label: "FAQ", icon: <HelpCircle size={16} /> },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading pricing data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="py-6">
                        <h1 className="text-3xl font-serif text-primary">
                            Pricing Page Management
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Manage all pricing plans, rates, and content
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors flex items-center gap-2 ${
                                    activeTab === tab.id
                                        ? "bg-gray-50 text-secondary border-b-2 border-secondary"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                {activeTab === "hero" && pricingData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Hero Section</h2>
                            <button
                                onClick={() => {
                                    setFormData({
                                        badge: pricingData.hero.badge,
                                        headingPrefix: pricingData.hero.heading?.prefix,
                                        headingHighlighted: pricingData.hero.heading?.highlighted,
                                        description: pricingData.hero.description,
                                        features: pricingData.hero.features,
                                        navItems: pricingData.hero.navItems,
                                    });
                                    setModalType("hero");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Edit size={18} /> Edit Hero Section
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Badge</label>
                                <p className="mt-1 text-gray-900">{pricingData.hero.badge}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Heading</label>
                                <p className="mt-1 text-gray-900">
                                    {pricingData.hero.heading?.prefix}{" "}
                                    {pricingData.hero.heading?.highlighted}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <p className="mt-1 text-gray-600">{pricingData.hero.description}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Features
                                </label>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {pricingData.hero.features?.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Per-Image Rates Section */}
                {activeTab === "perImage" && pricingData && (
                    <div className="space-y-6">
                        {/* Meta Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">Section Meta</h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            badge: pricingData.perImageRates.badge,
                                            heading: pricingData.perImageRates.heading,
                                            highlightedText:
                                                pricingData.perImageRates.highlightedText,
                                            description: pricingData.perImageRates.description,
                                            footnote: pricingData.perImageRates.footnote,
                                        });
                                        setModalType("perImageMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                            <div className="space-y-2">
                                <p>
                                    <strong>Badge:</strong> {pricingData.perImageRates.badge}
                                </p>
                                <p>
                                    <strong>Heading:</strong> {pricingData.perImageRates.heading}
                                </p>
                                <p>
                                    <strong>Description:</strong>{" "}
                                    {pricingData.perImageRates.description}
                                </p>
                            </div>
                        </div>

                        {/* Rates Table */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Rates</h3>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            service: "",
                                            description: "",
                                            rates: {
                                                basic: "",
                                                simple: "",
                                                medium: "",
                                                complex: "",
                                                superComplex: "",
                                            },
                                        });
                                        setModalType("addRate");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Rate
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Service
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Basic
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Simple
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Medium
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Complex
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Super Complex
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {pricingData.perImageRates.rates?.map((rate) => (
                                            <tr key={rate._id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3">
                                                    <div className="font-medium text-gray-900">
                                                        {rate.service}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {rate.description}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">{rate.rates.basic}</td>
                                                <td className="px-4 py-3">{rate.rates.simple}</td>
                                                <td className="px-4 py-3">{rate.rates.medium}</td>
                                                <td className="px-4 py-3">{rate.rates.complex}</td>
                                                <td className="px-4 py-3">
                                                    {rate.rates.superComplex}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditingItem(rate);
                                                                setFormData({
                                                                    service: rate.service,
                                                                    description: rate.description,
                                                                    rates: rate.rates,
                                                                });
                                                                setModalType("editRate");
                                                                setIsModalOpen(true);
                                                            }}
                                                            className="text-blue-600 hover:text-blue-700"
                                                        >
                                                            <Edit size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDeleteRate(rate._id)
                                                            }
                                                            className="text-red-600 hover:text-red-700"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Tier Definitions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">
                                    Tier Definitions
                                </h3>
                                <button
                                    onClick={() => {
                                        setFormData({ name: "", description: "" });
                                        setModalType("addTier");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Tier
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pricingData.perImageRates.tierDefinitions?.map((tier) => (
                                    <div
                                        key={tier._id}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-secondary">
                                                {tier.name}
                                            </h4>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(tier);
                                                        setFormData({
                                                            name: tier.name,
                                                            description: tier.description,
                                                        });
                                                        setModalType("editTier");
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="text-blue-600 hover:text-blue-700"
                                                >
                                                    <Edit size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteTier(tier._id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">{tier.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Recent Work/Samples Section */}
                {activeTab === "samples" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">
                                    Recent Work Section
                                </h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            title: pricingData.recentWork.title,
                                            headingPrefix: pricingData.recentWork.headingPrefix,
                                            headingHighlighted:
                                                pricingData.recentWork.headingHighlighted,
                                            paragraph: pricingData.recentWork.paragraph,
                                        });
                                        setModalType("recentWorkMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Samples</h3>
                                <button
                                    onClick={() => {
                                        setFormData({ tier: "", title: "", price: "" });
                                        setImageFiles({ afterImage: null, beforeImage: null });
                                        setImagePreviews({ afterImage: "", beforeImage: "" });
                                        setModalType("addSample");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Sample
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pricingData.recentWork.samples?.map((sample) => (
                                    <div
                                        key={sample._id}
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                    >
                                        <div className="aspect-square relative bg-gray-100">
                                            {sample.afterImageUrl && (
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src={sample.afterImageUrl}
                                                    alt={sample.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded">
                                                AFTER
                                            </span>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-xs text-secondary font-semibold uppercase">
                                                        {sample.tier}
                                                    </p>
                                                    <h4 className="font-medium text-gray-900 mt-1">
                                                        {sample.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {sample.price}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setEditingItem(sample);
                                                            setFormData({
                                                                tier: sample.tier,
                                                                title: sample.title,
                                                                price: sample.price,
                                                            });
                                                            setImagePreviews({
                                                                afterImage: sample.afterImageUrl,
                                                                beforeImage:
                                                                    sample.beforeImageUrl || "",
                                                            });
                                                            setModalType("editSample");
                                                            setIsModalOpen(true);
                                                        }}
                                                        className="text-blue-600 hover:text-blue-700"
                                                    >
                                                        <Edit size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteSample(sample._id)
                                                        }
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Monthly Packages Section */}
                {activeTab === "packages" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">
                                    Monthly Packages
                                </h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            title: pricingData.monthlyPackages.title,
                                            headingPrefix:
                                                pricingData.monthlyPackages.headingPrefix,
                                            headingHighlighted:
                                                pricingData.monthlyPackages.headingHighlighted,
                                            paragraph: pricingData.monthlyPackages.paragraph,
                                            footerText: pricingData.monthlyPackages.footerText,
                                        });
                                        setModalType("packagesMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Plans</h3>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            name: "",
                                            subtitle: "",
                                            price: "",
                                            equivalent: "",
                                            isDark: false,
                                            isPopular: false,
                                            features: [""],
                                            buttonText: "Get Started",
                                        });
                                        setModalType("addPlan");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Plan
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pricingData.monthlyPackages.plans?.map((plan) => (
                                    <div
                                        key={plan._id}
                                        className={`relative p-6 rounded-lg border ${plan.isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-sm`}
                                    >
                                        {plan.isPopular && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                                                Most Popular
                                            </div>
                                        )}
                                        <h4 className="text-xl font-bold mb-1">{plan.name}</h4>
                                        <p className="text-sm text-gray-500 mb-4">
                                            {plan.subtitle}
                                        </p>
                                        <div className="mb-4">
                                            <span className="text-3xl font-bold">
                                                ${plan.price}
                                            </span>
                                            <span className="text-gray-500">/month</span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4 italic">
                                            {plan.equivalent}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {plan.features?.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm flex items-start gap-2"
                                                >
                                                    <span className="text-secondary">+</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
                                            <button
                                                onClick={() => {
                                                    setEditingItem(plan);
                                                    setFormData({
                                                        name: plan.name,
                                                        subtitle: plan.subtitle,
                                                        price: plan.price,
                                                        equivalent: plan.equivalent,
                                                        isDark: plan.isDark,
                                                        isPopular: plan.isPopular,
                                                        features: plan.features,
                                                        buttonText: plan.buttonText,
                                                    });
                                                    setModalType("editPlan");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeletePlan(plan._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Retouching Section */}
                {activeTab === "retouching" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">
                                    High-End Retouching
                                </h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            badge: pricingData.retouching.badge,
                                            heading: pricingData.retouching.heading,
                                            highlightedText: pricingData.retouching.highlightedText,
                                            description: pricingData.retouching.description,
                                            ctaText: pricingData.retouching.ctaText,
                                        });
                                        setModalType("retouchingMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Services</h3>
                                <button
                                    onClick={() => {
                                        setFormData({ title: "", description: "", price: "" });
                                        setModalType("addService");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Service
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {pricingData.retouching.services?.map((service) => (
                                    <div
                                        key={service._id}
                                        className="py-4 flex justify-between items-start"
                                    >
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                {service.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-medium text-gray-900">
                                                {service.price}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setEditingItem(service);
                                                    setFormData({
                                                        title: service.title,
                                                        description: service.description,
                                                        price: service.price,
                                                    });
                                                    setModalType("editService");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteService(service._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Volume Discounts Section */}
                {activeTab === "volume" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">
                                    Volume Discounts
                                </h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            badge: pricingData.volumeDiscounts.badge,
                                            heading: pricingData.volumeDiscounts.heading,
                                            highlightedText:
                                                pricingData.volumeDiscounts.highlightedText,
                                            description: pricingData.volumeDiscounts.description,
                                            disclaimer: pricingData.volumeDiscounts.disclaimer,
                                        });
                                        setModalType("volumeMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Discount Tiers</h3>
                                <button
                                    onClick={() => {
                                        setFormData({ range: "", rate: "", isSpecial: false });
                                        setModalType("addVolumeTier");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Tier
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {pricingData.volumeDiscounts.tiers?.map((tier) => (
                                    <div
                                        key={tier._id}
                                        className="py-4 flex justify-between items-center"
                                    >
                                        <span className="text-gray-900">{tier.range}</span>
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`font-medium ${tier.isSpecial ? "text-secondary text-lg" : "text-gray-500"}`}
                                            >
                                                {tier.rate}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setEditingItem(tier);
                                                    setFormData({
                                                        range: tier.range,
                                                        rate: tier.rate,
                                                        isSpecial: tier.isSpecial,
                                                    });
                                                    setModalType("editVolumeTier");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteVolumeTier(tier._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Always Included Features Section */}
                {activeTab === "features" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">
                                    Always Included
                                </h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            title: pricingData.alwaysIncluded.title,
                                            headingPrefix: pricingData.alwaysIncluded.headingPrefix,
                                            headingHighlighted:
                                                pricingData.alwaysIncluded.headingHighlighted,
                                        });
                                        setModalType("featuresMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">Features</h3>
                                <button
                                    onClick={() => {
                                        setFormData({ number: "", title: "", description: "" });
                                        setModalType("addFeature");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add Feature
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {pricingData.alwaysIncluded.features?.map((feature) => (
                                    <div
                                        key={feature._id}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-2xl font-serif italic text-secondary">
                                                {feature.number}
                                            </span>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(feature);
                                                        setFormData({
                                                            number: feature.number,
                                                            title: feature.title,
                                                            description: feature.description,
                                                        });
                                                        setModalType("editFeature");
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="text-blue-600 hover:text-blue-700"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteFeature(feature._id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Section */}
                {activeTab === "faq" && pricingData && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-primary">FAQ Section</h2>
                                <button
                                    onClick={() => {
                                        setFormData({
                                            badge: pricingData.faq.badge,
                                            heading: pricingData.faq.heading,
                                            highlightedText: pricingData.faq.highlightedText,
                                        });
                                        setModalType("faqMeta");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                                >
                                    Edit Meta
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-serif text-primary">FAQ Items</h3>
                                <button
                                    onClick={() => {
                                        setFormData({ question: "", answer: "" });
                                        setModalType("addFaq");
                                        setIsModalOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Plus size={16} /> Add FAQ
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {pricingData.faq.items?.map((faq) => (
                                    <div key={faq._id} className="py-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-medium text-gray-900">
                                                {faq.question}
                                            </h4>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(faq);
                                                        setFormData({
                                                            question: faq.question,
                                                            answer: faq.answer,
                                                        });
                                                        setModalType("editFaq");
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="text-blue-600 hover:text-blue-700"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteFaq(faq._id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal - Same modal structure as before but adapted for pricing */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                            <h3 className="text-xl font-serif text-primary">
                                {modalType === "hero" && "Edit Hero Section"}
                                {modalType === "perImageMeta" && "Edit Per-Image Rates Meta"}
                                {modalType === "addRate" && "Add Rate"}
                                {modalType === "editRate" && "Edit Rate"}
                                {modalType === "addTier" && "Add Tier Definition"}
                                {modalType === "editTier" && "Edit Tier Definition"}
                                {modalType === "recentWorkMeta" && "Edit Recent Work Meta"}
                                {modalType === "addSample" && "Add Sample"}
                                {modalType === "editSample" && "Edit Sample"}
                                {modalType === "packagesMeta" && "Edit Packages Meta"}
                                {modalType === "addPlan" && "Add Plan"}
                                {modalType === "editPlan" && "Edit Plan"}
                                {modalType === "retouchingMeta" && "Edit Retouching Meta"}
                                {modalType === "addService" && "Add Service"}
                                {modalType === "editService" && "Edit Service"}
                                {modalType === "volumeMeta" && "Edit Volume Discounts Meta"}
                                {modalType === "addVolumeTier" && "Add Volume Tier"}
                                {modalType === "editVolumeTier" && "Edit Volume Tier"}
                                {modalType === "featuresMeta" && "Edit Features Meta"}
                                {modalType === "addFeature" && "Add Feature"}
                                {modalType === "editFeature" && "Edit Feature"}
                                {modalType === "faqMeta" && "Edit FAQ Meta"}
                                {modalType === "addFaq" && "Add FAQ"}
                                {modalType === "editFaq" && "Edit FAQ"}
                            </h3>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setEditingItem(null);
                                    setFormData({});
                                    setImageFiles({ afterImage: null, beforeImage: null });
                                    setImagePreviews({ afterImage: "", beforeImage: "" });
                                }}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* Hero Form */}
                            {modalType === "hero" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Badge
                                        </label>
                                        <input
                                            type="text"
                                            name="badge"
                                            value={formData.badge || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Heading Prefix
                                        </label>
                                        <input
                                            type="text"
                                            name="headingPrefix"
                                            value={formData.headingPrefix || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Heading Highlighted
                                        </label>
                                        <input
                                            type="text"
                                            name="headingHighlighted"
                                            value={formData.headingHighlighted || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            rows={3}
                                            value={formData.description || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Features (comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.features?.join(", ") || ""}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    features: e.target.value
                                                        .split(",")
                                                        .map((f) => f.trim()),
                                                }))
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Rate Form */}
                            {(modalType === "addRate" || modalType === "editRate") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Service Name
                                        </label>
                                        <input
                                            type="text"
                                            name="service"
                                            value={formData.service || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={formData.description || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Basic Rate
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.rates?.basic || ""}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        rates: {
                                                            ...prev.rates,
                                                            basic: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Simple Rate
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.rates?.simple || ""}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        rates: {
                                                            ...prev.rates,
                                                            simple: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Medium Rate
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.rates?.medium || ""}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        rates: {
                                                            ...prev.rates,
                                                            medium: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Complex Rate
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.rates?.complex || ""}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        rates: {
                                                            ...prev.rates,
                                                            complex: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Super Complex Rate
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.rates?.superComplex || ""}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        rates: {
                                                            ...prev.rates,
                                                            superComplex: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Sample Form */}
                            {(modalType === "addSample" || modalType === "editSample") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Tier
                                        </label>
                                        <input
                                            type="text"
                                            name="tier"
                                            value={formData.tier || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            name="price"
                                            value={formData.price || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            After Image (Final)
                                        </label>
                                        {imagePreviews.afterImage && (
                                            <div className="mb-2">
                                                <Image
                                                    width={200}
                                                    height={200}
                                                    src={imagePreviews.afterImage}
                                                    alt="After preview"
                                                    className="w-32 h-32 object-cover rounded"
                                                />
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload("afterImage", e)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Before Image (Original)
                                        </label>
                                        {imagePreviews.beforeImage && (
                                            <div className="mb-2">
                                                <Image
                                                    width={200}
                                                    height={200}
                                                    src={imagePreviews.beforeImage}
                                                    alt="Before preview"
                                                    className="w-32 h-32 object-cover rounded"
                                                />
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload("beforeImage", e)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Plan Form */}
                            {(modalType === "addPlan" || modalType === "editPlan") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Plan Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Subtitle
                                        </label>
                                        <input
                                            type="text"
                                            name="subtitle"
                                            value={formData.subtitle || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Equivalent Rate
                                        </label>
                                        <input
                                            type="text"
                                            name="equivalent"
                                            value={formData.equivalent || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={formData.isDark || false}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        isDark: e.target.checked,
                                                    }))
                                                }
                                                className="rounded"
                                            />
                                            <span className="text-sm">Dark Theme</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={formData.isPopular || false}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        isPopular: e.target.checked,
                                                    }))
                                                }
                                                className="rounded"
                                            />
                                            <span className="text-sm">Most Popular</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Features
                                        </label>
                                        {formData.features?.map((feature, idx) => (
                                            <div key={idx} className="flex gap-2 mb-2">
                                                <input
                                                    value={feature}
                                                    onChange={(e) =>
                                                        handleArrayChange(
                                                            "features",
                                                            idx,
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder={`Feature ${idx + 1}`}
                                                />
                                                <button
                                                    onClick={() => removeArrayItem("features", idx)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addArrayItem("features")}
                                            className="text-secondary hover:text-secondary/80 text-sm"
                                        >
                                            + Add Feature
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Generic Meta Forms */}
                            {(modalType === "perImageMeta" ||
                                modalType === "recentWorkMeta" ||
                                modalType === "packagesMeta" ||
                                modalType === "retouchingMeta" ||
                                modalType === "volumeMeta" ||
                                modalType === "featuresMeta" ||
                                modalType === "faqMeta") && (
                                <>
                                    {Object.keys(formData).map((key) => (
                                        <div key={key}>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) => str.toUpperCase())}
                                            </label>
                                            {typeof formData[key] === "string" &&
                                            formData[key]?.length > 100 ? (
                                                <textarea
                                                    name={key}
                                                    value={formData[key] || ""}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    name={key}
                                                    value={formData[key] || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}

                            {/* Simple forms for other modals */}
                            {(modalType === "addTier" ||
                                modalType === "editTier" ||
                                modalType === "addService" ||
                                modalType === "editService" ||
                                modalType === "addVolumeTier" ||
                                modalType === "editVolumeTier" ||
                                modalType === "addFeature" ||
                                modalType === "editFeature" ||
                                modalType === "addFaq" ||
                                modalType === "editFaq") && (
                                <>
                                    {Object.keys(formData).map((key) => (
                                        <div key={key}>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) => str.toUpperCase())}
                                            </label>
                                            {key === "answer" || key === "description" ? (
                                                <textarea
                                                    name={key}
                                                    value={formData[key] || ""}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            ) : (
                                                <input
                                                    type={key === "isSpecial" ? "checkbox" : "text"}
                                                    name={key}
                                                    checked={
                                                        key === "isSpecial"
                                                            ? formData[key]
                                                            : undefined
                                                    }
                                                    value={
                                                        key !== "isSpecial"
                                                            ? formData[key] || ""
                                                            : undefined
                                                    }
                                                    onChange={(e) => {
                                                        if (key === "isSpecial") {
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                [key]: e.target.checked,
                                                            }));
                                                        } else {
                                                            handleInputChange(e);
                                                        }
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setEditingItem(null);
                                    setFormData({});
                                    setImageFiles({ afterImage: null, beforeImage: null });
                                    setImagePreviews({ afterImage: "", beforeImage: "" });
                                }}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    if (modalType === "hero") handleHeroUpdate();
                                    if (modalType === "perImageMeta") handlePerImageMetaUpdate();
                                    if (modalType === "addRate") handleAddRate();
                                    if (modalType === "editRate") handleUpdateRate();
                                    if (modalType === "addTier") handleAddTier();
                                    if (modalType === "editTier") handleUpdateTier();
                                    if (modalType === "recentWorkMeta") {
                                        priceApi.updateRecentWorkMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addSample") handleAddSample();
                                    if (modalType === "editSample") handleUpdateSample();
                                    if (modalType === "packagesMeta") {
                                        priceApi.updatePackagesMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addPlan") handleAddPlan();
                                    if (modalType === "editPlan") handleUpdatePlan();
                                    if (modalType === "retouchingMeta") {
                                        priceApi.updateRetouchingMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addService") handleAddService();
                                    if (modalType === "editService") handleUpdateService();
                                    if (modalType === "volumeMeta") {
                                        priceApi.updateVolumeMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addVolumeTier") handleAddVolumeTier();
                                    if (modalType === "editVolumeTier") handleUpdateVolumeTier();
                                    if (modalType === "featuresMeta") {
                                        priceApi.updateFeaturesMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addFeature") handleAddFeature();
                                    if (modalType === "editFeature") handleUpdateFeature();
                                    if (modalType === "faqMeta") {
                                        priceApi.updateFaqMeta(formData).then(() => {
                                            toast.success("Updated successfully!");
                                            fetchPricingData();
                                            setIsModalOpen(false);
                                        });
                                    }
                                    if (modalType === "addFaq") handleAddFaq();
                                    if (modalType === "editFaq") handleUpdateFaq();
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
