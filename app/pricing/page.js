import HeaderSection from "@/components/common/HeaderSection";
import AlwaysIncluded from "@/components/pricing/AlwaysIncluded";
import Hero from "@/components/pricing/Hero";
import PerImageRates from "@/components/pricing/PerImageRates";
import PricingSection from "@/components/pricing/PricingSection";
import Questions from "@/components/pricing/Questions";
import RecentWork from "@/components/pricing/RecentWork";
import Retouching from "@/components/pricing/Retouching";
import VolumeDiscounts from "@/components/pricing/VolumeDiscounts";

export default function PricingPage() {
    return (
        <>
            <Hero />
            <PerImageRates />
            <RecentWork />
            <PricingSection />
            <Retouching />
            <VolumeDiscounts />
            <AlwaysIncluded />
            <Questions />

            {/* //! CTA */}
            <section className="max-w-310 mx-auto px-4 sm:px-6 md:py-10">
                <HeaderSection
                    position="center"
                    title="Still deciding"
                    heading={[
                        { text: "Try before ", color: "primary" },
                        { text: "you commit.", color: "secondary" },
                    ]}
                    paragraph="Send us 3 sample images. We'll edit them within 24 hours, free of charge. No credit card, no commitment. The numbers above are real — but the work is what should convince you."
                    buttons={[
                        { label: "Start Free Trial", href: "#", variant: "solid" },
                        { label: "Book a Consultation", href: "#", variant: "outline" },
                    ]}
                    footer="fizz@rapidclippingpath.com · +1 (405) 434-7167"
                />
            </section>
        </>
    );
}
