"use client";

import { useState } from "react";

const CHANNELS = [
    { label: "General enquiries", email: "hello@rapidclipping.com" },
    { label: "Ongoing projects", email: "support@rapidclipping.com" },
    { label: "Press & partnerships", email: "press@rapidclipping.com" },
];

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        projectType: "",
        imageCount: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="bg-white border-b border-rule">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-8 md:pt-16 pb-16 md:pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* ── Left: Direct Channels ── */}
                <div className="lg:col-span-4 lg:sticky lg:top-24">
                    <p className="text-[9px] md:text-sm font-medium tracking-[0.18em] uppercase text-secondary mb-6">
                        Direct channels
                    </p>

                    <div className="divide-y divide-rule">
                        {CHANNELS.map((ch) => (
                            <div key={ch.label} className="py-5 group">
                                <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink-mute mb-1.5">
                                    {ch.label}
                                </p>
                                <a
                                    href={`mailto:${ch.email}`}
                                    className="inline-flex items-center gap-1.5 text-[13px] md:text-[14px] text-foreground font-medium hover:text-secondary transition-colors duration-150"
                                >
                                    {ch.email}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Working hours note */}
                    <div className="mt-8 pt-8 border-t border-rule">
                        <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink-mute mb-2">
                            Working hours
                        </p>
                        <p className="text-[12px] md:text-[13px] text-ink-mute leading-[1.7]">
                            Monday – Saturday
                            <br />
                            9:00 AM – 7:00 PM (GMT+6)
                        </p>
                    </div>
                </div>

                {/* ── Right: Form ── */}
                <div className="lg:col-span-8">
                    <p className="text-[9px] md:text-sm font-medium tracking-[0.18em] uppercase text-secondary mb-8">
                        Send a message
                    </p>

                    {submitted ? (
                        <div className="border border-rule p-10 md:p-14 text-center">
                            <p
                                className="text-[32px] md:text-[42px] font-bold text-foreground leading-tight mb-3"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                Message received.
                            </p>
                            <p className="text-[13px] text-ink-mute leading-relaxed">
                                We&apos;ll get back to you within one business day.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-0">
                            {/* Row: Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                                <FormField
                                    label="Full name"
                                    name="name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <FormField
                                    label="Email address"
                                    name="email"
                                    type="email"
                                    placeholder="jane@studio.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Row: Website + Project Type */}
                            <FormField
                                label="Website / portfolio (optional)"
                                name="website"
                                type="url"
                                placeholder="https://yourstudio.com"
                                value={form.website}
                                onChange={handleChange}
                            />

                            {/* Image count */}
                            <FormField
                                label="Estimated image count"
                                name="imageCount"
                                type="text"
                                placeholder="e.g. 500 images / month"
                                value={form.imageCount}
                                onChange={handleChange}
                            />

                            {/* Message */}
                            <div className="py-6 border-b border-rule">
                                <label className="block text-[9px] font-medium tracking-[0.16em] uppercase text-ink-mute mb-3">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your project — product type, turnaround expectation, any special requirements..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent resize-none text-[13px] md:text-[14px] text-foreground placeholder:text-ink-mute/50 focus:outline-none leading-[1.7]"
                                />
                            </div>

                            {/* Submit */}
                            <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-secondary transition-colors duration-200 cursor-pointer"
                                >
                                    Send message
                                    <span className="text-base leading-none">→</span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function FormField({ label, name, type, placeholder, value, onChange, required }) {
    return (
        <div className="py-5 border-b border-rule">
            <label className="w-full block text-xs font-medium tracking-[0.16em] uppercase text-ink-mute mb-3">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-transparent text-[13px] md:text-[14px] text-foreground placeholder:text-ink-mute/50 focus:outline-none py-1"
            />
        </div>
    );
}
