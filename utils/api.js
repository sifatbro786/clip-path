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

//! Home API endpoints
export const homeApi = {
    // Get all home data
    getAll: () => apiClient.get("/home"),

    // Hero Section
    updateHero: (formData) =>
        apiClient.put("/home/hero", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),

    // Company Section
    updateCompanyMeta: (data) => apiClient.put("/home/company/meta", data),
    addCompanyLogos: (formData) =>
        apiClient.post("/home/company/logos", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    deleteCompanyLogo: (logoId) => apiClient.delete(`/home/company/logos/${logoId}`),

    // Services Section
    updateServicesMeta: (data) => apiClient.put("/home/services/meta", data),
    addService: (formData) =>
        apiClient.post("/home/services", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    updateService: (serviceId, formData) =>
        apiClient.put(`/home/services/${serviceId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    deleteService: (serviceId) => apiClient.delete(`/home/services/${serviceId}`),

    // Difference Section
    updateDifferenceMeta: (data) => apiClient.put("/home/difference/meta", data),
    addDifferenceItem: (formData) =>
        apiClient.post("/home/difference", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    updateDifferenceItem: (itemId, formData) =>
        apiClient.put(`/home/difference/${itemId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }),
    deleteDifferenceItem: (itemId) => apiClient.delete(`/home/difference/${itemId}`),

    // FAQ Section
    updateFaqMeta: (data) => apiClient.put("/home/faq/meta", data),
    addFaq: (data) => apiClient.post("/home/faq", data),
    updateFaq: (faqId, data) => apiClient.put(`/home/faq/${faqId}`, data),
    deleteFaq: (faqId) => apiClient.delete(`/home/faq/${faqId}`),
};
