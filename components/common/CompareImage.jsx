import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";

export default function CompareImage({ src1, src2, alt1, alt2 }) {
    return (
        <ReactCompareSlider
            boundsPadding="0px"
            clip="all"
            defaultPosition={50}
            itemOne={
                <Image
                    width={800}
                    height={600}
                    priority
                    alt={alt1}
                    src={src1}
                    style={{ objectPosition: "top center" }}
                />
            }
            itemTwo={
                <Image
                    width={800}
                    height={600}
                    priority
                    alt={alt2}
                    src={src2}
                    style={{ objectPosition: "top center" }}
                />
            }
            keyboardIncrement="5%"
            style={{
                backgroundColor: "white",
                backgroundImage:
                    "\n      linear-gradient(45deg, #ccc 25%, transparent 25%),\n      linear-gradient(-45deg, #ccc 25%, transparent 25%),\n      linear-gradient(45deg, transparent 75%, #ccc 75%),\n      linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                backgroundSize: "20px 20px",
                flexGrow: 1,
                height: "100%",
                maxHeight: "100dvh",
                width: "100%",
                objectFit: "contain",
            }}
            transition="0.15s ease-out"
        />
    );
}
