import Image from "next/image";

const principles = [
    {
        id: "— 01 —",
        title: "Hand-edited, not AI.",
        description:
            "Every image is edited by a trained retoucher in Adobe Photoshop. AI tools have their place, but they fail on hair, translucent fabric, jewelry edges, and fine product detail. We don't take those shortcuts.",
    },
    {
        id: "— 02 —",
        title: "Twenty-four hour turnaround.",
        description:
            "Most orders under 500 images are delivered within twenty-four hours. Same-day delivery is available on request. We've held this standard for over a decade.",
    },
    {
        id: "— 03 —",
        title: "Free trials, every time.",
        description:
            "First-time clients receive three images edited free of charge, returned within twenty-four hours. No credit card, no obligation. We'd rather earn your business than promise it.",
    },
    {
        id: "— 04 —",
        title: "Free revisions, always.",
        description:
            "If we miss something, we fix it at no extra cost. If an image still doesn't meet the brief, we don't charge for it. The work is judged on the final result, not the order.",
    },
];

export default function WorkSection() {
    return (
        <section className="relative pt-4 md:pt-10 lg:pt-16 pb-12 md:pb-20 lg:pb-32 overflow-hidden w-full px-4 sm:px-6 bg-[#121110] text-white">
            <div className="hidden md:block md:absolute md:bottom-0 md:left-0">
                <Image src="/gradient.png" alt="blur" width={300} height={300} />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Top Header Section */}
                <div className="text-center mb-16 lg:mb-24 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.25em] text-secondary">
                        <span
                            className="block h-px w-6 md:w-8 lg:w-10"
                            style={{ background: "#B85C38" }}
                        />
                        HOW WE WORK
                        <span
                            className="block h-px w-6 md:w-8 lg:w-10"
                            style={{ background: "#B85C38" }}
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] max-w-2xl mx-auto font-light">
                        Four <span className="italic text-secondary font-serif">principles</span>.
                        Held since 2014.
                    </h2>
                </div>

                {/* 2x2 Responsive Grid with Border Overlay */}
                <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-800/80 bg-[#161514]">
                    {principles.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 sm:p-10 lg:p-14 flex flex-col justify-start space-y-4 border-neutral-800/80
                ${index === 0 ? "border-b md:border-r" : ""}
                ${index === 1 ? "border-b" : ""}
                ${index === 2 ? "border-b md:border-b-0 md:border-r" : ""}
                ${index === 3 ? "" : ""}
              `}
                        >
                            {/* Card Numbering */}
                            <span className="text-[10px] font-bold tracking-widest text-secondary/90 italic font-serif">
                                {item.id}
                            </span>

                            {/* Card Title */}
                            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-neutral-100 pt-1">
                                {item.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-neutral-400 text-sm leading-relaxed font-light pt-2 max-w-md">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
