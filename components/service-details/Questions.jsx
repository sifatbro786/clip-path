"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { serviceDetailsFaq } from "@/data/faqData";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="pt-8 md:pt-32 pb-12 md:pb-16 lg:pb-26 px-4 sm:px-6 bg-[#F2EFE8] text-[#1a1a1a] font-sans border-b border-gray-300">
            <div className="w-full max-w-4xl mx-auto">
                {/* Header Area */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-4">
                        Common Questions
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight">
                        Things{" "}
                        <span className="text-secondary italic font-normal">jewelry brands</span>{" "}
                        ask.
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="border-t border-gray-300/80 divide-y divide-gray-300/80">
                    {serviceDetailsFaq.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index} className="w-full">
                                {/* Accordion Trigger Trigger Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-6 md:py-8 flex items-center justify-between text-left group transition-colors duration-200"
                                >
                                    <span className="text-base md:text-xl lg:text-2xl font-serif font-medium pr-4 text-gray-900 group-hover:text-black">
                                        {faq.question}
                                    </span>

                                    {/* Plus Icon Animation */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="shrink-0"
                                    >
                                        <Plus className="w-4 h-4 md:w-5 md:h-5 text-secondary stroke-[1.5]" />
                                    </motion.div>
                                </button>

                                {/* Smooth Animated Collapsible Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: {
                                                        duration: 0.4,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    },
                                                    opacity: { duration: 0.25, delay: 0.05 },
                                                },
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: {
                                                        duration: 0.3,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    },
                                                    opacity: { duration: 0.15 },
                                                },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 md:pb-8 text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-3xl">
                                                {faq.answer}
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
