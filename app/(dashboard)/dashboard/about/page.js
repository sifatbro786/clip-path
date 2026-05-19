/* eslint-disable react-hooks/set-state-in-effect */
// app/(dashboard)/dashboard/about/page.js
"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { aboutApi } from "@/services/aboutApi";
import Image from "next/image";

export default function AboutManagementPage() {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("hero");
    const [editingItem, setEditingItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [formData, setFormData] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    // Fetch about data
    const fetchAboutData = async () => {
        try {
            setLoading(true);
            const response = await aboutApi.getAboutData();
            setAboutData(response.data.data);
        } catch (error) {
            console.error("Error fetching about data:", error);
            toast.error("Failed to load about data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAboutData();
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
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Hero Section Handlers
    const handleHeroUpdate = async () => {
        try {
            await aboutApi.updateHero(formData);
            toast.success("Hero section updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error updating hero:", error);
        }
    };

    // Our Story Handlers
    const handleOurStoryUpdate = async () => {
        try {
            await aboutApi.updateOurStory(formData);
            toast.success("Our story updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error updating our story:", error);
        }
    };

    // Stats Handlers
    const handleAddStat = async () => {
        try {
            await aboutApi.addStat(formData);
            toast.success("Stat added successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding stat:", error);
        }
    };

    const handleUpdateStat = async () => {
        try {
            await aboutApi.updateStat(editingItem._id, formData);
            toast.success("Stat updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating stat:", error);
        }
    };

    const handleDeleteStat = async (statId) => {
        if (confirm("Are you sure you want to delete this stat?")) {
            try {
                await aboutApi.deleteStat(statId);
                toast.success("Stat deleted successfully!");
                fetchAboutData();
            } catch (error) {
                console.error("Error deleting stat:", error);
            }
        }
    };

    // Principles Handlers
    const handleAddPrinciple = async () => {
        try {
            await aboutApi.addPrinciple(formData);
            toast.success("Principle added successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding principle:", error);
        }
    };

    const handleUpdatePrinciple = async () => {
        try {
            await aboutApi.updatePrinciple(editingItem._id, formData);
            toast.success("Principle updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating principle:", error);
        }
    };

    const handleDeletePrinciple = async (principleId) => {
        if (confirm("Are you sure you want to delete this principle?")) {
            try {
                await aboutApi.deletePrinciple(principleId);
                toast.success("Principle deleted successfully!");
                fetchAboutData();
            } catch (error) {
                console.error("Error deleting principle:", error);
            }
        }
    };

    // Locations Handlers
    const handleAddLocation = async () => {
        try {
            await aboutApi.addLocation(formData);
            toast.success("Location added successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error adding location:", error);
        }
    };

    const handleUpdateLocation = async () => {
        try {
            await aboutApi.updateLocation(editingItem._id, formData);
            toast.success("Location updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating location:", error);
        }
    };

    const handleDeleteLocation = async (locationId) => {
        if (confirm("Are you sure you want to delete this location?")) {
            try {
                await aboutApi.deleteLocation(locationId);
                toast.success("Location deleted successfully!");
                fetchAboutData();
            } catch (error) {
                console.error("Error deleting location:", error);
            }
        }
    };

    // Quote Handlers
    const handleQuoteUpdate = async () => {
        try {
            await aboutApi.updateQuote(formData);
            toast.success("Quote updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
        } catch (error) {
            console.error("Error updating quote:", error);
        }
    };

    // Founders Handlers
    const handleAddFounder = async () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "bioParagraphs" || key === "socials") {
                formDataObj.append(key, JSON.stringify(formData[key]));
            } else if (key !== "image") {
                formDataObj.append(key, formData[key]);
            }
        });
        if (imageFile) {
            formDataObj.append("image", imageFile);
        }

        try {
            await aboutApi.addFounder(formDataObj);
            toast.success("Founder added successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setFormData({});
            setImageFile(null);
            setImagePreview("");
        } catch (error) {
            console.error("Error adding founder:", error);
        }
    };

    const handleUpdateFounder = async () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "bioParagraphs" || key === "socials") {
                formDataObj.append(key, JSON.stringify(formData[key]));
            } else if (key !== "image") {
                formDataObj.append(key, formData[key]);
            }
        });
        if (imageFile) {
            formDataObj.append("image", imageFile);
        }

        try {
            await aboutApi.updateFounder(editingItem._id, formDataObj);
            toast.success("Founder updated successfully!");
            fetchAboutData();
            setIsModalOpen(false);
            setEditingItem(null);
            setFormData({});
            setImageFile(null);
            setImagePreview("");
        } catch (error) {
            console.error("Error updating founder:", error);
        }
    };

    const handleDeleteFounder = async (founderId) => {
        if (confirm("Are you sure you want to delete this founder?")) {
            try {
                await aboutApi.deleteFounder(founderId);
                toast.success("Founder deleted successfully!");
                fetchAboutData();
            } catch (error) {
                console.error("Error deleting founder:", error);
            }
        }
    };

    // Tabs configuration
    const tabs = [
        { id: "hero", label: "Hero Section" },
        { id: "ourStory", label: "Our Story" },
        { id: "stats", label: "Stats" },
        { id: "principles", label: "Principles" },
        { id: "locations", label: "Locations" },
        { id: "quote", label: "Quote" },
        { id: "founders", label: "Founders" },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading about page data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="py-6">
                        <h1 className="text-3xl font-serif text-primary">About Page Management</h1>
                        <p className="text-gray-500 mt-1">Manage all content for the about page</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                                    activeTab === tab.id
                                        ? "bg-gray-50 text-secondary border-b-2 border-secondary"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                {activeTab === "hero" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Hero Section</h2>
                            <button
                                onClick={() => {
                                    setFormData(aboutData.hero);
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
                                <label className="text-sm font-medium text-gray-700">
                                    Establishment Year
                                </label>
                                <p className="mt-1 text-gray-900">
                                    {aboutData.hero.establishmentYear}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <p className="mt-1 text-gray-900">{aboutData.hero.location}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Headline
                                </label>
                                <p className="mt-1 text-gray-900">{aboutData.hero.headline}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Highlighted Text
                                </label>
                                <p className="mt-1 text-gray-900">
                                    {aboutData.hero.highlightedText}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <p className="mt-1 text-gray-600">{aboutData.hero.description}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Our Story Section */}
                {activeTab === "ourStory" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Our Story</h2>
                            <button
                                onClick={() => {
                                    setFormData({
                                        title: aboutData.ourStory.title,
                                        description: aboutData.ourStory.description,
                                        paragraphs: aboutData.ourStory.paragraphs,
                                        blockquoteText: aboutData.ourStory.blockquote?.text,
                                        blockquoteAuthor: aboutData.ourStory.blockquote?.author,
                                    });
                                    setModalType("ourStory");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Edit size={18} /> Edit Our Story
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Title</label>
                                <p className="mt-1 text-gray-900">{aboutData.ourStory.title}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Paragraphs
                                </label>
                                {aboutData.ourStory.paragraphs?.map((para, idx) => (
                                    <p key={idx} className="mt-1 text-gray-600">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Blockquote
                                </label>
                                <blockquote className="mt-1 italic text-gray-700 border-l-4 border-secondary pl-4">
                                    {aboutData.ourStory.blockquote?.text}
                                </blockquote>
                                <p className="mt-1 text-sm text-gray-500">
                                    {aboutData.ourStory.blockquote?.author}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Section */}
                {activeTab === "stats" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Stats</h2>
                            <button
                                onClick={() => {
                                    setFormData({});
                                    setModalType("addStat");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Plus size={18} /> Add Stat
                            </button>
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={() => {
                                    setFormData({
                                        badge: aboutData.chooseSection.badge,
                                        heading: aboutData.chooseSection.heading,
                                    });
                                    setModalType("chooseMeta");
                                    setIsModalOpen(true);
                                }}
                                className="text-secondary hover:text-secondary/80 text-sm font-medium"
                            >
                                Edit Section Meta
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {aboutData.chooseSection.stats?.map((stat) => (
                                <div
                                    key={stat._id}
                                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="text-3xl font-serif text-primary">
                                            {stat.value}
                                            {stat.suffix}
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setEditingItem(stat);
                                                    setFormData(stat);
                                                    setModalType("editStat");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteStat(stat._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Principles Section */}
                {activeTab === "principles" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Principles</h2>
                            <button
                                onClick={() => {
                                    setFormData({});
                                    setModalType("addPrinciple");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Plus size={18} /> Add Principle
                            </button>
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={() => {
                                    setFormData({
                                        badge: aboutData.workSection.badge,
                                        heading: aboutData.workSection.heading,
                                        highlightedText: aboutData.workSection.highlightedText,
                                    });
                                    setModalType("workMeta");
                                    setIsModalOpen(true);
                                }}
                                className="text-secondary hover:text-secondary/80 text-sm font-medium"
                            >
                                Edit Section Meta
                            </button>
                        </div>

                        <div className="space-y-4">
                            {aboutData.workSection.principles?.map((principle) => (
                                <div
                                    key={principle._id}
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="text-sm text-secondary font-mono mb-2">
                                                {principle.id}
                                            </div>
                                            <h3 className="text-lg font-semibold text-primary mb-2">
                                                {principle.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {principle.description}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 ml-4">
                                            <button
                                                onClick={() => {
                                                    setEditingItem(principle);
                                                    setFormData(principle);
                                                    setModalType("editPrinciple");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeletePrinciple(principle._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Locations Section */}
                {activeTab === "locations" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Locations</h2>
                            <button
                                onClick={() => {
                                    setFormData({});
                                    setModalType("addLocation");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Plus size={18} /> Add Location
                            </button>
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={() => {
                                    setFormData({
                                        badge: aboutData.whereWeWork.badge,
                                        heading: aboutData.whereWeWork.heading,
                                        highlightedText: aboutData.whereWeWork.highlightedText,
                                        description: aboutData.whereWeWork.description,
                                    });
                                    setModalType("whereWeWorkMeta");
                                    setIsModalOpen(true);
                                }}
                                className="text-secondary hover:text-secondary/80 text-sm font-medium"
                            >
                                Edit Section Meta
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {aboutData.whereWeWork.locations?.map((location) => (
                                <div
                                    key={location._id}
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="text-xs text-secondary font-bold uppercase tracking-wide mb-1">
                                                {location.type}
                                            </div>
                                            <h3 className="text-lg font-serif text-primary">
                                                {location.title}
                                            </h3>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setEditingItem(location);
                                                    setFormData(location);
                                                    setModalType("editLocation");
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteLocation(location._id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{location.address}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {location.hoursOrPhone}
                                    </p>
                                    {location.note && (
                                        <p className="text-xs text-gray-400 mt-1 italic">
                                            {location.note}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quote Section */}
                {activeTab === "quote" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Quote Section</h2>
                            <button
                                onClick={() => {
                                    setFormData(aboutData.quote);
                                    setModalType("quote");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Edit size={18} /> Edit Quote
                            </button>
                        </div>
                        <div className="space-y-4">
                            <blockquote className="text-xl italic text-gray-700 border-l-4 border-secondary pl-4">
                                {aboutData.quote.text}
                            </blockquote>
                            <p className="text-sm text-gray-500">{aboutData.quote.author}</p>
                        </div>
                    </div>
                )}

                {/* Founders Section */}
                {activeTab === "founders" && aboutData && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-serif text-primary">Founders</h2>
                            <button
                                onClick={() => {
                                    setFormData({
                                        name: "",
                                        nickname: "",
                                        subRole: "",
                                        bioParagraphs: [""],
                                        socials: [{ label: "", url: "" }],
                                        order: aboutData.founders?.foundersList?.length || 0,
                                    });
                                    setImageFile(null);
                                    setImagePreview("");
                                    setModalType("addFounder");
                                    setIsModalOpen(true);
                                }}
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center gap-2"
                            >
                                <Plus size={18} /> Add Founder
                            </button>
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={() => {
                                    setFormData({
                                        title: aboutData.founders.title,
                                        headingPrefix: aboutData.founders.headingPrefix,
                                        headingHighlighted: aboutData.founders.headingHighlighted,
                                        paragraph: aboutData.founders.paragraph,
                                    });
                                    setModalType("foundersMeta");
                                    setIsModalOpen(true);
                                }}
                                className="text-secondary hover:text-secondary/80 text-sm font-medium"
                            >
                                Edit Section Meta
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {aboutData.founders?.foundersList?.map((founder) => (
                                <div
                                    key={founder._id}
                                    className="border border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <div className="aspect-4/5 relative bg-gray-100">
                                        <Image
                                            fill
                                            src={founder.imageUrl}
                                            alt={founder.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-serif text-primary">
                                                    {founder.name}
                                                    {founder.nickname && (
                                                        <span className="text-gray-400 italic ml-1">
                                                            {founder.nickname}
                                                        </span>
                                                    )}
                                                </h3>
                                                <p className="text-xs text-secondary font-bold uppercase tracking-wide mt-1">
                                                    {founder.subRole}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(founder);
                                                        setFormData({
                                                            name: founder.name,
                                                            nickname: founder.nickname,
                                                            subRole: founder.subRole,
                                                            bioParagraphs: founder.bioParagraphs,
                                                            socials: founder.socials,
                                                            order: founder.order,
                                                        });
                                                        setImagePreview(founder.imageUrl);
                                                        setImageFile(null);
                                                        setModalType("editFounder");
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="text-blue-600 hover:text-blue-700"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteFounder(founder._id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-3 space-y-2">
                                            {founder.bioParagraphs?.map((para, idx) => (
                                                <p key={idx} className="text-sm text-gray-600">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="flex gap-4 mt-4 pt-3 border-t border-gray-200">
                                            {founder.socials?.map((social, idx) => (
                                                <a
                                                    key={idx}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-bold tracking-wide text-gray-500 hover:text-secondary"
                                                >
                                                    {social.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                            <h3 className="text-xl font-serif text-primary">
                                {modalType === "hero" && "Edit Hero Section"}
                                {modalType === "ourStory" && "Edit Our Story"}
                                {modalType === "addStat" && "Add Stat"}
                                {modalType === "editStat" && "Edit Stat"}
                                {modalType === "chooseMeta" && "Edit Choose Section Meta"}
                                {modalType === "addPrinciple" && "Add Principle"}
                                {modalType === "editPrinciple" && "Edit Principle"}
                                {modalType === "workMeta" && "Edit Work Section Meta"}
                                {modalType === "addLocation" && "Add Location"}
                                {modalType === "editLocation" && "Edit Location"}
                                {modalType === "whereWeWorkMeta" && "Edit Where We Work Meta"}
                                {modalType === "quote" && "Edit Quote"}
                                {modalType === "addFounder" && "Add Founder"}
                                {modalType === "editFounder" && "Edit Founder"}
                                {modalType === "foundersMeta" && "Edit Founders Section Meta"}
                            </h3>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setEditingItem(null);
                                    setFormData({});
                                    setImageFile(null);
                                    setImagePreview("");
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
                                            Establishment Year
                                        </label>
                                        <input
                                            type="text"
                                            name="establishmentYear"
                                            value={formData.establishmentYear || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Headline
                                        </label>
                                        <input
                                            type="text"
                                            name="headline"
                                            value={formData.headline || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Highlighted Text
                                        </label>
                                        <input
                                            type="text"
                                            name="highlightedText"
                                            value={formData.highlightedText || ""}
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
                                            rows={4}
                                            value={formData.description || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Our Story Form */}
                            {modalType === "ourStory" && (
                                <>
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
                                            Paragraphs
                                        </label>
                                        {formData.paragraphs?.map((para, idx) => (
                                            <div key={idx} className="flex gap-2 mb-2">
                                                <textarea
                                                    value={para}
                                                    onChange={(e) =>
                                                        handleArrayChange(
                                                            "paragraphs",
                                                            idx,
                                                            e.target.value,
                                                        )
                                                    }
                                                    rows={2}
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                    placeholder={`Paragraph ${idx + 1}`}
                                                />
                                                <button
                                                    onClick={() =>
                                                        removeArrayItem("paragraphs", idx)
                                                    }
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addArrayItem("paragraphs")}
                                            className="text-secondary hover:text-secondary/80 text-sm"
                                        >
                                            + Add Paragraph
                                        </button>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Blockquote Text
                                        </label>
                                        <textarea
                                            name="blockquoteText"
                                            rows={2}
                                            value={formData.blockquoteText || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Blockquote Author
                                        </label>
                                        <input
                                            type="text"
                                            name="blockquoteAuthor"
                                            value={formData.blockquoteAuthor || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Stat Form */}
                            {(modalType === "addStat" || modalType === "editStat") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Value
                                        </label>
                                        <input
                                            type="text"
                                            name="value"
                                            value={formData.value || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Suffix (optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="suffix"
                                            value={formData.suffix || ""}
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
                                            rows={2}
                                            value={formData.description || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Color
                                        </label>
                                        <select
                                            name="color"
                                            value={formData.color || "primary"}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        >
                                            <option value="primary">Primary</option>
                                            <option value="secondary">Secondary</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="isItalic"
                                            checked={formData.isItalic || false}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    isItalic: e.target.checked,
                                                }))
                                            }
                                            className="w-4 h-4 text-secondary focus:ring-secondary"
                                        />
                                        <label className="text-sm font-medium text-gray-700">
                                            Italic Style
                                        </label>
                                    </div>
                                </>
                            )}

                            {/* Principle Form */}
                            {(modalType === "addPrinciple" || modalType === "editPrinciple") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            ID (e.g., — 01 —)
                                        </label>
                                        <input
                                            type="text"
                                            name="id"
                                            value={formData.id || ""}
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
                                </>
                            )}

                            {/* Location Form */}
                            {(modalType === "addLocation" || modalType === "editLocation") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Type
                                        </label>
                                        <select
                                            name="type"
                                            value={formData.type || "PRODUCTION STUDIO"}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        >
                                            <option value="PRODUCTION STUDIO">
                                                Production Studio
                                            </option>
                                            <option value="BUSINESS OPERATIONS">
                                                Business Operations
                                            </option>
                                        </select>
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
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Hours or Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="hoursOrPhone"
                                            value={formData.hoursOrPhone || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Note (optional)
                                        </label>
                                        <textarea
                                            name="note"
                                            rows={2}
                                            value={formData.note || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Quote Form */}
                            {modalType === "quote" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Quote Text
                                        </label>
                                        <textarea
                                            name="text"
                                            rows={5}
                                            value={formData.text || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={formData.author || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Founder Form */}
                            {(modalType === "addFounder" || modalType === "editFounder") && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
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
                                            Nickname (optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="nickname"
                                            value={formData.nickname || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Sub Role
                                        </label>
                                        <input
                                            type="text"
                                            name="subRole"
                                            value={formData.subRole || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Bio Paragraphs
                                        </label>
                                        {formData.bioParagraphs?.map((para, idx) => (
                                            <div key={idx} className="flex gap-2 mb-2">
                                                <textarea
                                                    value={para}
                                                    onChange={(e) =>
                                                        handleArrayChange(
                                                            "bioParagraphs",
                                                            idx,
                                                            e.target.value,
                                                        )
                                                    }
                                                    rows={3}
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                    placeholder={`Paragraph ${idx + 1}`}
                                                />
                                                <button
                                                    onClick={() =>
                                                        removeArrayItem("bioParagraphs", idx)
                                                    }
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addArrayItem("bioParagraphs")}
                                            className="text-secondary hover:text-secondary/80 text-sm"
                                        >
                                            + Add Paragraph
                                        </button>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Socials
                                        </label>
                                        {formData.socials?.map((social, idx) => (
                                            <div key={idx} className="flex gap-2 mb-2">
                                                <input
                                                    value={social.label}
                                                    onChange={(e) => {
                                                        const newSocials = [...formData.socials];
                                                        newSocials[idx].label = e.target.value;
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            socials: newSocials,
                                                        }));
                                                    }}
                                                    placeholder="Label (e.g., LINKEDIN)"
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                                <input
                                                    value={social.url}
                                                    onChange={(e) => {
                                                        const newSocials = [...formData.socials];
                                                        newSocials[idx].url = e.target.value;
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            socials: newSocials,
                                                        }));
                                                    }}
                                                    placeholder="URL"
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                                <button
                                                    onClick={() => {
                                                        const newSocials = [...formData.socials];
                                                        newSocials.splice(idx, 1);
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            socials: newSocials,
                                                        }));
                                                    }}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    socials: [
                                                        ...(prev.socials || []),
                                                        { label: "", url: "" },
                                                    ],
                                                }))
                                            }
                                            className="text-secondary hover:text-secondary/80 text-sm"
                                        >
                                            + Add Social Link
                                        </button>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Image
                                        </label>
                                        {imagePreview && (
                                            <div className="mb-2">
                                                <Image
                                                    width={32}
                                                    height={32}
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-32 h-32 object-cover rounded"
                                                />
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Simple Meta Forms */}
                            {(modalType === "chooseMeta" ||
                                modalType === "workMeta" ||
                                modalType === "whereWeWorkMeta" ||
                                modalType === "foundersMeta") && (
                                <>
                                    {modalType === "chooseMeta" && (
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
                                                    Heading
                                                </label>
                                                <input
                                                    type="text"
                                                    name="heading"
                                                    value={formData.heading || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            </div>
                                        </>
                                    )}
                                    {modalType === "workMeta" && (
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
                                                    Heading
                                                </label>
                                                <input
                                                    type="text"
                                                    name="heading"
                                                    value={formData.heading || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Highlighted Text
                                                </label>
                                                <input
                                                    type="text"
                                                    name="highlightedText"
                                                    value={formData.highlightedText || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            </div>
                                        </>
                                    )}
                                    {modalType === "whereWeWorkMeta" && (
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
                                                    Heading
                                                </label>
                                                <input
                                                    type="text"
                                                    name="heading"
                                                    value={formData.heading || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Highlighted Text
                                                </label>
                                                <input
                                                    type="text"
                                                    name="highlightedText"
                                                    value={formData.highlightedText || ""}
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
                                        </>
                                    )}
                                    {modalType === "foundersMeta" && (
                                        <>
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
                                                    Paragraph
                                                </label>
                                                <textarea
                                                    name="paragraph"
                                                    rows={2}
                                                    value={formData.paragraph || ""}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setEditingItem(null);
                                    setFormData({});
                                    setImageFile(null);
                                    setImagePreview("");
                                }}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    if (modalType === "hero") handleHeroUpdate();
                                    if (modalType === "ourStory") handleOurStoryUpdate();
                                    if (modalType === "addStat") handleAddStat();
                                    if (modalType === "editStat") handleUpdateStat();
                                    if (
                                        modalType === "chooseMeta" ||
                                        modalType === "workMeta" ||
                                        modalType === "whereWeWorkMeta" ||
                                        modalType === "foundersMeta"
                                    ) {
                                        if (modalType === "chooseMeta")
                                            aboutApi.updateChooseMeta(formData).then(() => {
                                                toast.success("Updated successfully!");
                                                fetchAboutData();
                                                setIsModalOpen(false);
                                            });
                                        if (modalType === "workMeta")
                                            aboutApi.updateWorkMeta(formData).then(() => {
                                                toast.success("Updated successfully!");
                                                fetchAboutData();
                                                setIsModalOpen(false);
                                            });
                                        if (modalType === "whereWeWorkMeta")
                                            aboutApi.updateWhereWeWorkMeta(formData).then(() => {
                                                toast.success("Updated successfully!");
                                                fetchAboutData();
                                                setIsModalOpen(false);
                                            });
                                        if (modalType === "foundersMeta")
                                            aboutApi.updateFoundersMeta(formData).then(() => {
                                                toast.success("Updated successfully!");
                                                fetchAboutData();
                                                setIsModalOpen(false);
                                            });
                                    }
                                    if (modalType === "addPrinciple") handleAddPrinciple();
                                    if (modalType === "editPrinciple") handleUpdatePrinciple();
                                    if (modalType === "addLocation") handleAddLocation();
                                    if (modalType === "editLocation") handleUpdateLocation();
                                    if (modalType === "quote") handleQuoteUpdate();
                                    if (modalType === "addFounder") handleAddFounder();
                                    if (modalType === "editFounder") handleUpdateFounder();
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
