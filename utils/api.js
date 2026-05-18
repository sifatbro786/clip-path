import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class ApiClient {
    constructor() {
        this.client = axios.create({
            baseURL: `${API_URL}/api`,
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                if (typeof window !== "undefined") {
                    const token = localStorage.getItem("admin_token");
                    if (token && config.headers) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        // Response interceptor
        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                console.error("API Error:", error.response?.data || error.message);
                if (error.response?.status === 401 && typeof window !== "undefined") {
                    localStorage.removeItem("admin_token");
                    localStorage.removeItem("admin_user");
                    window.location.href = "/login";
                }
                return Promise.reject(error);
            },
        );
    }

    getClient() {
        return this.client;
    }
}

export const apiClient = new ApiClient().getClient();

//! Auth API endpoints
export const authApi = {
    login: (email, password) => apiClient.post("/auth/login", { email, password }),
    register: (data) => apiClient.post("/auth/register", data),
    getMe: () => apiClient.get("/auth/me"),
    getAllAdmins: () => apiClient.get("/auth/admins"),
    updateAdminStatus: (id, isActive) => apiClient.patch(`/auth/admins/${id}/status`, { isActive }),
    deleteAdmin: (id) => apiClient.delete(`/auth/admins/${id}`),
    changePassword: (data) => apiClient.post("/auth/change-password", data),
    changeAdminPassword: (id, newPassword) =>
        apiClient.post(`/auth/change-password/${id}`, { newPassword }),
};

//! Page Meta API
export const pageMetaApi = {
    getAll: () => apiClient.get("/page-meta/all"),
    getBySlug: (slug) => apiClient.get(`/page-meta/${slug}`),
    getById: (id) => apiClient.get(`/page-meta/${id}`),
    create: (data) => apiClient.post("/page-meta", data),
    update: (id, data) => apiClient.put(`/page-meta/${id}`, data),
    delete: (id) => apiClient.delete(`/page-meta/${id}`),
    toggleStatus: (id, lastUpdatedBy) =>
        apiClient.patch(`/page-meta/${id}/toggle`, { lastUpdatedBy: lastUpdatedBy || "admin" }),
    bulkUpdate: (pages) => apiClient.put("/page-meta/bulk/update", { pages }),
};

//! Contact API
export const contactApi = {
    sendMessage: (formData) => apiClient.post("/contact", formData),
    getAll: () => apiClient.get("/contact"),
    getById: (id) => apiClient.get(`/contact/${id}`),
    toggleRead: (id) => apiClient.patch(`/contact/${id}/read`),
    delete: (id) => apiClient.delete(`/contact/${id}`),
};

export const homeApi = {
    // Hero
    getHero: () => apiClient.get("/home/hero"),
    updateHero: (data) => {
        return apiClient.put("/home/admin/hero", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    // Stats
    getStats: () => apiClient.get("/home/admin/stats"),
    createStat: (data) => apiClient.post("/home/admin/stats", data),
    updateStat: (id, data) => apiClient.patch(`/home/admin/stats/${id}`, data),
    deleteStat: (id) => apiClient.delete(`/home/admin/stats/${id}`),

    // Services
    getServices: () => apiClient.get("/home/admin/services"),
    createService: (data) => apiClient.post("/home/admin/services", data),
    updateService: (id, data) => apiClient.patch(`/home/admin/services/${id}`, data),
    deleteService: (id) => apiClient.delete(`/home/admin/services/${id}`),

    // Differences
    getDifferences: () => apiClient.get("/home/admin/differences"),
    createDifference: (data) => apiClient.post("/home/admin/differences", data),
    updateDifference: (id, data) => apiClient.patch(`/home/admin/differences/${id}`, data),
    deleteDifference: (id) => apiClient.delete(`/home/admin/differences/${id}`),

    // Pricing
    getPricing: () => apiClient.get("/home/admin/pricing"),
    createPricing: (data) => apiClient.post("/home/admin/pricing", data),
    updatePricing: (id, data) => apiClient.patch(`/home/admin/pricing/${id}`, data),
    deletePricing: (id) => apiClient.delete(`/home/admin/pricing/${id}`),

    // FAQs
    getFAQs: () => apiClient.get("/home/admin/faqs"),
    createFAQ: (data) => apiClient.post("/home/admin/faqs", data),
    updateFAQ: (id, data) => apiClient.patch(`/home/admin/faqs/${id}`, data),
    deleteFAQ: (id) => apiClient.delete(`/home/admin/faqs/${id}`),

    // Logos
    getLogos: () => apiClient.get("/home/admin/logos"),
    createLogo: (data) => apiClient.post("/home/admin/logos", data),
    updateLogo: (id, data) => apiClient.patch(`/home/admin/logos/${id}`, data),
    deleteLogo: (id) => apiClient.delete(`/home/admin/logos/${id}`),
};
