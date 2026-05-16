export default function WhereWeWork() {
    return (
        <section className="max-w-310 mx-auto pt-8 md:pt-32 pb-12 md:pb-32 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Side: Title & Description (Takes 5 columns out of 12) */}
                <div className="lg:col-span-6 space-y-4">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-secondary block">
                        WHERE WE WORK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-[1.15] font-medium max-w-lg">
                        From <span className="italic text-secondary font-serif">Dhaka</span>, for
                        the world.
                    </h2>
                    <p className="text-gray-600 text-justify text-sm md:text-base leading-relaxed pt-2 font-light max-w-md">
                        A Dhaka-based studio with business operations registered in the United
                        States — combining low-cost production with global service standards across
                        all major time zones.
                    </p>
                </div>

                {/* Right Side: Locations Cards (Takes 7 columns out of 12) */}
                <div className="lg:col-span-6 space-y-6 w-full">
                    {/* Card 1: Production Studio */}
                    <div className="bg-[#FAF8F5] border border-[#F0EAE1] p-6 md:p-8 rounded-sm space-y-4">
                        <div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-secondary block mb-1">
                                PRODUCTION STUDIO
                            </span>
                            <h3 className="text-2xl font-serif text-primary font-medium tracking-tight">
                                Dhaka, Bangladesh
                            </h3>
                        </div>

                        <div className="space-y-1 text-xs md:text-sm text-gray-500 font-light">
                            <p>744/1, Mirpur · Dhaka 1216</p>
                            <p className="italic text-gray-400 text-[11px] md:text-xs pt-1">
                                9:00 AM – 9:00 PM Bangladesh time · serving Asia, Europe, Africa,
                                Australia
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Business Operations */}
                    <div className="bg-[#FAF8F5] border border-[#F0EAE1] p-6 md:p-8 rounded-sm space-y-4">
                        <div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-secondary block mb-1">
                                BUSINESS OPERATIONS
                            </span>
                            <h3 className="text-2xl font-serif text-primary font-medium tracking-tight">
                                Norman, Oklahoma · USA
                            </h3>
                        </div>

                        <div className="space-y-1 text-xs md:text-sm text-gray-500 font-light">
                            <p>105 Wadsack Dr · Norman, OK 73072</p>
                            <p className="italic text-gray-400 text-[11px] md:text-xs pt-1">
                                +1 (405) 434-7167 · serving the Americas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
