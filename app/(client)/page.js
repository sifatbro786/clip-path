import ChooseSection from "@/components/home/ChooseSection";
import Company from "@/components/home/Company";
import CTASection from "@/components/home/CTASection";
import DifferenceSection from "@/components/home/DifferenceSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import PricingSection from "@/components/home/PricingSection";
import ServiceSection from "@/components/home/ServiceSection";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Company />
            <ServiceSection />
            <DifferenceSection />
            <ChooseSection />
            <PricingSection />
            <FAQSection />
            <CTASection />
        </>
    );
}
