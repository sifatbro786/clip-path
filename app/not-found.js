import Link from "next/link";

export default function NotFound() {
    return (
        <section className="bg-white min-h-[85vh] flex items-center">
            <div className="max-w-310 mx-auto w-full py-16 md:py-24 px-4 sm:px-6">
                {/* Same Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Typography Headline */}
                    <div className="lg:col-span-6 space-y-4">
                        <span className="text-secondary font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">
                            Error 404
                        </span>
                        <h1 className="mt-4 text-gray-900 font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none">
                            Page{" "}
                            <span className="text-secondary italic font-normal">not found.</span>
                        </h1>
                        <p className="text-gray-500 font-sans text-base md:text-lg max-w-md pt-2">
                            The page you are looking for doesn&apos;t exist, has been moved, or is
                            temporarily unavailable.
                        </p>
                    </div>

                    {/* Right Column: Interactive Card Style Box */}
                    <div className="lg:col-span-6">
                        <div className="bg-[#faf9f6] border border-gray-100 rounded-md p-8 md:p-12 flex flex-col justify-between min-h-70">
                            <div>
                                <h3 className="text-gray-900 font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4">
                                    Looking for something else?
                                </h3>
                                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                                    You can return back to our homepage or explore our tailored
                                    solutions and services to find what you need.
                                </p>
                            </div>

                            {/* Action Link (Using Next.js Link) */}
                            <div className="mt-8 pt-6 border-t border-gray-200/60">
                                <Link
                                    href="/"
                                    className="text-secondary font-sans text-sm font-medium inline-flex items-center gap-2 group hover:opacity-80 transition-opacity"
                                >
                                    Back to homepage
                                    <span className="transform group-hover:-translate-x-1 transition-transform duration-200">
                                        &larr;
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
