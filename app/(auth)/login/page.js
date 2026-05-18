"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Briefcase, Shield } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Simulate login - replace with actual auth logic
        setTimeout(() => {
            if (email === "admin@example.com" && password === "111111") {
                // Store auth token
                localStorage.setItem("admin_token", "dummy_token");
                localStorage.setItem(
                    "admin_user",
                    JSON.stringify({
                        name: "Admin User",
                        email,
                        role: "admin",
                    }),
                );
                router.push("/dashboard");
            } else if (email === "solaimanislamsifat@gmail.com" && password === "111111") {
                localStorage.setItem("admin_token", "dummy_token");
                localStorage.setItem(
                    "admin_user",
                    JSON.stringify({
                        name: "Super Admin",
                        email,
                        role: "super_admin",
                    }),
                );
                router.push("/dashboard");
            } else {
                setError("Invalid email or password");
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="relative w-full max-w-md">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4">
                <div className="relative">
                    <Sparkles className="w-6 h-6 text-secondary animate-pulse" />
                    <div className="absolute inset-0 animate-ping opacity-75">
                        <Sparkles className="w-6 h-6 text-secondary" />
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-4 -left-4">
                <Briefcase className="w-5 h-5 text-ink-mute" />
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-2xl mb-5 shadow-xl relative group">
                        <Shield className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-secondary opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">Admin Portal</h2>
                    <p className="text-ink-mute text-sm">Secure access to management dashboard</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm text-center backdrop-blur-sm">
                        {error}
                    </div>
                )}

                {/* Demo credentials hint */}
                <div className="mb-6 p-3 bg-secondary/10 border border-secondary/30 rounded-xl text-xs text-center">
                    <p className="text-secondary font-medium mb-1">Demo Credentials</p>
                    <p className="text-ink-mute">Admin: admin@example.com / admin123</p>
                    <p className="text-ink-mute">Super Admin: super@example.com / super123</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                        <label className="block text-sm font-medium text-ink-mute mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ink-mute group-focus-within:text-secondary transition-colors" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-ink-mute/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-sm font-medium text-ink-mute mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ink-mute group-focus-within:text-secondary transition-colors" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-ink-mute/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ink-mute hover:text-white transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-linear-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                                <span>Authenticating...</span>
                            </div>
                        ) : (
                            <>
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 pt-4 text-center border-t border-white/10">
                    <p className="text-xs text-ink-mute/70">
                        Secure admin access only. Unauthorized access is prohibited.
                    </p>
                </div>
            </div>
        </div>
    );
}
