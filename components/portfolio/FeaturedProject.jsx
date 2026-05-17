import Image from "next/image";

export default function FeaturedProject() {
    return (
        <section className="bg-background-soft border-b border-rule">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-14 md:pt-20 pb-16 md:pb-28">
                {/* Label */}
                <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-10 md:mb-14">
                    <span className="block w-5 h-[1.5px] bg-secondary shrink-0" />
                    Featured project
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
                    {/* Left: image */}
                    <div className="lg:col-span-7">
                        <Image src="/hero1.jpg" width={1000} height={1000} alt="" />

                        {/* Two-up thumbnail row */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {["Detail — lace eyelet", "Detail — rubber sole"].map((label) => (
                                <div
                                    key={label}
                                    className="bg-[#1a1817] relative overflow-hidden"
                                    style={{ aspectRatio: "3 / 2" }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="text-[9px] tracking-widest uppercase text-white/25">
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: copy */}
                    <div className="lg:col-span-5">
                        <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-secondary mb-3">
                            E-commerce — Clipping Path
                        </p>
                        <h2
                            className="text-[clamp(24px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em] text-foreground mb-4"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Nordic Sole Co. —<br />
                            <em className="italic text-secondary">1,200 footwear images.</em>
                        </h2>
                        <p className="text-[13px] leading-[1.8] text-ink-mute mb-8">
                            Rubber soles with near-identical tone to the studio sweep floor.
                            Traditional edge-detection fails completely here — the retoucher has to
                            read the three-dimensional form of the shoe and infer the edge from
                            shape, not contrast.
                        </p>

                        <div className="divide-y divide-rule border-t border-rule">
                            {[
                                { label: "Images delivered", value: "1,200" },
                                { label: "Turnaround", value: "48 hours" },
                                { label: "Service", value: "Clipping Path" },
                                { label: "Format returned", value: "PNG + PSD" },
                                { label: "Revision rounds", value: "Zero" },
                            ].map((row) => (
                                <div
                                    key={row.label}
                                    className="flex justify-between items-center py-3.5"
                                >
                                    <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-mute">
                                        {row.label}
                                    </p>
                                    <p className="text-[13px] text-foreground font-medium">
                                        {row.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-8 border-l-2 border-secondary pl-5">
                            <p className="text-[13px] italic text-ink-mute leading-[1.8]">
                                &quot;I stopped spot-checking after the first batch. Every sole, every
                                lace eyelet — clean.&quot;
                            </p>
                            <footer className="mt-3">
                                <p className="text-[11px] font-medium text-foreground">
                                    Tom Eriksen
                                </p>
                                <p className="text-[10px] text-ink-mute tracking-[0.06em]">
                                    E-commerce Manager, Nordic Sole Co.
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
