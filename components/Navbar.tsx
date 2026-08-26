"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Receipt, 
  Boxes, 
  Users, 
  Wallet, 
  Code2, 
  Store, 
  Utensils, 
  Building2, 
  Coffee, 
  ArrowRight
} from "lucide-react";

interface NavbarProps {
  onRequestDemo?: () => void;
}

export default function Navbar({ onRequestDemo }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const solutionsList = [
    { title: "Billing Solutions", desc: "Smart billing for retail, restaurants & cafes", icon: Receipt, href: "/products#billing" },
    { title: "ERP Solutions", desc: "Enterprise resource planning & operations", icon: Boxes, href: "/products#erp" },
    { title: "CRM Solutions", desc: "Customer relationships & sales leads", icon: Users, href: "/products#crm" },
    { title: "Payroll Management", desc: "Automated salary, leaves & compliance", icon: Wallet, href: "/products#payroll" },
    { title: "Custom Software", desc: "Tailored software built for your workflows", icon: Code2, href: "/products#custom" },
  ];

  const industriesList = [
    { title: "Retail Stores", icon: Store, href: "/products#industries" },
    { title: "Restaurants & Bars", icon: Utensils, href: "/products#industries" },
    { title: "Hotels & Stays", icon: Building2, href: "/products#industries" },
    { title: "Cafes & Bakeries", icon: Coffee, href: "/products#industries" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#8C5288]/15 shadow-xs transition-all">
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
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-[16px] text-[#282023]">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive("/")
                  ? "text-[#8C5288] font-bold"
                  : "hover:text-[#8C5288] hover:bg-[#8C5288]/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive("/about")
                  ? "text-[#8C5288] font-bold"
                  : "hover:text-[#8C5288] hover:bg-[#8C5288]/5"
              }`}
            >
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#8C5288] hover:bg-[#8C5288]/5 transition-all cursor-pointer text-[#282023]"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-[#8C5288]" : "text-slate-400"}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 ${
                  solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-[#8C5288]/15 p-3 space-y-1">
                  {solutionsList.map((sol, idx) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={idx}
                        href={sol.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#8C5288]/5 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#8C5288]/10 text-[#8C5288] flex items-center justify-center shrink-0 group-hover/item:bg-[#8C5288] group-hover/item:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-[#282023] text-sm group-hover/item:text-[#8C5288]">
                            {sol.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {sol.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-[#8C5288] hover:bg-[#8C5288]/5 transition-all cursor-pointer text-[#282023]"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-[#8C5288]" : "text-slate-400"}`} />
              </button>

              <div 
                className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                  industriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-[#8C5288]/15 p-3 space-y-1">
                  {industriesList.map((ind, idx) => {
                    const Icon = ind.icon;
                    return (
                      <Link
                        key={idx}
                        href={ind.href}
                        onClick={() => setIndustriesOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#8C5288]/5 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0 group-hover/item:bg-[#40C351] group-hover/item:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-[#282023] text-sm group-hover/item:text-[#8C5288]">
                          {ind.title}
                        </span>
                      </Link>
                    );
                  })}
                  <div className="pt-2 mt-1 border-t border-slate-100">
                    <Link
                      href="/products#industries"
                      onClick={() => setIndustriesOpen(false)}
                      className="text-xs font-bold text-[#8C5288] hover:underline flex items-center justify-between px-2 py-1"
                    >
                      View All Industries <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive("/products")
                  ? "text-[#8C5288] font-bold"
                  : "hover:text-[#8C5288] hover:bg-[#8C5288]/5"
              }`}
            >
              Products
            </Link>

            <Link
              href="/contact#pricing"
              className="px-3.5 py-2 rounded-lg hover:text-[#8C5288] hover:bg-[#8C5288]/5 transition-all text-[#282023]"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive("/contact")
                  ? "text-[#8C5288] font-bold"
                  : "hover:text-[#8C5288] hover:bg-[#8C5288]/5"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestDemo}
              className="px-6 py-2.5 rounded-full bg-[#8C5288] hover:bg-[#763f72] text-white text-sm font-bold tracking-wide shadow-md shadow-[#8C5288]/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-4 py-2 rounded-full bg-[#8C5288] text-white text-xs font-bold"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#282023] hover:bg-[#8C5288]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#8C5288]/15 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl font-medium ${isActive("/") ? "bg-[#8C5288]/10 text-[#8C5288] font-bold" : "text-[#282023]"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl font-medium ${isActive("/about") ? "bg-[#8C5288]/10 text-[#8C5288] font-bold" : "text-[#282023]"}`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl font-medium ${isActive("/products") ? "bg-[#8C5288]/10 text-[#8C5288] font-bold" : "text-[#282023]"}`}
          >
            Products & Solutions
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl font-medium ${isActive("/contact") ? "bg-[#8C5288]/10 text-[#8C5288] font-bold" : "text-[#282023]"}`}
          >
            Contact Us
          </Link>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestDemo) onRequestDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#8C5288] hover:bg-[#763f72] text-white font-bold text-sm shadow-md"
            >
              Request Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
