"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/research-method", label: "Research Method" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="print:hidden bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Mobile hamburger first (Spoonful-style: burger left, logo right on mobile) */}
        <button
          type="button"
          className="header-mobile-menu-btn p-2 -ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-1 w-6 bg-zinc-800 rounded transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 bg-zinc-800 rounded transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 bg-zinc-800 rounded transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MyFoodFit"
            width={56}
            height={56}
            style={{ height: "56px", width: "auto" }}
          />
        </a>

        {/* Desktop navigation - visibility controlled in globals.css by media query */}
        <nav id="desktop-nav" className="items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu dropdown - visibility and open state in globals.css */}
      <div
        className={`header-mobile-dropdown bg-zinc-50 border-t border-zinc-200 ${isMenuOpen ? "is-open" : ""}`}
      >
        <nav className="px-4 pb-4 gap-1 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
