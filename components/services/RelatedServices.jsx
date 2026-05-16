import HeaderSection from "../common/HeaderSection";

export default function RelatedServices() {
    const services = [
        {
            title: "Multi-Clipping Path",
            desc: "Individual element selection for color variations and selective editing. Layered PSD with all paths labeled.",
            price: "From $1.25 per image",
            link: "#",
        },
        {
            title: "Background Removal",
            desc: "Clean cutouts with white or transparent background — the simplest version of clipping path work.",
            price: "From $0.49 per image",
            link: "#",
        },
        {
            title: "Color Correction",
            desc: "White balance, brightness, and brand colour matching. Often paired with clipping path for catalog work.",
            price: "From $0.89 per image",
            link: "#",
        },
    ];

    return (
        <section className="bg-white">
            <div className="max-w-310 mx-auto pt-8 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                <HeaderSection
                    position="left"
                    title="Related Services"
                    heading={[
                        {
                            text: "Looking for ",
                            color: "primary",
                        },
                        { text: "something else?", color: "secondary" },
                    ]}
                />

                {/* Bottom Section: 3-Column Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#faf9f6] border border-gray-100 rounded-md p-8 md:p-10 flex flex-col justify-between min-h-80 hover:shadow-sm transition-shadow duration-300"
                        >
                            {/* Main Content */}
                            <div>
                                <h3 className="text-gray-900 font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Action Link & Price */}
                            <div className="mt-8 pt-6 border-t border-gray-200/60">
                                <a
                                    href={service.link}
                                    className="text-secondary font-sans text-sm font-medium inline-flex items-center gap-2 group hover:opacity-80 transition-opacity"
                                >
                                    {service.price}
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
