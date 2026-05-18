// ServiceSection.jsx
import Image from "next/image";
import HeaderSection from "../common/HeaderSection";
import Link from "next/link";

const services = [
    {
        title: "Clipping Path",
        description: "Precise Background Removal For Clean And Professional Product Images.",
        icon: "/icon1.png",
    },
    {
        title: "Image Retouching",
        description: "Enhance Image Quality With Advanced Retouching And Color Correction.",
        icon: "/icon2.png",
    },
    {
        title: "Background Removal",
        description: "Remove Unwanted Backgrounds And Replace With Clean Or Custom Ones.",
        icon: "/icon3.png",
    },
    {
        title: "Shadow Creation",
        description: "Add Natural Shadows To Make Your Images More Realistic And Attractive.",
        icon: "/icon4.png",
    },
    {
        isButton: true,
    },
    {
        title: "Image Editing",
        description: "Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed.",
        icon: "/icon5.png",
    },
];

export default function ServiceSection() {
    return (
        <section className="bg-[#F2EFE8] py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-310 mx-auto">
                {/* Header Section */}
                <HeaderSection
                    position="left"
                    title="Our Professional Services"
                    heading={[
                        {
                            text: "We provide a wide range of photo editing services tailored for ",
                            color: "primary",
                        },
                        { text: "your business needs", color: "secondary" },
                    ]}
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`min-h-50 sm:min-h-55 md:min-h-62.5 p-5 md:p-6 lg:p-8 flex flex-col justify-center border-2 border-dotted border-secondary/40 rounded-xl transition-all duration-300 hover:bg-secondary/5 ${
                                service.isButton ? "items-center" : "items-start"
                            }`}
                        >
                            {service.isButton ? (
                                /* View All Services Circle Button */
                                <Link
                                    href="/services"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-secondary text-primary rounded-full flex items-center justify-center text-center text-[10px] sm:text-xs font-semibold leading-tight hover:bg-primary hover:text-secondary hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="absolute top-[40%] left-[40%] whitespace-nowrap">
                                        More Details
                                    </div>
                                </Link>
                            ) : (
                                /* Service Content */
                                <>
                                    <div className="mb-4 md:mb-6">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-sans font-bold text-gray-800 mb-2 md:mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
