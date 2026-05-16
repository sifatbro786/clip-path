import HeaderSection from "@/components/common/HeaderSection";
import HeroSection from "@/components/common/HeroSection";
import ClippingPath from "@/components/services/ClippingPath";
import HandDrawn from "@/components/services/HandDrawn";
import Pricing from "@/components/services/Pricing";
import Questions from "@/components/services/Questions";
import RecentWork from "@/components/services/RecentWork";
import RelatedServices from "@/components/services/RelatedServices";
import UseCases from "@/components/services/UseCases";
import WhatYouGet from "@/components/services/WhatYouGet";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <>
            {/* //! Hero */}
            <HeroSection
                eyebrow="Photo Editing · Service 01"
                heading={
                    <>
                        Hand-drawn cutouts. Pixel-perfect <em>edges.</em>
                    </>
                }
                paragraph="Professional clipping path services for e-commerce, catalogs, and product photography. Every path drawn by hand in Photoshop — never AI. Trusted by over 4,000 brands since 2014."
                primaryBtn={{ label: "Try 3 Images free", href: "/trial" }}
                secondaryBtn={{ label: "See Pricing", href: "/services" }}
                afterButtons="stats"
                afterStats={[
                    { value: "$0.39", label: "From, per image" },
                    { value: "24hr", label: "Standard turnaround" },
                    { value: "4M+", label: "Paths drawn since 2014" },
                ]}
                imageSlot={
                    <Image width={1000} height={1000} src="/hero1.jpg" alt="Before / After" />
                }
            />

            <ClippingPath />
            <UseCases />
            <HandDrawn />
            <RecentWork />
            <Pricing />
            <WhatYouGet />
            <Questions />
            <RelatedServices />

            <section className="max-w-310 mx-auto px-4 sm:px-6 md:py-10">
                <HeaderSection
                    position="center"
                    title="Free trial"
                    heading={[
                        { text: "Three images. ", color: "primary" },
                        { text: "Free. Today.", color: "secondary" },
                    ]}
                    paragraph="Send us 3 sample images. We'll deliver clean, hand-drawn clipping paths within 24 hours — at no cost, with no commitment to continue."
                    buttons={[
                        { label: "Start Free Trial", href: "#", variant: "solid" },
                        { label: "Email Fizz", href: "#", variant: "outline" },
                    ]}
                    footer="fizz@rapidclippingpath.com · +1 (405) 434-7167"
                />
            </section>
        </>
    );
}
