export default function WhatYouGet() {
    return (
        <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-[#1A1A1A]">
                {/* Left Column: Header Info */}
                <div className="lg:col-span-5 space-y-4 md:space-y-6">
                    <span className="block text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold">
                        WHAT YOU GET
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-normal font-serif tracking-tight">
                        Every order, the <br />
                        <span className="text-secondary italic">same standard.</span>
                    </h2>
                    <p className="font-serif text-sm md:text-base text-[#555555] leading-relaxed max-w-sm font-light">
                        No upselling, no add-ons. Every clipping path order includes everything
                        below.
                    </p>
                </div>

                {/* Right Column: List of Deliverables with Borders */}
                <div className="lg:col-span-7 border-t border-[#E6E2D8] divide-y divide-[#E6E2D8]">
                    {/* Item 01 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 01
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Hand-drawn Photoshop paths
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Drawn by a trained retoucher, not AI. Saved in your file&apos;s path
                                panel for future use.
                            </p>
                        </div>
                    </div>

                    {/* Item 02 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 02
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Transparent background
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Delivered as PNG or PSD with alpha channel — drop onto any
                                background.
                            </p>
                        </div>
                    </div>

                    {/* Item 03 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 03
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Pixel-perfect edges at full zoom
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Edges hold up at 400% zoom. No halos, fringing, or jagged pixels.
                            </p>
                        </div>
                    </div>

                    {/* Item 04 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 04
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Original file structure preserved
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Layer organisation, smart objects, and any embedded data stays
                                intact.
                            </p>
                        </div>
                    </div>

                    {/* Item 05 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 05
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Format flexibility
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Return in PNG, PSD, TIFF, or JPG — or all four, at no extra cost.
                            </p>
                        </div>
                    </div>

                    {/* Item 06 */}
                    <div className="py-6 md:py-8 flex items-start gap-6 font-serif">
                        <span className="text-secondary italic font-sans text-xs md:text-sm font-medium whitespace-nowrap mt-1">
                            — 06
                        </span>
                        <div className="space-y-1.5">
                            <h3 className="text-lg md:text-xl font-normal text-[#1A1A1A]">
                                Optional shadow handling
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Retain natural product shadows, or have us create new ones — your
                                call.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
