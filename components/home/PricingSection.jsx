import { pricingPlans } from "@/data/pricingPlan";
import HeaderSection from "../common/HeaderSection";
import Link from "next/link";

export default function PricingSection() {
    return (
        <section className="bg-[#F2EFE8] pb-20">
            <div className="max-w-310 mx-auto px-4">
                <HeaderSection
                    position="center"
                    title="Monthly packages"
                    heading={[
                        { text: "For ongoing ", color: "primary" },
                        { text: "partnerships.", color: "secondary" },
                    ]}
                    paragraph="Predictable monthly capacity for brands and photographers with continuous editing needs. Priority queue, dedicated PM, rollover credits — and a better per-image rate than ad-hoc orders."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-10 rounded-xl flex flex-col ${
                                plan.isDark ? "bg-[#1A1A1A] text-white" : "bg-white text-primary"
                            } shadow-sm`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-3xl font-serif font-medium">{plan.name}</h3>
                                <p
                                    className={`text-sm mt-1 ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}
                                >
                                    {plan.subtitle}
                                </p>
                            </div>

                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-serif">$</span>
                                <span className="text-7xl font-serif leading-none">
                                    {plan.price}
                                </span>
                                <span
                                    className={`text-sm ml-2 ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}
                                >
                                    / month
                                </span>
                            </div>

                            <div
                                className={`border-t mb-8 ${plan.isDark ? "border-gray-800" : "border-gray-100"}`}
                            />

                            <ul className="space-y-5 mb-12 grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[13px]">
                                        <span className="text-secondary font-bold">+</span>
                                        <span
                                            className={
                                                plan.isDark ? "text-gray-300" : "text-gray-700"
                                            }
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center italic text-xs mb-6 text-gray-400">
                                — Equivalent rate: {plan.equivalent} —
                            </div>

                            <Link
                                href="#"
                                className={`w-full py-4 rounded-full text-center font-semibold transition-all duration-300 border ${
                                    plan.isDark
                                        ? "bg-secondary border-secondary text-white hover:bg-opacity-90"
                                        : "bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                                }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
