"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users2, 
  Zap, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  Building2,
  HeartHandshake, 
  TrendingUp,
  MapPin,
  Star,
  Layers,
  Receipt,
  Boxes,
  Store,
  Utensils,
  Headphones,
  MessageSquare,
  Lock,
  Server,
  Clock,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const values = [
    {
      title: "Radical Simplicity",
      badge: "Zero Friction UX",
      desc: "Software should feel like second nature. We design intuitive, uncluttered workflows that any cashier or manager can master in under 10 minutes.",
      icon: Zap,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d]",
      badgeColor: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      borderColor: "hover:border-[#5e2b9d]",
      glowColor: "bg-[#5e2b9d]/5",
      highlights: [
        "Single-screen express checkout",
        "Barcode & keyboard-first navigation",
        "Zero training manual required",
      ],
    },
    {
      title: "Bulletproof Reliability",
      badge: "Offline-First Core",
      desc: "A retail store or busy restaurant cannot pause for the internet. Our offline-first local caching guarantees your billing operations never drop a transaction.",
      icon: ShieldCheck,
      color: "bg-[#40C351]/10 text-[#40C351]",
      badgeColor: "bg-[#40C351]/10 text-[#40C351] border-[#40C351]/25",
      borderColor: "hover:border-[#40C351]",
      glowColor: "bg-[#40C351]/5",
      highlights: [
        "Seamless local database fallback",
        "Automatic background cloud sync",
        "99.98% operational uptime guarantee",
      ],
    },
    {
      title: "Deep Empathy for Trade",
      badge: "Built for Real India",
      desc: "We engineer features based on real retail counters, restaurant kitchens, and wholesale godowns across India — not boardroom assumptions.",
      icon: HeartHandshake,
      color: "bg-sky-50 text-sky-600",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      borderColor: "hover:border-sky-400",
      glowColor: "bg-sky-500/5",
      highlights: [
        "Instant GST, E-Way & thermal receipts",
        "Multi-station kitchen KOT routing",
        "Local phone & WhatsApp assistance",
      ],
    },
    {
      title: "Relentless Innovation",
      badge: "Future-Ready Tech",
      desc: "Technology evolves rapidly. We constantly roll out seamless updates with new regulatory tax rules, smart stock analytics, and hardware integrations.",
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      borderColor: "hover:border-[#EFAF08]",
      glowColor: "bg-amber-500/5",
      highlights: [
        "Cloud auto-updates with zero downtime",
        "Intelligent low-stock reorder alerts",
        "Hardware agnostic compatibility",
      ],
    },
  ];

  const milestones = [
    {
      year: "2015",
      phase: "Genesis & Foundation",
      title: "Born in Coimbatore, Tamil Nadu",
      desc: "Founded by engineers who witnessed Indian retail businesses crippled by slow, crash-prone legacy desktop software. Engineered our first sub-second offline-first POS engine.",
      icon: Store,
      achievement: "First 50 Retail Outlets • Sub-Second Billing Engine",
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      accent: "text-[#5e2b9d]",
      cardBorder: "hover:border-[#5e2b9d]",
    },
    {
      year: "2018",
      phase: "Hospitality & Food ERP",
      title: "Multi-Station KOT & Hotel ERP Suite",
      desc: "Expanded into dynamic restaurant table management, wireless Captain waiter apps, and front-desk room booking ERPs adopted by 150+ hospitality brands across South India.",
      icon: Utensils,
      achievement: "150+ Restaurants & Hotels • Multi-Station KOT Routing",
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600",
      cardBorder: "hover:border-[#EFAF08]",
    },
    {
      year: "2021",
      phase: "Unified Ecosystem",
      title: "Hybrid Cloud ERP, CRM & Biometric Payroll",
      desc: "Unified front-counter billing with back-office multi-warehouse supply chain, automated WhatsApp lead funnels, and biometric payroll compliance into one unified platform.",
      icon: Layers,
      achievement: "Multi-Godown Live Sync • Automated PF/ESI Compliance",
      color: "bg-sky-50 text-sky-600 border-sky-200",
      accent: "text-sky-600",
      cardBorder: "hover:border-sky-400",
    },
    {
      year: "2025+",
      phase: "Nationwide Impact",
      title: "Powering 500+ Enterprises Across 18+ States",
      desc: "Scaling to process ₹250Cr+ in annual GMV with a 99.98% uptime SLA. Trusted by supermarkets, multi-chain restaurants, boutique stays, and FMCG distributors across India.",
      icon: Award,
      achievement: "₹250Cr+ GMV Processed • 10M+ GST Invoices Generated",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600",
      cardBorder: "hover:border-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION -> Dynamic Split Composition */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#f8f4fc] via-white to-[#fafbfc] border-b border-slate-100 overflow-hidden">
          {/* Subtle ambient lighting decorations */}
          <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Narrative & Story */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5e2b9d]/10 border border-[#5e2b9d]/20 text-[#5e2b9d] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ABOUT DOONEXT SOFTWARE</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-[#282023] tracking-tight leading-[1.14]">
                  Pioneering Next-Gen <br className="hidden sm:inline" />
                  Software for India&apos;s <br className="hidden sm:inline" />
                  <span className="text-[#5e2b9d]">
                    Fastest-Growing Businesses
                  </span>
                </h1>

                {/* Subtitle / Paragraph */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Headquartered in Coimbatore, Tamil Nadu, Doonext crafts ultra-fast, offline-first billing, ERP, CRM, and payroll systems that turn everyday retail counters and hospitality operations into seamless profit engines.
                </p>

                {/* Key Pillars Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">Coimbatore, TN</div>
                      <div className="text-[10px] text-slate-500">Innovation Headquarters</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">Offline-First Tech</div>
                      <div className="text-[10px] text-slate-500">Zero Internet Downtime</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">10+ Years of Trust</div>
                      <div className="text-[10px] text-slate-500">Industry Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">500+ Indian Brands</div>
                      <div className="text-[10px] text-slate-500">Active Across 18+ States</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="px-7 py-3.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Free Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/products"
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] font-bold text-sm border border-slate-200 shadow-xs transition-all text-center"
                  >
                    Explore Product Suite
                  </Link>
                </div>

              </div>

              {/* Right Column: Visual Interactive Ecosystem Showcase Card */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="w-full max-w-lg relative">
                  
                  {/* Decorative Background Glow Behind Card */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5e2b9d]/20 via-[#40C351]/20 to-[#5e2b9d]/20 rounded-3xl blur-lg opacity-70" />

                  {/* Main Showcase Panel */}
                  <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
                    
                    {/* Header of Panel */}
                    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#5e2b9d] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                          D
                        </div>
                        <div>
                          <div className="font-bold text-[#282023] text-sm">Doonext Ecosystem</div>
                          <div className="text-[11px] text-slate-500">Connected Cloud &amp; Offline Core</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/25">
                        <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                        Engine v3.8 Active
                      </span>
                    </div>

                    {/* Central Diagram / Node Modules Preview */}
                    <div className="p-5 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 space-y-4">
                      
                      {/* Central Node */}
                      <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#282023]">Doonext Cloud Engine</div>
                            <div className="text-[10px] text-slate-500">Centralized Database &amp; API</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-2 py-0.5 rounded">
                          Unified Hub
                        </span>
                      </div>

                      {/* 3 Connected Branches */}
                      <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                          <Receipt className="w-4 h-4 text-[#5e2b9d] mx-auto mb-1.5" />
                          <div className="text-[11px] font-bold text-[#282023]">Billing POS</div>
                          <div className="text-[9px] text-[#40C351] font-semibold">&lt; 0.2s Scan</div>
                        </div>

                        <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                          <Boxes className="w-4 h-4 text-[#40C351] mx-auto mb-1.5" />
                          <div className="text-[11px] font-bold text-[#282023]">ERP Stock</div>
                          <div className="text-[9px] text-slate-500">Multi-Godown</div>
                        </div>

                        <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
                          <Users2 className="w-4 h-4 text-sky-600 mx-auto mb-1.5" />
                          <div className="text-[11px] font-bold text-[#282023]">CRM &amp; HRMS</div>
                          <div className="text-[9px] text-slate-500">WhatsApp Sync</div>
                        </div>
                      </div>

                    </div>

                    {/* Quick Proof Metrics Row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-500 font-medium">Customer Rating</div>
                          <div className="text-base font-bold text-[#282023] mt-0.5">4.9 / 5.0 ★</div>
                        </div>
                        <div className="flex text-[#EFAF08]">
                          <Star className="w-4 h-4 fill-[#EFAF08]" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-500 font-medium">Uptime Guarantee</div>
                          <div className="text-base font-bold text-[#40C351] mt-0.5">99.98%</div>
                        </div>
                        <ShieldCheck className="w-5 h-5 text-[#40C351]" />
                      </div>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                        100% Indian GST &amp; E-Way Ready
                      </span>
                      <span className="text-[#5e2b9d] font-bold">Made in India 🇮🇳</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. VISION & MISSION -> Purpose & Strategic Horizon */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Target className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>PURPOSE &amp; STRATEGIC HORIZON</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Driven by Purpose, <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Built for Real-World Impact</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                We replace fragile, bloated legacy systems with resilient, lightning-fast operating software designed specifically for the pace of Indian commerce.
              </p>
            </div>

            {/* Mission & Vision Duo Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#5e2b9d]/[0.04] via-white to-[#5e2b9d]/[0.02] border border-[#5e2b9d]/25 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#5e2b9d]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shadow-xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-all duration-300">
                      <Target className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20 uppercase tracking-wider">
                      Why We Build
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors mb-3">
                    Our Mission
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                    To democratize enterprise-grade technology for every business in India — from single retail counters and bustling kitchens to large multi-warehouse distributors — eliminating downtime, human error, and bloated software expenses.
                  </p>

                  {/* Core Commitments List */}
                  <div className="space-y-3 pt-2 border-t border-slate-100 mb-8">
                    {[
                      {
                        title: "Zero Friction Onboarding",
                        desc: "Staff can learn and operate the entire billing counter in under 10 minutes.",
                      },
                      {
                        title: "Affordability Without Compromise",
                        desc: "World-class performance and features priced transparently for Indian SMBs.",
                      },
                      {
                        title: "100% Indian GST & Regulatory Ease",
                        desc: "Built-in automated E-Way bills, HSN auto-splits, and one-click GSTR filing.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
                        <div className="w-5 h-5 rounded-md bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#282023]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#5e2b9d] flex items-center gap-1">
                    <span>Active in 500+ Indian Businesses</span>
                  </span>
                  <span className="font-semibold text-slate-400">Continuous Evolution →</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#40C351]/[0.04] via-white to-[#40C351]/[0.02] border border-[#40C351]/25 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#40C351]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shadow-xs group-hover:bg-[#40C351] group-hover:text-white transition-all duration-300">
                      <Eye className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/25 uppercase tracking-wider">
                      Future Horizon
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#282023] group-hover:text-[#40C351] transition-colors mb-3">
                    Our Vision
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                    To be India&apos;s most trusted business operating ecosystem — recognized for effortless simplicity, offline-first engineering resilience, transparent pricing, and unwavering local customer support.
                  </p>

                  {/* Vision Commitments List */}
                  <div className="space-y-3 pt-2 border-t border-slate-100 mb-8">
                    {[
                      {
                        title: "Unified Multi-Platform Hub",
                        desc: "Seamless synchronization across desktop counters, mobile captain apps & cloud ERP.",
                      },
                      {
                        title: "Bulletproof Offline Resilience",
                        desc: "Guarantee zero business downtime regardless of power or internet disruptions.",
                      },
                      {
                        title: "Proactive Human Support",
                        desc: "Direct phone and WhatsApp technical desks that resolve issues in minutes.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
                        <div className="w-5 h-5 rounded-md bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#282023]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#40C351] flex items-center gap-1">
                    <span>Engineered to Scale to 10,000+ Enterprises</span>
                  </span>
                  <span className="font-semibold text-slate-400">Made for India 🇮🇳</span>
                </div>
              </div>

            </div>

            {/* Bottom 3 Strategic Brand Promises Strip */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Zero Hardware Lock-In</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Plug and play with existing thermal printers, barcode scanners, and machines.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Transparent &amp; Fair</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    No hidden per-counter penalty fees or unexpected license lock-in costs.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Lifetime Support Desk</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Direct phone, WhatsApp &amp; remote support whenever your business needs assistance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SCALE & IMPACT -> By The Numbers */}
        {/* ========================================================================= */}
        <section className="py-24 bg-[#fafbfc] border-b border-slate-100 relative overflow-hidden">
          {/* Subtle background ambient blur */}
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <TrendingUp className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>SCALE, IMPACT &amp; NATIONWIDE TRUST</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Empowering Scaled Commerce <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Across Every Corner of India</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Real-world metrics that reflect our commitment to speed, uptime, and business profitability.
              </p>
            </div>

            {/* 4 Elevated Metric Power Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Metric 1 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#5e2b9d]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5e2b9d]/5 rounded-full blur-xl group-hover:scale-125 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shadow-2xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-all duration-300">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20">
                      18+ States
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors tracking-tight">
                    500+
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-[#282023] mt-2">
                    Active Businesses &amp; Chains
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Powering supermarkets, restaurants, hotels &amp; distributors nationwide.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>12+ Verticals</span>
                  <span className="text-[#5e2b9d]">Growing Fast →</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#40C351]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#40C351]/5 rounded-full blur-xl group-hover:scale-125 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shadow-2xs group-hover:bg-[#40C351] group-hover:text-white transition-all duration-300">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/20">
                      Zero Loss
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-[#282023] group-hover:text-[#40C351] transition-colors tracking-tight">
                    ₹250Cr+
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-[#282023] mt-2">
                    Annual GMV Processed
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Seamless checkout volume with zero discrepancy and accurate ledgers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>100% Audit Ready</span>
                  <span className="text-[#40C351]">Daily Volume →</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#EFAF08] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-2xs group-hover:bg-[#EFAF08] group-hover:text-white transition-all duration-300">
                      <Receipt className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      &lt; 0.2s Scan
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-[#282023] group-hover:text-[#EFAF08] transition-colors tracking-tight">
                    10M+
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-[#282023] mt-2">
                    GST Bills &amp; KOTs Printed
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Rapid counter receipts, kitchen tokens &amp; e-way bills generated.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Thermal &amp; Laser</span>
                  <span className="text-[#b58300]">High Velocity →</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-2xs group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      Offline-First
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-[#282023] group-hover:text-sky-600 transition-colors tracking-tight">
                    99.98%
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-[#282023] mt-2">
                    Uptime &amp; Active SLA
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Guaranteed billing continuity even through internet or power disruptions.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>24/7 Helpline</span>
                  <span className="text-sky-600">Always On →</span>
                </div>
              </div>

            </div>

            {/* Bottom Multi-Vertical Footprint Strip */}
            <div className="mt-12 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-[#282023]">
                <Sparkles className="w-4 h-4 text-[#5e2b9d]" />
                <span>Sector Footprint Across India:</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Retail &amp; Supermarkets</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Restaurants &amp; QSRs</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Hotels &amp; Resorts</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Wholesale &amp; FMCG</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Healthcare &amp; Pharmacies</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CORE VALUES -> What Drives Us */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Ambient background decoration */}
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>WHAT DRIVES US</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Architected on Values, <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Engineered for Trust</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Every line of code and feature we release is anchored by our commitment to speed, simplicity, and rock-solid reliability.
              </p>
            </div>

            {/* 4 Rich Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className={`p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl ${v.borderColor} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1`}
                  >
                    {/* Top Glow Blur */}
                    <div className={`absolute top-0 right-0 w-28 h-28 ${v.glowColor} rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none`} />

                    <div>
                      {/* Top Bar with Icon & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className={`w-13 h-13 rounded-2xl ${v.color} flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${v.badgeColor}`}>
                          {v.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors mb-2">
                        {v.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                        {v.desc}
                      </p>

                      {/* Highlight Bullets */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        {v.highlights.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                      <span>Core Standard</span>
                      <span className="text-[#40C351]">100% Active</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality Pledge Banner */}
            <div className="mt-12 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 p-6 sm:p-7 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-5 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shadow-2xs shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#282023]">Our Engineering &amp; Service Pledge</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    We never lock your proprietary data, never charge hidden per-counter fee penalties, and always provide direct human technical support.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
              >
                Experience the Difference
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OUR JOURNEY -> A Decade of Empowering Businesses */}
        {/* ========================================================================= */}
        <section className="py-24 bg-[#fafbfc] border-b border-slate-100 relative overflow-hidden">
          {/* Ambient blur */}
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>A DECADE OF EXCELLENCE</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                From Coimbatore Roots to <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Nationwide Impact</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                A 10-year journey of listening to Indian business owners, breaking engineering bottlenecks, and building software that just works.
              </p>
            </div>

            {/* Timeline Milestones Cards */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#5e2b9d]/30 before:via-[#40C351]/30 before:to-[#5e2b9d]/30 before:hidden sm:before:block">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Center Node Badge on Timeline */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-[#5e2b9d] shadow-md items-center justify-center text-xs font-bold text-[#5e2b9d] z-10">
                      {m.year}
                    </div>

                    {/* Content Card (Takes half width on sm+) */}
                    <div className="w-full sm:w-[calc(50%-2rem)]">
                      <div className={`p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl ${m.cardBorder} transition-all duration-300 group relative overflow-hidden hover:-translate-y-1`}>
                        
                        {/* Top Bar with Year badge & Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2.5">
                            <span className="sm:hidden text-xs font-bold px-3 py-1 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20">
                              {m.year}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${m.color}`}>
                              {m.phase}
                            </span>
                          </div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${m.color} shadow-2xs group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors mb-2">
                          {m.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">
                          {m.desc}
                        </p>

                        {/* Achievement Tag */}
                        <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" />
                          <span className="text-slate-800 font-semibold">{m.achievement}</span>
                        </div>
                      </div>
                    </div>

                    {/* Empty Space for the other side on desktop */}
                    <div className="hidden sm:block w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>

            {/* Future Vision 2026+ Roadmap Card */}
            <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#5e2b9d] via-[#4d2282] to-[#5e2b9d] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Sparkles className="w-7 h-7 text-[#EFAF08]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-purple-200 uppercase tracking-widest">
                    THE ROAD AHEAD • 2026 &amp; BEYOND
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-0.5">
                    Next-Gen AI Forecasting &amp; Automated WhatsApp Commerce
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-xl">
                    Engineering predictive stock reordering, instant WhatsApp customer ordering, and seamless multi-channel POS for 10,000+ businesses across India.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-3 rounded-full bg-white text-[#5e2b9d] font-bold text-xs sm:text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
              >
                Join the Journey
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. OUR CULTURE & SUPPORT DNA -> Built in Coimbatore */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <HeartHandshake className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>OUR CULTURE &amp; SUPPORT DNA</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Crafted in Coimbatore. <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Engineered for Human Connection.</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                We believe exceptional software is nothing without empathetic, lightning-fast customer support that answers when your business needs it most.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Pillar 1 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#5e2b9d]/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#5e2b9d]/20 text-[#5e2b9d] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] mb-3">
                    &lt; 3 Min Response
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">Direct Engineer Desk</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Zero automated bot blackholes. Reach real product engineers on phone and WhatsApp who resolve issues in minutes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-[#5e2b9d] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Call &amp; WhatsApp Ready</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#40C351]/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#40C351]/20 text-[#40C351] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351] mb-3">
                    Indian Data Centers
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">100% Data Sovereignty</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your financial, inventory &amp; customer ledgers are strictly hosted on ISO-certified Indian servers with hourly backups.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-[#40C351] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Bank-Grade Encryption</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#EFAF08] transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 text-[#EFAF08] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 mb-3">
                    Bi-Weekly Releases
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">Merchant-Driven Sprints</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We ship continuous improvements and tax compliance updates every 14 days directly requested by store owners.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-amber-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Zero Downtime Updates</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-sky-400 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 text-sky-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 mb-3">
                    Full Onboarding
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">Complete Setup Support</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    From thermal printers to item catalog imports and staff training, our team guides you from day zero with zero disruption.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-sky-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Free Setup &amp; Training</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING BOTTOM CTA */}
        {/* ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#5e2b9d] via-[#4d2282] to-[#3b1766] p-8 sm:p-14 shadow-2xl text-white relative overflow-hidden">
            {/* Ambient glows inside CTA banner */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#40C351]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#EFAF08]" />
                  <span>GET STARTED TODAY</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Ready to Experience <br className="hidden sm:inline" />
                  the Doonext Difference?
                </h3>

                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  Join 500+ forward-thinking Indian businesses. Get a customized 1-on-1 walkthrough tailored specifically for your trade counter, restaurant, or godown.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-purple-200">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> 14-Day Free Walkthrough</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> No Credit Card Required</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Dedicated Setup Specialist</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#5e2b9d] font-bold text-sm hover:bg-slate-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-xs transition-all text-center"
                >
                  Contact Coimbatore HQ
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
