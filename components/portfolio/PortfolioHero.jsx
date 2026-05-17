const RESULTS = [
    { value: "4M+", label: "Paths hand-drawn", accent: true },
    { value: "4,000+", label: "Brands served", accent: false },
    { value: "15yr", label: "In the field", accent: false },
    { value: "$0.39", label: "From, per image", accent: false },
];

export default function PortfolioHero() {
    return (
        <section className="border-b border-rule bg-background">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-16 md:pt-24 lg:pt-32 pb-0">
                {/* Top row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end pb-14 md:pb-20">
                    <div className="lg:col-span-7">
                        <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-5 md:mb-7">
                            <span className="block w-5 md:w-7 h-[1.5px] bg-secondary shrink-0" />
                            Portfolio
                        </p>
                        <h1
                            className="text-[clamp(36px,6vw,58px)] leading-[1.05] tracking-[-0.02em] text-foreground"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            The edge is
                            <br />
                            in the <em className="italic text-secondary">detail.</em>
                        </h1>
                    </div>
                    <div className="lg:col-span-5 lg:pb-1 flex flex-col gap-5">
                        <p className="text-[13px] md:text-[14px] leading-[1.8] text-ink-mute">
                            Every project here was delivered by a human retoucher — no AI masking,
                            no automated batch cutting. Browse by industry and see what hand-drawn
                            paths actually look like at full zoom.
                        </p>
                        <a
                            href="/trial"
                            className="self-start inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-background text-[11px] font-medium uppercase hover:bg-secondary transition-colors duration-200"
                        >
                            Try 3 images free
                        </a>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="border-t border-rule grid grid-cols-2 md:grid-cols-4">
                    {RESULTS.map((r, i) => (
                        <div
                            key={r.label}
                            className={`py-7 md:py-8 ${i < 3 ? "border-r border-rule" : ""} ${i > 0 ? "pl-6 md:pl-10" : ""}`}
                        >
                            <p
                                className={`text-[26px] md:text-[32px] font-bold leading-none mb-1.5 ${r.accent ? "text-secondary" : "text-foreground"}`}
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                {r.value}
                            </p>
                            <p className="text-[9px] font-medium tracking-[0.14em] uppercase text-ink-mute">
                                {r.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
