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
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MyFoodFit"
            width={56}
            height={56}
            style={{ height: "56px", width: "auto" }}
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-6 bg-zinc-700 rounded transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-700 rounded transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-700 rounded transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="px-6 pb-4 flex flex-col gap-3 border-t border-zinc-100 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-zinc-600 hover:text-zinc-900"
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
