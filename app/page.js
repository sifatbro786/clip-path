import HeroSection from "@/components/common/HeroSection";
import Company from "@/components/home/Company";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
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

            <div className="max-w-310 mx-auto">
                <Company />
            </div>
        </>
    );
}
