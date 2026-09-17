"use client";

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
  Building2, 
  ArrowUp,
  Receipt,
  Boxes,
  Users2,
  Lock,
  Star
} from "lucide-react";

interface FooterProps {
  onRequestDemo?: () => void;
}

export default function Footer({ onRequestDemo }: FooterProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-[#282023] pt-14 pb-10 border-t border-slate-200/90 relative overflow-hidden">
      {/* Ambient decorative background glows & micro-grid */}
      <div className="absolute inset-0 bg-dots-tech opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[650px] h-[350px] bg-[#5e2b9d]/[0.035] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[350px] bg-[#40C351]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP INTERACTIVE SUPPORT & DEMO ACTION RIBBON */}
        {/* ========================================================================= */}
        <div className="mb-14 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#faf7fd] via-white to-[#f6fbf7] border border-[#5e2b9d]/15 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          {/* Subtle top-right glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5e2b9d]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center lg:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] text-[11px] font-bold uppercase tracking-wider border border-[#5e2b9d]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#EFAF08]" />
              <span>COIMBATORE SOLUTIONS DESK • PAN-INDIA ADOPTION</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#282023] tracking-tight leading-snug">
              Transform Your Billing Counter into a Resilient Profit Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Speak directly with our Coimbatore solution architects — zero bot hurdles, 100% human guidance tailored for your retail, restaurant, hotel, or wholesale counter.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            <a
              href="tel:+919500618277"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#282023] text-xs font-bold border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#40C351]" />
              <span>+91 95006 18277</span>
            </a>
            
            <a
              href="https://wa.me/919500618277?text=Hi%20Doonext%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20software"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#40C351]/10 hover:bg-[#40C351]/20 text-[#2d963b] text-xs font-bold border border-[#40C351]/25 shadow-2xs hover:shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#40C351]" />
              <span>WhatsApp Us</span>
            </a>

            {onRequestDemo ? (
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-md shadow-[#5e2b9d]/20 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-md shadow-[#5e2b9d]/20 hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>Request Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 4 CORE TRUST HIGHLIGHT PILLS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-12 border-b border-slate-100">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#5e2b9d]/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">&lt; 0.2s Sub-Second Scan</div>
              <div className="text-[10px] text-slate-500">Express thermal billing</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#40C351]/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">Offline-First Guaranteed</div>
              <div className="text-[10px] text-slate-500">Zero network downtime</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#EFAF08] transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">500+ Indian Businesses</div>
              <div className="text-[10px] text-slate-500">Active across 18+ states</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-sky-400 transition-all">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#282023]">100% GST &amp; E-Way Ready</div>
              <div className="text-[10px] text-slate-500">Compliant automated filings</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MAIN 5-COLUMN NAVIGATION & CONTACT GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 border-b border-slate-100">
          
          {/* Column 1: Brand & Coimbatore Innovation Core (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Doonext Logo"
                width={155}
                height={42}
                className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Doonext crafts high-performance, offline-first billing POS, ERP, CRM, and biometric payroll software engineered to power everyday commerce into an automated, profitable engine.
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
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors flex items-center justify-between group">
                  <span>Billing POS</span>
                  <span className="text-[9px] font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-1.5 py-0.5 rounded">HOT</span>
                </Link>
              </li>
              <li>
                <Link href="/softwares" className="hover:text-[#5e2b9d] transition-colors">Restaurant KOT</Link>
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
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
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
                <Link href="/products#industries" className="hover:text-[#5e2b9d] transition-colors">Manufacturing &amp; Mills</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFAF08]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
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
                <Link href="/contact" className="hover:text-[#5e2b9d] transition-colors font-semibold text-[#5e2b9d]">Book Live Demo</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Regional Office & Live Desk (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Regional Office
            </h4>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5e2b9d] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Coimbatore, Tamil Nadu, India - 641001</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#40C351] shrink-0" />
                <a href="tel:+919500618277" className="font-semibold hover:text-[#5e2b9d] transition-colors">+91 95006 18277</a>
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

            {/* Operating Hours & Status Box */}
            <div className="pt-1">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-[#faf7fd] border border-[#5e2b9d]/15 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#40C351]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                    Support Desk Active
                  </span>
                  <span className="text-[10px] text-slate-400">&lt; 18s Pickup</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Mon – Sat: 8:00 AM – 10:00 PM IST
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM COPYRIGHT, LEGAL BAR & SCROLL TO TOP */}
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
              <span>100% Made in India 🇮🇳</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#5e2b9d] text-slate-500 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:shadow-xs"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
