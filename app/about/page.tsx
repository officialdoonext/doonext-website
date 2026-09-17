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
  Lock, 
  Clock, 
  Phone, 
  Hotel, 
  HeartPulse, 
  ChevronRight, 
  Activity, 
  Cpu, 
  Check, 
  X, 
  MessageSquare, 
  Smartphone, 
  WifiOff, 
  ShieldAlert,
  Server,
  Scale
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeEngineTab, setActiveEngineTab] = useState<"pos" | "cloud">("pos");
  const [activeSector, setActiveSector] = useState<number>(0);
  const [activeMilestoneYear, setActiveMilestoneYear] = useState<string>("2024");
  const [selectedDemoVertical, setSelectedDemoVertical] = useState<string>("Retail POS");

  // Core Values Data
  const values = [
    {
      title: "Radical Simplicity",
      badge: "Zero Friction UX",
      desc: "Software should feel like second nature. We design intuitive, uncluttered workflows that any cashier or counter staff can master in under 10 minutes.",
      icon: Zap,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d]",
      badgeColor: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      borderColor: "hover:border-[#5e2b9d]",
      glowColor: "bg-[#5e2b9d]/10",
      accent: "text-[#5e2b9d]",
      highlights: [
        "Single-screen express checkout",
        "Barcode & keyboard-first navigation",
        "Zero training manuals required",
        "Split-second thermal print trigger",
      ],
    },
    {
      title: "Bulletproof Reliability",
      badge: "Offline-First Core",
      desc: "A retail counter or bustling kitchen cannot pause for internet lag. Our offline-first engine guarantees billing continuity with zero dropped transactions.",
      icon: ShieldCheck,
      color: "bg-[#40C351]/10 text-[#40C351]",
      badgeColor: "bg-[#40C351]/10 text-[#40C351] border-[#40C351]/25",
      borderColor: "hover:border-[#40C351]",
      glowColor: "bg-[#40C351]/10",
      accent: "text-[#40C351]",
      highlights: [
        "Instant local embedded database",
        "Silent background cloud sync",
        "99.98% verified uptime SLA",
        "Zero data loss during power cuts",
      ],
    },
    {
      title: "Deep Empathy for Trade",
      badge: "Built for Real India",
      desc: "We engineer features based on real retail counters, busy restaurant kitchens, and FMCG godowns across India — not detached boardroom assumptions.",
      icon: HeartHandshake,
      color: "bg-sky-50 text-sky-600",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      borderColor: "hover:border-sky-400",
      glowColor: "bg-sky-500/10",
      accent: "text-sky-600",
      highlights: [
        "Instant GST, E-Way & HSN auto-splits",
        "Multi-station kitchen KOT routing",
        "Direct WhatsApp digital receipts",
        "Vernacular receipt print support",
      ],
    },
    {
      title: "Relentless Innovation",
      badge: "Future-Ready Tech",
      desc: "Commerce technology moves at breakneck speed. We roll out continuous bi-weekly updates with regulatory tax rules, inventory analytics, and hardware drivers.",
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      borderColor: "hover:border-[#EFAF08]",
      glowColor: "bg-amber-500/10",
      accent: "text-amber-600",
      highlights: [
        "Automated cloud updates with zero downtime",
        "Intelligent predictive reorder alerts",
        "Hardware-agnostic USB/LAN/Bluetooth support",
        "Unified multi-branch inventory control",
      ],
    },
  ];

  // Milestones Timeline Data
  const milestones = [
    {
      year: "2015",
      phase: "Genesis & Foundation",
      title: "Born in Coimbatore, Tamil Nadu",
      desc: "Founded by engineers who witnessed Indian retail businesses crippled by slow, crash-prone legacy desktop software. Engineered our first sub-second offline-first POS engine.",
      icon: Store,
      achievement: "First 50 Retail Outlets • Sub-Second Billing Engine",
      stats: "50+ Stores • 100K Bills",
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      accent: "text-[#5e2b9d]",
      cardBorder: "border-[#5e2b9d]/30 hover:border-[#5e2b9d]",
    },
    {
      year: "2018",
      phase: "Hospitality Suite",
      title: "Multi-Station KOT & Hotel ERP Suite",
      desc: "Expanded into dynamic restaurant table management, wireless Captain waiter apps, and front-desk hotel room booking ERPs adopted by 150+ hospitality brands across South India.",
      icon: Utensils,
      achievement: "150+ Restaurants & Hotels • Multi-Station KOT Routing",
      stats: "150+ Brands • 1M+ Diners",
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600",
      cardBorder: "border-amber-200 hover:border-[#EFAF08]",
    },
    {
      year: "2021",
      phase: "Unified Ecosystem",
      title: "Hybrid Cloud ERP, CRM & Biometric Payroll",
      desc: "Unified front-counter billing with back-office multi-warehouse supply chain, automated WhatsApp lead funnels, and biometric payroll compliance into one integrated engine.",
      icon: Layers,
      achievement: "Multi-Godown Live Sync • Automated PF/ESI Compliance",
      stats: "300+ Outlets • ₹100Cr GMV",
      color: "bg-sky-50 text-sky-600 border-sky-200",
      accent: "text-sky-600",
      cardBorder: "border-sky-200 hover:border-sky-400",
    },
    {
      year: "2024",
      phase: "Enterprise Scale",
      title: "Powering 500+ Enterprises Across 18+ States",
      desc: "Scaled to process ₹250Cr+ in annual GMV with 99.98% uptime SLA. Trusted by supermarkets, multi-chain restaurants, boutique hotel resorts, and FMCG distributors across India.",
      icon: Award,
      achievement: "₹250Cr+ GMV Processed • 10M+ GST Invoices Generated",
      stats: "500+ Enterprises • 18+ States",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600",
      cardBorder: "border-emerald-200 hover:border-emerald-500",
    },
    {
      year: "2026+",
      phase: "Next-Gen AI Era",
      title: "AI Demand Forecasting & WhatsApp Commerce",
      desc: "Engineering predictive stock replenishments, automated AI ledger reconciliations, conversational voice billing, and direct WhatsApp customer ordering pipelines.",
      icon: Sparkles,
      achievement: "Predictive AI Reorders • Direct WhatsApp Storefronts",
      stats: "10,000+ Target Outlets",
      color: "bg-purple-50 text-[#5e2b9d] border-purple-200",
      accent: "text-[#5e2b9d]",
      cardBorder: "border-purple-200 hover:border-[#5e2b9d]",
    },
  ];

  // Industry Sectors Data
  const industrySectors = [
    {
      name: "Retail & Supermarkets",
      icon: Store,
      metric: "180+ Stores",
      tagline: "Sub-Second Barcode Scanning & Weighing Scale Sync",
      desc: "Engineered for rapid checkout queues, batch expiry management, multi-barcode variants, and automated purchase orders.",
      benefits: [
        "Sub-0.2 second barcode item lookup",
        "Embedded electronic weighing scale integration",
        "Expiring batch alerts & automated margin pricing",
        "Zero lag during peak festival rush hours",
      ],
      badge: "High Velocity POS",
    },
    {
      name: "Restaurants & QSRs",
      icon: Utensils,
      metric: "160+ Outlets",
      tagline: "Split-Second KOT Routing & Captain Waiter Apps",
      desc: "Empowers fine dine and quick-service food businesses with table mapping, dynamic modifiers, online aggregator sync, and kitchen display tokens.",
      benefits: [
        "Kitchen KOT routing to separate chef stations",
        "Wireless Captain tablet/mobile ordering app",
        "Recipe-level raw ingredient deduction",
        "Zomato & Swiggy online order auto-acceptance",
      ],
      badge: "Zero Kitchen Delays",
    },
    {
      name: "Hotels & Boutique Resorts",
      icon: Hotel,
      metric: "70+ Properties",
      tagline: "Front-Desk Folio Billing & Unified Room Amenities",
      desc: "Comprehensive hospitality solution merging room reservations, guest ID documentation, banquet halls, room service billing, and housekeeping audits.",
      benefits: [
        "Interactive room availability visual grid",
        "Unified folio billing for dining, laundry & stay",
        "Police format guest registration book exports",
        "Housekeeping status updates in real time",
      ],
      badge: "All-in-One Property ERP",
    },
    {
      name: "Wholesale & FMCG Godowns",
      icon: Boxes,
      metric: "80+ Warehouses",
      tagline: "Multi-Godown Stock Routing & Automated E-Way Invoicing",
      desc: "Designed for large distributors handling credit ledgers, salesman beat tracking, wholesale rate matrices, and high-volume dispatch logistics.",
      benefits: [
        "Multi-warehouse transfer challans & audits",
        "Party-wise custom pricing and credit limits",
        "One-click government E-Way bill generation",
        "Daily salesman collection & ledger reports",
      ],
      badge: "Distribution Scale",
    },
    {
      name: "Healthcare & Pharmacies",
      icon: HeartPulse,
      metric: "50+ Outlets",
      tagline: "Schedule H1 Compliance & Batch Expiry Tracking",
      desc: "Reliable pharmacy management maintaining strict drug batch traceability, doctor prescription tagging, and instant generic substitute searching.",
      benefits: [
        "Mandatory Schedule H/H1 register generation",
        "Batch number, salt composition & expiry filter",
        "Automated reorder triggers for low-stock medicines",
        "GST compliant thermal and laser invoice formats",
      ],
      badge: "100% Drug Compliance",
    },
  ];

  // Legacy POS vs Doonext Comparison
  const comparisonPoints = [
    {
      feature: "Internet Dependency",
      legacy: "Crashes or halts billing when WiFi/Broadband drops",
      doonext: "100% Offline-First Engine with seamless background cloud sync",
      highlight: true,
    },
    {
      feature: "Counter Billing Speed",
      legacy: "2.5 to 5.0 seconds per bill with heavy mouse navigation",
      doonext: "Sub-0.2 second express scan with 1-click keyboard hotkeys",
      highlight: true,
    },
    {
      feature: "Hardware Compatibility",
      legacy: "Locked to costly proprietary terminals and specific printers",
      doonext: "Works on any Windows desktop, laptop, thermal printer or scanner",
      highlight: false,
    },
    {
      feature: "Multi-Branch Management",
      legacy: "Requires complex manual end-of-day data backups & USB transfers",
      doonext: "Live cloud synchronization with centralized price and stock control",
      highlight: true,
    },
    {
      feature: "Customer Invoicing",
      legacy: "Only paper printouts, zero digital engagement",
      doonext: "Instant WhatsApp PDF receipts, SMS alerts & thermal prints",
      highlight: false,
    },
    {
      feature: "Technical Support",
      legacy: "Unresponsive tickets, long delays, or costly third-party AMC",
      doonext: "Direct phone and WhatsApp engineering desk answered in <18 seconds",
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION -> High-Impact Split Composition & Dual-Engine Showcase */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#f8f3fd] via-[#fbf9fe] to-white border-b border-purple-100/60 overflow-hidden">
          {/* Ambient Lighting Spheres & Grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />
          <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#5e2b9d]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#40C351]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Narrative, Heritage & Proof */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5e2b9d]/10 border border-[#5e2b9d]/20 text-[#5e2b9d] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COIMBATORE BORN • ENTERPRISE SCALE • PAN-INDIA FOOTPRINT</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#282023] tracking-tight leading-[1.12]">
                  Pioneering Next-Gen <br className="hidden sm:inline" />
                  Commerce Software for India&apos;s <br className="hidden sm:inline" />
                  <span className="text-[#5e2b9d] bg-gradient-to-r from-[#5e2b9d] via-[#7b3dbd] to-[#40C351] bg-clip-text text-transparent">
                    Fastest-Growing Enterprises
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Headquartered in Coimbatore, Tamil Nadu, Doonext crafts ultra-fast, offline-first billing, ERP, CRM, and payroll software that converts everyday retail counters, busy restaurant kitchens, and wholesale warehouses into resilient profit engines.
                </p>

                {/* Key Pillars Strip (4 Clean Glassmorphic Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#5e2b9d]/40 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">Coimbatore, TN</div>
                      <div className="text-[11px] text-slate-500">Innovation Headquarters</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#40C351]/40 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">Offline-First Core</div>
                      <div className="text-[11px] text-slate-500">Zero Internet Downtime</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#EFAF08] transition-all">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">10+ Years of Trust</div>
                      <div className="text-[11px] text-slate-500">Engineered Since 2015</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-400 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#282023]">500+ Indian Brands</div>
                      <div className="text-[11px] text-slate-500">Active Across 18+ States</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="px-7 py-3.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-sm shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
                  >
                    <span>Schedule Free Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/products"
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] font-bold text-sm border border-slate-200 shadow-xs transition-all text-center hover:border-slate-300"
                  >
                    Explore Product Suite
                  </Link>
                </div>

              </div>

              {/* Right Column: Interactive Dual-Engine Command Center Showcase */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="w-full max-w-lg relative">
                  
                  {/* Decorative Glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5e2b9d]/20 via-[#40C351]/25 to-[#5e2b9d]/20 rounded-3xl blur-xl opacity-75" />

                  {/* Main Command Center Card */}
                  <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 space-y-5">
                    
                    {/* Header Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5e2b9d] to-[#7b3dbd] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                          D
                        </div>
                        <div>
                          <div className="font-bold text-[#282023] text-sm flex items-center gap-1.5">
                            <span>Doonext Dual-Engine Architecture</span>
                          </div>
                          <div className="text-[11px] text-slate-500">Coimbatore Innovation Core v4.2</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/25">
                        <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                        Live Synchronized
                      </span>
                    </div>

                    {/* Interactive Tab Switcher between Offline Engine & Cloud Central */}
                    <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs font-bold">
                      <button
                        onClick={() => setActiveEngineTab("pos")}
                        className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          activeEngineTab === "pos"
                            ? "bg-white text-[#5e2b9d] shadow-xs"
                            : "text-slate-600 hover:text-[#282023]"
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-[#5e2b9d]" />
                        <span>Offline POS Engine</span>
                      </button>
                      <button
                        onClick={() => setActiveEngineTab("cloud")}
                        className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          activeEngineTab === "cloud"
                            ? "bg-white text-[#40C351] shadow-xs"
                            : "text-slate-600 hover:text-[#282023]"
                        }`}
                      >
                        <Server className="w-3.5 h-3.5 text-[#40C351]" />
                        <span>Cloud Central HQ</span>
                      </button>
                    </div>

                    {/* Dynamic Interactive Display Area */}
                    {activeEngineTab === "pos" ? (
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#faf7fd] to-white border border-[#5e2b9d]/20 space-y-3.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#5e2b9d] flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-[#5e2b9d]" />
                            Sub-Second Local Terminal Runtime
                          </span>
                          <span className="text-[10px] font-bold bg-[#40C351]/10 text-[#40C351] px-2 py-0.5 rounded-full border border-[#40C351]/25">
                            0ms Network Latency
                          </span>
                        </div>

                        {/* Visual Mock Pipeline */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs">
                            <div className="flex items-center gap-2">
                              <Receipt className="w-4 h-4 text-[#5e2b9d]" />
                              <div>
                                <div className="font-bold text-[#282023]">Barcode Express Scan</div>
                                <div className="text-[10px] text-slate-500">Item: Premium Basmati 5kg (HSN: 1006)</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#40C351] bg-[#40C351]/10 px-2 py-0.5 rounded">
                              &lt; 0.18s
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs">
                            <div className="flex items-center gap-2">
                              <WifiOff className="w-4 h-4 text-amber-500" />
                              <div>
                                <div className="font-bold text-[#282023]">Internet Disconnection Guard</div>
                                <div className="text-[10px] text-slate-500">Autonomous local storage active</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#40C351] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                              Zero Drops
                            </span>
                          </div>
                        </div>

                        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                            Direct Thermal &amp; Laser Print Drivers
                          </span>
                          <span className="font-bold text-[#5e2b9d]">Windows Native</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-white border border-[#40C351]/20 space-y-3.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#40C351] flex items-center gap-1.5">
                            <Server className="w-4 h-4 text-[#40C351]" />
                            Multi-Branch Live Cloud Intelligence
                          </span>
                          <span className="text-[10px] font-bold bg-[#5e2b9d]/10 text-[#5e2b9d] px-2 py-0.5 rounded-full border border-[#5e2b9d]/25">
                            ISO Sovereign Cloud
                          </span>
                        </div>

                        {/* Visual Mock Pipeline */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs">
                            <div className="flex items-center gap-2">
                              <Boxes className="w-4 h-4 text-[#40C351]" />
                              <div>
                                <div className="font-bold text-[#282023]">Godown Live Inventory Sync</div>
                                <div className="text-[10px] text-slate-500">Central stock auto-balanced across 12 outlets</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-2 py-0.5 rounded">
                              Real-Time
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-sky-600" />
                              <div>
                                <div className="font-bold text-[#282023]">Automated WhatsApp Dispatch</div>
                                <div className="text-[10px] text-slate-500">Digital tax invoice &amp; ledger link sent</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                              Instant
                            </span>
                          </div>
                        </div>

                        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                            100% Indian GST &amp; E-Way Portal Sync
                          </span>
                          <span className="font-bold text-[#40C351]">99.98% SLA</span>
                        </div>
                      </div>
                    )}

                    {/* Quick Telemetry Indicators Row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-slate-500 font-medium">Merchant Rating</div>
                          <div className="text-sm font-bold text-[#282023] mt-0.5">4.9 / 5.0 ★</div>
                        </div>
                        <div className="flex text-[#EFAF08]">
                          <Star className="w-4 h-4 fill-[#EFAF08]" />
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-slate-500 font-medium">Uptime Guarantee</div>
                          <div className="text-sm font-bold text-[#40C351] mt-0.5">99.98% SLA</div>
                        </div>
                        <ShieldCheck className="w-4 h-4 text-[#40C351]" />
                      </div>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                        100% GST, E-Way &amp; HSN Compliant
                      </span>
                      <span className="text-[#5e2b9d] font-bold flex items-center gap-1">
                        <span>Made in India</span>
                        <span>🇮🇳</span>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. PURPOSE & STRATEGIC HORIZON -> Mission & Vision Dual Star */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
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
                <span className="text-[#5e2b9d]">Engineered for Real-World Impact</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                We replace fragile, bloated legacy systems with resilient, lightning-fast operating software designed specifically for the speed and realities of Indian commerce.
              </p>
            </div>

            {/* Mission & Vision Duo Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Mission Card (Deep Purple Theme) */}
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
                    To democratize enterprise-grade speed and reliability for every business across India — from single retail counters and bustling kitchens to large multi-warehouse distributors — eliminating downtime, human errors, and overpriced software lock-in.
                  </p>

                  {/* Core Commitments List */}
                  <div className="space-y-3 pt-2 border-t border-slate-100 mb-8">
                    {[
                      {
                        title: "Zero Friction Onboarding",
                        desc: "Counter staff can master the billing system in under 10 minutes without thick manuals.",
                      },
                      {
                        title: "Affordability Without Compromise",
                        desc: "Sub-second speed and multi-branch features priced transparently for Indian SMBs.",
                      },
                      {
                        title: "100% Indian GST & Regulatory Ease",
                        desc: "Automated E-Way bills, HSN auto-splits, GSTR reports, and digital thermal receipts.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
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
                  <span className="font-bold text-[#5e2b9d] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5e2b9d]" />
                    <span>Active in 500+ Indian Businesses</span>
                  </span>
                  <span className="font-semibold text-slate-400">Continuous Innovation →</span>
                </div>
              </div>

              {/* Vision Card (Emerald Green Theme) */}
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
                    To be India&apos;s most trusted business operating ecosystem — recognized nationwide for radical operational simplicity, offline-first engineering resilience, transparent pricing, and direct human customer support.
                  </p>

                  {/* Vision Commitments List */}
                  <div className="space-y-3 pt-2 border-t border-slate-100 mb-8">
                    {[
                      {
                        title: "Unified Multi-Platform Hub",
                        desc: "Flawless synchronization across counter terminals, mobile waiter apps & central cloud ERP.",
                      },
                      {
                        title: "Bulletproof Offline Resilience",
                        desc: "Guaranteed zero billing downtime regardless of broadband cuts or power disruptions.",
                      },
                      {
                        title: "Proactive Human Support Desks",
                        desc: "Direct phone and WhatsApp technical desks that pick up in under 18 seconds.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
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
                  <span className="font-bold text-[#40C351] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                    <span>Engineered to Scale to 10,000+ Outlets</span>
                  </span>
                  <span className="font-semibold text-slate-400">Made for India 🇮🇳</span>
                </div>
              </div>

            </div>

            {/* Bottom 3 Strategic Brand Promises Strip */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4 hover:border-[#5e2b9d]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Zero Hardware Lock-In</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Seamless plug-and-play with any standard thermal printer, barcode scanner, or machine.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4 hover:border-[#5e2b9d]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Transparent &amp; Fair</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    No hidden per-counter license penalties, surprise renewal fees, or proprietary restrictions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-start gap-4 hover:border-[#5e2b9d]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5e2b9d]/20 flex items-center justify-center text-[#5e2b9d] shrink-0 shadow-2xs">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#282023] text-sm">Lifetime Support Desk</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Direct phone, WhatsApp &amp; remote screen support whenever your billing counter needs it.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SCALE & IMPACT -> Bento Grid & Dynamic Sector Footprint Explorer */}
        {/* ========================================================================= */}
        <section className="py-24 bg-[#fafbfc] border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <TrendingUp className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>SCALE, IMPACT &amp; NATIONWIDE FOOTPRINT</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Empowering Scaled Commerce <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Across Every Corner of India</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Real-world metrics that demonstrate our commitment to counter velocity, uptime, and business profitability.
              </p>
            </div>

            {/* 4 Elevated Metric Power Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              
              {/* Metric 1 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#5e2b9d]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5e2b9d]/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
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
                  
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Powering supermarkets, restaurants, hotels &amp; distributors nationwide.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Tamil Nadu, KL, KA &amp; More</span>
                  <span className="text-[#5e2b9d]">Growing Fast →</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#40C351]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#40C351]/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shadow-2xs group-hover:bg-[#40C351] group-hover:text-white transition-all duration-300">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/20">
                      Zero Drop
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-[#282023] group-hover:text-[#40C351] transition-colors tracking-tight">
                    ₹250Cr+
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-[#282023] mt-2">
                    Annual GMV Processed
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Split-second checkout volume with zero discrepancies and accurate ledgers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>100% Audit Ready</span>
                  <span className="text-[#40C351]">High Volume →</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#EFAF08] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
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
                  
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Rapid counter receipts, kitchen tokens &amp; e-way bills generated seamlessly.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Thermal &amp; Laser</span>
                  <span className="text-amber-600">Ultra Fast →</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
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
                    Verified Uptime SLA
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Guaranteed billing continuity even during sudden broadband or power cuts.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Indian Sovereign Cloud</span>
                  <span className="text-sky-600">Rock Solid →</span>
                </div>
              </div>

            </div>

            {/* Interactive Sector Footprint Showcase */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5e2b9d] bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
                    SECTOR-SPECIFIC EXCELLENCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#282023] mt-2">
                    Engineered for India&apos;s Core Business Sectors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Select a vertical to see how Doonext powers daily operations with purpose-built features.
                  </p>
                </div>

                {/* Sector Tabs */}
                <div className="flex flex-wrap gap-2">
                  {industrySectors.map((sector, sIdx) => {
                    const SectorIcon = sector.icon;
                    const isActive = activeSector === sIdx;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setActiveSector(sIdx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#5e2b9d] text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                        }`}
                      >
                        <SectorIcon className="w-3.5 h-3.5" />
                        <span>{sector.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Sector Content Card */}
              {(() => {
                const cur = industrySectors[activeSector];
                const CurIcon = cur.icon;
                return (
                  <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
                          <CurIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold text-[#282023]">{cur.name}</h4>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/25">
                              {cur.badge}
                            </span>
                          </div>
                          <div className="text-xs text-[#5e2b9d] font-semibold">{cur.tagline}</div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {cur.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {cur.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex items-center gap-4">
                        <button
                          onClick={() => {
                            setSelectedDemoVertical(cur.name);
                            setDemoModalOpen(true);
                          }}
                          className="px-5 py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>Explore {cur.name} Demo</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold text-slate-400">
                          Active in {cur.metric}
                        </span>
                      </div>
                    </div>

                    {/* Right Visual Highlight Box */}
                    <div className="lg:col-span-6">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf7fd] to-white border border-[#5e2b9d]/20 shadow-xs space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
                          <span className="text-[#282023] flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#5e2b9d]" />
                            Operational Benchmark
                          </span>
                          <span className="text-[#40C351]">100% Offline Active</span>
                        </div>

                        <div className="space-y-3">
                          <div className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-xs">
                            <span className="text-slate-600">Peak Checkout Speed:</span>
                            <span className="font-bold text-[#5e2b9d]">&lt; 0.2s / Item</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-xs">
                            <span className="text-slate-600">Internet Fallback:</span>
                            <span className="font-bold text-[#40C351]">Automatic Local Cache</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-xs">
                            <span className="text-slate-600">Receipt Format:</span>
                            <span className="font-bold text-[#282023]">Thermal 2&quot;/3&quot; + WhatsApp PDF</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#5e2b9d]/5 border border-[#5e2b9d]/10 text-xs text-slate-600 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                          <span>Includes full data migration from your existing legacy software.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CORE VALUES & "THE LEGACY WAY VS THE DOONEXT WAY" */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>WHAT DRIVES OUR CODE</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Architected on Values, <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Engineered for Unshakable Trust</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Every line of code and feature we build is anchored by our commitment to speed, radical simplicity, and rock-solid business reliability.
              </p>
            </div>

            {/* 4 Rich Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className={`p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl ${v.borderColor} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1.5`}
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

            {/* Legacy POS vs Doonext Engine Comparison Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#faf7fd] via-white to-[#faf7fd] border border-[#5e2b9d]/20 p-6 sm:p-10 shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5e2b9d] bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
                  THE ARCHITECTURAL DIFFERENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#282023] mt-2">
                  Why Store Owners Switch from Legacy Software to Doonext
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  How our modern offline-first hybrid cloud architecture solves the classic headaches of slow, crash-prone legacy desktop tools.
                </p>
              </div>

              {/* Comparison Table Grid */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-4 font-bold text-slate-500 uppercase text-[11px] tracking-wider w-1/4">Key Capability</th>
                      <th className="pb-4 font-bold text-slate-400 uppercase text-[11px] tracking-wider w-3/8">Traditional Legacy Software</th>
                      <th className="pb-4 font-bold text-[#5e2b9d] uppercase text-[11px] tracking-wider w-3/8">The Doonext Engine</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonPoints.map((pt, pIdx) => (
                      <tr key={pIdx} className="hover:bg-purple-50/30 transition-colors">
                        <td className="py-4 font-bold text-[#282023] pr-4">
                          {pt.feature}
                        </td>
                        <td className="py-4 text-slate-500 pr-4">
                          <div className="flex items-start gap-2">
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <span>{pt.legacy}</span>
                          </div>
                        </td>
                        <td className="py-4 font-medium text-[#282023]">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#40C351] shrink-0 mt-0.5" />
                            <span className={pt.highlight ? "font-bold text-[#5e2b9d]" : "text-slate-700"}>
                              {pt.doonext}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quality Pledge Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-[#5e2b9d] shrink-0" />
                  <span>We never charge per-counter fees, never hold customer data hostage, and provide free software migration.</span>
                </div>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
                >
                  Switch to Doonext Today
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OUR JOURNEY -> Interactive Decade Timeline (2015 to 2026+) */}
        {/* ========================================================================= */}
        <section className="py-24 bg-[#fafbfc] border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>A DECADE OF EXCELLENCE (2015 - 2026+)</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                From Coimbatore Roots to <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Nationwide Commerce Impact</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                A 10-year journey of listening to Indian shopkeepers, breaking engineering bottlenecks, and crafting software that just works.
              </p>
            </div>

            {/* Interactive Year Selector Stepper */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs gap-1 sm:gap-2">
                {milestones.map((m) => {
                  const isSelected = activeMilestoneYear === m.year;
                  return (
                    <button
                      key={m.year}
                      onClick={() => setActiveMilestoneYear(m.year)}
                      className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? "bg-[#5e2b9d] text-white shadow-sm"
                          : "text-slate-600 hover:text-[#282023] hover:bg-slate-100"
                      }`}
                    >
                      <span>{m.year}</span>
                      <span className={`text-[10px] hidden sm:inline px-2 py-0.5 rounded-md ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        {m.phase}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Active Milestone Highlight Banner */}
            {(() => {
              const activeItem = milestones.find((m) => m.year === activeMilestoneYear) || milestones[3];
              const ItemIcon = activeItem.icon;
              return (
                <div className="mb-14 p-8 rounded-3xl bg-white border border-[#5e2b9d]/30 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#5e2b9d]/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5e2b9d] text-white">
                          Milestone Year {activeItem.year}
                        </span>
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${activeItem.color}`}>
                          {activeItem.phase}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#282023]">
                        {activeItem.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {activeItem.desc}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                        <span className="flex items-center gap-1.5 font-bold text-[#40C351]">
                          <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                          {activeItem.achievement}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border ${activeItem.color} shadow-sm mb-3`}>
                        <ItemIcon className="w-10 h-10" />
                      </div>
                      <div className="text-xs font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-3 py-1 rounded-full">
                        {activeItem.stats}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Chronological Milestone Path Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isCurrent = activeMilestoneYear === m.year;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveMilestoneYear(m.year)}
                    className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${
                      isCurrent
                        ? "border-[#5e2b9d] shadow-md ring-2 ring-[#5e2b9d]/20"
                        : "border-slate-200/90 shadow-2xs hover:border-slate-300"
                    }`}
                  >
                    <div>
                      {/* Top Bar with Year and Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-base font-bold text-[#5e2b9d]">
                          {m.year}
                        </span>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${m.color} shadow-2xs group-hover:scale-110 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {m.phase}
                      </div>

                      <h4 className="text-base font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors mb-2">
                        {m.title}
                      </h4>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                        {m.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-slate-600">{m.stats}</span>
                      <span className="text-[#5e2b9d] flex items-center gap-1">
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Future Vision 2026+ Roadmap Card */}
            <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5e2b9d] via-[#4d2282] to-[#5e2b9d] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-5 relative z-10">
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
                  <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-2xl leading-relaxed">
                    Engineering predictive stock reordering, instant conversational WhatsApp ordering, voice billing for counter cashiers, and automated ledger reconciliations for 10,000+ businesses across India.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-white text-[#5e2b9d] font-bold text-xs sm:text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer hover:scale-105 relative z-10"
              >
                Join the Journey
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. OUR CULTURE & SUPPORT DNA -> Crafted in Coimbatore */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
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
                We believe exceptional software is nothing without empathetic, lightning-fast technical support that picks up immediately when your counter needs assistance.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Pillar 1 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#5e2b9d]/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#5e2b9d]/20 text-[#5e2b9d] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] mb-3">
                    &lt; 18 Sec Response
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
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#40C351]/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#40C351]/20 text-[#40C351] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351] mb-3">
                    Indian Data Sovereignty
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">100% Indian Servers</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your financial, inventory &amp; customer ledgers are strictly hosted on ISO-certified Indian cloud servers with hourly auto-backups.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-[#40C351] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Bank-Grade Encryption</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-[#EFAF08] transition-all flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 text-[#EFAF08] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 mb-3">
                    Bi-Weekly Sprints
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">Merchant-Driven Updates</h3>
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
              <div className="p-8 rounded-3xl bg-[#faf7fd] border border-[#5e2b9d]/15 shadow-2xs hover:shadow-lg hover:border-sky-400 transition-all flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 text-sky-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 mb-3">
                    Free White-Glove Setup
                  </div>
                  <h3 className="text-lg font-bold text-[#282023] mb-2">Full Onboarding &amp; Training</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    From thermal printers to item catalog imports and cashier training, our team guides you from day zero with zero disruption.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5e2b9d]/10 flex items-center gap-1.5 text-xs text-sky-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>Free Setup &amp; Training</span>
                </div>
              </div>

            </div>

            {/* Coimbatore Support Desk Live Contact Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#282023] to-[#3b1766] p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-purple-200">
                  <Headphones className="w-3.5 h-3.5 text-[#40C351]" />
                  <span>DIRECT COIMBATORE SUPPORT HOTLINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Talk to a Real Engineer, Not an Automated Chatbot
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                  Available on phone and WhatsApp from 8:00 AM to 10:00 PM IST every day to assist your billing counter.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                <a
                  href="tel:+919500618277"
                  className="px-6 py-3.5 rounded-full bg-[#40C351] hover:bg-[#36a844] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 95006 18277</span>
                </a>
                <a
                  href="https://wa.me/919500618277?text=Hi%20Doonext%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING BOTTOM CTA SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#5e2b9d] via-[#4d2282] to-[#3b1766] p-8 sm:p-14 shadow-2xl text-white relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#40C351]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#EFAF08]" />
                  <span>GET STARTED TODAY • COIMBATORE HQ</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Ready to Experience <br className="hidden sm:inline" />
                  the Doonext Difference?
                </h3>

                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  Join 500+ forward-thinking Indian enterprises. Get a customized 1-on-1 walkthrough tailored specifically for your trade counter, restaurant, hotel, or warehouse.
                </p>

                {/* Quick Vertical Selector */}
                <div className="pt-1">
                  <div className="text-xs text-purple-200 font-semibold mb-2">Which software are you exploring?</div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    {["Retail POS", "Restaurant KOT", "Hotel ERP", "Godown Inventory", "CRM & Payroll"].map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedDemoVertical(v)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedDemoVertical === v
                            ? "bg-white text-[#5e2b9d] shadow-xs"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs font-medium text-purple-200">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> 14-Day Free Walkthrough</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Zero Credit Card Required</span>
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
