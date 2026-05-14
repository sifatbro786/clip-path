import HeaderSection from "../common/HeaderSection";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import CompareImage from "../common/CompareImage";
import { differenceData } from "@/data/differenceData";

export default function DifferenceSection() {
    return (
        <section className="max-w-310 mx-auto pb-16 px-4">
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

            <div className="mt-3 space-y-24">
                {differenceData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                    >
                        {item.left ? (
                            <>
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-bold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-lg">
                                        {item.description}
                                    </p>

                                    {/* Built For Box */}
                                    <div className="bg-[#f3f1eb] p-6 rounded-xl border-l-4 border-secondary max-w-md">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                                            BUILT FOR
                                        </span>
                                        <ul className="space-y-3">
                                            {item.builtFor.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-gray-700 font-medium"
                                                >
                                                    <MoveUpRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/services"
                                        className="w-fit bg-secondary text-white px-6 py-2.5 text-sm rounded-md font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all hover:bg-primary"
                                    >
                                        Start free trial <span className="text-lg">→</span>
                                    </Link>
                                </div>

                                <div className="flex-1 relative w-full h-auto">
                                    <div className="w-full h-full rounded-2xl shadow-2xl bg-white p-4">
                                        <CompareImage
                                            src1={item.images[0]}
                                            src2={item.images[1]}
                                            alt1={item.title}
                                            alt2={item.title}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-1 relative w-full">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                                        <CompareImage
                                            src1={item.images[0]}
                                            src2={item.images[1]}
                                            alt1={item.title}
                                            alt2={item.title}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/5 to-transparent" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6 ml-40">
                                    <h3 className="text-3xl font-bold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-lg">
                                        {item.description}
                                    </p>

                                    {/* Built For Box */}
                                    <div className="bg-[#f3f1eb] p-6 rounded-xl border-l-4 border-secondary max-w-md">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                                            BUILT FOR
                                        </span>
                                        <ul className="space-y-3">
                                            {item.builtFor.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-gray-700 font-medium"
                                                >
                                                    <MoveUpRight className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/services"
                                        className="w-fit bg-secondary text-white px-6 py-2.5 text-sm rounded-md font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all hover:bg-primary"
                                    >
                                        Start free trial <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
