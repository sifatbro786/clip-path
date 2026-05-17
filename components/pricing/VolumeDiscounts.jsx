const VolumeDiscounts = () => {
    // Design er pricing tier data matrix
    const discountTiers = [
        { range: "1 – 499 images per month", rate: "Standard rates", isSpecial: false },
        { range: "500 – 999 images per month", rate: "10% off", isSpecial: true },
        { range: "1,000 – 4,999 images per month", rate: "15% off", isSpecial: true },
        { range: "5,000 – 9,999 images per month", rate: "20% off", isSpecial: true },
        { range: "10,000+ images per month", rate: "Custom", isSpecial: true },
    ];

    return (
        <section className="bg-[#1A1615] text-[#F3EFEA] min-h-screen py-10 md:py-26 px-4 md:px-8 flex flex-col justify-center items-center font-sans">
            <div className="max-w-310 w-full text-center mb-12">
                {/* Top Mini Tagline */}
                <span className="text-secondary text-xs font-semibold tracking-widest uppercase block mb-4">
                    Volume Discounts
                </span>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 leading-tight">
                    The more you ship, <br />
                    the <span className="text-secondary italic font-normal">less you pay.</span>
                </h2>

                {/* Subtitle / Description */}
                <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Discounts apply automatically based on monthly image volume. No contracts, no
                    commitments — just better pricing as you scale.
                </p>
            </div>

            {/* Pricing Table Tier List */}
            <div className="max-w-2xl w-full border-t border-gray-800">
                {discountTiers.map((tier, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-5 border-b border-gray-800 text-sm md:text-base transition-colors duration-200 hover:bg-white/5 px-2 rounded-sm"
                    >
                        {/* Image Range Text */}
                        <span className="text-gray-300 font-light">{tier.range}</span>

                        {/* Discount Rate Text */}
                        <span
                            className={`font-medium ${tier.isSpecial ? "text-secondary text-lg md:text-xl font-serif" : "text-gray-500 italic font-light"}`}
                        >
                            {tier.rate}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom Disclaimer */}
            <p className="text-xs text-gray-500 italic mt-8 text-center">
                Discounts calculated per calendar month, applied at invoicing.
            </p>
        </section>
    );
};

export default VolumeDiscounts;
