"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useUIStore } from "@/store";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const { pathname } = useRouter();
    const { toggleTheme } = useUIStore();
    const theme = useUIStore((state) => state.theme);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const parentVariants = {
        hidden: { x: "100vw" },
        visible: {
            x: 0,
            transition: { type: "tween", duration: 0.3, ease: "easeOut" },
        },
        exit: {
            x: "100vw",
            transition: { type: "tween", duration: 0.3, ease: "easeIn" },
        },
    };

    const navLinkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    return (
        <>
            <nav
                role="navigation"
                aria-label="Primary Navigation"
                className={`
          fixed top-4 z-50
          flex items-center justify-between
          px-4 py-3 sm:px-6
          rounded-2xl shadow-lg
          bg-white/70 dark:bg-black/30
          backdrop-blur-xl
          transition-all duration-300
          ${isMobileMenuOpen
                    ? "w-full left-0 right-0 rounded-none"
                    : "w-[92vw] max-w-7xl left-1/2 transform -translate-x-1/2"
                }
          md:w-[92vw] md:max-w-7xl md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-2xl
        `}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/Oranged.png"
                        alt="Oranged Logo"
                        width={60}
                        height={60}
                        className="rounded-lg object-fill"
                    />
                    {/* <span className="font-extrabold text-lg text-orange-600">Oranged</span> */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(({ label, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`
                  relative text-sm font-medium transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded-md
                  ${isActive
                                        ? "text-orange-600 dark:text-orange-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                                    }
                `}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                                {isActive && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-orange-500"
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* Desktop CTA */}
                    <Link
                        href="/early-access"
                        className="
              px-4 py-1.5 text-sm font-semibold
              text-white bg-orange-500 hover:bg-orange-600
              dark:bg-orange-600 dark:hover:bg-orange-700
              rounded-full shadow
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
              transition-all duration-300
            "
                    >
                        Join Early Access
                    </Link>

                    {/* Desktop Theme Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-yellow-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-800" />
                        )}
                    </button> */}
                </div>

                {/* Mobile Actions */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Theme Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-yellow-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-800" />
                        )}
                    </button> */}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Open Mobile Menu"
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-800 dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
                        )}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={parentVariants}
                        className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center py-12 px-6 overflow-y-auto md:hidden"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="w-full flex justify-between items-center mb-8">
                            {/* Logo in Mobile Menu */}
                            <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
                                <Image
                                    src="/Oranged.png"
                                    alt="Oranged Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-lg object-fill"
                                />
                                <span className="font-extrabold text-lg text-orange-600">Oranged</span>
                            </Link>
                            {/* Close Button */}
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Close Mobile Menu"
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                            >
                                <X className="w-6 h-6 text-gray-800 dark:text-white" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-6 w-full items-center justify-center min-h-[50vh]">
                            {navLinks.map(({ label, href }, index) => (
                                <motion.div
                                    key={href}
                                    variants={navLinkVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                >
                                    <Link
                                        href={href}
                                        className="text-3xl font-bold text-gray-800 dark:text-white hover:text-orange-500 transition-colors py-2"
                                        onClick={toggleMobileMenu}
                                    >
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="mt-auto">
                            <Link
                                href="/early-access"
                                className="
                  px-6 py-3 text-lg font-semibold
                  text-white bg-orange-500 hover:bg-orange-600
                  dark:bg-orange-600 dark:hover:bg-orange-700
                  rounded-full shadow-md
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                  transition-all duration-300
                "
                                onClick={toggleMobileMenu}
                            >
                                Join Early Access
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;