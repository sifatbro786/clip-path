"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingFaq } from "@/data/faqData";

export default function Questions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Subtitle */}
                <span className="text-xs uppercase tracking-widest text-secondary font-semibold block mb-4 text-left">
                    Common Questions
                </span>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-12 text-left font-serif">
                    Everything else <span className="text-secondary italic">you might ask.</span>
                </h2>

                {/* Accordion List */}
                <div className="border-t border-gray-100">
                    {PricingFaq.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                                >
                                    <span className="text-[17px] sm:text-[19px] text-gray-800 font-medium tracking-wide pr-4 transition-colors duration-200 group-hover:text-gray-600">
                                        {faq.question}
                                    </span>

                                    {/* Plus/Minus Icon Indicator */}
                                    <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                                        {/* Horizontal Line */}
                                        <span className="absolute w-4 h-[1.5px] bg-secondary" />
                                        {/* Vertical Line for Plus Effect */}
                                        <motion.span
                                            className="absolute w-4 h-[1.5px] bg-secondary"
                                            animate={{ rotate: isOpen ? 0 : 90 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        />
                                    </div>
                                </button>

                                {/* Smooth Animated Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-gray-500 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
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
