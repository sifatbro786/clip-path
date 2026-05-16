import { stats } from "@/data/stats";

export default function ChooseSection() {
    return (
        <section className="max-w-310 mx-auto pt-8 md:pt-20 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6">
            {/* Top Title & Heading Section based on the image */}
            <div className="mb-14 sm:mb-16 lg:mb-20 space-y-3">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-secondary block">
                    BY THE NUMBERS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-[1.2] font-medium max-w-3xl">
                    A studio measured in detail, not declarations.
                </h2>
            </div>

            {/* Existing Grid Section (Keeping your code completely untouched) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-200">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center min-h-45 sm:min-h-55 border-b border-gray-200 
                    ${(index + 1) % 3 === 0 ? "lg:border-r-0" : "lg:border-r"}
                    ${(index + 1) % 2 === 0 ? "sm:border-r-0 md:border-r" : "sm:border-r"}
                  `}
                    >
                        <div className="flex flex-wrap items-start gap-1 mb-2 md:mb-3">
                            <h2
                                className={`text-4xl sm:text-5xl md:text-6xl font-serif leading-none ${
                                    stat.color === "secondary" ? "text-secondary" : "text-primary"
                                } ${stat.isItalic ? "italic" : ""}`}
                            >
                                {stat.value}
                            </h2>

                            {stat.suffix && (
                                <span className="text-xl md:text-2xl text-secondary font-light">
                                    {stat.suffix}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm max-w-full sm:max-w-50 leading-snug">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
