import Questions from "@/components/booking/Questions";
import HeaderSection from "@/components/common/HeaderSection";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";

export default function BookingPage() {
    return (
        <>
            <HeroSection
                eyebrow="Book a free 30-minute call"
                heading={
                    <>
                        A conversation, before{" "}
                        <em>
                            {" "}
                            <br />a quote.
                        </em>
                    </>
                }
                paragraph="Discuss your photo editing project directly with our co-founder, Fizz. You'll leave the call with a clear quote, a project timeline, and honest answers — whether or not we end up working together."
                primaryBtn={{ label: "Schedule a Call", href: "/trial" }}
                secondaryBtn={{ label: "Or email directly", href: "/services" }}
                afterButtons="paragraph"
                afterParagraph="Free · No obligation · 30 minutes · Available across all major time zones"
                imageSlot={
                    <Image
                        width={1000}
                        height={1000}
                        loading="eager"
                        src="/hero2.jpg"
                        alt="Before / After"
                    />
                }
            />

            {/* //! What we'll cover */}
            <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 font-sans">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary text-xs font-semibold tracking-widest uppercase block mb-4">
                        What We&apos;ll Cover
                    </span>
                    <h2 className="text-4xl md:text-5xl text-[#1a1a1a] font-serif leading-tight tracking-tight">
                        Thirty minutes, <br className="sm:hidden" />
                        three <span className="text-secondary italic">simple goals.</span>
                    </h2>
                </div>

                {/* Grid / Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200/60 rounded-sm overflow-hidden shadow-sm">
                    {/* Step One */}
                    <div className="p-8 md:p-12 lg:p-16 bg-[#F7F5F0] border-b md:border-b-0 md:border-r border-gray-200/60 flex flex-col justify-between">
                        <div>
                            <span className="text-secondary text-xs italic block mb-6 md:mb-8">
                                — Step one —
                            </span>
                            <h3 className="text-2xl lg:text-[26px] font-serif text-[#1a1a1a] mb-4 font-medium">
                                Your project.
                            </h3>
                            <p className="text-gray-650 text-sm lg:text-base leading-relaxed font-light">
                                You walk us through what you&apos;re working on — the type of
                                images, volume, deadline, and quality expectations. We listen first,
                                ask questions second.
                            </p>
                        </div>
                    </div>

                    {/* Step Two */}
                    <div className="p-8 md:p-12 lg:p-16 bg-[#F7F5F0] border-b md:border-b-0 md:border-r border-gray-200/60 flex flex-col justify-between">
                        <div>
                            <span className="text-secondary text-xs italic block mb-6 md:mb-8">
                                — Step two —
                            </span>
                            <h3 className="text-2xl lg:text-[26px] font-serif text-[#1a1a1a] mb-4 font-medium">
                                Our recommendation.
                            </h3>
                            <p className="text-gray-650 text-sm lg:text-base leading-relaxed font-light">
                                We tell you which of our services fit your project, what the
                                realistic turnaround looks like, and what the work will cost.
                                Honest, even when we recommend going elsewhere.
                            </p>
                        </div>
                    </div>

                    {/* Step Three */}
                    <div className="p-8 md:p-12 lg:p-16 bg-[#F7F5F0] flex flex-col justify-between">
                        <div>
                            <span className="text-secondary text-xs italic block mb-6 md:mb-8">
                                — Step three —
                            </span>
                            <h3 className="text-2xl lg:text-[26px] font-serif text-[#1a1a1a] mb-4 font-medium">
                                Your next steps.
                            </h3>
                            <p className="text-gray-650 text-sm lg:text-base leading-relaxed font-light">
                                You leave with a written summary, a clear quote within 24 hours, and
                                a free trial offer if you&apos;d like to test the work before
                                committing to anything.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Who you'll speak with */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-[#F2EFE8] font-sans">
                <div className="max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Side: Image / Placeholder */}
                    <div className="lg:col-span-5 w-full aspect-4/5 bg-[#1F1B18] flex items-center justify-center p-6 rounded-sm shadow-sm">
                        <p className="text-gray-400 text-xs italic tracking-wider text-center font-serif">
                            Real portrait of Fizz <br /> goes here
                        </p>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Subtitle */}
                        <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-3">
                            Who you&apos;ll speak with
                        </span>

                        {/* Title & Role */}
                        <h2 className="text-3xl md:text-5xl text-[#1A1A1A] font-serif leading-tight mb-2">
                            Md Fozlur Rahman{" "}
                            <span className="text-gray-400 font-light font-sans text-2xl md:text-3xl">
                                — Fizz
                            </span>
                        </h2>

                        <p className="text-secondary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8">
                            Co-founder · Sales, Operations & Marketing
                        </p>

                        {/* Description */}
                        <div className="text-gray-700 text-sm md:text-base text-justify leading-relaxed space-y-4 font-light max-w-2xl">
                            <p>
                                Fizz leads sales, operations, and client relationships at Rapid
                                Clipping Path. Educated in Computer Science at the{" "}
                                <span className="text-secondary italic font-serif">
                                    University of Hertfordshire
                                </span>{" "}
                                in the UK, with an exchange year at the University of Oklahoma, he
                                brings prior experience from Microsoft in London and PwC in New York
                                City.
                            </p>
                            <p>
                                He takes every consultation personally — so when you book a call,
                                you&apos;re talking to the co-founder who&apos;ll oversee your
                                project end-to-end, not a sales representative reading from a deck.
                            </p>
                        </div>

                        {/* Bottom Box: Expectations */}
                        <div className="mt-10 bg-[#F7F5F0] border-l-2 border-secondary p-6 md:p-8 max-w-xl shadow-sm">
                            <span className="text-secondary text-[10px] md:text-xs font-bold tracking-widest uppercase block mb-4">
                                On every call, you can expect:
                            </span>

                            <ul className="space-y-3 text-xs md:text-sm text-gray-700 font-light">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">—</span>
                                    <span>
                                        Honest answers — including telling you when we&apos;re not
                                        the right fit
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">—</span>
                                    <span>
                                        A direct quote based on your actual scope, not a vague range
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">—</span>
                                    <span>No pressure to commit on the call</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">—</span>
                                    <span>A follow-up summary in writing within 24 hours</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Do you actually need a call */}
            <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 font-sans">
                {/* Header Section */}
                <div className="max-w-2xl mb-12 md:mb-16">
                    <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-3">
                        Before you book
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] font-serif leading-tight tracking-tight mb-4">
                        Do you actually <span className="text-secondary italic">need a call?</span>
                    </h2>
                    <p className="text-gray-550 text-base md:text-lg font-serif leading-relaxed font-light">
                        For most simple orders, an email is faster — we usually respond within two
                        hours during business days. Here&apos;s how to decide:
                    </p>
                </div>

                {/* Decision Matrix Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {/* Left Card: Faster Path (Email) */}
                    <div className="bg-[#F9F8F6] border border-gray-200/50 rounded-sm p-6 md:p-10 lg:p-12 flex flex-col justify-between shadow-sm">
                        <div>
                            <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                                Faster Path
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-8">
                                Just <span className="text-secondary italic">email us.</span>
                            </h3>

                            <ul className="space-y-0 text-xs md:text-sm text-gray-700">
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You have a specific, clear request — for example, &quot;I
                                        need clipping path on 50 product images by Friday&quot;
                                    </span>
                                </li>
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You want a free trial — send us 3 sample images and
                                        we&apos;ll edit them within 24 hours
                                    </span>
                                </li>
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You just want a quick price quote
                                    </span>
                                </li>
                                <li className="flex items-start py-4">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        Your project fits cleanly into one of our standard services
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-4">
                            <a
                                href="mailto:support@rapidclippingpath.com"
                                className="inline-flex items-center text-xs md:text-sm text-gray-500 font-medium border-b border-gray-500 pb-1 hover:text-secondary hover:border-secondary transition-colors group"
                            >
                                support@rapidclippingpath.com
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Card: Better For Partnership (Call) */}
                    <div className="bg-[#F9F8F6] border border-gray-200/50 rounded-sm p-6 md:p-10 lg:p-12 flex flex-col justify-between shadow-sm">
                        <div>
                            <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                                Better for Partnership
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-8">
                                Book <span className="text-secondary italic">a call.</span>
                            </h3>

                            <ul className="space-y-0 text-xs md:text-sm text-gray-700">
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        Your project is complex — multi-service, large volume, or
                                        specific brand requirements
                                    </span>
                                </li>
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You want a long-term partner for ongoing work, not a one-off
                                        project
                                    </span>
                                </li>
                                <li className="flex items-start py-4 border-b border-gray-200/40">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You&apos;re an agency, photography studio, or brand looking
                                        to discuss a retainer
                                    </span>
                                </li>
                                <li className="flex items-start py-4">
                                    <span className="text-secondary mr-3 font-medium text-base -mt-0.5">
                                        +
                                    </span>
                                    <span className="font-light leading-relaxed">
                                        You need to walk us through your workflow, brand guidelines,
                                        or technical requirements
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center text-xs md:text-sm text-gray-500 font-medium border-b border-gray-500 pb-1 hover:text-secondary hover:border-secondary transition-colors group"
                            >
                                Schedule a 30-min call
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Recent Work */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-[#F2EFE8] font-sans">
                <div className="max-w-310 mx-auto ">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12 gap-4">
                        <div>
                            <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-3">
                                Recent Work
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] font-serif leading-tight tracking-tight">
                                A look at{" "}
                                <span className="text-secondary italic">what we ship.</span>
                            </h2>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center text-xs md:text-sm text-[#1a1a1a] font-medium border-b border-[#1a1a1a] pb-1 hover:text-secondary hover:border-secondary transition-colors group"
                            >
                                See full portfolio
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            {/* Background Image */}
                            <Image
                                src="/hero1.jpg"
                                alt="Jewelry editorial"
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />

                            {/* Center Placeholder Text */}
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>

                            {/* Card Info */}
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    High-end Retouching
                                </span>
                                <h3 className="text-xl font-serif text-white">Jewelry editorial</h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            <Image
                                src="/hero1.jpg"
                                alt="Apparel campaign"
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    Invisible Mannequin
                                </span>
                                <h3 className="text-xl font-serif text-white">Apparel campaign</h3>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            <Image
                                src="/hero1.jpg"
                                alt="Cosmetics catalog"
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    Color Correction
                                </span>
                                <h3 className="text-xl font-serif text-white">Cosmetics catalog</h3>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            <Image
                                src="/hero1.jpg"
                                alt="Product line"
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    Multi-clipping Path
                                </span>
                                <h3 className="text-xl font-serif text-white">Product line</h3>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            <Image
                                src="/hero1.jpg"
                                alt="Beauty portrait"
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    Skin Retouching
                                </span>
                                <h3 className="text-xl font-serif text-white">Beauty portrait</h3>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="group relative aspect-4/5 w-full bg-[#1A1816] rounded-sm overflow-hidden shadow-sm flex flex-col justify-between p-6 md:p-8">
                            <Image
                                width={400}
                                height={400}
                                src="/hero1.jpg"
                                alt="Footwear catalog"
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                            />
                            <div className="relative z-10 my-auto mx-auto">
                                <p className="text-gray-500/80 text-xs italic tracking-wider font-serif">
                                    [ before · after ]
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">
                                    Clipping Path
                                </span>
                                <h3 className="text-xl font-serif text-white">Footwear catalog</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! FAQ */}
            <Questions />

            {/* //! CTA */}
            <section className="max-w-310 mx-auto px-4 sm:px-6 md:py-10">
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
