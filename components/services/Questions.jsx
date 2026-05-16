"use client";

import { serviceFaq } from "@/data/faqData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Questions() {
    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F2EFE8] text-[#1A1A1A]">
            <div className="max-w-310 mx-auto pt-16 md:pt-32 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="block text-[10px] md:text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-4">
                        COMMON QUESTIONS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-normal font-serif tracking-tight">
                        Everything else{" "}
                        <span className="text-secondary italic">you might ask.</span>
                    </h2>
                </div>

                {/* Accordion List Wrapper */}
                <div className="max-w-3xl mx-auto border-t border-[#E6E2D8] divide-y divide-[#E6E2D8]">
                    {serviceFaq.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="py-5 md:py-6 font-serif">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-start justify-between text-left gap-6 group focus:outline-none"
                                >
                                    {/* Question */}
                                    <span className="text-base md:text-xl font-normal text-[#1A1A1A] tracking-tight group-hover:text-secondary transition-colors duration-200 leading-snug">
                                        {faq.question}
                                    </span>

                                    {/* Expand/Collapse Plus Icon */}
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="text-secondary font-sans text-lg md:text-xl font-light select-none pt-0.5 block"
                                    >
                                        {isOpen ? "−" : "+"}
                                    </motion.span>
                                </button>

                                {/* Answer Content Panel with Framer Motion */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed overflow-hidden"
                                        >
                                            <div className="pt-4">
                                                <p className="max-w-2xl">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
