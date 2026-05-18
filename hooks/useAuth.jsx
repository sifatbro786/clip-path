/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "../utils/api";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("admin_token");
        const storedUser = localStorage.getItem("admin_user");

        if (storedToken && storedUser) {
            try {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing stored user data:", error);
                localStorage.removeItem("admin_token");
                localStorage.removeItem("admin_user");
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await authApi.login(email, password);
            const { token: newToken, admin } = response.data;

            setToken(newToken);
            setUser(admin);

            localStorage.setItem("admin_token", newToken);
            localStorage.setItem("admin_user", JSON.stringify(admin));
        } catch (error) {
            throw new Error(error.response?.data?.error || "Login failed");
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
    };

    const register = async (data) => {
        try {
            const response = await authApi.register(data);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || "Registration failed");
        }
    };

    const changePassword = async (data) => {
        try {
            const response = await authApi.changePassword(data);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || "Password change failed");
        }
    };

    const isAuthenticated = !!token && !!user;
    const isSuperAdmin = user?.role === "super_admin";

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                isSuperAdmin,
                login,
                logout,
                register,
                changePassword,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
