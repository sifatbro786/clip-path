import HeaderSection from "../common/HeaderSection";

const features = [
    {
        number: "—01",
        title: "Hand-edited in Photoshop.",
        description:
            "Every image is edited by a trained retoucher in Adobe Photoshop. No AI shortcuts, no batch filters.",
    },
    {
        number: "—02",
        title: "Quality control before delivery.",
        description:
            "Every image is reviewed by our senior team before it reaches you. We catch issues — you shouldn't have to.",
    },
    {
        number: "—03",
        title: "Free revisions, always.",
        description:
            "If we miss something, we fix it at no extra cost. If an image still doesn't meet the brief, we don't charge for it.",
    },
    {
        number: "—04",
        title: "Multiple output formats.",
        description: "JPG, PNG, PSD, TIFF — whatever your workflow needs, at no extra charge.",
    },
    {
        number: "—05",
        title: "Secure file transfer.",
        description:
            "Dropbox, Google Drive, WeTransfer, or FTP. We work with your existing system, not against it.",
    },
    {
        number: "—06",
        title: "Direct support.",
        description:
            "Email and WhatsApp support during business hours. Response in under 2 hours, every time.",
    },
];

export default function AlwaysIncluded() {
    return (
        <section className="bg-white py-10 pb-24 px-4 sm:px-6 font-sans border-b border-gray-200">
            <div className="max-w-310 mx-auto text-center">
                <HeaderSection
                    position="center"
                    title="Always included"
                    heading={[
                        { text: "What's in ", color: "primary" },
                        { text: "every order.", color: "secondary" },
                    ]}
                />

                {/* Outer Container with overflow hidden to clip overlapping negative margins */}
                <div className="overflow-hidden border border-gray-200 bg-[#FAF9F6]">
                    {/* Grid Container with negative margin to overlap borders and eliminate double thickness */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 sm:p-10 lg:p-12 text-left flex flex-col justify-between min-h-62.5 sm:min-h-70 border-t border-l border-gray-200"
                            >
                                <div>
                                    {/* Feature Number */}
                                    <span className="text-2xl font-serif italic text-secondary block mb-5">
                                        {item.number}
                                    </span>

                                    {/* Feature Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3 font-sans">
                                        {item.title}
                                    </h3>

                                    {/* Feature Description */}
                                    <p className="text-gray-500 text-[14px] leading-relaxed tracking-normal font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
