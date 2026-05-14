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
        <section className="max-w-310 mx-auto px-4 pb-20">
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
                            className="w-full py-7 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2 group"
                        >
                            <span className="text-xl md:text-2xl font-serif text-primary group-hover:text-secondary transition-colors">
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                className="text-2xl text-secondary font-light"
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
                                    <p className="pb-8 px-2 text-gray-500 text-lg leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
