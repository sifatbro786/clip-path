// DifferenceSection.jsx
import HeaderSection from "../common/HeaderSection";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import CompareImage from "../common/CompareImage";
import { differenceData } from "@/data/differenceData";

function TextSide({ item, index, alignRight }) {
    return (
        <div className={`flex flex-col gap-4 md:gap-5 ${alignRight ? "lg:ml-auto" : ""}`}>
            <p className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-secondary/20 font-bold leading-none select-none -mb-2 -mt-2">
                {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-snug">
                {item.title}
            </h3>

            <p className="text-[13px] md:text-[14.5px] leading-[1.7] text-justify md:leading-[1.8] text-gray-500 max-w-full lg:max-w-xl font-light">
                {item.description}
            </p>

            <div className="border-t border-gray-200 pt-4 md:pt-5">
                <p className="text-[9px] md:text-[10px] font-semibold tracking-[0.12em] md:tracking-[0.14em] uppercase text-secondary mb-2 md:mb-3">
                    Built For
                </p>
                <ul className="flex flex-col gap-2">
                    {item.builtFor.map((point, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-[13px] text-gray-700 font-normal"
                        >
                            <MoveUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-secondary mt-0.5 shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                href="/services"
                className="group inline-flex items-center gap-2 bg-primary text-white px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-[13px] font-medium rounded-sm tracking-wide w-fit transition-colors duration-200 hover:bg-secondary"
            >
                Start free trial
                <span className="text-sm md:text-base transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                </span>
            </Link>
        </div>
    );
}

function ImageSide({ item, showTag }) {
    return (
        <div className="relative">
            {showTag && (
                <span className="absolute -top-3 right-3 md:right-5 z-10 bg-secondary text-white text-[9px] md:text-[10px] font-medium tracking-widest uppercase px-2 md:px-3 py-1 rounded-xs">
                    Try it
                </span>
            )}
            <div className="rounded-sm overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.10)] h-64 sm:h-80 md:h-96 lg:h-105">
                <CompareImage
                    src1={item.images[0]}
                    src2={item.images[1]}
                    alt1={item.title}
                    alt2={item.title}
                />
            </div>
        </div>
    );
}

export default function DifferenceSection() {
    return (
        <section className="max-w-310 mx-auto pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6">
            <HeaderSection
                position="center"
                title="See the Difference"
                heading={[
                    {
                        text: "Compare before and after results of our professional ",
                        color: "primary",
                    },
                    { text: "editing services", color: "secondary" },
                ]}
            />

            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 mt-10 md:mt-14 lg:mt-16">
                {differenceData.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center"
                    >
                        {item.left ? (
                            <>
                                <TextSide item={item} index={index} />
                                <ImageSide item={item} showTag />
                            </>
                        ) : (
                            <>
                                <div className="order-2 lg:order-1">
                                    <ImageSide item={item} />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <TextSide item={item} index={index} alignRight />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
