import ChooseSection from "@/components/about/ChooseSection";
import Founders from "@/components/about/Founders";
import OurStory from "@/components/about/OurStory";
import Quote from "@/components/about/Quote";
import WhereWeWork from "@/components/about/WhereWeWork";
import WorkSection from "@/components/about/WorkSection";
import HeaderSection from "@/components/common/HeaderSection";

export default function AboutPage() {
    return (
        <>
            {/* //! Hero */}
            <section className="max-w-310 mx-auto px-4 sm:px-6">
                <HeaderSection
                    position="center"
                    title="Est. 2014 · Dhaka, Bangladesh"
                    heading={[
                        { text: "Built by craftsmen. Made for ", color: "primary" },
                        { text: "the world.", color: "secondary" },
                    ]}
                    paragraph="Rapid Clipping Path is a photo editing studio led by a senior Photoshop expert
            with seventeen years of professional craft, partnered with an entrepreneur
            educated across the UK and the US. We deliver hand-edited image work to
            over four thousand brands, in more than thirty countries."
                    buttons={[
                        { label: "Start Free Trial", href: "#", variant: "solid" },
                        { label: "Book a Consultation", href: "#", variant: "outline" },
                    ]}
                    section={true}
                />
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
