// services/aboutApi.js
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Create axios instance with interceptors
const aboutApiClient = axios.create({
    baseURL: `${API_URL}/api/about`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor to add auth token
aboutApiClient.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("admin_token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor for error handling
aboutApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("admin_token");
            localStorage.removeItem("admin_user");
            window.location.href = "/login";
            toast.error("Session expired. Please login again.");
        } else if (error.response?.data?.error) {
            toast.error(error.response.data.error);
        } else if (error.message === "Network Error") {
            toast.error("Network error. Please check your connection.");
        }
        return Promise.reject(error);
    },
);

// Helper for form data requests
const aboutApiFormData = axios.create({
    baseURL: `${API_URL}/api/about`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

aboutApiFormData.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("admin_token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// API Functions
export const aboutApi = {
    // Get all about data
    getAboutData: () => aboutApiClient.get("/"),

    // Hero Section
    updateHero: (data) => aboutApiClient.put("/hero", data),

    // Our Story Section
    updateOurStory: (data) => aboutApiClient.put("/our-story", data),

    // Choose Section (Stats)
    updateChooseMeta: (data) => aboutApiClient.put("/choose/meta", data),
    addStat: (data) => aboutApiClient.post("/choose/stats", data),
    updateStat: (statId, data) => aboutApiClient.put(`/choose/stats/${statId}`, data),
    deleteStat: (statId) => aboutApiClient.delete(`/choose/stats/${statId}`),
    reorderStats: (statOrders) => aboutApiClient.post("/choose/stats/reorder", { statOrders }),

    // Work Section (Principles)
    updateWorkMeta: (data) => aboutApiClient.put("/work/meta", data),
    addPrinciple: (data) => aboutApiClient.post("/work/principles", data),
    updatePrinciple: (principleId, data) =>
        aboutApiClient.put(`/work/principles/${principleId}`, data),
    deletePrinciple: (principleId) => aboutApiClient.delete(`/work/principles/${principleId}`),
    reorderPrinciples: (principleOrders) =>
        aboutApiClient.post("/work/principles/reorder", { principleOrders }),

    // Where We Work Section
    updateWhereWeWorkMeta: (data) => aboutApiClient.put("/where-we-work/meta", data),
    addLocation: (data) => aboutApiClient.post("/where-we-work/locations", data),
    updateLocation: (locationId, data) =>
        aboutApiClient.put(`/where-we-work/locations/${locationId}`, data),
    deleteLocation: (locationId) => aboutApiClient.delete(`/where-we-work/locations/${locationId}`),

    // Quote Section
    updateQuote: (data) => aboutApiClient.put("/quote", data),

    // Founders Section
    updateFoundersMeta: (data) => aboutApiClient.put("/founders/meta", data),
    addFounder: (formData) => aboutApiFormData.post("/founders", formData),
    updateFounder: (founderId, formData) =>
        aboutApiFormData.put(`/founders/${founderId}`, formData),
    deleteFounder: (founderId) => aboutApiClient.delete(`/founders/${founderId}`),
};

export default aboutApi;
