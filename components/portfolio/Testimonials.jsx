"use client";

import { useState } from "react";

const TESTIMONIALS = [
    {
        quote: "We've tried four different clipping path vendors. Rapid is the only one whose edges survive a zoom past 100%. That matters for print.",
        author: "Sara Lindt",
        role: "Art Director",
        company: "Maison Léa",
        category: "Fashion",
    },
    {
        quote: "1,200 shoe images in 48 hours. Every sole, every lace eyelet — clean. I stopped spot-checking after the first batch.",
        author: "Tom Eriksen",
        role: "E-commerce Manager",
        company: "Nordic Sole Co.",
        category: "E-commerce",
    },
    {
        quote: "The gold chain work was something else. Our in-house team quoted three weeks. Rapid delivered in 24 hours and the paths were tighter.",
        author: "Priya Nair",
        role: "Creative Lead",
        company: "Aurum Studio",
        category: "Jewelry",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const t = TESTIMONIALS[active];

    return (
        <section className="bg-background-dark border-b border-rule">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-14 md:pt-20 pb-16 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    {/* Left: label + switcher */}
                    <div className="lg:col-span-4 flex flex-col justify-between gap-10">
                        <div>
                            <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-6">
                                <span className="block w-5 h-[1.5px] bg-secondary shrink-0" />
                                What clients say
                            </p>
                            <h2
                                className="text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-primary"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                Trusted by people
                                <br />
                                who <em className="italic text-secondary">zoom in.</em>
                            </h2>
                        </div>

                        {/* Client selector */}
                        <div className="flex flex-col border-t border-[#2a2420]">
                            {TESTIMONIALS.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`flex items-center justify-between py-4 border-b border-[#2a2420] text-left transition-colors duration-150 cursor-pointer ${
                                        active === i
                                            ? "text-primary"
                                            : "text-[#6b6460] hover:text-[#c8bfb8]"
                                    }`}
                                >
                                    <div>
                                        <p className="text-[12px] font-medium leading-snug">
                                            {item.author}
                                        </p>
                                        <p className="text-[10px] tracking-[0.06em] mt-0.5">
                                            {item.company}
                                        </p>
                                    </div>
                                    <span
                                        className={`text-[9px] font-medium tracking-[0.12em] uppercase transition-colors ${
                                            active === i ? "text-secondary" : "text-[#6b6460]"
                                        }`}
                                    >
                                        {item.category}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: active quote */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="border-l-2 border-secondary pl-8 md:pl-14">
                            <p
                                className="text-[clamp(18px,2.5vw,30px)] font-normal italic text-primary leading-[1.6] mb-8"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                {/* Avatar placeholder */}
                                <div className="w-9 h-9 bg-[#2a2420] border border-[#332C28] flex items-center justify-center shrink-0">
                                    <span className="text-[11px] font-medium text-[#99928C]">
                                        {t.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[13px] font-medium text-primary">
                                        {t.author}
                                    </p>
                                    <p className="text-[11px] text-[#6b6460] tracking-[0.04em] mt-0.5">
                                        {t.role}, {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-2 mt-10 pl-8 md:pl-14">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-0.5 transition-all duration-300 cursor-pointer ${
                                        active === i
                                            ? "w-8 bg-secondary"
                                            : "w-2.5 bg-[#2a2420] hover:bg-[#6b6460]"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
