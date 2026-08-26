"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Receipt, 
  Boxes, 
  Users, 
  Wallet, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Store, 
  Utensils, 
  Building2, 
  Coffee, 
  Package, 
  HeartPulse, 
  GraduationCap, 
  Hotel,
  Layers,
  Printer,
  Barcode,
  Smartphone,
  ShieldCheck,
  Zap,
  BarChart3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function ProductsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Doonext Billing");
  const [activeCategory, setActiveCategory] = useState("all");

  const openDemoFor = (productName: string) => {
    setSelectedProduct(productName);
    setDemoModalOpen(true);
  };

  const productCatalog = [
    {
      id: "billing",
      category: "retail",
      title: "Doonext Billing",
      badge: "Retail & Counter POS",
      tagline: "Ultra-fast billing with barcode scanner, inventory control & GST compliance.",
      icon: Receipt,
      accentColor: "bg-[#8C5288]",
      features: [
        "Barcode Scanning & Fast Search (<0.2 sec response)",
        "GST Invoice Generator & E-Way Bill Integration",
        "Multi-Counter & Multi-Branch Synchronization",
        "Low Stock Alerts & Automated Purchase Orders",
        "Thermal & Laser Printer Support (2-inch, 3-inch, A4)",
        "Offline-First Mode with Automatic Cloud Sync",
      ],
      idealFor: "Supermarkets, Apparel Stores, Footwear, Electronics, Grocery & Stationery Shops",
    },
    {
      id: "restaurant",
      category: "food",
      title: "Doonext Restaurant",
      badge: "Food & Beverage POS",
      tagline: "End-to-end table management, instant Kitchen Order Tickets (KOT) & online orders.",
      icon: Utensils,
      accentColor: "bg-[#EFAF08]",
      features: [
        "Visual Table Layout & Real-Time Table Status",
        "Multi-Station Kitchen Order Tickets (KOT) via Network Printers",
        "Captains Ordering Mobile App for Waiters",
        "Recipe Management & Food Costing Analytics",
        "Splitting Bills & Custom Discount Authorizations",
        "Zomato & Swiggy Integration Support",
      ],
      idealFor: "Fine Dining, Quick Service Restaurants (QSR), Food Courts, Bars & Bakeries",
    },
    {
      id: "hotel",
      category: "hospitality",
      title: "Doonext Hotel",
      badge: "Hospitality & Room ERP",
      tagline: "Complete hotel management system for room reservations, housekeeping & guest billing.",
      icon: Hotel,
      accentColor: "bg-sky-600",
      features: [
        "Interactive Room Grid & Live Occupancy Matrix",
        "Express Check-In / Check-Out with ID Proof Archiving",
        "Integrated Room Service & Restaurant Folio Billing",
        "Housekeeping & Room Maintenance Status Tracking",
        "Corporate & Travel Agent Commission Management",
        "GST Compliant Master Folio Invoicing",
      ],
      idealFor: "Hotels, Resorts, Serviced Apartments, Boutique Stays & Motels",
    },
    {
      id: "crm",
      category: "sales",
      title: "Doonext CRM",
      badge: "Sales Pipeline & Leads",
      tagline: "Track prospective leads, automate follow-ups, and accelerate deal closures.",
      icon: Users,
      accentColor: "bg-[#8C5288]",
      features: [
        "Omni-channel Lead Ingestion (Website, WhatsApp, Calls)",
        "Visual Kanban Pipeline & Stage Tracking",
        "Automated WhatsApp & Email Follow-up Triggers",
        "Team Performance & Sales Target Dashboards",
        "Quotation & Proposal Generator with 1-Click Approval",
        "Customer Lifetime Value (CLV) Analytics",
      ],
      idealFor: "B2B Enterprises, Real Estate, Consultancies, Agencies & Service Providers",
    },
    {
      id: "payroll",
      category: "hr",
      title: "Doonext Payroll",
      badge: "HRMS & Salary Compliance",
      tagline: "Automate biometric attendance, PF, ESI, TDS calculations & payslip generation.",
      icon: Wallet,
      accentColor: "bg-[#40C351]",
      features: [
        "Biometric Machine & Geofenced Mobile Attendance Sync",
        "Automated PF, ESI, Professional Tax & TDS Compliance",
        "Custom Shift Scheduling & Overtime Calculations",
        "Employee Self-Service Portal for Leave Requests & Slips",
        "1-Click Direct Bank Transfer File Generator",
        "Automated Form 16 & Year-End Tax Reports",
      ],
      idealFor: "Manufacturing Units, Retail Chains, Offices, Hospitals & Educational Institutes",
    },
    {
      id: "custom",
      category: "custom",
      title: "Custom Software Solutions",
      badge: "Tailor-Made Architecture",
      tagline: "Bespoke software engineered specifically to solve your unique business workflows.",
      icon: Code2,
      accentColor: "bg-[#FB5454]",
      features: [
        "Dedicated Requirement Analysis & Custom Architecture Design",
        "Modern Cloud-Native Tech Stack (Next.js, Node, PostgreSQL, AWS)",
        "API Integration with Legacy ERPs & Third-Party Hardware",
        "Enterprise-Grade Role-Based Access Control (RBAC)",
        "Full Source Code Handover & Dedicated SLA Support",
        "Continuous Deployment & Scalable Infrastructure",
      ],
      idealFor: "Specialized Manufacturers, Large Supply Chain Networks, Fintech & Scaled Enterprises",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? productCatalog 
    : productCatalog.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />

      <main className="flex-1">
        
        {/* Hero Header Solid Color */}
        <section className="relative pt-16 pb-16 bg-[#fbf6fa] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5288]/10 border border-[#8C5288]/20 text-[#8C5288] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Software Product Suite
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#282023] tracking-tight leading-tight">
              Powerful Products Built to <br />
              <span className="text-[#8C5288]">
                Scale Your Business Operations
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of specialized software solutions designed with high speed, zero downtime, and unmatched simplicity.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Products" },
                { id: "retail", label: "Billing & POS" },
                { id: "food", label: "Restaurant & KOT" },
                { id: "hospitality", label: "Hotel ERP" },
                { id: "sales", label: "CRM & Leads" },
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

        {/* Product Details Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProducts.map((prod) => {
                const Icon = prod.icon;
                return (
                  <div
                    key={prod.id}
                    id={prod.id}
                    className="p-8 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl ${prod.accentColor} text-white flex items-center justify-center shadow-md`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5288]">
                              {prod.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-[#282023] group-hover:text-[#8C5288] transition-colors">
                              {prod.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                        {prod.tagline}
                      </p>

                      <div className="space-y-2.5 mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Key Capabilities &amp; Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#282023]">
                          {prod.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#40C351] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#8C5288]/5 border border-[#8C5288]/15 text-xs text-[#282023]">
                        <span className="font-bold text-[#8C5288]">Best Suited For: </span>
                        {prod.idealFor}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => openDemoFor(prod.title)}
                        className="px-6 py-2.5 rounded-xl bg-[#8C5288] hover:bg-[#763f72] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Schedule Free Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-slate-600 hover:text-[#8C5288] transition-colors"
                      >
                        Talk to Specialist →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 bg-[#fafbfc] border-t border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
              SECTOR ADAPTABILITY
            </div>
            <h2 className="text-3xl font-bold text-[#282023]">Software Tailored to Your Industry</h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl mx-auto">
              Our products are engineered with pre-configured templates for specific business models across India.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              {[
                { title: "Retail Stores", desc: "Supermarkets, boutiques, hardware & mobile shops.", icon: Store },
                { title: "Restaurants & Bars", desc: "Fine dining, QSR, cafes, bakeries & cloud kitchens.", icon: Utensils },
                { title: "Hotels & Stays", desc: "Resorts, boutique hotels, lodges & service apartments.", icon: Building2 },
                { title: "Wholesale & Distributors", desc: "Bulk billing, batch tracking & multi-warehouse stock.", icon: Package },
                { title: "Cafes & Bakeries", desc: "Recipe costing, combo menus & instant counter receipts.", icon: Coffee },
                { title: "Healthcare & Clinics", desc: "Patient billing, pharmacy POS & doctor scheduling.", icon: HeartPulse },
                { title: "Education Institutes", desc: "Fee collection, employee payroll & inventory.", icon: GraduationCap },
                { title: "Custom Enterprises", desc: "Tailored ERP integrations for unique operational workflows.", icon: Code2 },
              ].map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#8C5288]/40 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#8C5288]/10 text-[#8C5288] flex items-center justify-center mb-3 group-hover:bg-[#8C5288] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#282023] text-sm mb-1">{ind.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner Solid Color */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-3xl bg-[#8C5288] p-8 sm:p-12 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Need a tailored solution for your trade?</h3>
              <p className="text-purple-100 text-sm mt-1">Our technical consultants will build a customized live demo for your store or enterprise.</p>
            </div>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-7 py-3.5 rounded-full bg-white text-[#8C5288] font-bold text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
            >
              Request Custom Demo
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
