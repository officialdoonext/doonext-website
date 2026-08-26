"use client";

import React, { useState } from "react";
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
  Download, 
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
  ChevronDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function SoftwaresPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState("Doonext Billing POS");
  const [activeCategory, setActiveCategory] = useState("all");

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
      tagline: "Sub-second express barcode billing with offline-first guaranteed zero downtime.",
      icon: Receipt,
      color: "bg-[#8C5288]/10 text-[#8C5288] border-[#8C5288]/20",
      accentBg: "bg-[#8C5288]",
      btnBg: "bg-[#8C5288] hover:bg-[#763f72]",
      features: [
        "Barcode & QR express scan checkout (< 0.2s response)",
        "Offline-first local database with auto cloud sync",
        "Automated Multi-GST tax slabs, HSN codes & E-Way bills",
        "Supports thermal receipt printers (2-inch, 3-inch, LAN, USB, Bluetooth)",
        "Hold cart, split bills, customer credits & loyalty points",
        "Digital weighing scale auto-weight RS232 sync"
      ],
      idealFor: "Supermarkets, Grocery Stores, Apparel & Footwear Boutiques, Electronics, Department Stores",
      metrics: { speed: "< 0.2s", uptime: "100% Offline", scale: "50,000+ Bills/Day" }
    },
    {
      id: "restaurant",
      category: "food",
      title: "Doonext Restaurant POS",
      badge: "Food & Dining Engine",
      tagline: "Visual table floor map, multi-station Kitchen Order Tokens (KOT) and Captain mobile ordering.",
      icon: Utensils,
      color: "bg-[#EFAF08]/15 text-amber-700 border-[#EFAF08]/30",
      accentBg: "bg-[#EFAF08]",
      btnBg: "bg-[#EFAF08] hover:bg-[#d69d07] text-[#282023]",
      features: [
        "Interactive live table grid with occupancy status & merge bills",
        "Multi-station KOT routing to kitchen & bar network printers",
        "Android Captain mobile app for wireless table ordering",
        "Recipe ingredient BOM & live food costing wastage control",
        "Split bills, customized item modifiers & discount controls",
        "Zomato & Swiggy online order integration support"
      ],
      idealFor: "Fine Dining, Quick Service Restaurants (QSR), Cafes, Bakeries, Food Courts, Pubs & Bars",
      metrics: { speed: "< 0.3s KOT", uptime: "100%", scale: "300+ Tables" }
    },
    {
      id: "hotel",
      category: "hospitality",
      title: "Doonext Hotel ERP",
      badge: "Hospitality & Room Suites",
      tagline: "End-to-end hotel management with live room grid, guest folio billing, and housekeeping sync.",
      icon: Hotel,
      color: "bg-sky-50 text-sky-700 border-sky-200",
      accentBg: "bg-sky-600",
      btnBg: "bg-sky-600 hover:bg-sky-700 text-white",
      features: [
        "Color-coded room reservation calendar & occupancy matrix",
        "Express check-in / check-out with digital ID scanning",
        "Integrated room service & dining restaurant folio posting",
        "Housekeeping room inspection & maintenance dispatch",
        "Corporate rates, travel agent commission tracking & advance deposits",
        "Comprehensive GST master folio invoice generation"
      ],
      idealFor: "Hotels, Luxury Resorts, Boutique Stays, Lodges, Serviced Apartments, Highway Motels",
      metrics: { speed: "Instant Check-In", uptime: "99.98%", scale: "500+ Rooms" }
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
      btnBg: "bg-[#40C351] hover:bg-[#34a543] text-white",
      features: [
        "Real-time inter-branch & godown stock transfers with tracking",
        "Batch number, serial number & manufacturer expiry date matrix",
        "Automated purchase orders based on minimum stock threshold",
        "Stock audit reconciliation using handheld barcode terminals",
        "Vendor price comparison, accounts payable & purchase returns",
        "Dead stock analysis & gross profit margin drill-down"
      ],
      idealFor: "Multi-Store Chains, Central Warehouses, Distributors, FMCG Wholesalers, Manufacturers",
      metrics: { speed: "Real-time Sync", uptime: "99.99%", scale: "500,000+ SKUs" }
    },
    {
      id: "crm",
      category: "marketing",
      title: "Doonext CRM & WhatsApp Retention",
      badge: "WhatsApp Ready",
      tagline: "Automate digital PDF bills, broadcast festive campaigns, and turn walk-ins into repeat buyers.",
      icon: Users2,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      accentBg: "bg-purple-700",
      btnBg: "bg-purple-700 hover:bg-purple-800 text-white",
      features: [
        "1-Click automated WhatsApp invoice delivery at checkout counter",
        "Customer purchasing history, credit limits & payment reminders",
        "Tiered loyalty reward programs, points redemption & gift vouchers",
        "Targeted WhatsApp & SMS broadcast campaigns for offers",
        "Visual sales pipeline tracking for high-value B2B deals",
        "Customer satisfaction feedback & Google review booster"
      ],
      idealFor: "Retail Brands, Service Providers, Boutiques, Dealerships, Salons, B2B Sales Teams",
      metrics: { speed: "Instant Send", uptime: "98% Open Rate", scale: "1M+ Customers" }
    },
    {
      id: "payroll",
      category: "hr",
      title: "Doonext Biometric Payroll & HRMS",
      badge: "1-Click Compliance",
      tagline: "Biometric attendance sync, automated salary calculations, and statutory PF/ESI filing.",
      icon: Wallet,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      accentBg: "bg-amber-600",
      btnBg: "bg-amber-600 hover:bg-amber-700 text-white",
      features: [
        "Biometric fingerprint & facial recognition device real-time sync",
        "Automated salary calculation with overtime, shifts & advances",
        "One-click PDF payslip generation sent via WhatsApp & Email",
        "Statutory compliance: PF, ESI, TDS, Professional Tax & Form 16",
        "Employee self-service mobile portal for leave requests & approvals",
        "Bank disbursement batch transfer sheet generator for any bank"
      ],
      idealFor: "Retail Stores, Factories, Hospitals, Educational Institutes, Offices, Logistics Firms",
      metrics: { speed: "< 2 Min Payroll", uptime: "100% Compliant", scale: "Unlimited Staff" }
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
      btnBg: "bg-teal-600 hover:bg-teal-700 text-white",
      features: [
        "Medicine batch, expiry date & strip/tablet fraction billing",
        "Instant rack & shelf locator during customer counter billing",
        "Automated Schedule H & H1 narcotics audit registers",
        "Doctor prescription history & customer refill alerts via WhatsApp",
        "Substitute salt/generic drug suggestion search engine",
        "Drug distributor purchase import with automated invoice mapping"
      ],
      idealFor: "Retail Pharmacies, Medical Stores, Ayurvedic Clinics, Hospital Dispensaries, Chemists",
      metrics: { speed: "< 0.2s Search", uptime: "100% Offline", scale: "100,000+ Salts" }
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
      btnBg: "bg-indigo-700 hover:bg-indigo-800 text-white",
      features: [
        "Bulk wholesale B2B billing with multi-level pricing & scheme discounts",
        "Customer credit limit enforcement & outstanding payment ledger",
        "Field sales agent mobile app for geo-tagged shop order booking",
        "Transport Lorry Receipt (LR) tracking, dispatch & e-Way bill sync",
        "Automated bank reconciliation & payment receipt collection",
        "Multi-company billing from a single unified accounting console"
      ],
      idealFor: "FMCG Distributors, Wholesale Traders, Building Material Dealers, Electrical & Hardware Wholesalers",
      metrics: { speed: "Bulk Print", uptime: "99.98%", scale: "₹100Cr+ GMV" }
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
      btnBg: "bg-rose-600 hover:bg-rose-700 text-white",
      features: [
        "Custom API integrations with SAP, Tally, Zoho & payment gateways",
        "Bespoke Android / iOS mobile applications for internal field teams",
        "Custom executive dashboards & automated daily KPI report triggers",
        "Dedicated cloud server architecture with high-security VPC",
        "On-premise or private cloud deployment flexibility",
        "Dedicated Coimbatore engineering squad with continuous SLA maintenance"
      ],
      idealFor: "Large Scale Enterprises, Specialized Manufacturers, Supply Chain Networks, Fintech & Logistics",
      metrics: { speed: "< 100ms API", uptime: "99.99% SLA", scale: "Full Source Code" }
    }
  ];

  const filteredSoftwares = activeCategory === "all"
    ? allSoftwares
    : allSoftwares.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white font-sans">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedSoftware} />

      <main className="flex-1 pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER */}
        {/* ========================================================================= */}
        <section className="pt-14 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#fbf8fc] via-white to-[#fafbfc] border-b border-slate-100 relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5288]/10 border border-[#8C5288]/20 text-[#8C5288] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Softwares Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#282023] tracking-tight leading-[1.14]">
              Explore All <span className="text-[#8C5288]">Doonext Softwares</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our full directory of high-velocity, offline-first softwares engineered for retail POS counters, restaurants, hotels, warehouses, payroll, and enterprise operations.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Softwares (9)" },
                { id: "retail", label: "Retail & Pharmacy POS" },
                { id: "food", label: "Restaurant & Dining" },
                { id: "hospitality", label: "Hotel ERP" },
                { id: "enterprise", label: "Warehouse & ERP" },
                { id: "marketing", label: "CRM & WhatsApp" },
                { id: "hr", label: "Payroll & HRMS" },
                { id: "custom", label: "Custom Software" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#8C5288] text-white shadow-md shadow-[#8C5288]/25"
                      : "bg-white text-[#282023] hover:bg-[#8C5288]/5 hover:text-[#8C5288] border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. COMPLETE SOFTWARES GRID */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {filteredSoftwares.map((software) => {
                const Icon = software.icon;
                return (
                  <div
                    key={software.id}
                    id={software.id}
                    className="p-7 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
                  >
                    <div className="space-y-4">
                      
                      {/* Top Badge & Icon */}
                      <div className="flex items-start justify-between gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${software.color} flex items-center justify-center shrink-0 shadow-2xs`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${software.color}`}>
                          {software.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#8C5288] transition-colors">
                          {software.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {software.tagline}
                        </p>
                      </div>

                      {/* Performance Mini Badges */}
                      <div className="grid grid-cols-3 gap-2 py-1 text-center">
                        <div className="p-2 rounded-xl bg-white border border-slate-200/80">
                          <div className="text-[11px] font-bold text-[#282023]">{software.metrics.speed}</div>
                          <div className="text-[9px] text-slate-400">Response</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200/80">
                          <div className="text-[11px] font-bold text-[#40C351]">{software.metrics.uptime}</div>
                          <div className="text-[9px] text-slate-400">Uptime</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200/80">
                          <div className="text-[11px] font-bold text-[#8C5288]">{software.metrics.scale}</div>
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
                      <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200/70 text-[11px] text-slate-600 leading-snug">
                        <span className="font-bold text-[#282023]">Best for: </span>
                        {software.idealFor}
                      </div>

                    </div>

                    {/* Action Row */}
                    <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between gap-3">
                      <button
                        onClick={() => openDemoFor(software.title)}
                        className={`flex-1 py-2.5 px-4 rounded-xl ${software.btnBg} text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer`}
                      >
                        <span>Request Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <Link
                        href="/contact"
                        className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs transition-colors shrink-0"
                      >
                        Pricing
                      </Link>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section className="pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#8C5288] via-[#763f72] to-[#5b2857] p-8 sm:p-12 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Need a specialized workflow or multi-branch deployment?</h3>
                <p className="text-purple-100 text-sm mt-1">Our Coimbatore engineering squad can configure pre-built modules or build custom architecture for you.</p>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-[#8C5288] font-bold text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
              >
                Schedule Free Software Demo
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
