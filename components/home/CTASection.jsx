// CTASection.jsx
import HeaderSection from "../common/HeaderSection";

export default function CTASection() {
    return (
        <section className="max-w-310 mx-auto px-4 sm:px-6">
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
    );
}
