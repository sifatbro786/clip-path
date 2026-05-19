export function Field({ label, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                {label}
            </label>
            {children}
        </div>
    );
}
