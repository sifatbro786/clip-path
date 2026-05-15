import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
// import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
});

export const metadata = {
    title: "Rapid Clipping Path",
    description:
        "Transparent pricing for photo editing, clipping path, retouching, and color correction.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
            <body className="min-h-full">
                {/* <SmoothScroll> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                {/* </SmoothScroll> */}
            </body>
        </html>
    );
}
