import { AuthProvider } from "@/hooks/useAuth";
import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
                <AuthProvider>
                    {children}
                    <Toaster position="top-right" />
                </AuthProvider>
            </body>
        </html>
    );
}
