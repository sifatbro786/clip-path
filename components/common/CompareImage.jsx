import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderHandle } from "react-compare-slider";

export default function CompareImage({ src1, src2, alt1, alt2 }) {
    return (
        <div className="relative w-full h-full">
            <ReactCompareSlider
                boundsPadding="0px"
                clip="all"
                defaultPosition={50}
                handle={
                    <ReactCompareSliderHandle
                        buttonStyle={{
                            boxShadow: "0 2px 12px rgba(0,0,0,0.20)",
                            width: 36,
                            height: 36,
                        }}
                        linesStyle={{ width: 1, background: "white", opacity: 0.9 }}
                    />
                }
                itemOne={
                    <div className="relative w-full h-full">
                        <Image
                            fill
                            priority
                            alt={alt1}
                            src={src1}
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: 14,
                                left: 14,
                                zIndex: 10,
                                fontSize: 10,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#fff",
                                background: "rgba(0,0,0,0.45)",
                                padding: "4px 10px",
                                borderRadius: 2,
                                pointerEvents: "none",
                            }}
                        >
                            After
                        </span>
                    </div>
                }
                itemTwo={
                    <div className="relative w-full h-full">
                        <Image
                            fill
                            priority
                            alt={alt2}
                            src={src2}
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: 14,
                                right: 14,
                                zIndex: 10,
                                fontSize: 10,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#fff",
                                background: "rgba(0,0,0,0.45)",
                                padding: "4px 10px",
                                borderRadius: 2,
                                pointerEvents: "none",
                            }}
                        >
                            Before
                        </span>
                    </div>
                }
                keyboardIncrement="5%"
                style={{
                    width: "100%",
                    height: "100%",
                }}
                transition="0.15s ease-out"
            />
        </div>
    );
}
