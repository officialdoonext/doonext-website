"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  User,
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
                  className={`px-4 py-2 rounded-lg transition-all ${
                    active
                      ? "text-[#5e2b9d] font-bold bg-[#5e2b9d]/5"
                      : "hover:text-[#5e2b9d] hover:bg-[#5e2b9d]/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons: Login, Profile, Demo */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive("/login")
                  ? "text-[#5e2b9d] font-bold"
                  : "text-[#282023] hover:text-[#5e2b9d] hover:bg-[#5e2b9d]/5"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/profile"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive("/profile")
                  ? "text-[#5e2b9d] font-bold bg-[#5e2b9d]/10"
                  : "text-[#282023] hover:text-[#5e2b9d] hover:bg-[#5e2b9d]/5"
              }`}
            >
              <User className="w-4 h-4 text-[#5e2b9d]" />
              <span>Profile</span>
            </Link>

            <button
              onClick={onRequestDemo}
              className="px-5 py-2.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold tracking-wide shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/login"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#5e2b9d] bg-[#5e2b9d]/10"
            >
              Sign In
            </Link>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl font-medium ${
                isActive(link.href) ? "bg-[#5e2b9d]/10 text-[#5e2b9d] font-bold" : "text-[#282023]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-700"
            >
              Sign In
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-[#5e2b9d]/10 font-bold text-xs text-[#5e2b9d]"
            >
              Profile
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestDemo) onRequestDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm shadow-md"
            >
              Request Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

