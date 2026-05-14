import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 border-t border-gray-700/50 mt-auto">
            {/* Main Container */}
            <div className="max-w-310 mx-auto py-12 md:py-16">
                <hr className="text-gray-500 mb-10"/>

                <div className="flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-8">
                    {/* === Left Side: Logo & Copyright === */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
                        {/* Logo */}
                        <div className="relative">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Rapid Clipping Path"
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-auto"
                                />
                            </Link>
                        </div>

                        {/* Copyright Text */}
                        <p className="text-sm text-gray-400 text-center md:text-left font-sans">
                            Copyright &copy; 2026 Rapid Clipping Path.
                        </p>
                    </div>

                    {/* === Right Side: Info Columns === */}
                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 justify-start md:justify-between">
                        {/* Column 1: Working Hours */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white font-semibold text-base mb-1">
                                Working hours:
                            </h3>
                            <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                Mon - Fri: 9 am - 6 pm
                            </p>
                            <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                Sat, Sun: Holiday
                            </p>
                        </div>

                        {/* Column 2: Address */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white  font-semibold text-base mb-1">
                                Address:
                            </h3>
                            <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                27 Division St, New York, NY
                            </p>
                            <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                10002, USA
                            </p>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white  font-semibold text-base mb-1">
                                Hit us up:
                            </h3>
                            <Link
                                href="tel:+18456317849"
                                className="text-sm text-gray-400 font-sans hover:text-secondary transition-colors"
                            >
                                +1 845 631 78 49
                            </Link>
                            <Link
                                href="mailto:info@sitename.com"
                                className="text-sm text-gray-400 font-sans hover:text-secondary transition-colors"
                            >
                                info@sitename.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
