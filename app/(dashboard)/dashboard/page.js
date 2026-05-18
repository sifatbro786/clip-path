/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { Activity, TrendingUp, Eye, FileText, Users, Globe, ArrowUpRight } from "lucide-react";

export default function DashboardHome() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("admin_user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const stats = [
        { label: "Total Visitors", value: "12,345", change: "+12.5%", icon: Eye, color: "blue" },
        { label: "Page Views", value: "48,921", change: "+8.2%", icon: Globe, color: "green" },
        { label: "Active Pages", value: "24", change: "+2", icon: FileText, color: "purple" },
        ...(user?.role === "super_admin"
            ? [{ label: "Admin Users", value: "4", change: "+0", icon: Users, color: "orange" }]
            : []),
    ];

    const recentActivity = [
        {
            id: 1,
            action: "Page 'Home' meta updated",
            user: "John Doe",
            time: "2 minutes ago",
            type: "update",
        },
        {
            id: 2,
            action: "New admin user created",
            user: "Super Admin",
            time: "1 hour ago",
            type: "create",
        },
        {
            id: 3,
            action: "Blog post published",
            user: "Jane Smith",
            time: "3 hours ago",
            type: "publish",
        },
        {
            id: 4,
            action: "Page 'Services' status changed",
            user: "John Doe",
            time: "5 hours ago",
            type: "status",
        },
    ];

    const colorClasses = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="relative overflow-hidden bg-linear-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                <div className="relative z-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-serif font-bold mb-2">
                                Hello, {user?.name || "Admin"}! 👋
                            </h1>
                            <p className="text-white/80">Welcome back to your admin dashboard.</p>
                        </div>
                        <Activity className="w-16 h-16 text-white/20" />
                    </div>
                </div>
                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className={`p-2.5 rounded-xl ${colorClasses[stat.color]}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    {stat.change}
                                    <ArrowUpRight className="w-3 h-3" />
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-sm text-ink-mute mt-1">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-primary">Recent Activity</h2>
                            <TrendingUp className="w-4 h-4 text-ink-mute" />
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentActivity.map((activity) => (
                            <div
                                key={activity.id}
                                className="p-4 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-primary">
                                            {activity.action}
                                        </p>
                                        <p className="text-sm text-ink-mute mt-0.5">
                                            by {activity.user}
                                        </p>
                                    </div>
                                    <span className="text-xs text-ink-mute">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                    <h3 className="text-sm font-semibold text-primary mb-3">💡 Quick Tips</h3>
                    <div className="space-y-2 text-sm text-ink-soft">
                        <p>• Keep meta titles under 60 characters</p>
                        <p>• Use descriptive alt text for images</p>
                        <p>• Regular backups recommended</p>
                        <p>• Update sitemap after content changes</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-xs font-semibold text-secondary mb-2">
                            📊 System Status
                        </h4>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-ink-mute">All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
