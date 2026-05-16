export default function ClippingPath() {
    return (
        <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start font-serif text-[#292929]">
                {/* Left Column: Heading */}
                <div className="md:col-span-4 lg:col-span-4">
                    <span className="block text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-2 md:mb-4">
                        What it is
                    </span>
                    <h2 className="text-4xl md:text-5xl leading-tight font-normal text-[#1A1A1A] tracking-tight">
                        Clipping path, <br className="hidden md:block" /> defined.
                    </h2>
                </div>

                {/* Right Column: Paragraphs & Quote */}
                <div className="md:col-span-8 lg:col-span-8 space-y-6 text-[15px] md:text-lg text-justify leading-relaxed text-[#333333] font-light">
                    <p>
                        Clipping path is the process of{" "}
                        <span className="text-secondary italic font-medium">
                            precisely isolating a product from its background
                        </span>{" "}
                        using hand-drawn vector paths in Adobe Photoshop. The result is a clean
                        cutout with a transparent background, ready to drop onto any catalog page,
                        marketplace listing, or composite image.
                    </p>

                    <p>
                        AI tools can do this in one click. They also fail in one click — on hair,
                        wheels, translucent fabric, wires, jewelry, fur, glass, or anything with
                        fine detail or low contrast against the background.
                    </p>

                    {/* Quote Section with Left Border */}
                    <div className="border-l-[3px] border-secondary pl-6 my-8">
                        <p className="italic text-[#444444] text-base md:text-xl font-normal leading-relaxed">
                            &quot;Our team has hand-drawn over four million clipping paths across
                            fifteen years. We get the edges that AI misses.&quot;
                        </p>
                    </div>

                    <p>
                        That&apos;s why brands serious about their product imagery still hire
                        trained retouchers — not because hand-drawn paths are slower, but because at
                        any reasonable zoom level, the difference is visible.{" "}
                        <span className="text-secondary italic font-medium">
                            Edges either hold up, or they don&apos;t.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
