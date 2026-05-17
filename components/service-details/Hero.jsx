import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full bg-[#141211] text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 min-h-[90vh] flex flex-col justify-between relative overflow-hidden">
            {/* Background Full-Bleed Image with Premium Gradients */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    width={1920}
                    height={1080}
                    src="/hero3.jpg"
                    alt="Hero jewelry retouching background"
                    className="w-full h-full object-cover opacity-30 md:opacity-35"
                />
                {/* Cinematic Vignette for Text Contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-[#141211] via-[#141211]/40 to-[#141211]/90" />
                <div className="absolute inset-0 bg-linear-to-r from-[#141211]/90 via-transparent to-[#141211]/30 md:block hidden" />
            </div>

            {/* Main Container to Restrict Max-Width and Center the Content */}
            <div className="w-full  flex flex-col justify- flex-1 relative z-10 gap-16 md:gap-24">
                {/* Top Navbar Area */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="w-6 h-px bg-secondary block"></span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
                            Retouching · Specialty
                        </span>
                    </div>
                    <div>
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray-400">
                            No. 07 of 12
                        </span>
                    </div>
                </div>

                {/* Bottom Content Area */}
                <div className="mt-auto w-full max-w-2xl lg:max-w-3xl pb-4 md:pb-8">
                    {/* Main Typography Headline */}
                    <h1 className="text-5xl sm:text-6xl font-serif leading-[1.05] tracking-tight mb-6 md:mb-8">
                        Jewelry, <br />
                        <span className="text-secondary italic font-normal">made luminous.</span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-8 md:mb-10 max-w-xl md:max-w-2xl opacity-90">
                        High-end jewelry retouching for luxury houses, fashion brands, and
                        e-commerce labels. Stone clarity, metal polish, and reflection construction
                        — done by retouchers who know the difference between a diamond and a CZ on
                        screen.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a
                            href="#"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary text-white text-xs md:text-sm font-medium tracking-wide px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Email a brief <span className="ml-2 font-sans">→</span>
                        </a>

                        <a
                            href="#"
                            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white text-xs md:text-sm font-medium tracking-wide px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                        >
                            See sample work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
