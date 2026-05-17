"use client";

import { bookingFaq } from "@/data/faqData";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 font-sans bg-white">
            <div className="max-w-310 mx-auto ">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-left mb-12 md:mb-16">
                    <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-3">
                        Common Questions
                    </span>
                    <h2 className="text-4xl md:text-5xl text-[#1a1a1a] font-serif leading-tight tracking-tight">
                        A few things <span className="text-secondary italic">people ask.</span>
                    </h2>
                </div>

                {/* Accordion / FAQ List */}
                <div className="max-w-4xl mx-auto border-t border-gray-200/60">
                    {bookingFaq.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-200/60">
                                {/* Accordion Header / Trigger Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between py-6 md:py-8 text-left group transition-colors duration-200"
                                >
                                    <span className="text-lg md:text-xl font-serif text-[#1a1a1a] pr-4 group-hover:text-secondary transition-colors">
                                        {item.question}
                                    </span>

                                    {/* Plus/Minus Icon with Smooth Rotation */}
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="text-secondary text-xl md:text-2xl font-light select-none shrink-0"
                                    >
                                        +
                                    </motion.span>
                                </button>

                                {/* Accordion Content with Framer Motion */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 md:pb-8 text-gray-600 text-sm md:text-base leading-relaxed font-light pr-6 md:pr-12">
                                                {item.answer}
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
