// Company.jsx
"use client";

import { motion } from "framer-motion";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";

const logos = [
    { id: 1, src: "/logo.png" },
    { id: 2, src: "/logo.png" },
    { id: 3, src: "/logo.png" },
    { id: 4, src: "/logo.png" },
    { id: 5, src: "/logo.png" },
    { id: 6, src: "/logo.png" },
];

const Company = () => {
    const fifthLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="pt-4 md:pt-10 pb-12 md:pb-20 lg:pb-32 overflow-hidden w-full px-4 sm:px-6">
            <HeaderSection
                position="center"
                title="Trusted by 4,000+ brands across 32 countries"
                heading={[
                    { text: "Edits That Sell. Delivered While ", color: "primary" },
                    { text: "You Sleep", color: "secondary" },
                ]}
            />

            {/* Logo Slider Container */}
            <div className="relative flex overflow-hidden w-full">
                <motion.div
                    className="flex items-center gap-5 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 whitespace-nowrap"
                    animate={{
                        x: "-50%",
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 10,
                    }}
                >
                    {fifthLogos.map((logo, index) => (
                        <div key={index} className="shrink-0">
                            <Image
                                width={80}
                                height={80}
                                src={logo.src}
                                alt="Company Logo"
                                className="h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-linear-to-r from-[#F5F3EF] via-[#F5F3EF]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-linear-to-l from-[#F5F3EF] via-[#F5F3EF]/80 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Company;
