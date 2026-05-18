/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    Users,
    LogOut,
    Shield,
    MessageSquare,
    Menu,
    X,
    Bell,
    Search,
    FolderKanban,
} from "lucide-react";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem("admin_token");
        const userData = localStorage.getItem("admin_user");

        if (!token || !userData) {
            router.push("/login");
            return;
        }

        setUser(JSON.parse(userData));
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
        router.push("/login");
    };

    const navItems = [
        { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        // { path: "/page-meta", icon: FileText, label: "Page Meta" },
        // { path: "/contacts", icon: MessageSquare, label: "Contacts" },
        ...(user?.role === "super_admin" ? [{ path: "/users", icon: Users, label: "Users" }] : []),
    ];

    return (
        <div className="min-h-screen bg-[#F5F3EF]">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-40 transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-secondary" />
                        <span className="text-xl font-serif font-bold text-primary">
                            AdminPanel
                        </span>
                    </div>
                    <p className="text-xs text-ink-mute mt-1">Rapid Clipping Path</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                    isActive
                                        ? "bg-secondary/10 text-secondary"
                                        : "text-ink-soft hover:bg-gray-50 hover:text-primary"
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Info & Logout */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-3 px-2">
                        <div className="w-9 h-9 rounded-full bg-linear-to-r from-secondary to-secondary/70 flex items-center justify-center text-white font-semibold">
                            {user?.name?.charAt(0).toUpperCase() || "A"}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary truncate">
                                {user?.name || "Admin"}
                            </p>
                            <p className="text-xs text-ink-mute capitalize">
                                {user?.role?.replace("_", " ") || "Admin"}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-64">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-30">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ink-mute" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-ink-mute hover:text-secondary transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-4 sm:p-6">{children}</main>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
