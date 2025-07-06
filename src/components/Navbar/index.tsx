"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useUIStore } from "@/store";
import Image from "next/image";
import { AnimatePresence, motion, stagger } from "motion/react";

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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.15, delayChildre:2 },
    },
    exit: {
      x: "100%",
      transition: { when: "afterChildren", staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0,      transition: { when: "beforChildren", staggerChildren: 0.2, staggerDirection: 1, delayChildre:2 },
 },
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={`
          fixed top-4 z-50 flex items-center justify-between
          px-4 py-3 sm:px-6
          rounded-2xl shadow-lg
          bg-white/70 dark:bg-black/30 backdrop-blur-xl
          transition-all duration-300
          ${isMobileMenuOpen
            ? "w-full left-0 right-0 rounded-none"
            : "w-[92vw] max-w-7xl left-1/2 transform -translate-x-1/2"}
          md:w-[92vw] md:max-w-7xl md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-2xl
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Oranged.png"
            alt="Oranged Logo"
            width={45}
            height={45}
            className="rounded-md object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded-md
                  ${isActive
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500"}`}
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
            className="px-4 py-1.5 text-sm font-semibold text-white bg-orange-500 
              hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 
              rounded-full shadow transition duration-300"
          >
            Join Early Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col py-8 px-6 overflow-y-auto md:hidden"
            aria-modal="true"
            role="dialog"
          >
            <div className="w-full flex justify-between items-center mb-10">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/Oranged.png"
                  alt="Oranged Logo"
                  width={36}
                  height={36}
                  className="rounded-md"
                />
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

            <nav className="flex flex-col gap-6 w-full">
              {navLinks.map(({ label, href }) => (
                <motion.div
                  key={href}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={href}
                    className="text-xl font-semibold text-gray-800 dark:text-white hover:text-orange-500 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA inside mobile menu */}
              <Link
                href="/early-access"
                className="mt-6 px-6 py-3 text-lg font-semibold text-center text-white bg-orange-500 
                  hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 
                  rounded-xl shadow transition duration-300"
                onClick={toggleMobileMenu}
              >
                Join Early Access
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
