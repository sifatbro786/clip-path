export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#1a1817] via-[#2a2421] to-[#1a1817] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {children}
        </div>
    );
}
