import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#282023] text-slate-200 pt-16 pb-8 border-t border-[#8C5288]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-white w-fit shadow-xs">
              <Image
                src="/logo.png"
                alt="Doonext Logo"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed pr-6 max-w-sm">
              Doonext provides all-in-one software solutions to help businesses manage, grow and succeed in today&apos;s competitive world.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C5288] text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C5288] text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C5288] text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.47 1.47 0 1 0 0-2.94 1.47 1.47 0 0 0 0 2.94M7.86 18.5V10.13H5.07V18.5h2.79z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C5288] text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#EFAF08] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#EFAF08] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#EFAF08] transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#EFAF08] transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/contact#pricing" className="hover:text-[#EFAF08] transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#EFAF08] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Our Solutions</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products#billing" className="hover:text-[#EFAF08] transition-colors">Billing Solutions</Link>
              </li>
              <li>
                <Link href="/products#erp" className="hover:text-[#EFAF08] transition-colors">ERP Solutions</Link>
              </li>
              <li>
                <Link href="/products#crm" className="hover:text-[#EFAF08] transition-colors">CRM Solutions</Link>
              </li>
              <li>
                <Link href="/products#payroll" className="hover:text-[#EFAF08] transition-colors">Payroll Management</Link>
              </li>
              <li>
                <Link href="/products#custom" className="hover:text-[#EFAF08] transition-colors">Custom Software</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Industries</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Retail Stores</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Restaurants</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Hotels &amp; Stays</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Cafes &amp; Bakeries</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Wholesale</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Healthcare</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">Education</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#EFAF08] transition-colors">And More</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Contact Us</h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#40C351] shrink-0 mt-1" />
                <span className="leading-snug">123, Business Park, Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="mailto:info@doonext.com" className="hover:text-white transition-colors">info@doonext.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="https://www.doonext.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.doonext.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 Doonext Software Solutions, All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
