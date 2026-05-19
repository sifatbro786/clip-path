"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SectionCard({ icon: Icon, title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/60 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-secondary" />
                    </span>
                    <span className="font-semibold text-primary font-serif text-base">{title}</span>
                </div>
                {open ? (
                    <ChevronUp className="w-4 h-4 text-ink-mute" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-ink-mute" />
                )}
            </button>
            {open && <div className="border-t border-gray-100 px-6 py-5">{children}</div>}
        </div>
    );
}
