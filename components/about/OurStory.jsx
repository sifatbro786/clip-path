export default function OurStory() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6">
            <div className="max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Side: Title & Heading (Takes 5 columns out of 12) */}
                <div className="lg:col-span-5 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-secondary block">
                        OUR STORY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-[1.15] text-nowrap font-medium max-w-md">
                        Fifteen years of craft, <br /> brought into focus.
                    </h2>
                </div>

                {/* Right Side: Editorial Paragraphs (Takes 7 columns out of 12) */}
                <div className="lg:col-span-7 space-y-8 text-gray-700 text-base md:text-lg leading-relaxed font-light">
                    <p>
                        Rapid Clipping Path traces its roots to{" "}
                        <span className="text-secondary italic font-serif">2010</span>, when Razon
                        Roy began his career as a junior graphic designer at Metro Desk Studio in
                        Dhaka. By 2013 he had been promoted to senior, and shortly after left to
                        build an independent practice — working with international clients through
                        Fiverr and Upwork.
                    </p>

                    <p>
                        By 2015, Razon was a Top Rated provider on both marketplaces, a status he
                        has held continuously since. Over the years that followed, he completed more
                        than 4,500 client projects, earning a 4.8-star rating across 2,300+ verified
                        reviews.
                    </p>

                    {/* Blockquote Segment with Left Border */}
                    <blockquote className="border-l-[3px] border-secondary pl-6 py-1 my-8">
                        <p className="text-xl md:text-2xl font-serif text-primary italic font-medium leading-relaxed max-w-2xl">
                            &quot;In 2024, the studio became something more — a partnership built
                            around a shared belief that craft, when paired with strategy, scales
                            without losing its character.&quot;
                        </p>
                    </blockquote>

                    <p>
                        That same year, Razon partnered with{" "}
                        <span className="text-secondary italic font-serif">Md Fozlur Rahman</span>,
                        an entrepreneur returning to Bangladesh after studying Computer Science at
                        the University of Hertfordshire and the University of Oklahoma, with prior
                        internships at Microsoft in London and consulting work at PwC in New York
                        City.
                    </p>

                    <p>
                        Together, they&apos;re scaling Rapid Clipping Path into an
                        internationally-positioned studio — combining seventeen years of craft with
                        a global perspective on how the work should be sold, supported, and grown.
                    </p>
                </div>
            </div>
        </section>
    );
}
