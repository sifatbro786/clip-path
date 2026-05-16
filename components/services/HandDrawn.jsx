import Image from "next/image";

export default function HandDrawn() {
    return (
        <section className="relative bg-[#1A1513] text-[#F4F1EA]">
            <div className="hidden md:block md:absolute md:top-0 md:right-0 rotate-180">
                <Image src="/gradient.png" alt="blur" width={300} height={300} />
            </div>

            <div className="max-w-310 mx-auto pt-16 md:pt-28 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
                    <h4 className="flex justify-center items-center gap-4 text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-6">
                        <span className="block h-px w-6 md:w-8 lg:w-10 bg-secondary" />
                        HAND-DRAWN VS. AI
                        <span className="block h-px w-6 md:w-8 lg:w-10 bg-secondary" />
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-normal font-serif tracking-tight mb-6">
                        Why we still <span className="text-secondary italic">draw by hand.</span>
                    </h2>
                    <p className="font-serif text-sm md:text-base text-[#99928C] leading-relaxed font-light">
                        AI tools have changed the low end of the market. They haven&apos;t changed
                        the standards at the top.
                    </p>
                </div>

                {/* Comparison Table Container (Responsive Scroll for Mobile) */}
                <div className="overflow-x-auto w-full">
                    <table className="w-full min-w-150 border-collapse font-serif text-left">
                        {/* Table Header */}
                        <thead>
                            <tr className="border-t border-b border-[#332C28]">
                                <th className="py-5 w-1/3"></th>
                                <th className="py-5 w-1/3 text-[11px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-semibold">
                                    AI TOOLS
                                </th>
                                <th className="py-5 w-1/3 text-[11px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold">
                                    RAPID CLIPPING PATH
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-[#332C28]">
                            {/* Row 1 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Hair and fur edges
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span> Soft,
                                    blurry, often cropped
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    Pixel-perfect at full zoom
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Translucent fabrics & glass
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span>{" "}
                                    Opaque or jagged
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    Properly retained transparency
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Low-contrast backgrounds
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span>{" "}
                                    Subject bleed, unstable edges
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    Clean separation every time
                                </td>
                            </tr>

                            {/* Row 4 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Multi-component products
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span>{" "}
                                    Treats as single object
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    Individually pathed
                                </td>
                            </tr>

                            {/* Row 5 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Quality control
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span> None
                                    — output goes direct
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    Reviewed before delivery
                                </td>
                            </tr>

                            {/* Row 6 */}
                            <tr>
                                <td className="py-6 pr-4 font-normal text-base md:text-lg text-[#F4F1EA]">
                                    Consistency at scale
                                </td>
                                <td className="py-6 pr-4 text-xs md:text-sm text-[#99928C] font-sans font-light">
                                    <span className="mr-2 text-[#99928C] font-normal">×</span>{" "}
                                    Variable, image to image
                                </td>
                                <td className="py-6 text-xs md:text-sm text-[#F4F1EA] font-sans font-light">
                                    <span className="mr-2 text-secondary font-semibold">✓</span>{" "}
                                    5,000 images, identical standard
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
