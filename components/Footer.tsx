import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Headphones,
  CheckCircle2,
  Clock,
  MessageCircle,
  Building2
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#282023] pt-14 pb-10 border-t border-slate-200/90 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#5e2b9d]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[#40C351]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP INTERACTIVE SUPPORT & DEMO ACTION RIBBON */}
        {/* ========================================================================= */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#faf7fd] via-white to-[#f6fbf7] border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#5e2b9d]" />
              <span>Doonext Live Helpline &amp; Consultation</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#282023]">
              Need a personalized recommendation for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Speak directly with our Coimbatore solution architects — zero automated bots, 100% human guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] text-xs font-bold border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#40C351]" />
              <span>+91 12345 67890</span>
            </a>
            
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#40C351]/10 hover:bg-[#40C351]/20 text-[#2d963b] text-xs font-bold border border-[#40C351]/25 shadow-2xs hover:shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#40C351]" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-md shadow-[#5e2b9d]/20 hover:shadow-lg transition-all"
            >
              <span>Request Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 4 CORE TRUST HIGHLIGHT PILLS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-12 border-b border-slate-100">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">&lt; 0.2s Sub-Second Scan</div>
              <div className="text-[10px] text-slate-500">Ultra-fast checkout counter</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">Offline-First Guaranteed</div>
              <div className="text-[10px] text-slate-500">Zero downtime during outages</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">500+ Indian Businesses</div>
              <div className="text-[10px] text-slate-500">Active across 18+ states</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">100% GST &amp; E-Way Ready</div>
              <div className="text-[10px] text-slate-500">One-click compliant filings</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MAIN 5-COLUMN NAVIGATION GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 border-b border-slate-100">
          
          {/* Column 1: Brand & Headquarters Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Doonext Logo"
                width={150}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Doonext crafts high-performance, offline-first billing POS, ERP, CRM, and payroll software that turns everyday commerce into an automated, profitable engine.
            </p>

            {/* Coimbatore Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf7fd] border border-[#5e2b9d]/15 text-xs font-semibold text-[#282023]">
              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
              <span>Headquartered in Coimbatore, Tamil Nadu 🇮🇳</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-[#5e2b9d] text-slate-600 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm"
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
                className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-[#5e2b9d] text-slate-600 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm"
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
                className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-[#5e2b9d] text-slate-600 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm"
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
                className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-[#5e2b9d] text-slate-600 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Software Suite (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e2b9d]" />
              Softwares
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors flex items-center justify-between group">
                  <span>Billing POS</span>
                  <span className="text-[9px] font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-1.5 py-0.5 rounded">HOT</span>
                </Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors">ERP &amp; Inventory</Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors flex items-center justify-between group">
                  <span>CRM &amp; Marketing</span>
                  <span className="text-[9px] font-bold text-[#40C351] bg-[#40C351]/10 px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors">Payroll &amp; HRMS</Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors">Custom Software</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40C351]" />
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Supermarkets &amp; Retail</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Restaurants &amp; QSRs</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Hotels &amp; Resorts</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Wholesale &amp; FMCG</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Pharmacies &amp; Clinics</Link>
              </li>
              <li>
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Manufacturing Units</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFAF08]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link href="/" className="hover:text-[#5e2b9d] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#5e2b9d] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors">Softwares</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#5e2b9d] transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#5e2b9d] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#5e2b9d] transition-colors">Merchant Login</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-[#5e2b9d] transition-colors">Store Profile</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact Card (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Regional Office
            </h4>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5e2b9d] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Coimbatore, Tamil Nadu, India</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="tel:+911234567890" className="font-semibold hover:text-[#5e2b9d] transition-colors">+91 12345 67890</a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                <a href="mailto:info@doonext.com" className="font-semibold hover:text-[#5e2b9d] transition-colors">info@doonext.com</a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="https://www.doonext.com" target="_blank" rel="noreferrer" className="font-semibold hover:text-[#5e2b9d] transition-colors">www.doonext.com</a>
              </div>
            </div>

            {/* Operating Hours & Status */}
            <div className="pt-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#40C351]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
                  <span>Support Desk Active</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM COPYRIGHT & LEGAL BAR */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2025 Doonext Software Solutions.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline">All Rights Reserved.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-[#5e2b9d] transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms-conditions" className="hover:text-[#5e2b9d] transition-colors">Terms &amp; Conditions</Link>
            <span className="text-slate-300">•</span>
            <span className="text-[#40C351] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Indian GST &amp; E-Way Ready 🇮🇳
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}


