import HeaderSection from "@/components/common/HeaderSection";
import HeroSection from "@/components/common/HeroSection";
import ChooseSection from "@/components/home/ChooseSection";
import Company from "@/components/home/Company";
import DifferenceSection from "@/components/home/DifferenceSection";
import FAQSection from "@/components/home/FAQSection";
import PricingSection from "@/components/home/PricingSection";
import { homeService } from "@/data/servicesData";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            {/* //! Hero Section */}
            <HeroSection
                eyebrow="Book a free 30-minute call"
                heading={
                    <>
                        Professional Photo Editing Services for <em>eCommerce & Brands</em>
                    </>
                }
                paragraph="Discuss your photo editing project directly with our co-founder, Fizz. You'll leave the call with a clear quote, a project timeline, and honest answers — whether or not we end up working together."
                primaryBtn={{ label: "Start Free Trial", href: "/trial" }}
                secondaryBtn={{ label: "View Services", href: "/services" }}
                imageSlot={
                    <Image width={1000} height={1000} src="/hero1.jpg" alt="Before / After" />
                }
            />

            {/* //! Company */}
            <Company />

            {/* //! Services */}
            <section className="bg-[#F2EFE8] py-12 md:py-16 px-4 sm:px-6">
                <div className="max-w-310 mx-auto">
                    {/* Header Section */}
                    <HeaderSection
                        position="left"
                        title="Our Professional Services"
                        heading={[
                            {
                                text: "We provide a wide range of photo editing services tailored for ",
                                color: "primary",
                            },
                            { text: "your business needs", color: "secondary" },
                        ]}
                    />

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-12">
                        {homeService.map((service, index) => (
                            <div
                                key={index}
                                className={`min-h-50 sm:min-h-55 md:min-h-62.5 p-5 md:p-6 lg:p-8 flex flex-col justify-center border-2 border-dotted border-secondary/40 rounded-xl transition-all duration-300 hover:bg-secondary/5 items-start`}
                            >
                                <div className="mb-4 md:mb-6">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80"
                                    />
                                </div>
                                <h3 className="text-lg md:text-xl font-sans font-bold text-gray-800 mb-2 md:mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm text-justify leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* //! Difference */}
            <DifferenceSection />

            {/* //! Choose */}
            <ChooseSection />

            {/* //! Pricing */}
            <PricingSection />

            {/* //! FAQ */}
            <FAQSection />

            {/* //! Call to Action */}
            <section className="bg-white px-4 sm:px-6 md:py-10">
                <HeaderSection
                    position="center"
                    title="Ready to talk"
                    heading={[
                        { text: "Let's have ", color: "primary" },
                        { text: "the conversation.", color: "secondary" },
                    ]}
                    paragraph="Book a thirty-minute call at a time that works for you. No prep needed
— just bring your project in mind and any reference images that would
help us understand the scope."
                    buttons={[
                        { label: "Schedule a Call", href: "#", variant: "solid" },
                        { label: "Or email Fizz directly", href: "#", variant: "outline" },
                    ]}
                    footer="fizz@rapidclippingpath.com · +1 (405) 434-7167"
                />
            </section>
        </>
    );
}
