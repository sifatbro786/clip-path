const ASSURANCES = [
    {
        num: "01",
        title: "Free trial — 3 images",
        body: "Test our quality before committing to anything. No card required.",
    },
    {
        num: "02",
        title: "Revision until right",
        body: "If an edge isn't perfect, we redraw it. No arguments, no extra charge.",
    },
    {
        num: "03",
        title: "NDA on request",
        body: "Confidentiality agreements available for agencies and studios handling client IP.",
    },
    {
        num: "04",
        title: "Dedicated account manager",
        body: "For orders above 500 images/month, you get a single point of contact.",
    },
];

export default function AssuranceStrip() {
    return (
        <section className="bg-background-soft">
            <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-20 pt-14 md:pt-20 pb-16 md:pb-24">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
                    <p className="text-[9px] md:text-[10px] font-medium tracking-[0.18em] uppercase text-secondary flex items-center gap-2">
                        <span className="block w-5 h-[1.5px] bg-secondary" />
                        Before you hit send
                    </p>
                    <p className="text-[12px] text-ink-mute max-w-xs leading-relaxed text-right hidden sm:block">
                        A few things we want you to know.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-rule">
                    {ASSURANCES.map((item, i) => (
                        <div
                            key={item.num}
                            className={`pt-8 pb-10 pr-0 lg:pr-10 ${
                                i < ASSURANCES.length - 1
                                    ? "border-b sm:border-b-0 lg:border-r border-rule"
                                    : ""
                            } ${i > 0 ? "sm:pl-0 lg:pl-10" : ""}`}
                        >
                            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-secondary mb-4">
                                — {item.num}
                            </p>
                            <h3
                                className="text-[17px] md:text-[19px] font-normal text-foreground mb-3 leading-snug"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-[12px] text-ink-mute leading-[1.7]">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
