"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo-navbar.png"
            alt="Bedenbender Mobile Automotive LLC"
            width="230"
            height="50"
            className="object-contain"
          />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <li>
            <a href="#home" className="hover:text-sky-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-sky-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/15632991817?text=Hi%20Bedenbender%20Mobile%20Automotive%20LLC,%20I%20want%20to%20book%20the%20service!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-sky-500 hover:bg-sky-400 transition text-white px-6 py-3 rounded-full font-semibold"
        >
          <MessageCircle size={18} />
          Book our service
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
        {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {/* MOBILE MENU */}
<div
  className={`
    md:hidden
    absolute top-full left-0 w-full
    bg-black/95 backdrop-blur-md
    shadow-lg border-t border-white/10
    transform transition-all duration-300 ease-out
    ${open
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
>
  <div className="px-6 py-6 space-y-4 text-white">
    <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
    <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
    <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
    <a href="#contact" onClick={() => setOpen(false)} className="block">Contact Us</a>

    <a
      href="https://wa.me/15632991817?text=Hi%20Bedenbender%20Mobile%20Automotive%20LLC,%20I%20want%20to%20book%20the%20service!"
      onClick={() => setOpen(false)}
      className="mt-6 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 transition px-6 py-4 rounded-full font-semibold"
    >
      Book our service
    </a>
  </div>
</div>


    </header>
  );
}
