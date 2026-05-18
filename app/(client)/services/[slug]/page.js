import HeaderSection from "@/components/common/HeaderSection";
import Hero from "@/components/service-details/Hero";
import Questions from "@/components/service-details/Questions";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailsPage() {
    const samples = [
        {
            category: "DIAMOND RING · HERO IMAGE",
            title: "Solitaire engagement ring",
            description:
                "Stone clarity enhancement, prong cleanup, metal polish, soft shadow construction.",
            imageUrl:
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80", // Replace with your real "after" image
            originalUrl:
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=40", // Replace with your real "before" image
        },
        {
            category: "NECKLACE · EDITORIAL",
            title: "Pearl strand on velvet",
            description:
                "Surface dust removal, lustre enhancement, background grading, reflection refinement.",
            imageUrl:
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
            originalUrl:
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=40",
        },
        {
            category: "WATCH · CAMPAIGN",
            title: "Mechanical watch macro",
            description:
                "Dial detail enhancement, hand polish, crystal reflection construction, leather strap retouch.",
            imageUrl:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
            originalUrl:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=40",
        },
        {
            category: "EARRINGS · E-COMMERCE",
            title: "Drop earrings on white",
            description:
                "Background isolation, stone fire enhancement, cast shadow grounding, format prep for catalog.",
            imageUrl:
                "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
            originalUrl:
                "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=40",
        },
    ];

    return (
        <>
            <Hero />

            {/* //! Stats */}
            <section className="w-full bg-[#F2EFE8] py-8 md:py-12 px-4 sm:px-6 border-y border-gray-200/40">
                <div className="max-w-310 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8 items-start md:px-6">
                    {/* Pricing Block */}
                    <div className="flex flex-col items-start text-left md:text-center">
                        <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-2">
                            Pricing
                        </span>
                        <h3 className="text-xl font-serif text-[#1a1a1a]">
                            $45 – $180{" "}
                            <span className="text-secondary italic font-normal text-lg sm:text-xl lg:text-2xl ml-1">
                                per image
                            </span>
                        </h3>
                    </div>

                    {/* Turnaround Block */}
                    <div className="flex flex-col items-start text-left md:text-center">
                        <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-2">
                            Turnaround
                        </span>
                        <h3 className="text-xl font-serif text-[#1a1a1a]">
                            48–72{" "}
                            <span className="text-secondary italic font-normal text-lg sm:text-xl lg:text-2xl ml-1">
                                hours
                            </span>
                        </h3>
                    </div>

                    {/* Led By Block */}
                    <div className="flex flex-col items-start text-left md:text-center">
                        <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-2">
                            Led By
                        </span>
                        <h3 className="text-xl font-serif text-[#1a1a1a]">Razon Roy</h3>
                    </div>

                    {/* Specialty Block */}
                    <div className="flex flex-col items-start text-left md:text-center">
                        <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-2">
                            Specialty
                        </span>
                        <h3 className="text-xl font-serif text-[#1a1a1a]">
                            High-end{" "}
                            <span className="text-secondary italic font-normal text-lg sm:text-xl lg:text-2xl ml-1">
                                retouching
                            </span>
                        </h3>
                    </div>
                </div>
            </section>

            {/* //! The Work */}
            <section className="w-full bg-white text-[#1a1a1a] pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 font-sans">
                {/* Main Responsive Grid Container */}
                <div className="w-full max-w-310 mx-auto px-4 sm:px-6  grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Title Area */}
                    <div className="lg:col-span-4 sticky top-8">
                        <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-3 md:mb-4">
                            The Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] tracking-tight">
                            Retouching <br />
                            that <span className="text-secondary italic font-normal">
                                earns
                            </span>{" "}
                            the <br />
                            price tag.
                        </h2>
                    </div>

                    {/* Right Column: Detailed Paragraphs & Blockquote */}
                    <div className="lg:col-span-8 text-gray-850 text-sm md:text-base lg:text-lg leading-relaxed space-y-6 md:space-y-8 font-light max-w-3xl text-justify">
                        <p className="font-serif">
                            Jewelry photography is one of the hardest things to get right. The
                            product is small. The materials are reflective. The details that
                            distinguish a $200 piece from a $20,000 piece are{" "}
                            <span className="text-secondary italic font-serif">
                                often invisible to the camera
                            </span>{" "}
                            — which is exactly the problem retouching has to solve.
                        </p>

                        <p className="font-serif">
                            We&apos;ve spent fifteen years specifically retouching jewelry —
                            diamonds, gold, silver, rose gold, platinum, gemstones, watches, and
                            high-end costume pieces — for brands ranging from independent designers
                            to luxury maisons. Every piece gets the same treatment: hand-edited,
                            reviewed at 400% zoom, signed off by our senior retoucher.
                        </p>

                        {/* Styled Quote Box with Left Accent Border */}
                        <div className="border-l-2 border-secondary pl-6 py-1 my-8 md:my-10">
                            <blockquote className="text-base md:text-xl font-serif italic text-gray-900 leading-relaxed">
                                &quot;In jewelry, the difference between an image that sells at
                                retail price and an image that gets aggressively discounted is six
                                pixels of clarity around a stone. We work at that level.&quot;
                            </blockquote>
                        </div>

                        <p className="font-serif">
                            If you&apos;re shooting a campaign, building a luxury e-commerce
                            catalog, or preparing imagery for an editorial spread — this is what
                            proper jewelry retouching looks like.
                        </p>
                    </div>
                </div>
            </section>

            {/* //! What we handle */}
            <section className="w-full bg-[#F2EFE8] text-[#1a1a1a] pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 font-sans">
                <div className="w-full max-w-310 mx-auto  px-4 sm:px-6">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                            What We Handle
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                            Six things{" "}
                            <span className="text-secondary italic font-normal">
                                every jewelry shot
                            </span>{" "}
                            <br className="hidden md:block" /> needs.
                        </h2>
                    </div>

                    {/* Grid Content Layout - Updated Border Strategy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300/60 rounded-sm overflow-hidden">
                        {/* 01 - Stone clarity */}
                        <div className="p-8 md:p-12 lg:p-16 border-b border-gray-300/60 md:border-r flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 01 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Stone clarity & sparkle
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    We enhance fire, brilliance, and scintillation in diamonds and
                                    faceted stones — preserving the cut&apos;s natural character
                                    while bringing out the visual depth that makes a stone read as
                                    premium.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                internal reflections, table sparkle, crown brilliance, pavilion
                                light return.
                            </div>
                        </div>

                        {/* 02 - Metal polish */}
                        <div className="p-8 md:p-12 lg:p-16 border-b border-gray-300/60 flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 02 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Metal polish & finish
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    Yellow gold, white gold, rose gold, platinum, sterling silver —
                                    each metal has a specific surface character. We retouch metal to
                                    match its true finish: high polish, brushed, satin, or hammered.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                rolling mill marks, anodised finishes, plating tone preservation.
                            </div>
                        </div>

                        {/* 03 - Reflection construction */}
                        <div className="p-8 md:p-12 lg:p-16 border-b border-gray-300/60 md:border-r flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 03 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Reflection construction
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    High-end jewelry photography uses constructed reflections to
                                    convey weight and value. We build these reflections by hand when
                                    the original shoot did&apos;nt capture them — or refine the ones
                                    that exist.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                hero reflection placement, light wraparound, soft shadow grounding.
                            </div>
                        </div>

                        {/* 04 - Surface clean-up */}
                        <div className="p-8 md:p-12 lg:p-16 border-b border-gray-300/60 flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 04 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Surface clean-up
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    Dust on stones. Fingerprints on metal. Lint in setting prongs.
                                    We remove every distraction at the pixel level — preserving the
                                    natural texture of the piece while delivering retail-grade
                                    cleanliness.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                non-destructive cleanup, edge integrity, sub-pixel dust removal.
                            </div>
                        </div>

                        {/* 05 - Color accuracy */}
                        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-gray-300/60 flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 05 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Color accuracy
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    Rose gold reads pink in the wrong light. Platinum reads gray
                                    when it should read silver-white. We colour-correct against your
                                    reference samples and brand standards so the piece looks the
                                    same on screen as it does in hand.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                Pantone matching, batch consistency, gemstone hue calibration.
                            </div>
                        </div>

                        {/* 06 - Composite & background */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-80">
                            <div>
                                <span className="text-secondary text-xs italic block mb-4 md:mb-6">
                                    — 06 —
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-4">
                                    Composite & background
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light mb-8">
                                    Whether you need a perfect cutout for an e-commerce listing or a
                                    constructed scene for a campaign image, we composite the piece
                                    into its final environment — preserving lighting consistency
                                    throughout.
                                </p>
                            </div>
                            <div className="text-[11px] md:text-xs tracking-wide text-gray-500">
                                <span className="text-secondary font-medium">Trade detail:</span>{" "}
                                light direction matching, ground shadow construction, environmental
                                color pickup.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Recent Jewelry Work */}
            <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 md:mb-16">
                    <div>
                        <span className="text-secondary tracking-[0.2em] text-xs font-semibold uppercase block mb-3">
                            Recent Jewelry Work
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                            A look at{" "}
                            <span className="text-secondary italic font-serif">the craft.</span>
                        </h2>
                        <p className="text-sm text-neutral-500 mt-3 md:mt-4">
                            Hover any image to see the original.
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <Link
                            href="#portfolio"
                            className="group text-xs tracking-wider uppercase text-neutral-500 hover:text-secondary transition-colors duration-300 flex items-center gap-1"
                        >
                            See full jewelry portfolio
                            <span className="group-hover:translate-x-1 pb-0.75 transition-transform duration-300">
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
                    {samples.map((item, index) => (
                        <div key={index} className="group flex flex-col">
                            {/* Image Container with Before/After Hover Effect */}
                            <div className="relative aspect-4/3 w-full bg-zinc-900 overflow-hidden cursor-crosshair mb-5">
                                {/* AFTER Image (Default View) */}
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    loading="lazy"
                                />

                                {/* BEFORE Image (Shows on Hover) */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={item.originalUrl}
                                        alt={`${item.title} original`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Badges */}
                                <div className="absolute top-4 right-4 pointer-events-none z-10">
                                    {/* "AFTER" Badge - Default */}
                                    <span className="bg-secondary text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[3px] transition-opacity duration-300 group-hover:opacity-0">
                                        After
                                    </span>
                                    {/* "BEFORE" Badge - On Hover */}
                                    <span className="absolute top-0 right-0 bg-zinc-700 text-zinc-100 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 white-space-nowrap">
                                        Before
                                    </span>
                                </div>
                            </div>

                            {/* Text Meta Content */}
                            <div className="flex flex-col">
                                <span className="text-[10px] tracking-[0.2em] font-medium text-secondary mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-normal text-primary mb-2 tracking-wide  ">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* //! Who We Work With */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-[#141211] text-white font-sans">
                <div className="max-w-310 mx-auto">
                    {/* Header Section */}
                    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                        <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                            Who We Work With
                        </span>
                        <h2 className="text-4xl md:text-[56px] font-serif leading-tight tracking-tight mb-6">
                            Built for{" "}
                            <span className="text-secondary italic font-normal">
                                three kinds of brands.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto opacity-90">
                            We adjust process, deliverables, and pricing depending on where your
                            work needs to live.
                        </p>
                    </div>

                    {/* Three Column Grid Container with Pixel-Perfect Borders */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 rounded-sm overflow-hidden bg-white/5 gap-px">
                        {/* Card 01 - Luxury Houses */}
                        <div className="p-8 md:p-10 lg:p-12 bg-[#191715] flex flex-col justify-between min-h-75">
                            <div>
                                <span className="text-secondary text-xs italic block mb-6">
                                    — For —
                                </span>
                                <h3 className="text-2xl font-serif font-medium mb-6 leading-snug">
                                    Luxury houses <span className="font-sans font-light">&</span>{" "}
                                    maisons
                                </h3>
                                <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-light opacity-80">
                                    Editorial campaigns, hero imagery, and brand guidelines work for
                                    established luxury jewelry houses. NDA-covered, multi-round,
                                    art-director-led.
                                </p>
                            </div>
                        </div>

                        {/* Card 02 - Fashion Brands */}
                        <div className="p-8 md:p-10 lg:p-12 bg-[#191715] flex flex-col justify-between min-h-75">
                            <div>
                                <span className="text-secondary text-xs italic block mb-6">
                                    — For —
                                </span>
                                <h3 className="text-2xl font-serif font-medium mb-6 leading-snug">
                                    Fashion <span className="font-sans font-light">&</span>{" "}
                                    contemporary brands
                                </h3>
                                <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-light opacity-80">
                                    Lookbook retouching, seasonal campaigns, and editorial spreads
                                    for jewelry brands operating at fashion-house velocity. Fast
                                    turnaround, brand-aligned colour.
                                </p>
                            </div>
                        </div>

                        {/* Card 03 - E-commerce & DTC */}
                        <div className="p-8 md:p-10 lg:p-12 bg-[#191715] flex flex-col justify-between min-h-75">
                            <div>
                                <span className="text-secondary text-xs italic block mb-6">
                                    — For —
                                </span>
                                <h3 className="text-2xl font-serif font-medium mb-6 leading-snug">
                                    E-commerce <span className="font-sans font-light">&</span> DTC
                                </h3>
                                <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-light opacity-80">
                                    Catalog-grade retouching for direct-to-consumer brands selling
                                    on their own storefronts and luxury marketplaces. Volume
                                    pricing, retainer-friendly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Razon Roy */}
            <section className="bg-white">
                <div className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                        {/* Left Side: Portrait Image Container */}
                        <div className="md:col-span-5 w-full aspect-3/4 bg-zinc-900 border border-zinc-800/50 relative overflow-hidden flex items-center justify-center">
                            {/* Real Image Tag */}
                            <Image
                                width={600}
                                height={800}
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" // Replace with Razon Roy's actual portrait
                                alt="Razon Roy"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                loading="lazy"
                            />
                        </div>

                        {/* Right Side: Info & Text Content */}
                        <div className="md:col-span-7 flex flex-col justify-center text-justify">
                            {/* Top Label */}
                            <span className="text-secondary tracking-[0.25em] text-[10px] md:text-xs font-semibold uppercase block mb-3">
                                Led By
                            </span>

                            {/* Name */}
                            <h2 className="text-3xl md:text-5xl font-light  tracking-wide mb-1.5">
                                Razon Roy
                            </h2>

                            {/* Designation */}
                            <span className="text-secondary tracking-[0.18em] text-[10px] font-semibold uppercase block mb-8">
                                Co-Founder · Senior Retoucher
                            </span>

                            {/* Blockquote Section */}
                            <div className="border-l-[3px] border-secondary pl-5 mb-8 py-1">
                                <p className="text-sm md:text-base italic font-serif text-zinc-400 leading-relaxed tracking-wide">
                                    &quot;Jewelry is the most unforgiving subject in product
                                    photography. There&apos;s nowhere to hide. Either the work is
                                    right at 400% zoom — or it isn&apos;t.&quot;
                                </p>
                            </div>

                            {/* Body Paragraphs */}
                            <div className="space-y-5 text-xs md:text-sm font-light leading-relaxed text-neutral-500">
                                <p>
                                    Razon leads every high-end jewelry engagement personally. With{" "}
                                    <span className="text-zinc-400 font-normal">
                                        seventeen years of professional retouching experience
                                    </span>{" "}
                                    and over 4,500 completed projects, he sets the standard for
                                    every piece that leaves the studio.
                                </p>
                                <p>
                                    For luxury and editorial work, he is the senior retoucher on the
                                    file — not a project manager forwarding feedback. The brief
                                    comes to him; the retouch is done by him; the final review is
                                    signed by him.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! pricing */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 bg-[#F2EFE8] font-sans">
                <div className="max-w-310 mx-auto px-4 sm:px-6">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Heading & Button */}
                        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-8">
                            <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                                Pricing
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-6">
                                Quoted by{" "}
                                <span className="text-secondary italic font-normal">project.</span>
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed font-light mb-8 max-w-md">
                                Jewelry retouching is priced by scope, not per image — every brief
                                is different, and the work that earns the price tag is the work that
                                gets the time it deserves.
                            </p>

                            {/* Call to Action Button */}
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center bg-[#141211] text-white text-xs md:text-sm font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-[#141211]/90 transition-all duration-300"
                            >
                                Email a brief <span className="ml-3 font-sans">→</span>
                            </Link>
                        </div>

                        {/* Right Column: Pricing List */}
                        <div className="lg:col-span-7 w-full border-t border-gray-300/80 divide-y divide-gray-300/80">
                            {/* Row 1 */}
                            <div className="py-6 md:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-1">
                                        Single hero image
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm font-light">
                                        Engagement piece, brand reference, single high-res
                                        deliverable
                                    </p>
                                </div>
                                <div className="text-lg md:text-xl font-serif font-medium text-gray-900 whitespace-nowrap pt-1 sm:pt-0">
                                    $45 – $180
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="py-6 md:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-1">
                                        E-commerce catalog batch
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm font-light">
                                        10–50 product images, consistent treatment, volume rates
                                    </p>
                                </div>
                                <div className="text-lg md:text-xl font-serif font-medium text-gray-900 whitespace-nowrap pt-1 sm:pt-0">
                                    $25 – $80{" "}
                                    <span className="text-sm font-light text-gray-500 ml-0.5">
                                        each
                                    </span>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="py-6 md:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-1">
                                        Editorial campaign
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm font-light">
                                        10–30 images, multi-round, brand-aligned colour, NDA-covered
                                    </p>
                                </div>
                                <div className="text-lg md:text-xl font-serif font-medium text-gray-900 whitespace-nowrap pt-1 sm:pt-0">
                                    $1,500 – $6,000
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="py-6 md:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                <div>
                                    <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900 mb-1">
                                        Full luxury campaign
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm font-light">
                                        30+ images, multiple rounds, art-director-led, embargo
                                        support
                                    </p>
                                </div>
                                <div className="text-lg md:text-xl font-serif font-medium text-gray-900 whitespace-nowrap pt-1 sm:pt-0">
                                    $6,000+
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! Testimonials */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-white text-[#1a1a1a] font-sans">
                <div className="max-w-310 mx-auto flex flex-col items-center text-center">
                    {/* Large Quote Icon Replacement */}
                    <div className="text-secondary opacity-25 scale-700 font-serif leading-none select-none">
                        ”
                    </div>

                    {/* Top Label */}
                    <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-6 md:mb-8">
                        From a recent client
                    </span>

                    {/* Main Testimonial Quote */}
                    <blockquote className="text-2xl md:text-4xl font-serif italic font-normal leading-snug md:leading-relaxed max-w-4xl mb-10 md:mb-14 tracking-tight">
                        &quot;The retouch on our spring campaign was the cleanest jewelry work
                        we&apos;ve gotten from any partner — and we tested four. Stone fire, metal
                        tone, reflection consistency across the set. They got it right the first
                        time.&quot;
                    </blockquote>

                    {/* Client Metadata & Stars */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs md:text-sm font-light text-gray-500">
                        <span className="text-gray-900 font-medium">Verified client</span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span>Independent jewelry brand · United States</span>

                        {/* 5 Star Ratings */}
                        <div className="flex items-center gap-0.5 text-secondary ml-1">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! FAQ */}
            <Questions />

            {/* //! Related Specialist */}
            <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 bg-[#F2EFE8] text-[#1a1a1a] font-sans">
                <div className="max-w-310 mx-auto px-4 sm:px-6">
                    {/* Header Area */}
                    <div className="mb-12 md:mb-16">
                        <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                            Related Specialties
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight">
                            Other{" "}
                            <span className="text-secondary italic font-normal">
                                retouching work.
                            </span>
                        </h2>
                    </div>

                    {/* Three Column Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 - Cosmetics Retouching */}
                        <div className="bg-[#FAF8F5] border border-gray-300/40 rounded-sm p-8 md:p-10 flex flex-col justify-between min-h-80 transition-all duration-300 hover:shadow-sm">
                            <div>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                                    Cosmetics Retouching
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light">
                                    Packaging detail, liquid consistency, surface cleanup, and brand
                                    colour accuracy for beauty and cosmetics campaigns.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-gray-300/60 mt-auto">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-secondary text-xs md:text-sm font-medium tracking-wide group"
                                >
                                    $35 – $180 per image
                                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 font-sans">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 - Accessories Retouching */}
                        <div className="bg-[#FAF8F5] border border-gray-300/40 rounded-sm p-8 md:p-10 flex flex-col justify-between min-h-80 transition-all duration-300 hover:shadow-sm">
                            <div>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                                    Accessories Retouching
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light">
                                    Watches, leather goods, eyewear, small accessories — surface,
                                    texture, and luxury finish work.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-gray-300/60 mt-auto">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-secondary text-xs md:text-sm font-medium tracking-wide group"
                                >
                                    $35 – $150 per image
                                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 font-sans">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 - Editorial Retouching */}
                        <div className="bg-[#FAF8F5] border border-gray-300/40 rounded-sm p-8 md:p-10 flex flex-col justify-between min-h-80 transition-all duration-300 hover:shadow-sm">
                            <div>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                                    Editorial Retouching
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-light">
                                    Magazine and campaign-grade retouching for editorial spreads,
                                    fashion features, and brand-led storytelling.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-gray-300/60 mt-auto">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-secondary text-xs md:text-sm font-medium tracking-wide group"
                                >
                                    $1,500 – $6,000 per project
                                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 font-sans">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! CTA */}
            <section className="max-w-310 mx-auto px-4 sm:px-6 md:py-10">
                <HeaderSection
                    position="center"
                    title="Start a project"
                    heading={[
                        { text: "Send the brief. We'll ", color: "primary" },
                        { text: "reply in 24 hours.", color: "secondary" },
                    ]}
                    paragraph="Email us with your brief, reference images, and timeline — we'll come back within one business day with a tailored quote and process plan. Every high-end project starts with a conversation, not a checkout button."
                    buttons={[
                        { label: "Email Razon Directly", href: "#", variant: "solid" },
                        { label: "Book a Consultation", href: "#", variant: "outline" },
                    ]}
                    section={true}
                />
            </section>
        </>
    );
}
