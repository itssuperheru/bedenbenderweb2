import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            {/* LOGO */}
            <div className="mb-4">
              <Image
                src="/images/logo.png" // ⬅️ pastikan file ini ada
                alt="Bedenbender Mobile Automotive LLC"
                width={260}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-white/90 max-w-xs">
              Mobile auto repair you can trust right at your location
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/90">
              <li>
                <a id="Home" href="#home" className="hover:underline">Home</a>
              </li>
              <li>
                <a id="About" href="#about" className="hover:underline">About</a>
              </li>
              <li>
                <a id="Services" href="#services" className="hover:underline">Services</a>
              </li>
              <li>
                <a id="Contact" href="#contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>

            <ul className="space-y-4 text-white/90">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:15632991817">563-299-1817</a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:bedenbendermobileauto@gmail.com">
                  bedenbendermobileauto@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} />
                Iowa, USA
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/people/Bedenbender-Mobile-Automotive/61582365656773/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/30 mt-16 pt-6 text-sm text-white/80 text-center">
          © {new Date().getFullYear()} Bedenbender Mobile Automotive LLC.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
