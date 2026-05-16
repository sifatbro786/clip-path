import HeaderSection from "../common/HeaderSection";

export default function RecentWork() {
    // Samples data matching the image content
    const samples = [
        {
            tier: "BASIC TIER",
            title: "Bottle on white background",
            price: "$0.39 per image",
        },
        {
            tier: "SIMPLE TIER",
            title: "Footwear product cutout",
            price: "$0.09 per image",
        },
        {
            tier: "MEDIUM TIER",
            title: "Bicycle with multi-component frame",
            price: "$1.25 per image",
        },
        {
            tier: "COMPLEX TIER",
            title: "Jewelry with intricate edges",
            price: "$2.50 per image",
        },
        {
            tier: "SUPER COMPLEX TIER",
            title: "Animal with hair and fur",
            price: "$4.50 per image",
        },
        {
            tier: "SUPER COMPLEX TIER",
            title: "Translucent fabric on model",
            price: "$4.50 per image",
        },
    ];

    return (
        <section className="bg-[#FAF8F4]">
            <div className="max-w-310 mx-auto pt-8 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Wrapper to position 'See full portfolio' */}
                <div className="relative flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="flex-1">
                        {/* Your existing header component - untouched */}
                        <HeaderSection
                            position="left"
                            title="See the work"
                            heading={[
                                {
                                    text: "What ",
                                    color: "primary",
                                },
                                { text: "$0.39 buys you..", color: "secondary" },
                            ]}
                            paragraph="Real samples across our most-used services. Hover any image to see the original."
                            section={true}
                        />
                    </div>

                    {/* See Full Portfolio Link */}
                    <a
                        href="#"
                        className="mt-4 md:mt-0 font-sans text-xs font-medium text-[#1A1A1A] hover:text-secondary transition-colors flex items-center gap-1 whitespace-nowrap md:mb-1"
                    >
                        See full portfolio <span className="text-sm font-light">—</span>
                    </a>
                </div>

                {/* Gallery Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {samples.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm bg-[#1A1513] mb-4">
                                {/* Dummy/Placeholder Images with Hover Effect */}
                                {/* Base/After Image */}
                                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 group-hover:opacity-40">
                                    <span className="font-serif italic text-xs text-[#99928C] font-light">
                                        Real before/after <br /> image goes here
                                    </span>
                                </div>

                                {/* Before Image Preview on Hover */}
                                <div className="absolute inset-0 w-full h-full bg-[#2c221e] flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <span className="font-serif italic text-xs text-secondary">
                                        [Original/Before view]
                                    </span>
                                </div>

                                {/* 'AFTER' Badge */}
                                <span className="absolute top-4 right-4 bg-secondary text-[9px] font-sans font-bold text-white tracking-widest px-2.5 py-1 rounded-full uppercase scale-90">
                                    AFTER
                                </span>
                            </div>

                            {/* Text Meta Info */}
                            <div className="space-y-1 font-serif">
                                <span className="block text-[9px] md:text-[10px] uppercase tracking-widest text-secondary font-sans font-semibold">
                                    {item.tier}
                                </span>
                                <h3 className="text-base md:text-lg font-normal text-[#1A1A1A] leading-snug tracking-tight group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>
                                <span className="block font-sans text-xs text-[#666666] font-light">
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
