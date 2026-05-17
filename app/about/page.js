import ChooseSection from "@/components/about/ChooseSection";
import Founders from "@/components/about/Founders";
import OurStory from "@/components/about/OurStory";
import Quote from "@/components/about/Quote";
import WhereWeWork from "@/components/about/WhereWeWork";
import WorkSection from "@/components/about/WorkSection";
import HeaderSection from "@/components/common/HeaderSection";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* //! Hero */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-[#F2EFE8] text-[#1a1a1a] font-sans">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                    {/* Top Establishment Badge */}
                    <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-semibold tracking-widest text-secondary uppercase mb-8 select-none">
                        <span className="w-8 h-px bg-secondary/40"></span>
                        <span>Est. 2014 · Dhaka, Bangladesh</span>
                        <span className="w-8 h-px bg-secondary/40"></span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-[58px] font-serif font-normal leading-tight tracking-tight max-w-3xl mb-8 text-gray-900">
                        Built By Craftsmen. Made For <br className="hidden md:inline" />
                        <span className="text-secondary italic font-normal">The World.</span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mb-12 opacity-90">
                        Rapid Clipping Path is a photo editing studio led by a senior Photoshop
                        expert with seventeen years of professional craft, partnered with an
                        entrepreneur educated across the UK and the US. We deliver hand-edited image
                        work to over four thousand brands, in more than thirty countries.
                    </p>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        {/* Start Free Trial Button */}
                        <Link
                            href="#"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#141211] text-white text-xs md:text-sm font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-[#141211]/90 transition-all duration-300 whitespace-nowrap"
                        >
                            Start Free Trial <span className="ml-2 font-sans">→</span>
                        </Link>

                        {/* Book a Consultation Button */}
                        <Link
                            href="#"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-gray-800 border border-gray-400 text-xs md:text-sm font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-black/5 hover:border-gray-900 transition-all duration-300 whitespace-nowrap"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <OurStory />
            <Founders />
            <ChooseSection />
            <WorkSection />
            <WhereWeWork />
            <Quote />

            {/* //! CTA */}
            <section className="max-w-310 mx-auto px-4 sm:px-6 py-10">
                <HeaderSection
                    position="center"
                    title="Begin a project"
                    heading={[
                        { text: "Send us three images. ", color: "primary" },
                        { text: "Free.", color: "secondary" },
                    ]}
                    paragraph="The best way to evaluate our craft is to see it on your own work. We'll edit your first three images within twenty-four hours — no credit card, no obligation."
                    buttons={[
                        { label: "Start Free Trial", href: "#", variant: "solid" },
                        { label: "Book a Consultation", href: "#", variant: "outline" },
                    ]}
                    section={true}
                />
            </section>
        </>
    );
}
