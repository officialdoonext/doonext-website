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
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function SoftwaresPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"billing" | "erp" | "crm" | "payroll" | "custom">("billing");

  const softwareModules = [
    {
      id: "billing",
      name: "Doonext Billing POS",
      badge: "Flagship Core",
      tagline: "Sub-Second Offline-First Counter Point of Sale",
      description: "Engineered for high-volume retail stores, supermarkets, restaurants, and cafes. Scans, calculates GST splits, and prints thermal receipts in under 0.2 seconds with guaranteed offline resilience.",
      icon: Receipt,
      color: "bg-[#8C5288]/10 text-[#8C5288] border-[#8C5288]/20",
      accent: "text-[#8C5288]",
      btnBg: "bg-[#8C5288] hover:bg-[#763f72]",
      features: [
        "Barcode & touch-first express counter billing (< 0.2s)",
        "Offline-first local cache engine with zero internet downtime",
        "Automated Multi-GST tax slabs, HSN codes & E-Way bills",
        "Supports thermal receipt printers (2-inch, 3-inch, LAN, USB, Bluetooth)",
        "Hold cart, split bills, customer credits & loyalty points",
        "Kitchen Order Token (KOT) multi-printer station routing"
      ],
      metrics: [
        { label: "Scan Velocity", val: "< 0.2s" },
        { label: "Offline Uptime", val: "100%" },
        { label: "Daily Bills", val: "50,000+" }
      ]
    },
    {
      id: "erp",
      name: "Doonext Cloud ERP",
      badge: "Multi-Godown",
      tagline: "End-to-End Inventory, Purchase & Warehouse Intelligence",
      description: "Manage multi-branch stock transfers, purchase orders, vendor ledgers, and barcode batch/expiry tracking with automated low-stock reordering alerts.",
      icon: Boxes,
      color: "bg-[#40C351]/10 text-[#40C351] border-[#40C351]/20",
      accent: "text-[#40C351]",
      btnBg: "bg-[#40C351] hover:bg-[#34a543]",
      features: [
        "Centralized multi-branch & multi-godown stock sync",
        "Batch number, serial number & expiry date tracking",
        "Automated purchase orders & vendor rate comparison",
        "Stock audit verification with barcode mobile scanner",
        "Raw material BOM (Bill of Materials) for manufacturing",
        "Dead stock analysis & profit margin reports"
      ],
      metrics: [
        { label: "Warehouses Sync", val: "Real-time" },
        { label: "Inventory Accuracy", val: "99.9%" },
        { label: "SKU Capacity", val: "500,000+" }
      ]
    },
    {
      id: "crm",
      name: "Doonext CRM & Marketing",
      badge: "WhatsApp Ready",
      tagline: "Omnichannel Customer Retention & Automated Invoicing",
      description: "Convert walk-in buyers into repeat lifetime customers with automated WhatsApp digital receipts, personalized promotional campaigns, and loyalty points.",
      icon: Users2,
      color: "bg-sky-50 text-sky-600 border-sky-200",
      accent: "text-sky-600",
      btnBg: "bg-sky-600 hover:bg-sky-700",
      features: [
        "Automated WhatsApp digital invoice delivery upon checkout",
        "Customer buying history, credit limits & payment reminders",
        "Tiered loyalty reward programs & cashback wallet",
        "Targeted SMS & WhatsApp promotional broadcast campaigns",
        "Lead pipeline tracking for B2B sales & wholesale orders",
        "Customer feedback & Google review boost triggers"
      ],
      metrics: [
        { label: "WhatsApp Open Rate", val: "98%" },
        { label: "Repeat Sales Boost", val: "+28%" },
        { label: "Leads Managed", val: "1M+" }
      ]
    },
    {
      id: "payroll",
      name: "Doonext Payroll & HRMS",
      badge: "1-Click Compliance",
      tagline: "Biometric Attendance, Automated Payslips & PF/ESI Filing",
      description: "Eliminate spreadsheet payroll errors. Seamlessly calculate salaries, overtime, deductions, advances, and generate bank-ready disbursement sheets in seconds.",
      icon: Wallet,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600",
      btnBg: "bg-[#EFAF08] hover:bg-[#d69d07] text-[#282023]",
      features: [
        "Biometric fingerprint & facial recognition attendance sync",
        "Automated salary calculation with OT, shifts & deductions",
        "One-click PDF payslips delivered via WhatsApp & Email",
        "Statutory compliance: PF, ESI, TDS & Professional Tax",
        "Employee self-service mobile portal for leave requests",
        "Bank disbursement batch transfer sheet generator"
      ],
      metrics: [
        { label: "Payroll Processing", val: "< 2 mins" },
        { label: "Compliance Accuracy", val: "100%" },
        { label: "Staff Supported", val: "Unlimited" }
      ]
    },
    {
      id: "custom",
      name: "Custom Enterprise Software",
      badge: "Tailored Architecture",
      tagline: "Bespoke Web & Mobile Applications Built for Your Workflow",
      description: "When off-the-shelf software doesn't fit your specialized business rules, our Coimbatore engineering team designs and deploys custom software tailored to your exact needs.",
      icon: Code2,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "text-purple-700",
      btnBg: "bg-purple-700 hover:bg-purple-800",
      features: [
        "Custom API integrations with SAP, Tally, Zoho & payment gateways",
        "Bespoke Android / iOS mobile applications for field agents",
        "Custom analytics dashboards & automated executive reporting",
        "Dedicated cloud server architecture with high-security VPC",
        "On-premise or private cloud deployment flexibility",
        "Dedicated engineering squad with continuous SLA maintenance"
      ],
      metrics: [
        { label: "Custom Modules", val: "50+" },
        { label: "API Response", val: "< 120ms" },
        { label: "SLA Guarantee", val: "99.98%" }
      ]
    }
  ];

  const selectedModule = softwareModules.find(m => m.id === activeTab) || softwareModules[0];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white font-sans">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1 pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION -> Softwares Platform Overview */}
        {/* ========================================================================= */}
        <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#fbf8fc] via-white to-[#fafbfc] border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#8C5288]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5288]/10 border border-[#8C5288]/20 text-[#8C5288] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DOONEXT SOFTWARES PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#282023] tracking-tight max-w-4xl mx-auto leading-[1.14]">
              High-Velocity Softwares Built for <br className="hidden sm:inline" />
              <span className="text-[#8C5288]">Modern Indian Businesses</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From high-traffic retail POS counters and kitchen KOT networks to multi-warehouse ERPs and automated payroll — experience softwares engineered for 100% reliability.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#8C5288] hover:bg-[#763f72] text-white font-bold text-sm shadow-md shadow-[#8C5288]/25 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Software Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/products"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#282023] font-bold text-sm border border-slate-200 shadow-xs transition-all"
              >
                Explore Hardware &amp; Products
              </Link>
            </div>

            {/* Top Quick Specs Ribbon */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xs font-bold text-[#8C5288]">Offline-First Tech</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Zero counter downtime</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xs font-bold text-[#40C351]">Sub-Second Speed</div>
                <div className="text-[11px] text-slate-500 mt-0.5">&lt; 0.2s barcode checkouts</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xs font-bold text-amber-600">GST &amp; E-Way Compliant</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Automated tax splits</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-xs font-bold text-sky-600">Direct Engineer Desk</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Phone &amp; WhatsApp support</div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE SOFTWARE MODULE EXPLORER */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
                MODULE ECOSYSTEM
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282023]">
                Explore Doonext Softwares Suite
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Select a solution below to see core features, performance benchmarks, and live integration architecture.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-3xl mx-auto mb-12">
              {softwareModules.map((m) => {
                const Icon = m.icon;
                const isSelected = activeTab === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab(m.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected 
                        ? "bg-white text-[#8C5288] shadow-sm border border-slate-200/80" 
                        : "text-slate-600 hover:text-[#8C5288] hover:bg-white/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{m.name.replace("Doonext ", "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Module Showcase Panel */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#faf8fb] via-white to-[#fafbfc] border border-slate-200/90 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Specs & Features (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${selectedModule.color}`}>
                      {selectedModule.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Enterprise Ready</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#282023]">
                    {selectedModule.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#8C5288]">
                    {selectedModule.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedModule.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedModule.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setDemoModalOpen(true)}
                      className={`px-7 py-3 rounded-full ${selectedModule.btnBg} text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer`}
                    >
                      <span>Book {selectedModule.name.replace("Doonext ", "")} Walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href="/contact"
                      className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#282023] font-bold text-xs border border-slate-200 transition-all"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>

                {/* Right Metrics & Architecture Visual (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Performance Proof Metrics Card */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Performance Benchmarks
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {selectedModule.metrics.map((met, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-base sm:text-lg font-bold text-[#282023]">{met.val}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{met.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connected Stack Pill */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 text-xs">
                    <div className="font-bold text-[#282023] flex items-center justify-between">
                      <span>Deployment &amp; Compatibility</span>
                      <span className="text-[#40C351] font-bold">100% Ready</span>
                    </div>

                    <div className="space-y-2 text-slate-500 text-[11px]">
                      <div className="flex items-center justify-between py-1 border-b border-slate-50">
                        <span className="flex items-center gap-1.5"><Laptop className="w-3.5 h-3.5 text-[#8C5288]" /> Desktop Windows / Linux</span>
                        <span className="font-semibold text-slate-700">Supported</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-50">
                        <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-[#40C351]" /> Android Tabs &amp; POS Terminals</span>
                        <span className="font-semibold text-slate-700">Supported</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-50">
                        <span className="flex items-center gap-1.5"><Printer className="w-3.5 h-3.5 text-amber-600" /> Thermal Receipt &amp; Barcode Printers</span>
                        <span className="font-semibold text-slate-700">Plug &amp; Play</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-sky-600" /> Cloud Database &amp; Local Offline Storage</span>
                        <span className="font-semibold text-slate-700">Hybrid Sync</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. HARDWARE COMPATIBILITY & DEPLOYMENT SPECS */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#fafbfc] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
                PLUG &amp; PLAY ARCHITECTURE
              </div>
              <h2 className="text-3xl font-bold text-[#282023]">
                Zero Hardware Lock-In. Works with Your Existing Devices.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Doonext softwares are built on an open driver stack that connects seamlessly with all standard POS peripherals in India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#8C5288]/10 text-[#8C5288] flex items-center justify-center">
                  <Printer className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#282023] text-base">Receipt &amp; KOT Printers</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  2-inch, 3-inch thermal printers, ESC/POS, LAN network printers, Bluetooth and USB thermal machines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#282023] text-base">Barcode Scanners &amp; Scales</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  1D/2D QR handheld scanners, omnidirectional laser counters, and digital weighing scale RS232 integrations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#282023] text-base">POS Machines &amp; Desktops</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Windows 10/11 desktops, all-in-one capacitive touch POS terminals, and Android tablets.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#282023] text-base">Biometric &amp; Drawers</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Electronic cash drawers (RJ11), biometric fingerprint machines, and facial recognition terminals.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#8C5288] via-[#763f72] to-[#5b2857] p-8 sm:p-12 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Ready to streamline your business operations?</h3>
                <p className="text-purple-100 text-sm mt-1">Schedule a 1-on-1 personalized live demo with our Coimbatore solution specialists.</p>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-[#8C5288] font-bold text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
              >
                Schedule Free Demo
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
