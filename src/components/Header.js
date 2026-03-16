"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#how-to-play", label: "How to Play" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">&#9822;</span>
          <span
            className={`text-2xl font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-deft-700" : "text-white"
            }`}
          >
            ChessPawn
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-deft-900 shadow-md transition-all hover:bg-gold-300 hover:shadow-lg"
          >
            Download
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex flex-col gap-1.5 md:hidden ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            } ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileOpen ? "opacity-0" : ""
            } ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            } ${scrolled ? "bg-gray-700" : "bg-white"}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-deft-800/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-gold-400 px-5 py-2.5 text-center text-sm font-bold text-deft-900 transition-all hover:bg-gold-300"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
