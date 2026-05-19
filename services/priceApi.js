// services/priceApi.js
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Create axios instance with interceptors
const priceApiClient = axios.create({
    baseURL: `${API_URL}/api/pricing`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor to add auth token
priceApiClient.interceptors.request.use(
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
priceApiClient.interceptors.response.use(
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
const priceApiFormData = axios.create({
    baseURL: `${API_URL}/api/pricing`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

priceApiFormData.interceptors.request.use(
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
export const priceApi = {
    // Get all pricing data
    getPricingData: () => priceApiClient.get("/"),

    // Hero Section
    updateHero: (data) => priceApiClient.put("/hero", data),

    // Per-Image Rates
    updatePerImageMeta: (data) => priceApiClient.put("/per-image/meta", data),
    addPerImageRate: (data) => priceApiClient.post("/per-image/rates", data),
    updatePerImageRate: (rateId, data) => priceApiClient.put(`/per-image/rates/${rateId}`, data),
    deletePerImageRate: (rateId) => priceApiClient.delete(`/per-image/rates/${rateId}`),
    addTierDefinition: (data) => priceApiClient.post("/per-image/tiers", data),
    updateTierDefinition: (tierId, data) => priceApiClient.put(`/per-image/tiers/${tierId}`, data),
    deleteTierDefinition: (tierId) => priceApiClient.delete(`/per-image/tiers/${tierId}`),

    // Recent Work
    updateRecentWorkMeta: (data) => priceApiClient.put("/recent-work/meta", data),
    addSample: (formData) => priceApiFormData.post("/recent-work/samples", formData),
    updateSample: (sampleId, formData) =>
        priceApiFormData.put(`/recent-work/samples/${sampleId}`, formData),
    deleteSample: (sampleId) => priceApiClient.delete(`/recent-work/samples/${sampleId}`),

    // Monthly Packages
    updatePackagesMeta: (data) => priceApiClient.put("/packages/meta", data),
    addPlan: (data) => priceApiClient.post("/packages/plans", data),
    updatePlan: (planId, data) => priceApiClient.put(`/packages/plans/${planId}`, data),
    deletePlan: (planId) => priceApiClient.delete(`/packages/plans/${planId}`),

    // Retouching Services
    updateRetouchingMeta: (data) => priceApiClient.put("/retouching/meta", data),
    addRetouchingService: (data) => priceApiClient.post("/retouching/services", data),
    updateRetouchingService: (serviceId, data) =>
        priceApiClient.put(`/retouching/services/${serviceId}`, data),
    deleteRetouchingService: (serviceId) =>
        priceApiClient.delete(`/retouching/services/${serviceId}`),

    // Volume Discounts
    updateVolumeMeta: (data) => priceApiClient.put("/volume/meta", data),
    addVolumeTier: (data) => priceApiClient.post("/volume/tiers", data),
    updateVolumeTier: (tierId, data) => priceApiClient.put(`/volume/tiers/${tierId}`, data),
    deleteVolumeTier: (tierId) => priceApiClient.delete(`/volume/tiers/${tierId}`),

    // Always Included Features
    updateFeaturesMeta: (data) => priceApiClient.put("/features/meta", data),
    addFeature: (data) => priceApiClient.post("/features", data),
    updateFeature: (featureId, data) => priceApiClient.put(`/features/${featureId}`, data),
    deleteFeature: (featureId) => priceApiClient.delete(`/features/${featureId}`),

    // FAQ
    updateFaqMeta: (data) => priceApiClient.put("/faq/meta", data),
    addFaq: (data) => priceApiClient.post("/faq", data),
    updateFaq: (faqId, data) => priceApiClient.put(`/faq/${faqId}`, data),
    deleteFaq: (faqId) => priceApiClient.delete(`/faq/${faqId}`),
};

export default priceApi;
