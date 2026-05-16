export default function Quote() {
    return (
        <section className="bg-[#F2EFE8]">
            <div className="max-w-310 mx-auto pt-8 md:pt-28 pb-12 md:pb-28 px-4 sm:px-6 bg-[#F2EFE8]">
                <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
                    {/* Main Editorial Quote */}
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary leading-[1.35] sm:leading-[1.4] md:leading-[1.45] font-light tracking-tight">
                        We grow this business{" "}
                        <span className="italic text-secondary font-serif">
                            one image and one relationship at a time.
                        </span>{" "}
                        Some of our clients have worked with us for over eight years. That&apos;s
                        the standard we measure ourselves against.
                    </blockquote>

                    {/* Quote Author / Footer */}
                    <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
                        <span className="w-3 h-px bg-gray-300"></span>
                        RAZON ROY & FIZZ RAHMAN, CO-FOUNDERS
                    </div>
                </div>
            </div>
        </section>
    );
}
