import React from "react";

export default function PerImageRates() {
    const pricingData = [
        {
            service: "Clipping path",
            description: "Hand-drawn cutouts, transparent backgrounds",
            rates: ["$0.39", "$0.69", "$1.25", "$2.50", "$4.50 +"],
        },
        {
            service: "Multi-clipping path",
            description: "Individual element selection, layered PSD",
            rates: ["$1.25", "$2.00", "$3.00", "$5.00", "$8.00 +"],
        },
        {
            service: "Invisible mannequin",
            description: "Ghost mannequin for apparel",
            rates: ["$2.50", "$3.50", "$4.50", "$6.50", "$8.50 +"],
        },
        {
            service: "Color correction",
            description: "White balance, brightness, cleanup",
            rates: ["$0.89", "$1.50", "$2.50", "$4.50", "$7.50 +"],
        },
        {
            service: "Photo retouching",
            description: "Standard retouching, blemish removal",
            rates: ["$1.50", "$3.50", "$7.50", "$15", "$35 +"],
        },
        {
            service: "Vector conversion",
            description: "Hand-traced, scalable AI/EPS/SVG",
            rates: ["$8", "$12", "$25", "$45", "$85 +"],
        },
        {
            service: "Background removal",
            description: "Clean cutouts, white or transparent",
            rates: ["$0.49", "$0.89", "$1.50", "$2.50", "$4.50 +"],
        },
    ];

    // Bottom Footnote Grid Data
    const bottomTiers = [
        { name: "BASIC", desc: "Simple shapes, clean backgrounds, basic products" },
        { name: "SIMPLE", desc: "Mild curves, minor details, slight transparency" },
        { name: "MEDIUM", desc: "Multiple components, moderate detail" },
        { name: "COMPLEX", desc: "Jewelry, intricate edges, fine detail" },
        { name: "SUPER COMPLEX", desc: "Hair, fur, glass, multi-subject scenes" },
    ];

    return (
        <section className="bg-white text-[#1A1A1A]">
            <div className="max-w-310 mx-auto pt-16 md:pt-32 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <span className="block text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-4">
                        PER-IMAGE RATES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-normal font-serif tracking-tight mb-6">
                        Pay only for <span className="text-secondary italic">what you order.</span>
                    </h2>
                    <p className="font-serif text-sm md:text-base text-[#555555] leading-relaxed font-light max-w-xl">
                        Our standard rates by service and complexity. Volume discounts apply
                        automatically — see below for details.
                    </p>
                </div>

                {/* Pricing Matrix Table Container */}
                <div className="overflow-x-auto w-full mb-12">
                    <table className="w-full min-w-225 border-collapse font-serif text-left">
                        {/* Top Thick Border Header */}
                        <thead>
                            <tr className="border-t-2 border-b border-gray-300">
                                <th className="py-4 w-[35%] text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    SERVICE
                                </th>
                                <th className="py-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    BASIC
                                </th>
                                <th className="py-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    SIMPLE
                                </th>
                                <th className="py-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    MEDIUM
                                </th>
                                <th className="py-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    COMPLEX
                                </th>
                                <th className="py-4 text-center text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    SUPER COMPLEX
                                </th>
                            </tr>
                        </thead>

                        {/* Table Rows Body */}
                        <tbody className="divide-y divide-[#E6E2D8]">
                            {pricingData.map((row, index) => (
                                <tr key={index} className="hover:bg-[#FAF8F4] transition-colors">
                                    {/* Service Details */}
                                    <td className="py-6 pr-4">
                                        <h3 className="text-base md:text-lg font-normal text-[#1A1A1A] mb-0.5">
                                            {row.service}
                                        </h3>
                                        <p className="font-sans text-[11px] md:text-xs text-[#666666] font-light">
                                            {row.description}
                                        </p>
                                    </td>

                                    {/* Pricing Cells mapping */}
                                    {row.rates.map((rate, rateIdx) => (
                                        <td
                                            key={rateIdx}
                                            className="py-6 text-center text-sm md:text-base font-normal text-[#1A1A1A] whitespace-nowrap"
                                        >
                                            {rate}
                                            <span className="font-sans text-[9px] md:text-[10px] text-[#99928C] font-light align-middle ml-0.5">
                                                /img
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Bottom Thick Border Divider */}
                    <div className="border-b-2 border-gray-300 w-full"></div>
                </div>

                {/* Bottom Tiers Footnote Cards Container */}
                <div className="bg-[#FAF8F4] p-6 md:p-8 rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-10">
                    {bottomTiers.map((tier, index) => (
                        <div key={index} className="space-y-2">
                            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold">
                                {tier.name}
                            </span>
                            <p className="font-sans text-xs text-[#555555] font-light leading-relaxed">
                                {tier.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Sample Action Link */}
                <div className="text-center font-serif italic text-sm md:text-base text-[#4A4A4A]">
                    Not sure which tier applies?{" "}
                    <a
                        href="#"
                        className="text-secondary not-italic font-sans text-sm md:text-base font-normal underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                        Send us a sample image
                    </a>{" "}
                    — we&apos;ll tell you the complexity, and if we misjudge, we adjust mid-order at
                    no extra cost.
                </div>
            </div>
        </section>
    );
}
