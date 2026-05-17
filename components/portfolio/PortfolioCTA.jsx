import Link from "next/link";

export default function PortfolioCTA() {
    return (
        <section className="bg-white">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-7">
                        <p className="flex items-center gap-2 text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary mb-5">
                            <span className="block w-5 h-[1.5px] bg-secondary shrink-0" />
                            Start today
                        </p>
                        <h2
                            className="text-[clamp(28px,4.5vw,50px)] leading-[1.06] tracking-[-0.02em] text-foreground"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Your products deserve
                            <br />
                            <em className="italic text-secondary">edges that hold.</em>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-10">
                        <p className="text-[13px] md:text-[14px] leading-[1.8] text-ink-mute">
                            Send us three images — any product, any complexity. We&apos;ll return
                            them cut by hand, no card required. See the difference yourself.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-background text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-secondary transition-colors duration-200"
                            >
                                Try 3 images free
                            </Link>
                        </div>
                        <p className="text-[10px] text-ink-mute mt-1">
                            Results in 24 hours. No credit card. No commitment.
                        </p>
                    </div>
                </div>

                {/* Bottom rule */}
                <div className="mt-16 md:mt-24 pt-7 border-t border-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-ink-mute">
                        Rapid Clipping Path — Est. 2009
                    </p>
                    <p className="text-[10px] text-ink-mute">Hand-drawn paths. Every single one.</p>
                </div>
            </div>
        </section>
    );
}
