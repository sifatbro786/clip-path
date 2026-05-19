export function Input({ ...props }) {
    return (
        <input
            {...props}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-primary placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
        />
    );
}
