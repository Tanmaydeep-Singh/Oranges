"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useUIStore } from "@/store";
import Image from "next/image";

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
          <span className="font-extrabold text-lg text-orange-600">Oranged</span>
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
                  ${
                    isActive
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
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>

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
    </>
  );
};

export default Navbar;
