export default function ContactHero() {
    return (
        <section className="border-b border-rule bg-background">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                {/* Left: Heading */}
                <div className="lg:col-span-7">
                    <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-5 md:mb-7">
                        <span className="block w-5 md:w-7 h-[1.5px] bg-secondary shrink-0" />
                        Get in touch
                    </p>
                    <h1
                        className="text-[clamp(36px,6vw,72px)] leading-[1.05] tracking-[-0.02em] text-foreground"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Let&apos;s bring your <em className="italic text-secondary">craft</em>
                        <br />
                        into focus.
                    </h1>
                </div>

                {/* Right: Subtext + Turnaround badge */}
                <div className="lg:col-span-5 flex flex-col gap-6 lg:pb-2">
                    <p className="text-[13px] md:text-[14px] leading-[1.75] text-ink-mute max-w-xs">
                        Whether you have a batch of 10 or 10,000 — tell us what you need. We respond
                        to every inquiry within one business day.
                    </p>
                    <div className="flex items-center gap-4 border-t border-rule pt-6">
                        <div>
                            <p
                                className="text-[22px] md:text-[28px] font-bold text-secondary leading-none mb-1"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                24hr
                            </p>
                            <p className="text-[9px] md:text-[10px] font-medium tracking-[0.14em] uppercase text-ink-mute">
                                Response guarantee
                            </p>
                        </div>
                        <div className="w-px h-10 bg-rule mx-2" />
                        <div>
                            <p
                                className="text-[22px] md:text-[28px] font-bold text-foreground leading-none mb-1"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                4,500+
                            </p>
                            <p className="text-[9px] md:text-[10px] font-medium tracking-[0.14em] uppercase text-ink-mute">
                                Brands served
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
