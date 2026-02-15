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

        {/* Mobile hamburger on the right */}
        <button
          type="button"
          className="header-mobile-menu-btn p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div
            className="relative flex flex-col justify-between"
            style={{ width: 24, height: 20 }}
          >
            <span
              className={`block rounded-sm transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{
                width: 24,
                height: 4,
                backgroundColor: "#18181b",
              }}
            />
            <span
              className={`block rounded-sm transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
              style={{
                width: 24,
                height: 4,
                backgroundColor: "#18181b",
              }}
            />
            <span
              className={`block rounded-sm transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{
                width: 24,
                height: 4,
                backgroundColor: "#18181b",
              }}
            />
          </div>
        </button>
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
