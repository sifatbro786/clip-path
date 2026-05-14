import Image from "next/image";
import HeaderSection from "../common/HeaderSection";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const differenceData = [
    {
        title: "Clipping Path",
        description:
            "Hand-drawn cutouts that isolate your product with surgical precision – no halos, no jagged edges, no AI guesswork. Just clean, transparent backgrounds ready for any platform.",
        builtFor: [
            "eCommerce product listings (Amazon, Shopify, eBay)",
            "Print catalogs and marketing materials",
            "Background removal at scale - 1 image or 10,000",
            "Layered PSD delivery for full editing control",
        ],
        image: "/images/clipping-path.png",
    },
];

export default function DifferenceSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-16">
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
                        {/* Left Side: Text Content */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-primary">{item.title}</h3>
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
                                className="w-fit bg-secondary text-white px-6 py-3 text-sm rounded-md font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all hover:bg-primary hover:text-secondary"
                            >
                                Start free trial <span className="text-lg">→</span>
                            </Link>
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex-1 relative w-full aspect-square max-w-125">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-6"
                                />
                                {/* Bottom shadow decorative element similar to image_91c27e.png */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/5 to-transparent" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
