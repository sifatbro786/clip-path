/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Book a Call", href: "/booking" },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const childVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            y: 30,
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    // Active link indicator for desktop
    const ActiveIndicator = ({ isActive }) => (
        <motion.span
            layoutId="activeNav"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
    );

    return (
        <header className="sticky top-0 z-50 bg-background border-b border-rule backdrop-blur-sm">
            <div className="px-8 py-6 flex justify-between items-center mx-auto">
                {/* Brand */}
                <Link
                    href="/"
                    className="font-heading font-medium text-[21px] tracking-[-0.01em] text-primary  z-50 hover:opacity-80 transition-opacity"
                >
                    <Image src="/logo.png" width={80} height={80} alt="ClipPath Logo" />
                </Link>

                {/* Desktop Navigation - Hidden on mobile */}
                <ul className="hidden md:flex gap-9 items-center list-none">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name} className="relative">
                                <Link
                                    href={link.href}
                                    className={`
                                        text-[14.5px] font-normal  transition-colors duration-200 relative px-1 py-2
                                        ${
                                            isActive
                                                ? "text-primary font-medium"
                                                : "text-ink-soft hover:text-secondary"
                                        }
                                    `}
                                >
                                    {link.name}
                                    {isActive && <ActiveIndicator isActive={isActive} />}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-block"
                        >
                            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="text-[14px] text-background font-medium bg-primary px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] duration-400 hover:bg-secondary hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all"
                                >
                                    Free Trial
                                </Link>
                            </motion.div>
                        </motion.div>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 relative">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <X size={28} className="text-background" /> : <Menu size={28} />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Overlay - Top to bottom animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-primary w-full h-screen"
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="flex flex-col items-center justify-center h-full w-full"
                            variants={staggerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    variants={childVariants}
                                    className="mb-10"
                                >
                                    <Link
                                        href={link.href}
                                        className="text-white text-4xl font-bold tracking-tight hover:translate-x-2 hover:opacity-80 inline-block transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <hr className="text-white w-[80%] h-2" />
                            <motion.div variants={childVariants}>
                                <Link
                                    href="/contact"
                                    className="text-white text-4xl font-bold tracking- inline-block hover:opacity-80 transition-all mt-4 duration-300"
                                >
                                    Free Trial
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
