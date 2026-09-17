"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";

interface NavbarProps {
  onRequestDemo?: () => void;
}

export default function Navbar({ onRequestDemo }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Softwares", href: "/softwares" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#5e2b9d]/15 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Doonext Logo"
              width={170}
              height={48}
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-[15px] text-[#282023]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2.5 px-4 transition-colors group ${
                    active
                      ? "text-[#5e2b9d]"
                      : "text-[#282023] hover:text-[#5e2b9d]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline animation from center (width: 40%) */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[2.5px] rounded-full bg-[#5e2b9d] transition-all duration-300 ease-out origin-center pointer-events-none ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button: Demo */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onRequestDemo}
              className="px-5 py-2.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold tracking-wide shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-3.5 py-1.5 rounded-full bg-[#5e2b9d] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#282023] hover:bg-[#5e2b9d]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#5e2b9d]/15 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative block px-4 py-2.5 rounded-xl font-medium transition-colors ${
                  active ? "text-[#5e2b9d]" : "text-[#282023] hover:text-[#5e2b9d]"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span
                    aria-hidden="true"
                    className="block mt-1 w-8 h-[2px] rounded-full bg-[#5e2b9d]"
                  />
                )}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestDemo) onRequestDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm shadow-md cursor-pointer"
            >
              Request Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

