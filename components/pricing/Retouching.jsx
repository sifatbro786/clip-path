const Retouching = () => {
    const services = [
        {
            title: "Single-image retouching",
            description: "Skin, beauty, editorial portrait work",
            price: "$35 – $120",
        },
        {
            title: "Jewelry or cosmetics hero image",
            description: "Stone work, surface perfection, reflections",
            price: "$45 – $180",
        },
        {
            title: "Editorial campaign",
            description: "10–30 images, multi-round, brand-aligned",
            price: "$1,500 – $6,000",
        },
        {
            title: "Full luxury campaign",
            description: "30+ images, multi-round, NDA-covered",
            price: "$6,000+",
        },
    ];

    return (
        <section className="bg-white text-black px-4 py-16 md:py-32 md:px-6 flex items-center justify-center font-sans">
            <div className="max-w-310 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Column - Headline & Intro */}
                <div className="lg:col-span-5 flex flex-col justify-start pt-2">
                    {/* Section Small Uppercase Title */}
                    <span className="text-secondary text-xs font-semibold tracking-widest uppercase block mb-4">
                        High-End Retouching
                    </span>

                    {/* Main Display Headline */}
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 leading-tight">
                        Quoted{" "}
                        <span className="text-secondary italic font-normal">per project.</span>
                    </h2>

                    {/* Description Content */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                        Editorial work, luxury product photography, and campaign-level retouching is
                        priced by scope, not per image. Razon Roy leads every high-end engagement
                        personally.
                    </p>

                    {/* Action CTA Button */}
                    <div>
                        <a
                            href="mailto:contact@example.com"
                            className="inline-flex items-center justify-center bg-[#111111] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black/90 transition-colors group"
                        >
                            Email a brief
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                                →
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Pricing Grid List */}
                <div className="lg:col-span-7 flex flex-col border-t border-gray-200">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start py-6 border-b border-gray-200 gap-4"
                        >
                            {/* Service Info */}
                            <div className="flex flex-col">
                                <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-400 font-light">
                                    {service.description}
                                </p>
                            </div>

                            {/* Service Pricing */}
                            <div className="text-right whitespace-nowrap pt-1">
                                <span className="text-lg md:text-xl font-serif text-gray-900">
                                    {service.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Retouching;
