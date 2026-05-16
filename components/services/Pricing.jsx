import HeaderSection from "../common/HeaderSection";

export default function Pricing() {
    const tiers = [
        {
            complexity: "Basic",
            covers: "Simple shapes — boxes, bottles, basic products with clean backgrounds",
            price: "$0.39",
            suffix: "/img",
        },
        {
            complexity: "Simple",
            covers: "Mild curves, minor details, slight transparency",
            price: "$0.09", // image text looks like $0.69 or $0.09, keeping consistent with data
            suffix: "/img",
        },
        {
            complexity: "Medium",
            covers: "Multiple components, moderate edge detail, secondary objects",
            price: "$1.25",
            suffix: "/img",
        },
        {
            complexity: "Complex",
            covers: "Jewelry, intricate edges, fine detail, small transparent areas",
            price: "$2.50",
            suffix: "/img",
        },
        {
            complexity: "Super complex",
            covers: "Hair, fur, glass, translucent fabrics, multi-subject scenes",
            price: "$4.50 +",
            suffix: "/img",
        },
    ];

    return (
        <section className="bg-[#F2EFE8]">
            <div className="max-w-310 mx-auto pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Section - Untouched */}
                <HeaderSection
                    position="center"
                    title="Pricing"
                    heading={[
                        {
                            text: "Five tiers. One ",
                            color: "primary",
                        },
                        { text: "honest table.", color: "secondary" },
                    ]}
                    paragraph="Send us a sample and we'll tell you the tier. If we misjudge, we adjust mid-order at no extra cost."
                />

                {/* Pricing Table Section */}
                <div className="overflow-x-auto w-full">
                    <table className="w-full min-w-3xl border-collapse font-serif text-left">
                        {/* Top Thick Border & Header Row */}
                        <thead>
                            <tr className="border-t-2 border-b border-[#1A1A1A]">
                                <th className="py-4 w-[20%] text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    COMPLEXITY
                                </th>
                                <th className="py-4 w-[60%] text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    WHAT IT COVERS
                                </th>
                                <th className="py-4 w-[20%] text-right text-[10px] md:text-xs uppercase tracking-widest text-[#99928C] font-sans font-medium">
                                    PRICE PER IMAGE
                                </th>
                            </tr>
                        </thead>

                        {/* Table Content Rows */}
                        <tbody className="divide-y divide-[#E6E2D8]">
                            {tiers.map((tier, index) => (
                                <tr
                                    key={index}
                                    className="group hover:bg-[#F5F2EA] transition-colors"
                                >
                                    {/* Complexity Column */}
                                    <td className="py-6 pr-4 font-normal text-lg md:text-xl text-[#1A1A1A]">
                                        {tier.complexity}
                                    </td>

                                    {/* What it Covers Column */}
                                    <td className="py-6 pr-4 font-sans text-xs md:text-sm text-[#4A4A4A] font-light max-w-md leading-relaxed">
                                        {tier.covers}
                                    </td>

                                    {/* Price Column */}
                                    <td className="py-6 text-right font-normal text-xl md:text-2xl text-[#1A1A1A] whitespace-nowrap">
                                        {tier.price}
                                        <span className="font-sans text-[10px] md:text-xs text-[#99928C] font-light align-middle ml-0.5">
                                            {tier.suffix}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Bottom Thick Border Divider */}
                    <div className="border-b-2 border-[#1A1A1A] w-full"></div>
                </div>

                {/* Footer Note Section */}
                <div className="mt-8 text-center font-serif italic text-sm md:text-base text-[#4A4A4A]">
                    Volume discounts apply automatically from 500 images per month —{" "}
                    <a
                        href="#"
                        className="text-secondary not-italic font-sans text-sm md:text-base font-normal underline underline-offset-4"
                    >
                        see the full pricing breakdown →
                    </a>
                </div>
            </div>
        </section>
    );
}
