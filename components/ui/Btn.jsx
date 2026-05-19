import { Loader2 } from "lucide-react";

export function Btn({ loading, children, variant = "solid", ...props }) {
    const base =
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed";
    const styles = {
        solid: "bg-secondary text-white hover:bg-secondary/90",
        outline: "border border-secondary text-secondary hover:bg-secondary/5",
        ghost: "text-ink-soft hover:bg-gray-100",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200",
    };
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className={`${base} ${styles[variant]}`}
        >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {children}
        </button>
    );
}
