"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Receipt, 
  Boxes, 
  Users, 
  Wallet, 
  Code2, 
  Store, 
  Utensils, 
  Building2, 
  Coffee, 
  Package, 
  HeartPulse, 
  GraduationCap, 
  MoreHorizontal, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Award, 
  Headphones,
  Hotel,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDashboardMockup from "@/components/HeroDashboardMockup";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Doonext Billing");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const openDemoWithProduct = (productName: string) => {
    setSelectedProduct(productName);
    setDemoModalOpen(true);
  };

  // Solutions data
  const solutions = [
    {
      title: "Billing Solutions",
      desc: "Smart billing for retail, restaurants, hotels, cafes, & more.",
      icon: Receipt,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d]",
      borderColor: "hover:border-[#5e2b9d]/40",
      link: "/products#billing",
    },
    {
      title: "ERP Solutions",
      desc: "Manage all your operations in one integrated system.",
      icon: Boxes,
      color: "bg-[#40C351]/10 text-[#40C351]",
      borderColor: "hover:border-[#40C351]/40",
      link: "/products#erp",
    },
    {
      title: "CRM Solutions",
      desc: "Track leads, manage customers, and grow your business.",
      icon: Users,
      color: "bg-sky-100 text-sky-700",
      borderColor: "hover:border-sky-300",
      link: "/products#crm",
    },
    {
      title: "Payroll Management",
      desc: "Automate payroll, salaries, leaves, and employee records.",
      icon: Wallet,
      color: "bg-[#EFAF08]/15 text-[#EFAF08]",
      borderColor: "hover:border-[#EFAF08]/40",
      link: "/products#payroll",
    },
    {
      title: "Custom Software",
      desc: "Tailor-made solutions for your unique business needs.",
      icon: Code2,
      color: "bg-[#FB5454]/10 text-[#FB5454]",
      borderColor: "hover:border-[#FB5454]/40",
      link: "/products#custom",
    },
  ];

  // Enhanced Industries data with badges, highlights, icons, and theme accents
  const industries = [
    {
      name: "Retail & Supermarkets",
      badge: "Barcode POS",
      desc: "Supermarkets, apparel, electronics & kirana stores with ultra-fast billing.",
      icon: Store,
      features: ["Barcode scan <0.2s", "Low stock alerts", "GST & E-way bills"],
      iconColor: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
      badgeColor: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
      cardBorder: "hover:border-emerald-400 group-hover:shadow-emerald-500/10",
      link: "/products#billing",
    },
    {
      name: "Restaurants & Bars",
      badge: "Kitchen KOT",
      desc: "Fine dining, QSRs, food courts & cloud kitchens with live table tracking.",
      icon: Utensils,
      features: ["Live table layout", "Multi-station KOT", "Captain waiter app"],
      iconColor: "text-amber-600 bg-amber-50 group-hover:bg-[#EFAF08] group-hover:text-white",
      badgeColor: "bg-amber-100/80 text-amber-800 border-amber-200",
      cardBorder: "hover:border-[#EFAF08] group-hover:shadow-amber-500/10",
      link: "/products#restaurant",
    },
    {
      name: "Hotels & Stays",
      badge: "Room ERP",
      desc: "Boutique hotels, resorts, lodges & service apartments with room matrix.",
      icon: Hotel,
      features: ["Room grid & check-in", "ID proof archive", "Unified folio billing"],
      iconColor: "text-sky-600 bg-sky-50 group-hover:bg-sky-600 group-hover:text-white",
      badgeColor: "bg-sky-100/80 text-sky-800 border-sky-200",
      cardBorder: "hover:border-sky-400 group-hover:shadow-sky-500/10",
      link: "/products#hotel",
    },
    {
      name: "Cafes & Bakeries",
      badge: "Quick Touch",
      desc: "Coffee shops, bakeries & sweet stalls with recipe costing & combo deals.",
      icon: Coffee,
      features: ["Speed counter POS", "Recipe ingredient cost", "Combos & discounts"],
      iconColor: "text-[#5e2b9d] bg-[#5e2b9d]/10 group-hover:bg-[#5e2b9d] group-hover:text-white",
      badgeColor: "bg-[#5e2b9d]/15 text-[#5e2b9d] border-[#5e2b9d]/20",
      cardBorder: "hover:border-[#5e2b9d] group-hover:shadow-[#5e2b9d]/10",
      link: "/products#restaurant",
    },
    {
      name: "Wholesale & Distribution",
      badge: "B2B & Godowns",
      desc: "FMCG distributors, traders & multi-warehouse depots with credit ledger.",
      icon: Package,
      features: ["Multi-godown sync", "Credit limits & ledger", "Bulk GST invoicing"],
      iconColor: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white",
      badgeColor: "bg-indigo-100/80 text-indigo-800 border-indigo-200",
      cardBorder: "hover:border-indigo-400 group-hover:shadow-indigo-500/10",
      link: "/products#erp",
    },
    {
      name: "Healthcare & Clinics",
      badge: "Pharma POS",
      desc: "Chemists, clinics & diagnostics with drug batch & expiry date management.",
      icon: HeartPulse,
      features: ["Batch & expiry alert", "Doctor Rx records", "Schedule H reports"],
      iconColor: "text-rose-600 bg-rose-50 group-hover:bg-[#FB5454] group-hover:text-white",
      badgeColor: "bg-rose-100/80 text-rose-800 border-rose-200",
      cardBorder: "hover:border-[#FB5454] group-hover:shadow-rose-500/10",
      link: "/products#billing",
    },
    {
      name: "Education & Institutes",
      badge: "Fee & Payroll",
      desc: "Schools, academies & coaching institutes with installment fee management.",
      icon: GraduationCap,
      features: ["Student fee receipts", "Staff biometric payroll", "Batch scheduling"],
      iconColor: "text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
      badgeColor: "bg-blue-100/80 text-blue-800 border-blue-200",
      cardBorder: "hover:border-blue-400 group-hover:shadow-blue-500/10",
      link: "/products#payroll",
    },
    {
      name: "Custom Enterprises",
      badge: "Custom ERP",
      desc: "Manufacturing, logistics & custom agencies with tailored operational logic.",
      icon: Code2,
      features: ["Bespoke workflow logic", "Custom CRM & pipeline", "Dedicated API hooks"],
      iconColor: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      badgeColor: "bg-teal-100/80 text-teal-800 border-teal-200",
      cardBorder: "hover:border-teal-400 group-hover:shadow-teal-500/10",
      link: "/products#custom",
    },
  ];

  // Products Showcase data with clean solid illustrations
  const products = [
    {
      title: "Doonext Billing",
      desc: "Perfect billing solution for retail stores and shops.",
      tag: "Retail & POS",
      illustration: (
        <div className="w-full h-40 bg-[#40C351]/10 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-[#40C351]/20">
          <div className="flex items-center gap-3">
            <div className="w-16 h-20 bg-white rounded-lg shadow-md border border-[#40C351]/30 p-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="w-6 h-1.5 bg-[#40C351] rounded" />
                <div className="w-10 h-1 bg-slate-200 rounded" />
                <div className="w-8 h-1 bg-slate-200 rounded" />
              </div>
              <div className="text-[9px] font-bold text-[#40C351]">₹450.00</div>
            </div>
            <div className="w-20 h-24 bg-[#282023] rounded-xl p-2.5 text-white flex flex-col justify-between shadow-lg">
              <div className="w-full h-10 bg-slate-800 rounded flex items-center justify-center text-[10px] text-[#40C351] font-bold">
                POS ACTIVE
              </div>
              <div className="flex justify-between items-center text-[8px] text-slate-300">
                <span>BARCODE</span>
                <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Doonext Restaurant",
      desc: "Complete restaurant management with billing and KOT.",
      tag: "Food & Beverage",
      illustration: (
        <div className="w-full h-40 bg-[#EFAF08]/15 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-[#EFAF08]/30">
          <div className="flex items-center gap-3">
            <div className="w-18 h-22 bg-white rounded-xl shadow-md border border-[#EFAF08]/40 p-2 flex flex-col justify-between">
              <div className="text-[10px] font-bold text-[#282023]">Table #04</div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-slate-600"><span>1x Pizza</span><span>₹320</span></div>
                <div className="flex justify-between text-[8px] text-slate-600"><span>2x Juice</span><span>₹160</span></div>
              </div>
              <span className="text-[8px] font-bold bg-[#EFAF08]/20 text-[#282023] px-1 py-0.5 rounded text-center">KOT Sent</span>
            </div>
            <div className="w-16 h-18 bg-[#5e2b9d] text-white rounded-lg p-2 flex flex-col justify-center items-center gap-1 shadow-md">
              <Utensils className="w-5 h-5 text-[#EFAF08]" />
              <span className="text-[8px] font-bold">Kitchen KOT</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Doonext Hotel",
      desc: "Hotel management system with reservation & billing.",
      tag: "Hospitality ERP",
      illustration: (
        <div className="w-full h-40 bg-sky-50 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-sky-100">
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 bg-white rounded-xl shadow-md border border-sky-200 p-2.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <Hotel className="w-4 h-4 text-sky-600" />
                <span className="text-[8px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 rounded">Booked</span>
              </div>
              <div className="text-[9px] font-bold text-[#282023]">Room 302 - Deluxe</div>
              <div className="text-[8px] text-slate-500">Check-in: 02:00 PM</div>
              <div className="w-full bg-[#5e2b9d] text-white text-[8px] text-center py-0.5 rounded font-bold">Checkout</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Doonext CRM",
      desc: "Customer relationship management made simple.",
      tag: "Sales & Leads",
      illustration: (
        <div className="w-full h-40 bg-[#5e2b9d]/10 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-[#5e2b9d]/20">
          <div className="flex items-center gap-3">
            <div className="w-20 h-22 bg-white rounded-xl shadow-md border border-[#5e2b9d]/20 p-2 flex flex-col justify-between">
              <div className="text-[9px] font-bold text-[#5e2b9d]">Lead Pipeline</div>
              <div className="space-y-1">
                <div className="w-full bg-[#5e2b9d]/15 text-[#5e2b9d] text-[7px] px-1 py-0.5 rounded font-bold">Hot: 24 Leads</div>
                <div className="w-full bg-[#40C351]/15 text-[#40C351] text-[7px] px-1 py-0.5 rounded font-bold">Won: 18 Deals</div>
              </div>
              <div className="text-[8px] font-bold text-[#282023]">₹8,40,000</div>
            </div>
            <div className="w-14 h-16 bg-[#5e2b9d] rounded-lg text-white p-1.5 flex flex-col items-center justify-center gap-1 shadow">
              <Users className="w-5 h-5 text-purple-200" />
              <span className="text-[7px]">Conversion</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Doonext Payroll",
      desc: "Smart payroll and HR management solution.",
      tag: "HR & Compliance",
      illustration: (
        <div className="w-full h-40 bg-[#FB5454]/10 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-[#FB5454]/20">
          <div className="flex items-center gap-3">
            <div className="w-22 h-22 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex flex-col justify-between">
              <div className="text-[9px] font-bold text-[#282023]">Payslip March</div>
              <div className="space-y-1 text-[8px] text-slate-600">
                <div className="flex justify-between"><span>Basic:</span><span>₹45,000</span></div>
                <div className="flex justify-between"><span>PF / TDS:</span><span className="text-[#FB5454] font-bold">-₹3,200</span></div>
              </div>
              <div className="text-[8px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 py-0.5 rounded text-center">Auto-Disbursed</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Doonext Billing has completely changed the way we manage our store. It's fast, easy and reliable.",
      author: "Rajesh Kumar",
      role: "Retail Business Owner",
    },
    {
      text: "Doonext Restaurant helped us streamline our orders, billing and kitchen operations.",
      author: "Priya Sharma",
      role: "Restaurant Manager",
    },
    {
      text: "Excellent support and features! Highly recommended for any growing business.",
      author: "Arvind Patel",
      role: "Business Owner",
    },
    {
      text: "The best payroll solution we've used. Saves time and 100% accurate.",
      author: "Neha Verma",
      role: "HR Manager",
    },
  ];

  // Verified Businesses & Clients Across India
  const trustedBrands = [
    {
      name: "Grand Royale Hotels",
      category: "Luxury Hospitality",
      location: "Goa & Hyderabad",
      icon: Hotel,
      color: "bg-sky-500/10 text-sky-600 border-sky-200",
    },
    {
      name: "GreenMart Supermarkets",
      category: "Retail Chain (12 Outlets)",
      location: "Bengaluru & Mysuru",
      icon: Store,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      name: "Urban Spice & Bistro",
      category: "Multi-Outlet Fine Dine",
      location: "Mumbai & Pune",
      icon: Utensils,
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      name: "Apex Healthcare & Pharma",
      category: "Pharmacy Network",
      location: "Delhi NCR",
      icon: HeartPulse,
      color: "bg-rose-500/10 text-rose-600 border-rose-200",
    },
    {
      name: "Velox Logistics & FMCG",
      category: "B2B Wholesale Depot",
      location: "Ahmedabad & Surat",
      icon: Package,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    },
    {
      name: "The Daily Roast Cafe",
      category: "Artisan Bakery & Cafe",
      location: "Kochi & Chennai",
      icon: Coffee,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
    },
    {
      name: "Aura Trends Lifestyle",
      category: "Fashion Retail POS",
      location: "Kolkata & Patna",
      icon: Sparkles,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      name: "Zenith EduTech Academies",
      category: "Education & HRMS",
      location: "Jaipur & Chandigarh",
      icon: GraduationCap,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
  ];

  // High-Impact Trust Metrics
  const trustMetrics = [
    { value: "500+", label: "Active Businesses", sub: "Across 18+ Indian States", icon: Building2, color: "text-[#5e2b9d]" },
    { value: "₹250Cr+", label: "Gross Billing Volume", sub: "Processed seamlessly", icon: Wallet, color: "text-[#40C351]" },
    { value: "10M+", label: "Invoices & KOTs", sub: "Sub-second generation", icon: Receipt, color: "text-[#EFAF08]" },
    { value: "99.98%", label: "Operational Uptime", sub: "Offline-first reliability", icon: ShieldCheck, color: "text-sky-600" },
  ];

  return (
    <div className="min-h-screen text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white">
      {/* Navbar */}
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />

      {/* Demo Modal */}
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultProduct={selectedProduct}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-purple-100/60 bg-gradient-to-b from-[#f8f3fd] via-[#fbf9fe] to-transparent">
          {/* Tech Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-tech opacity-70 pointer-events-none" />
          
          {/* Ambient Radiant Glow Blobs with Breathing Animations */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5e2b9d]/12 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-[#40C351]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow-delayed" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[520px] h-64 bg-[#EFAF08]/08 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* 1. Live Announcement Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#5e2b9d]/10 via-[#40C351]/10 to-[#5e2b9d]/10 border border-[#5e2b9d]/25 text-xs font-medium text-[#282023] shadow-2xs backdrop-blur-xs hover:border-[#5e2b9d]/50 transition-all">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40C351] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40C351]" />
                  </span>
                  <span className="font-medium text-[11px] sm:text-xs text-[#282023]">Next-Gen Business Suite</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#5e2b9d] font-bold text-[11px] sm:text-xs flex items-center gap-1">
                    500+ Outlets in India 🇮🇳
                  </span>
                </div>

                {/* 2. Elevated Headline with Gradient Shimmer Animation */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#282023] leading-[1.14]">
                  Smart Software <br className="hidden sm:inline" />
                  Solutions for Every{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#5e2b9d] via-[#9333ea] to-[#40C351] bg-clip-text text-transparent animate-gradient-shimmer">
                      Growing Business
                    </span>
                    {/* Decorative curved brush stroke */}
                    <svg className="absolute -bottom-2.5 left-0 w-full h-2.5 text-[#5e2b9d]/30" viewBox="0 0 260 12" fill="none" preserveAspectRatio="none">
                      <path d="M2 9C75 2 185 2 258 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                {/* 3. Subheadline */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Doonext provides high-performance, offline-first billing POS, multi-branch ERP, CRM, and payroll software. Experience sub-second checkout speeds with zero internet downtime.
                </p>

                {/* 4. Enhanced CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => openDemoWithProduct("Doonext Billing")}
                    className="px-8 py-3.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#5e2b9d]/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 group"
                  >
                    <span>Request Free Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <Link
                    href="/products"
                    className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] hover:text-[#5e2b9d] font-bold text-sm sm:text-base border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span>Explore Products</span>
                  </Link>
                </div>

                {/* 5. Four Micro Trust Chips with Hover Animations */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs hover:-translate-y-0.5 hover:shadow-xs hover:border-[#40C351]/50 transition-all duration-200 cursor-default">
                    <Zap className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                    <span>&lt;0.2s POS Scan</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs hover:-translate-y-0.5 hover:shadow-xs hover:border-[#5e2b9d]/50 transition-all duration-200 cursor-default">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5e2b9d] shrink-0" />
                    <span>Offline-First</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs hover:-translate-y-0.5 hover:shadow-xs hover:border-[#EFAF08]/50 transition-all duration-200 cursor-default">
                    <Receipt className="w-3.5 h-3.5 text-[#EFAF08] shrink-0" />
                    <span>GST Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs hover:-translate-y-0.5 hover:shadow-xs hover:border-sky-400 transition-all duration-200 cursor-default">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Zero Setup Fee</span>
                  </div>
                </div>

                {/* 6. Social Proof & Star Rating Strip */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="flex -space-x-2 overflow-hidden shrink-0">
                    <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#5e2b9d] text-white text-[10px] font-bold flex items-center justify-center">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#40C351] text-white text-[10px] font-bold flex items-center justify-center">
                      RM
                    </div>
                    <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#EFAF08] text-white text-[10px] font-bold flex items-center justify-center">
                      AJ
                    </div>
                    <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#282023] text-white text-[10px] font-bold flex items-center justify-center">
                      +500
                    </div>
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center text-amber-500 gap-1">
                      <span className="tracking-tighter">★★★★★</span>
                      <span className="font-bold text-[#282023] ml-0.5">4.9 / 5</span>
                    </div>
                    <p className="text-slate-500 text-[11px]">Recommended by 500+ store owners &amp; restaurateurs</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero SaaS Mockup */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <HeroDashboardMockup />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. TRUSTED BY 500+ BUSINESSES ACROSS INDIA */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white/80 backdrop-blur-xs border-y border-slate-200/70 relative overflow-hidden">
          {/* Subtle dot pattern & ambient glow */}
          <div className="absolute inset-0 bg-dots-tech opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5e2b9d]/[0.03] via-transparent to-[#40C351]/[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header with Pill & Title */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-2.5 bg-[#5e2b9d]/10 px-3.5 py-1 rounded-full border border-[#5e2b9d]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>PROVEN AT SCALE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282023] tracking-tight">
                Trusted by <span className="text-[#5e2b9d]">500+ Businesses</span> Across India
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                From bustling retail stores and high-volume restaurants to boutique hotels and wholesale depots.
              </p>
            </div>

            {/* 4 High-Trust Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {trustMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#5e2b9d]/30 transition-all group text-left flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl sm:text-3xl font-bold text-[#282023] tracking-tight group-hover:text-[#5e2b9d] transition-colors">
                        {metric.value}
                      </div>
                      <div className={`w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center ${metric.color} shadow-xs group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#282023]">{metric.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{metric.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Infinite Marquee of Verified Client Brands */}
            <div className="relative py-2 overflow-hidden">
              {/* Left & Right gradient fades for smooth marquee look */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center gap-4 sm:gap-6">
                {[...trustedBrands, ...trustedBrands].map((brand, idx) => {
                  const Icon = brand.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#5e2b9d]/40 transition-all duration-300 shrink-0 group cursor-default"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${brand.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors whitespace-nowrap">
                          {brand.name}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 whitespace-nowrap">
                          <span className="font-medium text-[#5e2b9d]">{brand.category}</span>
                          <span>•</span>
                          <span>{brand.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Trust Guarantee Pills */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                <span>100% GST &amp; E-Way Bill Ready</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                <span>0.2s High Speed POS Scanning</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                <span>Offline-First (Zero Downtime Billing)</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                <span>Free Onsite &amp; Remote Onboarding</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHAT WE OFFER -> Modern Bento Grid Ecosystem */}
        {/* ========================================================================= */}
        <section className="py-24 bg-gradient-to-b from-transparent via-[#faf7fd]/70 to-transparent border-t border-slate-200/70 relative overflow-hidden">
          {/* Ambient background glow decoration & grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-35 pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Layers className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>WHAT WE OFFER</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Complete Software Ecosystem <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">to Scale Every Dimension</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Connect your sales counter, back-office inventory, customer pipeline, and team operations into one unified, ultra-fast system.
              </p>
            </div>

            {/* Modern Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Bento Card 1: Flagship Billing & POS (Span 7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#5e2b9d]/25 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#5e2b9d]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shadow-xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-all duration-300">
                        <Receipt className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#5e2b9d] uppercase tracking-wider block">
                          FLAGSHIP SOLUTION
                        </span>
                        <h3 className="text-2xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                          Billing &amp; Smart POS
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/30 flex items-center gap-1.5 shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                      0.2s Scan Speed
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Engineered for high-traffic supermarkets, restaurants, boutiques, and multi-counter retail stores. Generate GST-compliant tax invoices, print instant receipts, and manage counter drawers seamlessly.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      "Barcode Scanning (<0.2s response)",
                      "GST Invoice & E-Way Bill Generator",
                      "Multi-Counter & Multi-Branch Live Sync",
                      "Thermal (2\"/3\") & Laser A4 Printing",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Interactive POS Preview Strip */}
                  <div className="p-4 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#40C351] animate-ping" />
                      <div className="text-xs">
                        <span className="font-bold text-[#282023]">Active POS Counter: </span>
                        <span className="text-slate-500">Scanner Ready • GST Auto-Calc • Offline Safe</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openDemoWithProduct("Doonext Billing")}
                      className="px-3.5 py-1.5 rounded-lg bg-[#5e2b9d] text-white text-[11px] font-bold hover:bg-[#4d2282] transition-colors shrink-0 shadow-xs cursor-pointer"
                    >
                      Test POS
                    </button>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <Link
                    href="/products#billing"
                    className="text-xs sm:text-sm font-bold text-[#5e2b9d] hover:text-[#4d2282] flex items-center gap-1.5 group/btn"
                  >
                    <span>Explore Complete Billing Suite</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => openDemoWithProduct("Doonext Billing")}
                    className="text-xs font-bold text-[#40C351] hover:underline cursor-pointer"
                  >
                    Schedule Live Demo →
                  </button>
                </div>
              </div>

              {/* Bento Card 2: ERP Solutions (Span 5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#40C351]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#40C351]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shadow-xs group-hover:bg-[#40C351] group-hover:text-white transition-all duration-300">
                        <Boxes className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#40C351] uppercase tracking-wider block">
                          OPERATIONS &amp; SUPPLY
                        </span>
                        <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#40C351] transition-colors">
                          ERP &amp; Inventory
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Multi-Godown
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Centralize multi-warehouse stock levels, automate low-inventory reorders, track batch expiries, and balance supplier purchase ledgers.
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 mb-6">
                    {[
                      "Multi-Warehouse Real-Time Stock Tracking",
                      "Automated Low-Stock Reorder Triggers",
                      "Purchase Orders & Supplier Ledgers",
                      "Batch, Lot & Expiry Date Management",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/products#erp"
                    className="text-xs sm:text-sm font-bold text-[#40C351] hover:text-emerald-700 flex items-center gap-1.5 group/btn"
                  >
                    <span>Explore ERP Operations</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-bold text-slate-400">Zero Stock Leakage</span>
                </div>
              </div>

              {/* Bento Bottom Row (3 Equal Cards: CRM, Payroll, Custom Software) */}
              
              {/* Card 3: CRM Solutions (Span 4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-xs group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      WhatsApp CRM
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#282023] group-hover:text-sky-600 transition-colors">
                    CRM &amp; Growth
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Track leads across pipeline stages, automate WhatsApp follow-ups, and manage customer credit balances.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Visual Lead Stages &amp; Pipeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Automated WhatsApp / SMS Deals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Customer Credit &amp; Loyalty Ledger</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/products#crm"
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                  >
                    <span>View CRM Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">+35% Retention</span>
                </div>
              </div>

              {/* Card 4: Payroll & HR Management (Span 4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#EFAF08] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs group-hover:bg-[#EFAF08] group-hover:text-white transition-all duration-300">
                      <Wallet className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Auto PF &amp; ESI
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#282023] group-hover:text-[#EFAF08] transition-colors">
                    Payroll &amp; HRMS
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Biometric attendance tracking, automated deductions, leave requests, and instant digital payslips.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Biometric Attendance Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Automated PF, ESI &amp; TDS Calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>1-Click Digital Payslip Distribution</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/products#payroll"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group/btn"
                  >
                    <span>View Payroll Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">1-Click Disbursal</span>
                </div>
              </div>

              {/* Card 5: Custom Enterprise Software (Span 4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#FB5454] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-xs group-hover:bg-[#FB5454] group-hover:text-white transition-all duration-300">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      Bespoke Logic
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#282023] group-hover:text-[#FB5454] transition-colors">
                    Custom Software
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Tailored software architecture, custom ERP extensions, legacy database migration, and specialized logic.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Custom Business Workflow Engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>API Webhooks &amp; Hardware Bridge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                      <span>Dedicated Engineering &amp; SLA</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/products#custom"
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group/btn"
                  >
                    <span>Custom Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">100% Customized</span>
                </div>
              </div>

            </div>

            {/* Bottom Ecosystem Capabilities Strip */}
            <div className="mt-12 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-[#282023]">
                <Sparkles className="w-4 h-4 text-[#5e2b9d]" />
                <span>Seamless Hardware &amp; Ecosystem Integrations:</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Thermal Printers (2&quot;/3&quot;)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Barcode &amp; 2D QR Scanners</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Biometric Attendance</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> WhatsApp Business API</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> GST E-Invoicing Portal</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. INDUSTRIES WE SERVE -> Software for Every Industry */}
        {/* ========================================================================= */}
        <section className="relative py-24 bg-gradient-to-b from-white/80 via-[#faf7fd]/70 to-white/80 backdrop-blur-xs border-t border-slate-200/70 overflow-hidden">
          {/* Subtle ambient decorative pattern & blurs */}
          <div className="absolute inset-0 bg-dots-tech opacity-35 pointer-events-none" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>INDUSTRIES WE SERVE</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Software Tailored to <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Your Exact Industry Needs</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Ready-to-use workflows, custom receipt layouts, and industry-specific features engineered to get your business running in minutes.
              </p>
            </div>

            {/* 8 Enhanced Industry Cards Grid */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={idx}
                    href={ind.link}
                    className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${ind.cardBorder} cursor-pointer relative overflow-hidden`}
                  >
                    {/* Top Glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5e2b9d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Icon & Badge Row */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${ind.iconColor}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border ${ind.badgeColor}`}>
                          {ind.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {ind.desc}
                      </p>

                      {/* Feature Pills */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
                        {ind.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#5e2b9d] group-hover:text-[#4d2282] flex items-center gap-1">
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 group-hover:text-[#40C351] transition-colors">
                        Live Demo
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Custom Industry Callout Banner */}
            <div className="mt-12 rounded-2xl bg-white border border-[#5e2b9d]/20 shadow-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#5e2b9d]/10 border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#282023]">
                    Don't see your specific trade or industry?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Doonext's flexible architecture allows custom field setups, specialized tax structures, and bespoke modules.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => openDemoWithProduct("Custom Enterprise Solution")}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
                >
                  Request Custom Demo
                </button>
                <Link
                  href="/contact"
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#282023] border border-slate-200 text-xs font-bold shadow-xs transition-all text-center"
                >
                  Contact Team
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OUR PRODUCTS -> Powerful Products to Simplify Your Business */}
        {/* ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#faf7fd]/70 to-transparent border-t border-slate-200/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            
            <div className="inline-block text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-2 bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
              OUR PRODUCTS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#282023] tracking-tight">
              Powerful Products to Simplify Your Business
            </h2>
            
            <p className="mt-2 text-base text-slate-600 max-w-2xl mx-auto">
              Discover our range of easy-to-use and powerful software products
            </p>

            {/* 5 Products Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {products.map((prod, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-3">
                    {prod.illustration}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#5e2b9d] tracking-wider uppercase mb-1">
                        {prod.tag}
                      </div>
                      <h3 className="text-base font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/products"
                        className="text-xs font-bold text-[#5e2b9d] hover:text-[#4d2282] flex items-center gap-1 group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => openDemoWithProduct(prod.title)}
                        className="text-[11px] font-bold text-[#40C351] bg-[#40C351]/10 px-2 py-1 rounded hover:bg-[#40C351]/20 transition-colors"
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHY CHOOSE DOONEXT? -> High-Converting Pillar Section */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white/80 backdrop-blur-xs border-t border-slate-200/70 relative overflow-hidden">
          {/* Subtle ambient lighting & dots pattern */}
          <div className="absolute inset-0 bg-dots-tech opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Top Grid: Value Pitch & High-Tech Capability Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Bold Narrative, Checkmarks & Trust Proof */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5e2b9d]" />
                  <span>WHY CHOOSE DOONEXT?</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#282023] tracking-tight leading-[1.18]">
                  The Next-Gen Engine <br />
                  <span className="text-[#5e2b9d]">Engineered for Growth</span>
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Traditional software is slow, crashes when internet drops, and locks you in. Doonext combines sub-second speed, offline-first reliability, and dedicated on-ground Indian support to keep your business running effortlessly.
                </p>

                {/* 4 Key Pillar Bullets */}
                <div className="space-y-3 pt-1">
                  {[
                    {
                      title: "100% Offline-First Architecture",
                      desc: "Continue counter billing and KOT printing even without internet.",
                    },
                    {
                      title: "Ultra-Fast Scan-to-Bill (<0.2s)",
                      desc: "Process rush-hour queues instantly with zero lag or freezing.",
                    },
                    {
                      title: "Full GST, E-Way Bill & Hardware Ready",
                      desc: "Supports thermal printers, barcode scanners, and auto-tax filing.",
                    },
                    {
                      title: "24/7 Dedicated Indian Phone & WhatsApp Desk",
                      desc: "Get instant assistance from engineers who understand your trade.",
                    },
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#282023]">{pillar.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action & Trust Bar */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openDemoWithProduct("Doonext Suite")}
                    className="px-7 py-3.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/about"
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] font-bold text-sm border border-slate-200 shadow-xs transition-all text-center"
                  >
                    About Doonext
                  </Link>
                </div>

              </div>

              {/* Right Column: 4 Dynamic Interactive Value Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Card 1: Offline-First Reliability */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs group-hover:bg-[#40C351] group-hover:text-white transition-all duration-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Zero Downtime
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#282023] group-hover:text-emerald-700 transition-colors">
                      Offline-First Engine
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Power outage or internet failure? Never miss a sale. Keep billing locally and sync smoothly once reconnected.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                      100% Local Cache Active
                    </span>
                    <span className="text-xs font-bold text-slate-400">99.98% SLA</span>
                  </div>
                </div>

                {/* Card 2: Sub-Second Speed */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#5e2b9d] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5e2b9d]/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shadow-xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-all duration-300">
                        <Zap className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#5e2b9d]/15 text-[#5e2b9d] border border-[#5e2b9d]/20">
                        &lt; 0.2s Scan Speed
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                      Lightning Performance
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Built with modern reactive architecture. Process thousands of barcodes per hour without queue delays or freezing.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#5e2b9d]">
                      Instant Hardware Sync
                    </span>
                    <span className="text-xs font-bold text-slate-400">500+ Items/Min</span>
                  </div>
                </div>

                {/* Card 3: 100% Indian Compliance */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-xs group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                        Govt Compliant
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#282023] group-hover:text-sky-600 transition-colors">
                      GST &amp; E-Way Bills
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Instant HSN lookup, auto-split CGST/SGST/IGST, automated B2B e-invoices, and 1-click GSTR-1 audit exports.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-600">
                      1-Click Tax Exports
                    </span>
                    <span className="text-xs font-bold text-slate-400">100% Accurate</span>
                  </div>
                </div>

                {/* Card 4: 24/7 Dedicated Indian Support */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#EFAF08] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs group-hover:bg-[#EFAF08] group-hover:text-white transition-all duration-300">
                        <Headphones className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        &lt; 5 Min Response
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#EFAF08] transition-colors">
                      Dedicated Local Support
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Talk directly to real technical experts on phone, WhatsApp, and remote desk. Free migration from your legacy system.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b58300]">
                      WhatsApp &amp; Phone Desk
                    </span>
                    <span className="text-xs font-bold text-slate-400">Free Setup</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Comparison Matrix: Doonext vs Legacy Software */}
            <div className="mt-16 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/20 p-6 sm:p-8 shadow-xs">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5e2b9d]">THE DOONEXT ADVANTAGE</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#282023] mt-1">Why Modern Brands Switch from Legacy POS to Doonext</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                {/* Legacy Software Box */}
                <div className="p-5 rounded-2xl bg-white border border-rose-200/80 space-y-3">
                  <div className="font-bold text-rose-600 flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Traditional / Legacy Software
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2 text-rose-700/80">✕ Crashes or freezes during internet / server disruptions</li>
                    <li className="flex items-center gap-2 text-rose-700/80">✕ Slow, clunky desktop interface with steep learning curves</li>
                    <li className="flex items-center gap-2 text-rose-700/80">✕ Complex manual updates and costly per-counter license fees</li>
                    <li className="flex items-center gap-2 text-rose-700/80">✕ Slow support tickets with days of waiting time</li>
                  </ul>
                </div>

                {/* Doonext Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#40C351]/60 shadow-xs space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#40C351] text-white text-[9px] font-bold px-3 py-0.5 rounded-bl-lg uppercase">
                    Modern Standard
                  </div>
                  <div className="font-bold text-[#40C351] flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                    Doonext Intelligent Suite
                  </div>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2 text-[#282023]"><CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" /> 100% Offline-first — never stops during internet cuts</li>
                    <li className="flex items-center gap-2 text-[#282023]"><CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" /> Ultra-clean intuitive UI — staff learns in under 10 minutes</li>
                    <li className="flex items-center gap-2 text-[#282023]"><CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" /> Seamless automatic cloud sync &amp; multi-branch visibility</li>
                    <li className="flex items-center gap-2 text-[#282023]"><CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" /> Instant WhatsApp, phone &amp; remote support whenever needed</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. WHAT OUR CLIENTS SAY -> Testimonials */}
        {/* ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#faf7fd]/70 to-transparent border-t border-slate-200/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-2 bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
                WHAT OUR CLIENTS SAY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282023] tracking-tight">
                Trusted by Businesses, Loved by Users
              </h2>
            </div>

            {/* Testimonials Container with Slider Arrows */}
            <div className="relative">
              
              {/* Left Arrow */}
              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                aria-label="Previous Testimonial"
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#282023] hover:text-[#5e2b9d] shadow-md items-center justify-center hover:bg-[#5e2b9d]/5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => setActiveTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                aria-label="Next Testimonial"
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#282023] hover:text-[#5e2b9d] shadow-md items-center justify-center hover:bg-[#5e2b9d]/5 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                      activeTestimonialIdx === idx 
                        ? "border-[#5e2b9d]/50 ring-2 ring-[#5e2b9d]/20 shadow-lg -translate-y-1" 
                        : "border-slate-200 shadow-xs hover:border-[#5e2b9d]/30 hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* 5 Stars with #EFAF08 */}
                      <div className="flex items-center gap-1 text-[#EFAF08] mb-4">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-[#EFAF08]" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-slate-600 italic leading-relaxed">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100">
                      <div className="font-bold text-[#282023] text-sm">{item.author}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. CTA BANNER -> Solid Color #5e2b9d */}
        {/* ========================================================================= */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-3xl bg-[#5e2b9d] p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left & Center Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                  <Sparkles className="w-7 h-7 text-[#EFAF08]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-purple-100 text-sm sm:text-base max-w-xl">
                    Join hundreds of businesses using Doonext solutions to grow smarter and faster.
                  </p>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#5e2b9d] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:scale-105 active:scale-100 cursor-pointer"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 text-[#5e2b9d]" />
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
