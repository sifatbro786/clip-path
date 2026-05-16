import Image from "next/image";
import HeaderSection from "../common/HeaderSection";

const foundersData = [
    {
        name: "Razon Roy",
        subRole: "CO-FOUNDER · HEAD OF PRODUCT",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        bio: (
            <div className="space-y-4">
                <p>
                    A senior Photoshop expert with{" "}
                    <strong>seventeen years of professional experience</strong>. Razon began his
                    career in 2010 as a junior graphic designer at Metro Desk Studio in Dhaka, where
                    he was promoted to senior designer by 2013.
                </p>
                <p>
                    Since going independent, he has worked with thousands of international clients
                    across Fiverr and Upwork — <strong>Top Rated on both since 2015</strong>, with a
                    4.8-star rating across 2,300+ verified reviews and over 4,500 completed
                    projects.
                </p>
                <p>
                    At Rapid Clipping Path, Razon leads the studio&apos;s craft — overseeing every
                    high-end project, training the production team, and maintaining the quality
                    standard that defines our work.
                </p>
            </div>
        ),
        socials: [
            { label: "FIVERR", url: "#" },
            { label: "LINKEDIN", url: "#" },
            { label: "UPWORK", url: "#" },
        ],
    },
    {
        name: "Md Fozlur Rahman",
        nickname: " — Fizz",
        subRole: "CO-FOUNDER · HEAD OF SALES, OPERATIONS & MARKETING",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        bio: (
            <div className="space-y-4">
                <p>
                    A Bangladesh-born entrepreneur with international education and professional
                    experience across the <strong>UK and the US</strong>. Fizz studied Computer
                    Science at the University of Hertfordshire from 2020, including an exchange year
                    at the University of Oklahoma.
                </p>
                <p>
                    During his studies, he completed a Software Engineer Internship at Microsoft in
                    London and worked as a <strong>Management Consultant at PwC</strong> in New York
                    City, focused on Finance and Operations.
                </p>
                <p>
                    In 2024, Fizz returned to Bangladesh full-time to pursue entrepreneurship,
                    partnering with Razon Roy to scale Rapid Clipping Path. He leads sales,
                    operations, and marketing — bringing global perspective and operational
                    discipline to a craft-led business.
                </p>
            </div>
        ),
        socials: [
            { label: "LINKEDIN", url: "#" },
            { label: "EMAIL", url: "#" },
        ],
    },
];

export default function Founders() {
    return (
        <section className="max-w-310 mx-auto pb-24 px-4 sm:px-6">
            <HeaderSection
                position="center"
                title="The founders"
                heading={[
                    { text: "Two backgrounds.One ", color: "primary" },
                    { text: "studio.", color: "secondary" },
                ]}
                paragraph="A senior craftsman and a returning entrepreneur, building a photo editing studio shaped by both."
            />

            {/* Founders Grid Component matching the image layout precisely */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 max-w-5xl mx-auto">
                {foundersData.map((founder, index) => (
                    <div key={index} className="flex flex-col">
                        {/* Image Container - Square/Magazine cut layout without border-radius */}
                        <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100 mb-8 shadow-sm">
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                fill
                                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                                sizes="(max-w-768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Info Container */}
                        <div className="grow flex flex-col justify-between">
                            <div>
                                {/* Title and Italicized Nickname */}
                                <h3 className="text-[28px] font-serif text-primary font-medium tracking-tight">
                                    {founder.name}
                                    {founder.nickname && (
                                        <span className="font-serif italic text-gray-400 font-light text-2xl ml-1">
                                            {founder.nickname}
                                        </span>
                                    )}
                                </h3>

                                {/* Sub-role text matching the exact secondary color and format */}
                                <p className="text-[10px] text-secondary font-bold tracking-widest uppercase mt-1 mb-6">
                                    {founder.subRole}
                                </p>

                                {/* Biography Text Blocks */}
                                <div className="text-gray-600 text-[13.5px] leading-relaxed font-light">
                                    {founder.bio}
                                </div>
                            </div>

                            {/* Bottom Social Links with full-width top border */}
                            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 mt-10">
                                {founder.socials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        className="flex items-center gap-0.5 text-[10px] font-bold tracking-widest text-gray-500 hover:text-secondary transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.label}{" "}
                                        <span className="text-xs opacity-70 font-light">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
