// FAQSection.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderSection from "../common/HeaderSection";
import { homeFaq } from "@/data/faqData";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="border-b border-gray-200">
            <div className="max-w-310 mx-auto px-4 sm:px-6 pb-12 md:pb-16 lg:pb-20">
                <HeaderSection
                    position="left"
                    title="Common questions"
                    heading={[
                        { text: "A few things ", color: "primary" },
                        { text: "people ask.", color: "secondary" },
                    ]}
                />

                <div className="border-t border-gray-100">
                    {homeFaq.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-5 md:py-6 lg:py-7 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2 group"
                            >
                                <span className="text-lg md:text-xl lg:text-2xl font-serif text-primary group-hover:text-secondary transition-colors pr-4 text-left">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    className="text-xl md:text-2xl text-secondary font-light shrink-0"
                                >
                                    +
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 md:pb-8 px-2 text-gray-500 text-base md:text-lg leading-relaxed max-w-full lg:max-w-3xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
