"use client";

import { useAuth } from "@/hooks/useAuth";
import { Users, FileText, MessageSquare, Home } from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
    const { user } = useAuth();

    const stats = [
        { label: "Total Users", value: "12", icon: Users, href: "/dashboard/users" },
        { label: "Page Meta", value: "8", icon: FileText, href: "/dashboard/page-meta" },
        { label: "Contacts", value: "45", icon: MessageSquare, href: "/dashboard/contacts" },
        { label: "Home Content", value: "Active", icon: Home, href: "/dashboard/home" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back, {user?.name || "Admin"}!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">
                                    {stat.value}
                                </p>
                            </div>
                            <div className="p-3 bg-secondary/10 rounded-xl">
                                <stat.icon className="w-6 h-6 text-secondary" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
