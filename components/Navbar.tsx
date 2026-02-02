"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
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
      </nav>
    </header>
  );
}
