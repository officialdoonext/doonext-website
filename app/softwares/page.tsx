"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Receipt, 
  Boxes, 
  Users2, 
  Wallet, 
  Code2, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Laptop, 
  Smartphone, 
  Printer, 
  Database,
  Building2, 
  TrendingUp, 
  Star, 
  Check, 
  Utensils, 
  Hotel, 
  Pill, 
  Truck, 
  HelpCircle, 
  ChevronDown,
  Search,
  SlidersHorizontal,
  WifiOff,
  Server,
  MessageSquare,
  Scale,
  QrCode,
  Lock,
  Phone,
  ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function SoftwaresPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState("Doonext Billing POS");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [spotlightSoftware, setSpotlightSoftware] = useState<string>("billing");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const openDemoFor = (softwareName: string) => {
    setSelectedSoftware(softwareName);
    setDemoModalOpen(true);
  };

  const allSoftwares = [
    {
      id: "billing",
      category: "retail",
      title: "Doonext Billing POS",
      badge: "Flagship Counter Engine",
      tagline: "Sub-second express barcode billing with offline-first guaranteed zero counter downtime.",
      icon: Receipt,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      accentBg: "bg-[#5e2b9d]",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Barcode & QR express scan checkout (< 0.18s lookup time)",
        "Offline-first local database with silent background cloud sync",
        "Automated Multi-GST tax slabs, HSN auto-splits & E-Way bills",
        "Supports thermal receipt printers (2-inch, 3-inch, LAN, USB, Bluetooth)",
        "Hold cart, split bills, customer ledger credits & loyalty points",
        "Digital electronic weighing scale auto-weight RS232 sync"
      ],
      idealFor: "Supermarkets, Grocery Stores, Apparel & Footwear Boutiques, Electronics, Department Stores",
      metrics: { speed: "< 0.18s", uptime: "100% Offline", scale: "50,000+ Bills/Day" },
      highlight: true
    },
    {
      id: "restaurant",
      category: "food",
      title: "Doonext Restaurant POS",
      badge: "Food & Dining Suite",
      tagline: "Visual table floor map, multi-station Kitchen Order Tokens (KOT) and Captain mobile ordering.",
      icon: Utensils,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      accentBg: "bg-[#EFAF08]",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Interactive live table grid with occupancy status & merge bills",
        "Multi-station KOT routing to separate kitchen & bar network printers",
        "Android Captain mobile app for wireless table-side ordering",
        "Recipe ingredient BOM & live food costing wastage control",
        "Split bills, customized item modifiers & discount controls",
        "Zomato & Swiggy online order auto-acceptance sync"
      ],
      idealFor: "Fine Dining, Quick Service Restaurants (QSR), Cafes, Bakeries, Food Courts, Pubs & Bars",
      metrics: { speed: "< 0.2s KOT", uptime: "100% Offline", scale: "300+ Tables" },
      highlight: true
    },
    {
      id: "hotel",
      category: "hospitality",
      title: "Doonext Hotel ERP",
      badge: "Hospitality & Room Suites",
      tagline: "End-to-end property management with live room grid, guest folio billing, and housekeeping sync.",
      icon: Hotel,
      color: "bg-sky-50 text-sky-700 border-sky-200",
      accentBg: "bg-sky-600",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Color-coded room reservation calendar & occupancy matrix",
        "Express check-in / check-out with digital guest ID scanning",
        "Integrated room service & dining restaurant folio posting",
        "Housekeeping room inspection & maintenance dispatch tracking",
        "Corporate rates, travel agent commission tracking & advance deposits",
        "Comprehensive GST master folio invoice generation"
      ],
      idealFor: "Hotels, Luxury Resorts, Boutique Stays, Lodges, Serviced Apartments, Highway Motels",
      metrics: { speed: "Instant Folio", uptime: "99.98% SLA", scale: "500+ Rooms" },
      highlight: false
    },
    {
      id: "erp",
      category: "enterprise",
      title: "Doonext Cloud ERP",
      badge: "Multi-Godown Intelligence",
      tagline: "Centralized multi-branch stock sync, batch/expiry alerts, and automated purchase ordering.",
      icon: Boxes,
      color: "bg-[#40C351]/10 text-[#2d963b] border-[#40C351]/25",
      accentBg: "bg-[#40C351]",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Real-time inter-branch & godown stock transfers with tracking",
        "Batch number, serial number & manufacturer expiry date matrix",
        "Automated purchase orders based on minimum stock thresholds",
        "Stock audit reconciliation using handheld barcode terminals",
        "Vendor price comparison, accounts payable & purchase returns",
        "Dead stock analysis & gross profit margin drill-down"
      ],
      idealFor: "Multi-Store Chains, Central Warehouses, Distributors, FMCG Wholesalers, Manufacturers",
      metrics: { speed: "Real-time Sync", uptime: "99.99% SLA", scale: "500,000+ SKUs" },
      highlight: true
    },
    {
      id: "crm",
      category: "marketing",
      title: "Doonext CRM & WhatsApp Retention",
      badge: "WhatsApp Marketing Engine",
      tagline: "Automate digital PDF bills, broadcast festive campaigns, and turn walk-ins into repeat buyers.",
      icon: Users2,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      accentBg: "bg-purple-700",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "1-Click automated WhatsApp invoice delivery at checkout counter",
        "Customer purchasing history, credit limits & payment reminders",
        "Tiered loyalty reward programs, points redemption & gift vouchers",
        "Targeted WhatsApp & SMS broadcast campaigns for seasonal offers",
        "Visual sales pipeline tracking for high-value B2B trade deals",
        "Customer satisfaction feedback & Google review booster"
      ],
      idealFor: "Retail Brands, Service Providers, Boutiques, Dealerships, Salons, B2B Sales Teams",
      metrics: { speed: "Instant Send", uptime: "98% Open Rate", scale: "1M+ Contacts" },
      highlight: false
    },
    {
      id: "payroll",
      category: "hr",
      title: "Doonext Biometric Payroll & HRMS",
      badge: "Statutory Compliance",
      tagline: "Biometric attendance sync, automated salary calculations, and statutory PF/ESI filing.",
      icon: Wallet,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      accentBg: "bg-amber-600",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Biometric fingerprint & facial recognition device real-time sync",
        "Automated salary calculation with overtime, shifts & advance deductions",
        "One-click PDF payslip generation sent via WhatsApp & Email",
        "Statutory compliance: PF, ESI, TDS, Professional Tax & Form 16",
        "Employee self-service mobile portal for leave requests & approvals",
        "Bank disbursement batch transfer sheet generator for any bank"
      ],
      idealFor: "Retail Stores, Factories, Hospitals, Educational Institutes, Offices, Logistics Firms",
      metrics: { speed: "< 2 Min Payroll", uptime: "100% Compliant", scale: "Unlimited Staff" },
      highlight: false
    },
    {
      id: "pharmacy",
      category: "retail",
      title: "Doonext Pharmacy & Healthcare POS",
      badge: "Drug Slabs & Batch Expiry",
      tagline: "Prescription management, Schedule H/H1 registers, and instant medicine rack locator.",
      icon: Pill,
      color: "bg-teal-50 text-teal-700 border-teal-200",
      accentBg: "bg-teal-600",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Medicine batch, expiry date & strip/tablet fraction counter billing",
        "Instant rack & shelf locator during customer counter billing",
        "Automated Schedule H & H1 narcotics audit registers",
        "Doctor prescription history & customer refill alerts via WhatsApp",
        "Substitute salt & generic drug suggestion search engine",
        "Drug distributor purchase import with automated invoice mapping"
      ],
      idealFor: "Retail Pharmacies, Medical Stores, Ayurvedic Clinics, Hospital Dispensaries, Chemists",
      metrics: { speed: "< 0.18s Search", uptime: "100% Offline", scale: "100,000+ Salts" },
      highlight: false
    },
    {
      id: "wholesale",
      category: "enterprise",
      title: "Doonext Wholesale & Distribution Suite",
      badge: "Bulk Trade & Field Sales",
      tagline: "B2B bulk invoicing, custom tier pricing, transport LR tracking, and sales agent routing.",
      icon: Truck,
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentBg: "bg-indigo-700",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Bulk wholesale B2B billing with multi-level pricing & scheme discounts",
        "Customer credit limit enforcement & outstanding payment ledger",
        "Field sales agent mobile app for geo-tagged shop order booking",
        "Transport Lorry Receipt (LR) tracking, dispatch & e-Way bill sync",
        "Automated bank reconciliation & payment receipt collection",
        "Multi-company billing from a single unified accounting console"
      ],
      idealFor: "FMCG Distributors, Wholesale Traders, Building Material Dealers, Electrical & Hardware Wholesalers",
      metrics: { speed: "Bulk Print", uptime: "99.98% SLA", scale: "₹100Cr+ GMV" },
      highlight: false
    },
    {
      id: "custom",
      category: "custom",
      title: "Doonext Custom Enterprise Solutions",
      badge: "Tailor-Made Architecture",
      tagline: "Bespoke software architecture engineered specifically to solve your unique trade rules.",
      icon: Code2,
      color: "bg-rose-50 text-rose-700 border-rose-200",
      accentBg: "bg-rose-600",
      btnBg: "bg-[#5e2b9d] hover:bg-[#4d2282]",
      features: [
        "Custom API integrations with SAP, Tally, Zoho & payment gateways",
        "Bespoke Android / iOS mobile applications for internal field teams",
        "Custom executive dashboards & automated daily KPI report triggers",
        "Dedicated cloud server architecture with high-security VPC",
        "On-premise or private cloud deployment flexibility",
        "Dedicated Coimbatore engineering squad with continuous SLA maintenance"
      ],
      idealFor: "Large Scale Enterprises, Specialized Manufacturers, Supply Chain Networks, Fintech & Logistics",
      metrics: { speed: "< 100ms API", uptime: "99.99% SLA", scale: "Custom Stack" },
      highlight: false
    }
  ];

  // Filtering logic
  const filteredSoftwares = useMemo(() => {
    return allSoftwares.filter((software) => {
      const matchesCategory = activeCategory === "all" || software.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        software.title.toLowerCase().includes(q) ||
        software.tagline.toLowerCase().includes(q) ||
        software.badge.toLowerCase().includes(q) ||
        software.idealFor.toLowerCase().includes(q) ||
        software.features.some(f => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Hardware Interoperability Items
  const hardwareItems = [
    {
      title: "Thermal Receipt Printers",
      desc: "58mm & 80mm thermal receipt printers via USB, LAN, Ethernet & Bluetooth.",
      icon: Printer,
      brands: "Epson, TVS-E, NGX, Posiflex, Bixolon, Everycom",
      badge: "Sub-0.2s Print"
    },
    {
      title: "Barcode & 2D QR Scanners",
      desc: "1D Laser, 2D QR, wireless Bluetooth, and omnidirectional counter barcode scanners.",
      icon: QrCode,
      brands: "Honeywell, Zebra, Datalogic, TVS, Symbol",
      badge: "Instant Decode"
    },
    {
      title: "Electronic Weighing Scales",
      desc: "Direct RS232 COM port and USB weighing scales with live counter weight synchronization.",
      icon: Scale,
      brands: "Essae, Phoenix, Contech, Eagle, CAS",
      badge: "Zero Manual Error"
    },
    {
      title: "Captain Waiter Tablets",
      desc: "Lightweight Android tablets and smartphones for wireless restaurant order punch.",
      icon: Smartphone,
      brands: "Samsung, Lenovo, Xiaomi, Any Android 8.0+",
      badge: "Zero Table Lag"
    },
    {
      title: "Biometric Terminals",
      desc: "Fingerprint and AI facial recognition biometric machines for staff attendance.",
      icon: Users2,
      brands: "eSSL, Matrix, Realtime, ZKTeco",
      badge: "Auto Payroll Sync"
    },
    {
      title: "Windows Machines & Terminals",
      desc: "Works seamlessly on all standard desktop PCs, all-in-one POS terminals, and laptops.",
      icon: Laptop,
      brands: "Windows 10, 11 (64-bit), Minimum 4GB RAM",
      badge: "Zero Hardware Lock-In"
    },
  ];

  // FAQ Data
  const faqs = [
    {
      q: "Does Doonext software work when the internet is completely disconnected?",
      a: "Yes, 100%! Doonext Billing and Restaurant POS are engineered on an offline-first local database. Cashiers can continue barcode scanning, printing thermal receipts, generating kitchen tokens (KOT), and completing transactions without interruption. As soon as connectivity returns, data silently syncs with your central cloud console."
    },
    {
      q: "Can I migrate my existing item catalog and customer ledger data from Tally or Excel?",
      a: "Yes! We provide white-glove catalog migration. Our team imports your existing Excel, CSV, or Tally product lists, barcode numbers, batch records, HSN codes, and opening stock balances into Doonext in minutes with zero business disruption."
    },
    {
      q: "Will Doonext work with my existing thermal printers and barcode scanners?",
      a: "Absolutely. Doonext is completely hardware agnostic. It operates with standard 2-inch and 3-inch thermal printers (USB, LAN, Bluetooth), 1D/2D barcode scanners, cash drawers, and electronic weighing scales with zero proprietary lock-in."
    },
    {
      q: "How does multi-store synchronization work across different cities?",
      a: "Our hybrid cloud architecture balances stock and sales ledgers in real time. Store managers can access counter reports, godown transfers, centralized item price updates, and WhatsApp customer ledgers from anywhere using any phone, tablet, or laptop."
    },
    {
      q: "How long does it take for cashier and counter staff to learn Doonext?",
      a: "Our user interface is designed for radical simplicity. Most cashier and counter staff master single-screen billing in under 10 minutes. We also provide free 1-on-1 staff training and regional video tutorials."
    },
    {
      q: "What kind of technical customer support is included?",
      a: "You get direct access to our Coimbatore engineering support desk on phone and WhatsApp from 8:00 AM to 10:00 PM IST every day. With average phone pickup under 18 seconds, you never get lost in automated chatbot loops."
    }
  ];

  return (
    <div className="min-h-screen text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white font-sans">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedSoftware} />

      <main className="flex-1 pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER WITH INTERACTIVE LIVE SEARCH & FILTER MATRIX */}
        {/* ========================================================================= */}
        <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#f8f3fd] via-[#fbf9fe] to-white border-b border-purple-100/60 relative overflow-hidden text-center">
          {/* Ambient lighting & tech grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#5e2b9d]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#40C351]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5e2b9d]/10 border border-[#5e2b9d]/20 text-[#5e2b9d] text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPLETE SOFTWARE SUITE • OFFLINE-FIRST ARCHITECTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#282023] tracking-tight leading-[1.12]">
              Explore the Complete <br className="hidden sm:inline" />
              <span className="text-[#5e2b9d] bg-gradient-to-r from-[#5e2b9d] via-[#7b3dbd] to-[#40C351] bg-clip-text text-transparent">
                Doonext Software Directory
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our full ecosystem of high-velocity, offline-first operating software engineered for Indian retail counters, restaurants, hotel resorts, multi-godown warehouses, and enterprise payroll.
            </p>

            {/* Live Search Input Box */}
            <div className="max-w-2xl mx-auto mt-8 relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by software name, feature, industry (e.g. 'Restaurant', 'Thermal', 'GST', 'Pharmacy')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base rounded-2xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-4 focus:ring-[#5e2b9d]/10 outline-hidden transition-all bg-white shadow-xs placeholder:text-slate-400 text-[#282023]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-bold text-slate-400 hover:text-[#5e2b9d] p-1"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: "all", label: "All Softwares (9)" },
                { id: "retail", label: "Retail & Pharmacy POS" },
                { id: "food", label: "Restaurant & Dining" },
                { id: "hospitality", label: "Hotel ERP" },
                { id: "enterprise", label: "Warehouse & ERP" },
                { id: "marketing", label: "CRM & WhatsApp" },
                { id: "hr", label: "Payroll & HRMS" },
                { id: "custom", label: "Custom Architecture" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#5e2b9d] text-white shadow-md shadow-[#5e2b9d]/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-[#5e2b9d]/5 hover:text-[#5e2b9d] border border-slate-200/90 shadow-2xs"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search result indicator */}
            <div className="mt-4 text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-[#5e2b9d]">{filteredSoftwares.length}</span> of {allSoftwares.length} specialized software suites
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE FLAGSHIP SOFTWARE SPOTLIGHT PREVIEW */}
        {/* ========================================================================= */}
        <section className="py-12 bg-gradient-to-b from-white via-[#faf7fd] to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#40C351]/10 text-[#40C351] text-xs font-bold uppercase tracking-wider border border-[#40C351]/25 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                    <span>FLAGSHIP SPOTLIGHT VIEW</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#282023]">
                    Interactive Architecture Spotlight
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Select a flagship engine to preview real-world counter velocity and operational telemetry.
                  </p>
                </div>

                {/* Switcher tabs */}
                <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
                  {[
                    { id: "billing", label: "Retail Billing POS", icon: Receipt },
                    { id: "restaurant", label: "Restaurant KOT", icon: Utensils },
                    { id: "erp", label: "Cloud Multi-Godown", icon: Boxes },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = spotlightSoftware === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSpotlightSoftware(tab.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                          isActive
                            ? "bg-white text-[#5e2b9d] shadow-sm"
                            : "text-slate-600 hover:text-[#282023]"
                        }`}
                      >
                        <TabIcon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spotlight Content Area */}
              {(() => {
                const item = allSoftwares.find((s) => s.id === spotlightSoftware) || allSoftwares[0];
                const ItemIcon = item.icon;
                return (
                  <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-2xs`}>
                          <ItemIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#282023]">{item.title}</h3>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{item.tagline}</p>
                        </div>
                      </div>

                      {/* Capabilities Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Best For Tag */}
                      <div className="p-3 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 text-xs text-slate-600">
                        <span className="font-bold text-[#5e2b9d]">Ideal For: </span>
                        {item.idealFor}
                      </div>

                      {/* CTA Trigger */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => openDemoFor(item.title)}
                          className="px-6 py-3 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5e2b9d]/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Schedule 1-on-1 Walkthrough</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                          href="/contact"
                          className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 shadow-2xs transition-all"
                        >
                          Ask Questions
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Live Operational Telemetry Card */}
                    <div className="lg:col-span-5">
                      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-[#282023] to-[#3b1766] text-white shadow-xl space-y-4 relative overflow-hidden">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold">
                          <span className="flex items-center gap-2 text-purple-200">
                            <Cpu className="w-4 h-4 text-[#40C351]" />
                            Live Telemetry Stream
                          </span>
                          <span className="text-[10px] bg-[#40C351]/20 text-[#40C351] px-2 py-0.5 rounded-full border border-[#40C351]/30">
                            Offline Engine Active
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-slate-300">Execution Velocity:</span>
                            <span className="font-bold text-[#EFAF08]">{item.metrics.speed}</span>
                          </div>

                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-slate-300">Continuous Availability:</span>
                            <span className="font-bold text-[#40C351]">{item.metrics.uptime}</span>
                          </div>

                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-slate-300">Daily Scale Capacity:</span>
                            <span className="font-bold text-white">{item.metrics.scale}</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-[11px] text-purple-200 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0" />
                          <span>Guaranteed zero transaction drop with auto cloud sync.</span>
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
        {/* 3. COMPLETE SOFTWARES DIRECTORY GRID */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#282023]">
                  All Specialized Software Products
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Each product is engineered from the ground up for speed, offline reliability, and Indian regulatory compliance.
                </p>
              </div>
              <div className="text-xs font-semibold text-slate-400">
                100% Indian GST &amp; E-Way Compliant
              </div>
            </div>

            {filteredSoftwares.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#282023]">No Softwares Found</h3>
                <p className="text-xs text-slate-500 mt-1">
                  No software matches your current search &quot;{searchQuery}&quot;. Try another term or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 px-5 py-2 rounded-xl bg-[#5e2b9d] text-white text-xs font-bold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSoftwares.map((software) => {
                  const Icon = software.icon;
                  return (
                    <div
                      key={software.id}
                      id={software.id}
                      className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#5e2b9d]/40 transition-all duration-300 flex flex-col justify-between group scroll-mt-24 relative overflow-hidden hover:-translate-y-1"
                    >
                      {/* Top subtle glow */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#5e2b9d]/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />

                      <div className="space-y-4">
                        
                        {/* Top Badge & Icon */}
                        <div className="flex items-start justify-between gap-3">
                          <div className={`w-12 h-12 rounded-2xl ${software.color} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${software.color}`}>
                            {software.badge}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                            {software.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                            {software.tagline}
                          </p>
                        </div>

                        {/* Performance Mini Badges */}
                        <div className="grid grid-cols-3 gap-2 py-1 text-center">
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-[11px] font-bold text-[#282023]">{software.metrics.speed}</div>
                            <div className="text-[9px] text-slate-400">Velocity</div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-[11px] font-bold text-[#40C351]">{software.metrics.uptime}</div>
                            <div className="text-[9px] text-slate-400">Uptime</div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-[11px] font-bold text-[#5e2b9d]">{software.metrics.scale}</div>
                            <div className="text-[9px] text-slate-400">Capacity</div>
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Key Capabilities:
                          </div>
                          <div className="space-y-1.5">
                            {software.features.slice(0, 4).map((feat, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Ideal For */}
                        <div className="p-3 rounded-xl bg-[#faf7fd] border border-[#5e2b9d]/10 text-[11px] text-slate-600 leading-snug">
                          <span className="font-bold text-[#282023]">Best for: </span>
                          {software.idealFor}
                        </div>

                      </div>

                      {/* Action Row */}
                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                        <button
                          onClick={() => openDemoFor(software.title)}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-xs shadow-md shadow-[#5e2b9d]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02]"
                        >
                          <span>Request Demo</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        
                        <Link
                          href="/contact"
                          className="px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-colors shrink-0 flex items-center gap-1"
                        >
                          <span>Pricing</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. HARDWARE & ECOSYSTEM INTEROPERABILITY ("ZERO HARDWARE LOCK-IN") */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#fafbfc] border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <Printer className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>ZERO HARDWARE LOCK-IN</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight">
                Plug &amp; Play with Any <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Standard Counter Hardware</span>
              </h2>
              
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Never purchase costly proprietary POS machines. Doonext works with the printers, scanners, and terminals you already own.
              </p>
            </div>

            {/* Hardware Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareItems.map((hw, idx) => {
                const HwIcon = hw.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#5e2b9d]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shadow-2xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-all">
                          <HwIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/20">
                          {hw.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors mb-1.5">
                        {hw.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {hw.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                      <span className="font-bold text-[#282023]">Verified Brands: </span>
                      <span className="text-slate-500">{hw.brands}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ENTERPRISE ARCHITECTURE & SECURITY STANDARD */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#faf7fd] via-white to-[#faf7fd] border border-[#5e2b9d]/20 shadow-sm">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5e2b9d] bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
                  SECURITY &amp; RELIABILITY STANDARDS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282023] mt-2">
                  Enterprise-Grade Performance for Every Indian Merchant
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Built to protect your cash ledger, customer records, and inventory data with zero downtime.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center">
                    <WifiOff className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#282023]">Offline-First Core</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Local embedded databases maintain billing operations even during prolonged internet outages.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#282023]">Indian Cloud Servers</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    100% data sovereignty hosted strictly on ISO-certified data centers located inside India.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#282023]">Role-Based Access</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Granular permissions for cashiers, store supervisors, accountants, and business owners.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#282023]">Hourly Cloud Backups</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Automated encrypted ledger snapshots prevent any risk of data loss or counter corruption.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FREQUENTLY ASKED QUESTIONS (INTERACTIVE ACCORDION) */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#fafbfc] border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest mb-3 bg-[#5e2b9d]/10 px-3.5 py-1.5 rounded-full border border-[#5e2b9d]/20">
                <HelpCircle className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282023] tracking-tight">
                Everything You Need to Know <br className="hidden sm:inline" />
                <span className="text-[#5e2b9d]">Before Getting Started</span>
              </h2>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Got questions? We have answers. Speak with our Coimbatore engineering squad for custom requests.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-[#5e2b9d]/40 shadow-sm"
                        : "bg-white/80 border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-[#282023]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#5e2b9d]" : ""
                        }`}
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#5e2b9d] via-[#4d2282] to-[#3b1766] p-8 sm:p-14 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#40C351]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 text-center lg:text-left relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#EFAF08]" />
                  <span>FREE 14-DAY WALKTHROUGH • NO COMMITMENT</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                  Need a Specialized Workflow or Multi-Branch Setup?
                </h3>

                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
                  Our Coimbatore technical squad will configure pre-built modules, import your existing Tally/Excel catalog, or build tailor-made architecture for your business.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-purple-200">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Free Catalog Data Import</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Zero Setup Fees</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Direct Engineer Help</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#5e2b9d] font-bold text-sm hover:bg-slate-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919500618277"
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-xs transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95006 18277</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onRequestDemo={() => setDemoModalOpen(true)} />
    </div>
  );
}
