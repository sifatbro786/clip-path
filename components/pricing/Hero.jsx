import Link from "next/link";

export default function Hero() {
    const features = ["No minimums", "Free revisions", "24-hour turnaround", "No contracts"];

    const navItems = [
        { label: "PER-IMAGE", href: "#per-image" },
        { label: "SAMPLES", href: "#samples" },
        { label: "MONTHLY PACKAGES", href: "#monthly-packages" },
        { label: "HIGH-END RETOUCHING", href: "#high-end-retouching" },
        { label: "VOLUME DISCOUNTS", href: "#volume-discounts" },
        { label: "COMMON QUESTIONS", href: "#common-questions" },
    ];

    return (
        <section>
            {/* Main Content Area */}
            <div className="max-w-310 mx-auto pt-20 pb-28 md:pt-28 md:pb-36 px-4 sm:px-6 text-center flex flex-col items-center">
                {/* Small Top Badge/Title */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-6 bg-secondary opacity-60"></span>
                    <span className="text-secondary font-sans text-xs font-semibold tracking-widest uppercase">
                        Transparent Pricing
                    </span>
                    <span className="h-px w-6 bg-secondary opacity-60"></span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-lg leading-[1.15] mb-6">
                    <span className="opacity-90 block sm:inline">No hidden fees. </span>
                    <span className="text-secondary italic font-normal block sm:inline">
                        No surprises.
                    </span>
                </h1>

                {/* Description Paragraph */}
                <p className="text-gray-500 font-sans text-base md:text-lg max-w-2xl leading-relaxed mb-10 opacity-90">
                    Per-image rates for one-off orders. Monthly packages for ongoing work. Custom
                    quotes for high-end projects. The numbers below are what you&apos;ll actually
                    pay.
                </p>

                {/* Inline Features Checklist */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-400 font-sans">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 whitespace-nowrap">
                            <span className="text-secondary select-none text-[10px] md:text-xs">
                                ✓
                            </span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Sub-Navigation Bar */}
            <div className="bg-[#faf9f6] border-t border-gray-200/40 w-full overflow-x-auto scrollbar-none">
                <div className="max-w-310 mx-auto px-4 sm:px-6 py-4 md:py-5">
                    <nav className="flex justify-start md:justify-center items-center gap-6 md:gap-8 lg:gap-10 min-w-max md:min-w-0 mx-auto text-[10px] md:text-xs font-sans font-medium tracking-widest text-gray-500">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="hover:text-secondary transition-colors duration-200 whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
