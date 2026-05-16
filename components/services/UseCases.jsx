import HeaderSection from "../common/HeaderSection";

export default function UseCases() {
    return (
        <section className="bg-[#F4F1EA] text-[#1A1A1A]">
            <div className="max-w-310 mx-auto pt-8 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Section */}
                <HeaderSection
                    position="center"
                    title="When you need it"
                    heading={[
                        {
                            text: "Six common  ",
                            color: "primary",
                        },
                        { text: "use cases.", color: "secondary" },
                    ]}
                />

                {/* Use Cases Grid with Custom Borders */}
                <div className="border-t border-b border-[#DCD7CC] grid grid-cols-1 md:grid-cols-2 font-serif">
                    {/* Item 01 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pr-12 md:border-r border-[#DCD7CC] flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 01
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                E-commerce product listings
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Amazon, Shopify, Etsy, eBay, and marketplace catalogs require clean
                                product images on white or transparent backgrounds. Clipping path is
                                what gets them there.
                            </p>
                        </div>
                    </div>

                    {/* Item 02 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pl-12 border-t md:border-t-0 border-[#DCD7CC] flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 02
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                Catalog and lookbook imagery
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Fashion, retail, and seasonal catalogs need consistent product
                                cutouts that match across hundreds of pages. We deliver that
                                consistency at scale.
                            </p>
                        </div>
                    </div>

                    {/* Item 03 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pr-12 border-t border-[#DCD7CC] md:border-r flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 03
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                Marketing and advertising
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Clean product cutouts for ad campaigns, social media creative,
                                banner ads, and sales materials. Drop your products onto any
                                background, anywhere.
                            </p>
                        </div>
                    </div>

                    {/* Item 04 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pl-12 border-t border-[#DCD7CC] flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 04
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                Color and background variations
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Show the same product on multiple backgrounds, or present color
                                variants of a single SKU. The cutout is the foundation.
                            </p>
                        </div>
                    </div>

                    {/* Item 05 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pr-12 border-t border-[#DCD7CC] md:border-r flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 05
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                Compositing onto lifestyle scenes
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Build composite imagery — products in real-world settings — without
                                an expensive lifestyle shoot. Starts with a clean cutout.
                            </p>
                        </div>
                    </div>

                    {/* Item 06 */}
                    <div className="pt-10 pb-10 md:pb-12 md:pl-12 border-t border-[#DCD7CC] flex items-start gap-4">
                        <span className="text-secondary italic font-sans text-sm md:text-base font-medium whitespace-nowrap mt-1">
                            — 06
                        </span>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A]">
                                Print and packaging design
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                                Print-ready vector paths for use in InDesign, Illustrator, or
                                directly in commercial printing workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
