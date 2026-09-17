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
  Zap,
  Printer,
  MessageSquare,
  Clock,
  QrCode,
  Database,
  Smartphone,
  Scale,
  WifiOff,
  TrendingUp,
  BarChart3,
  Check,
  Activity,
  FileText,
  Cpu,
  Server,
  RefreshCw,
  BadgePercent,
  MapPin,
  Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDashboardMockup from "@/components/HeroDashboardMockup";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Doonext Billing");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<"pos" | "erp" | "crm" | "payroll" | "custom">("pos");
  const [activeIndustryCategory, setActiveIndustryCategory] = useState<string>("all");

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

  // Enhanced Industries data with categories, badges, highlights, icons, and theme accents
  const industries = [
    {
      name: "Retail & Supermarkets",
      badge: "Barcode POS",
      category: "retail",
      popular: true,
      tagline: "Instant Barcode & Weighing Sync",
      desc: "Supermarkets, grocery marts, apparel & kirana stores with ultra-fast counter billing.",
      icon: Store,
      features: ["Barcode scan <0.2s", "Weighing scale sync", "GST e-invoicing & E-way"],
      metricSnippet: {
        label: "Counter Terminal #01",
        value: "₹ 480.00",
        detail: "INV-9412 • Barcode Scanned",
        accent: "text-emerald-700 bg-emerald-50 border-emerald-200/60"
      },
      iconColor: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
      badgeColor: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
      cardBorder: "hover:border-emerald-400 group-hover:shadow-emerald-500/10",
      topGlow: "from-emerald-500/40 via-emerald-400/20 to-transparent",
      link: "/products#billing",
    },
    {
      name: "Restaurants & Bars",
      badge: "Kitchen KOT",
      category: "food",
      popular: true,
      tagline: "Live Table Grid & Kitchen Tickets",
      desc: "Fine dining, QSRs, food courts & cloud kitchens with live table layout & captain ordering.",
      icon: Utensils,
      features: ["Live visual table grid", "Instant KOT to kitchen", "Captain ordering app"],
      metricSnippet: {
        label: "Table #04 (4 Pax)",
        value: "KOT Sent",
        detail: "Kitchen Station: 2m ago",
        accent: "text-amber-700 bg-amber-50 border-amber-200/60"
      },
      iconColor: "text-amber-600 bg-amber-50 group-hover:bg-[#EFAF08] group-hover:text-white",
      badgeColor: "bg-amber-100/80 text-amber-800 border-amber-200",
      cardBorder: "hover:border-[#EFAF08] group-hover:shadow-amber-500/10",
      topGlow: "from-amber-500/40 via-amber-400/20 to-transparent",
      link: "/products#restaurant",
    },
    {
      name: "Hotels & Stays",
      badge: "Hospitality ERP",
      category: "food",
      popular: false,
      tagline: "Room Matrix & Guest Folios",
      desc: "Boutique hotels, resorts, lodges & service apartments with room matrix & guest archives.",
      icon: Hotel,
      features: ["Room grid & check-in", "Guest ID archive", "Unified folio billing"],
      metricSnippet: {
        label: "Room 302 Deluxe",
        value: "Checked-In",
        detail: "Folio: ₹ 4,200 Active",
        accent: "text-sky-700 bg-sky-50 border-sky-200/60"
      },
      iconColor: "text-sky-600 bg-sky-50 group-hover:bg-sky-600 group-hover:text-white",
      badgeColor: "bg-sky-100/80 text-sky-800 border-sky-200",
      cardBorder: "hover:border-sky-400 group-hover:shadow-sky-500/10",
      topGlow: "from-sky-500/40 via-sky-400/20 to-transparent",
      link: "/products#hotel",
    },
    {
      name: "Cafes & Bakeries",
      badge: "Quick Touch",
      category: "food",
      popular: false,
      tagline: "Fast Touch & Recipe Costing",
      desc: "Coffee shops, bakeries & sweet stalls with recipe costing, ingredients & combo discounts.",
      icon: Coffee,
      features: ["Speed touch counter", "Recipe ingredient cost", "Combos & discounts"],
      metricSnippet: {
        label: "Cold Brew + Croissant",
        value: "Combo -15%",
        detail: "Recipe Stock Auto-Deducted",
        accent: "text-[#5e2b9d] bg-[#5e2b9d]/10 border-[#5e2b9d]/20"
      },
      iconColor: "text-[#5e2b9d] bg-[#5e2b9d]/10 group-hover:bg-[#5e2b9d] group-hover:text-white",
      badgeColor: "bg-[#5e2b9d]/15 text-[#5e2b9d] border-[#5e2b9d]/20",
      cardBorder: "hover:border-[#5e2b9d] group-hover:shadow-[#5e2b9d]/10",
      topGlow: "from-[#5e2b9d]/40 via-[#7d36d8]/20 to-transparent",
      link: "/products#restaurant",
    },
    {
      name: "Wholesale & Distribution",
      badge: "B2B & Godowns",
      category: "b2b",
      popular: false,
      tagline: "Multi-Depot & Credit Ledgers",
      desc: "FMCG distributors, traders & multi-warehouse depots with credit limits & Khata ledger.",
      icon: Package,
      features: ["Multi-godown live sync", "Credit limits & Khata", "Bulk GST invoicing"],
      metricSnippet: {
        label: "Godown A ➔ Outlet #2",
        value: "In Transit",
        detail: "250 Units • TN-38-4102",
        accent: "text-indigo-700 bg-indigo-50 border-indigo-200/60"
      },
      iconColor: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white",
      badgeColor: "bg-indigo-100/80 text-indigo-800 border-indigo-200",
      cardBorder: "hover:border-indigo-400 group-hover:shadow-indigo-500/10",
      topGlow: "from-indigo-500/40 via-indigo-400/20 to-transparent",
      link: "/products#erp",
    },
    {
      name: "Healthcare & Clinics",
      badge: "Pharma POS",
      category: "b2b",
      popular: false,
      tagline: "Batch Expiry & Rx Records",
      desc: "Chemists, clinics & diagnostics with drug batch numbers, expiry dates & Schedule H reports.",
      icon: HeartPulse,
      features: ["Batch & expiry alert", "Doctor Rx archives", "Schedule H compliance"],
      metricSnippet: {
        label: "Batch #DX-401 (Pharma)",
        value: "Safe 18 Mo",
        detail: "Zero Expired Stock Leakage",
        accent: "text-rose-700 bg-rose-50 border-rose-200/60"
      },
      iconColor: "text-rose-600 bg-rose-50 group-hover:bg-[#FB5454] group-hover:text-white",
      badgeColor: "bg-rose-100/80 text-rose-800 border-rose-200",
      cardBorder: "hover:border-[#FB5454] group-hover:shadow-rose-500/10",
      topGlow: "from-rose-500/40 via-rose-400/20 to-transparent",
      link: "/products#billing",
    },
    {
      name: "Education & Institutes",
      badge: "Fee & Payroll",
      category: "services",
      popular: false,
      tagline: "Student Fees & Staff Biometric",
      desc: "Schools, academies & coaching institutes with installment fee management & staff attendance.",
      icon: GraduationCap,
      features: ["Student fee receipts", "Staff biometric payroll", "Batch schedule sync"],
      metricSnippet: {
        label: "Term Fee Receipt #849",
        value: "₹ 18,500",
        detail: "Auto-SMS to Parent Sent",
        accent: "text-blue-700 bg-blue-50 border-blue-200/60"
      },
      iconColor: "text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
      badgeColor: "bg-blue-100/80 text-blue-800 border-blue-200",
      cardBorder: "hover:border-blue-400 group-hover:shadow-blue-500/10",
      topGlow: "from-blue-500/40 via-blue-400/20 to-transparent",
      link: "/products#payroll",
    },
    {
      name: "Custom Enterprises",
      badge: "Custom ERP",
      category: "services",
      popular: false,
      tagline: "Serial Hardware & Custom Logic",
      desc: "Manufacturing, logistics & custom agencies with tailored operational logic & serial hardware drivers.",
      icon: Code2,
      features: ["Bespoke workflow logic", "Serial scale COM drivers", "Dedicated REST API hooks"],
      metricSnippet: {
        label: "COM3 Weigh Scale",
        value: "3.420 KG",
        detail: "API Hook: 12ms Latency",
        accent: "text-teal-700 bg-teal-50 border-teal-200/60"
      },
      iconColor: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      badgeColor: "bg-teal-100/80 text-teal-800 border-teal-200",
      cardBorder: "hover:border-teal-400 group-hover:shadow-teal-500/10",
      topGlow: "from-teal-500/40 via-teal-400/20 to-transparent",
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

  // Enhanced Verified Client Testimonials with rich business context & metrics
  const testimonials = [
    {
      author: "Rajesh Kumar",
      role: "Managing Director",
      company: "Annapoorna Supermarkets Chain",
      location: "Chennai & Kovai, TN",
      scale: "6 Outlets • 28 Terminals",
      product: "Doonext Billing POS",
      metric: "3x Faster Checkout Rush",
      initials: "RK",
      avatarBg: "from-[#5e2b9d] to-[#7d36d8]",
      text: "During Diwali and Pongal festival rush, our billing counters never slowed down for a second. The barcode scanner is instantaneous (<0.2s), weighing scales sync seamlessly, and the dynamic UPI QR cut customer wait times from 45 seconds to under 12 seconds.",
    },
    {
      author: "Priya Sharma",
      role: "Operations Director",
      company: "The Spice Route Bistro & Bars",
      location: "Bengaluru & Hyderabad",
      scale: "4 Fine Dining Outlets",
      product: "Doonext Restaurant POS & KOT",
      metric: "+35% Table Turnover",
      initials: "PS",
      avatarBg: "from-[#EFAF08] to-amber-600",
      text: "Captains punch orders on tablets and KOTs route to the kitchen instantly without confusion. Table turnaround increased by 35% on weekends, and raw ingredient wastage dropped noticeably thanks to automatic recipe costing.",
    },
    {
      author: "Arvind Patel",
      role: "Founder & CEO",
      company: "Gujarat FMCG & Godown Logistics",
      location: "Ahmedabad, Gujarat",
      scale: "4 Godowns • 140+ Retailers",
      product: "Doonext ERP & Warehousing",
      metric: "Zero Stock Mismatches",
      initials: "AP",
      avatarBg: "from-[#40C351] to-emerald-600",
      text: "Managing 4 regional warehouses with over 5,000 SKUs used to create endless stock discrepancies. With Doonext, stock transfers reflect in real time, low-stock purchase orders trigger automatically, and batch expiries are strictly guarded.",
    },
    {
      author: "Neha Verma",
      role: "Head of People & HR",
      company: "Apex Multispeciality Clinics",
      location: "Kochi & Madurai",
      scale: "85+ Medical & Support Staff",
      product: "Doonext Payroll & HRMS",
      metric: "1-Click Salary & Auto-PF",
      initials: "NV",
      avatarBg: "from-sky-500 to-blue-600",
      text: "Our biometric face and fingerprint terminals sync attendance automatically. Computing PF, ESI, professional tax, and staff overtime now takes under 5 minutes on month-end, and compliant payslips are WhatsApped directly to staff.",
    },
    {
      author: "Vikramaditya Rao",
      role: "Proprietor",
      company: "Kaveri Sweets, Bakery & Cafe",
      location: "Mysuru, Karnataka",
      scale: "5 Outlets",
      product: "Doonext Quick Touch POS",
      metric: "+28% Repeat Orders",
      initials: "VR",
      avatarBg: "from-rose-500 to-pink-600",
      text: "The speed-touch POS counter layout makes serving 400+ evening customers effortless. The built-in customer Khata ledger and automated WhatsApp cashback reminders bring shoppers back every single week.",
    },
    {
      author: "Dr. K. Senthil Nathan",
      role: "Chief Pharmacist & Owner",
      company: "CarePlus Medicos & Diagnostic Hub",
      location: "Tiruchirappalli, TN",
      scale: "3 Pharmacy Branches",
      product: "Doonext Pharma Billing",
      metric: "100% Drug Compliance",
      initials: "SN",
      avatarBg: "from-indigo-500 to-violet-600",
      text: "The batch and expiry date warning system alone saved us lakhs in unsellable stock. Drug schedule audit reports, doctor prescription records, and GST e-invoices are always 100% compliant with zero manual stress.",
    },
  ];

  // Verified Businesses & Clients Across India - Row 1 (Retail & Dining)
  const trustedBrandsRow1 = [
    {
      name: "GreenMart Supermarkets",
      category: "14 Retail Outlets",
      location: "Bengaluru, KA",
      badge: "Barcode POS",
      icon: Store,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      name: "Urban Spice & Bistro",
      category: "Multi-Outlet Dining",
      location: "Mumbai & Pune, MH",
      badge: "KOT & Billing",
      icon: Utensils,
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      name: "The Daily Roast Cafe",
      category: "Artisan Bakery & Cafe",
      location: "Chennai & Kochi, TN",
      badge: "Express Counter",
      icon: Coffee,
      color: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
    },
    {
      name: "Aura Trends Lifestyle",
      category: "Fashion Retail Chain",
      location: "Kolkata & Patna",
      badge: "Barcode POS",
      icon: Sparkles,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      name: "Velox Logistics & FMCG",
      category: "B2B Wholesale Depot",
      location: "Ahmedabad & Surat, GJ",
      badge: "ERP & Inventory",
      icon: Package,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    },
    {
      name: "Sri Krishna Sweets & Chaat",
      category: "QSR & Sweet Mart",
      location: "Coimbatore & Madurai, TN",
      badge: "Weighing Scale POS",
      icon: Store,
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ];

  // Verified Businesses & Clients Across India - Row 2 (Hospitality, Pharma & Enterprise)
  const trustedBrandsRow2 = [
    {
      name: "Grand Royale Hotels & Suites",
      category: "Luxury Hospitality ERP",
      location: "Goa & Hyderabad, TS",
      badge: "Room & POS Billing",
      icon: Hotel,
      color: "bg-sky-500/10 text-sky-600 border-sky-200",
    },
    {
      name: "Apex Healthcare & Pharma",
      category: "22 Pharmacy Network",
      location: "Delhi NCR & Noida",
      badge: "Batch & Expiry POS",
      icon: HeartPulse,
      color: "bg-rose-500/10 text-rose-600 border-rose-200",
    },
    {
      name: "Zenith EduTech Academies",
      category: "Institutes & Payroll",
      location: "Jaipur & Chandigarh",
      badge: "HRMS & Payroll",
      icon: GraduationCap,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      name: "Metro Hypermarket Hub",
      category: "Large Format Retail",
      location: "Chennai & Trichy, TN",
      badge: "Multi-Counter POS",
      icon: Store,
      color: "bg-teal-500/10 text-teal-600 border-teal-200",
    },
    {
      name: "Kovai Fresh Farm Direct",
      category: "Daily Grocery Chain",
      location: "Coimbatore & Erode, TN",
      badge: "Touch POS",
      icon: Store,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      name: "Supreme Silks & Textiles",
      category: "Apparel Showroom",
      location: "Salem & Tirupur, TN",
      badge: "RFID Barcode",
      icon: Sparkles,
      color: "bg-violet-500/10 text-violet-600 border-violet-200",
    },
  ];

  // High-Impact Trust Metrics with Live Badges & Accents
  const trustMetrics = [
    {
      value: "500+",
      label: "Active Outlets",
      sub: "Across 18+ Indian States",
      tag: "Live Terminals",
      tagColor: "bg-[#5e2b9d]/10 text-[#5e2b9d] border-[#5e2b9d]/20",
      icon: Building2,
      color: "text-[#5e2b9d]",
      gradient: "from-[#5e2b9d] to-[#7d36d8]",
      borderGlow: "hover:border-[#5e2b9d]/50 hover:shadow-[#5e2b9d]/10",
      extra: "TN • KA • KL • MH • DL • GJ",
    },
    {
      value: "₹250Cr+",
      label: "Gross Billing Volume",
      sub: "Processed with 0 transaction loss",
      tag: "+28.4% YoY",
      tagColor: "bg-[#40C351]/10 text-[#2d963b] border-[#40C351]/25",
      icon: Wallet,
      color: "text-[#40C351]",
      gradient: "from-[#40C351] to-emerald-600",
      borderGlow: "hover:border-[#40C351]/50 hover:shadow-[#40C351]/10",
      extra: "Cash, Card & UPI Sub-second Sync",
    },
    {
      value: "10M+",
      label: "Invoices & KOTs",
      sub: "Generated with sub-second latency",
      tag: "<0.2s Speed",
      tagColor: "bg-[#EFAF08]/15 text-[#b38002] border-[#EFAF08]/30",
      icon: Receipt,
      color: "text-[#EFAF08]",
      gradient: "from-[#EFAF08] to-amber-600",
      borderGlow: "hover:border-[#EFAF08]/50 hover:shadow-[#EFAF08]/10",
      extra: "Thermal & WhatsApp Auto-dispatch",
    },
    {
      value: "99.98%",
      label: "Operational Uptime",
      sub: "Offline-first local cache architecture",
      tag: "0 Downtime",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200",
      icon: ShieldCheck,
      color: "text-sky-600",
      gradient: "from-sky-500 to-blue-600",
      borderGlow: "hover:border-sky-400 hover:shadow-sky-500/10",
      extra: "Zero outages during broadband cuts",
    },
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
        {/* 2. TRUSTED BY 500+ BUSINESSES ACROSS INDIA -> Enterprise Scale Showcase */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white/90 via-[#faf7fd]/70 to-white/90 backdrop-blur-md border-y border-slate-200/80 relative overflow-hidden">
          {/* Ambient Lighting & Pattern Accents */}
          <div className="absolute inset-0 bg-dots-tech opacity-40 pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5e2b9d] uppercase tracking-widest bg-gradient-to-r from-[#5e2b9d]/10 via-[#40C351]/10 to-[#5e2b9d]/10 px-4 py-1.5 rounded-full border border-[#5e2b9d]/25 shadow-2xs backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#5e2b9d]" />
                <span>PROVEN AT ENTERPRISE SCALE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-ping" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282023] tracking-tight leading-[1.18]">
                Trusted by <span className="bg-gradient-to-r from-[#5e2b9d] via-[#7d36d8] to-[#40C351] bg-clip-text text-transparent">500+ High-Volume Businesses</span> Across India 🇮🇳
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                From bustling supermarket checkout counters and multi-chain restaurants to luxury hotels and wholesale supply depots — powering reliable commerce every single second.
              </p>
            </div>

            {/* 4 High-Impact Fintech Metric Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {trustMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl ${metric.borderGlow} transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between`}
                  >
                    {/* Subtle Card Background Aura on Hover */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                    <div>
                      {/* Top Bar: Icon + Live Pill */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${metric.gradient} text-white flex items-center justify-center shadow-md shadow-[#5e2b9d]/15 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${metric.tagColor}`}>
                          {metric.tag}
                        </span>
                      </div>

                      {/* Number Metric */}
                      <div className="text-3xl sm:text-4xl font-bold text-[#282023] tracking-tight group-hover:text-[#5e2b9d] transition-colors">
                        {metric.value}
                      </div>

                      {/* Label & Description */}
                      <div className="text-sm font-bold text-[#282023] mt-1.5">
                        {metric.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {metric.sub}
                      </div>
                    </div>

                    {/* Bottom Dynamic Visual Accent */}
                    <div className="pt-4 mt-4 border-t border-slate-100">
                      {idx === 0 && (
                        <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
                          <span className="text-[#5e2b9d] font-bold">Key Footprint:</span>
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">TN • KA • KL • MH • DL</span>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-500 font-medium">Monthly Run-rate</span>
                          <svg className="w-20 h-4 stroke-[#40C351] fill-none" viewBox="0 0 60 14">
                            <path d="M1 12 L15 8 L30 10 L45 4 L59 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
                          <span className="text-[#EFAF08] font-bold">Speed Benchmark:</span>
                          <span className="text-[#282023] font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">&lt; 0.2s Scan</span>
                        </div>
                      )}

                      {idx === 3 && (
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-sky-600 font-bold">Local Sync Core:</span>
                          <span className="text-[#40C351] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
                            <span>100% Zero Downtime</span>
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Dual-Direction Infinite Marquee of Verified Client Brands */}
            <div className="relative space-y-4 py-2 overflow-hidden">
              {/* Left & Right gradient fades for ultra-smooth marquee loop */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#faf8fe] via-[#faf8fe]/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#faf8fe] via-[#faf8fe]/80 to-transparent z-20 pointer-events-none" />

              {/* Row 1: Scrolling Left (Retail, Supermarkets & Dining) */}
              <div className="animate-marquee flex items-center gap-4 sm:gap-5">
                {[...trustedBrandsRow1, ...trustedBrandsRow1].map((brand, idx) => {
                  const Icon = brand.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#5e2b9d]/40 transition-all duration-300 shrink-0 group cursor-default"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${brand.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors whitespace-nowrap flex items-center gap-2">
                          <span>{brand.name}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                            {brand.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 whitespace-nowrap mt-0.5">
                          <span className="font-medium text-[#5e2b9d]">{brand.category}</span>
                          <span>•</span>
                          <span>{brand.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Row 2: Scrolling Right (Hospitality, Pharma, Logistics & Textiles) */}
              <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-5">
                {[...trustedBrandsRow2, ...trustedBrandsRow2].map((brand, idx) => {
                  const Icon = brand.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#40C351]/40 transition-all duration-300 shrink-0 group cursor-default"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${brand.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-[#282023] group-hover:text-[#40C351] transition-colors whitespace-nowrap flex items-center gap-2">
                          <span>{brand.name}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                            {brand.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 whitespace-nowrap mt-0.5">
                          <span className="font-medium text-[#40C351]">{brand.category}</span>
                          <span>•</span>
                          <span>{brand.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Trust Guarantee Badge Ribbon */}
            <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                <span>100% Indian GST &amp; E-Way Bill Ready</span>
              </div>
              <span className="hidden lg:inline text-slate-200">|</span>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#EFAF08]" />
                <span>Sub-0.2s Barcode Scanning Benchmark</span>
              </div>
              <span className="hidden lg:inline text-slate-200">|</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5e2b9d]" />
                <span>Offline-First (Zero Cloud Downtime)</span>
              </div>
              <span className="hidden lg:inline text-slate-200">|</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Free Onsite Setup &amp; Live Staff Training</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHAT WE OFFER -> Complete Software Ecosystem to Scale Every Dimension */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-[#faf7fd]/80 to-transparent border-t border-slate-200/70 relative overflow-hidden">
          {/* Ambient background glow decoration & tech grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-35 pointer-events-none" />
          <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#5e2b9d] uppercase tracking-widest bg-gradient-to-r from-[#5e2b9d]/10 via-[#40C351]/10 to-[#5e2b9d]/10 px-4 py-1.5 rounded-full border border-[#5e2b9d]/20 shadow-2xs backdrop-blur-xs">
                <Layers className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>WHAT WE OFFER • 5 INTEGRATED PILLARS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#282023] tracking-tight leading-[1.18]">
                Complete Software Ecosystem <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#5e2b9d] via-[#7d36d8] to-[#40C351] bg-clip-text text-transparent">
                  to Scale Every Dimension
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Replace disconnected apps with an all-in-one operational powerhouse. Run sales counters, multi-godown inventory, customer Khata, biometric payroll, and enterprise APIs in perfect harmony.
              </p>
            </div>

            {/* Interactive Module Navigation Dock */}
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {[
                  {
                    id: "pos",
                    num: "01",
                    label: "Billing POS & Counter",
                    sub: "<0.2s Scan • GST • Offline",
                    icon: Receipt,
                    activeClass: "border-[#5e2b9d] bg-gradient-to-b from-[#5e2b9d]/10 to-transparent text-[#5e2b9d] shadow-xs",
                    iconColor: "text-[#5e2b9d] bg-[#5e2b9d]/15",
                  },
                  {
                    id: "erp",
                    num: "02",
                    label: "ERP & Multi-Godown",
                    sub: "Depot Sync • Auto-PO • Batch",
                    icon: Boxes,
                    activeClass: "border-[#40C351] bg-gradient-to-b from-[#40C351]/10 to-transparent text-[#2d963b] shadow-xs",
                    iconColor: "text-[#40C351] bg-[#40C351]/15",
                  },
                  {
                    id: "crm",
                    num: "03",
                    label: "WhatsApp CRM & Khata",
                    sub: "Cashback • Credit • Auto-SMS",
                    icon: MessageSquare,
                    activeClass: "border-sky-500 bg-gradient-to-b from-sky-500/10 to-transparent text-sky-700 shadow-xs",
                    iconColor: "text-sky-600 bg-sky-50",
                  },
                  {
                    id: "payroll",
                    num: "04",
                    label: "Payroll & HRMS",
                    sub: "Biometric • Auto PF • Payslips",
                    icon: Wallet,
                    activeClass: "border-[#EFAF08] bg-gradient-to-b from-[#EFAF08]/10 to-transparent text-amber-700 shadow-xs",
                    iconColor: "text-[#EFAF08] bg-amber-50",
                  },
                  {
                    id: "custom",
                    num: "05",
                    label: "Custom Architecture",
                    sub: "Serial Scales • REST APIs • SLA",
                    icon: Code2,
                    activeClass: "border-rose-500 bg-gradient-to-b from-rose-500/10 to-transparent text-rose-700 shadow-xs",
                    iconColor: "text-rose-600 bg-rose-50",
                  },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeEcosystemTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveEcosystemTab(tab.id as any)}
                      className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                        isActive
                          ? tab.activeClass
                          : "border-transparent hover:border-slate-200 hover:bg-slate-50/80 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${tab.iconColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-medium text-slate-400">
                          {tab.num}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium leading-snug">
                          {tab.label}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                          {tab.sub}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Central Interactive Command Center Stage (5 cols left / 7 cols right) */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Deep Narrative & Technical Specifications (5 cols) */}
                <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-gradient-to-b from-white via-[#faf9fc] to-white">
                  <div>
                    {/* Active Module Beacon Header */}
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#40C351] animate-pulse" />
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[#5e2b9d] bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20">
                        {activeEcosystemTab === "pos" && "Flagship Counter Engine"}
                        {activeEcosystemTab === "erp" && "Operations & Warehousing"}
                        {activeEcosystemTab === "crm" && "Customer Khata & Retention"}
                        {activeEcosystemTab === "payroll" && "Workforce & Compliance"}
                        {activeEcosystemTab === "custom" && "Enterprise Integration"}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl font-medium text-[#282023] tracking-tight leading-snug mb-3.5">
                      {activeEcosystemTab === "pos" && "High-Velocity Counter Checkout Engineered for High-Footfall Retail"}
                      {activeEcosystemTab === "erp" && "Central Godown Synchronization with Automatic Stock Replenishment"}
                      {activeEcosystemTab === "crm" && "Automated WhatsApp Loyalty Campaigns & Digital Credit Ledgers"}
                      {activeEcosystemTab === "payroll" && "Biometric Hardware Sync with Automated Statutory PF & ESI"}
                      {activeEcosystemTab === "custom" && "Bespoke Enterprise Software Architecture & Hardware Scale APIs"}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {activeEcosystemTab === "pos" &&
                        "Built for supermarkets, garment showrooms, bakeries, and high-volume retail. Enjoy sub-0.2s barcode lookups, weighing scale sync, instant GST receipts, and 100% offline-first reliability so billing never stalls."}
                      {activeEcosystemTab === "erp" &&
                        "Keep your central warehouse and multiple retail outlets synchronized in real time. Eliminate stock pilferage with automatic purchase orders, batch number tracking, and expiry date alerts."}
                      {activeEcosystemTab === "crm" &&
                        "Bring shoppers back with automated WhatsApp cashback notifications, personalized discount coupons, and a digital Khata credit ledger with 1-click payment links."}
                      {activeEcosystemTab === "payroll" &&
                        "Connect thumbprint and face-recognition biometric devices directly to your payroll. Generate compliant payslips, calculate overtime, and manage staff loans in one click."}
                      {activeEcosystemTab === "custom" &&
                        "Need customized manufacturing workflows, serial COM port scale integration, or deep ERP connectors? Our engineering team designs custom modules tailored to your exact business logic."}
                    </p>

                    {/* Key Technical Feature Matrix (4 Grid Chips) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700">
                      {activeEcosystemTab === "pos" && (
                        <>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Zap className="w-4 h-4 text-[#40C351] shrink-0" />
                            <span className="font-medium text-[11px]">&lt;0.2s Barcode Scanner</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Scale className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                            <span className="font-medium text-[11px]">Weighing Scale RS-232</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <QrCode className="w-4 h-4 text-sky-600 shrink-0" />
                            <span className="font-medium text-[11px]">Dynamic UPI QR Code</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <WifiOff className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="font-medium text-[11px]">100% Offline-Safe Cache</span>
                          </div>
                        </>
                      )}

                      {activeEcosystemTab === "erp" && (
                        <>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Boxes className="w-4 h-4 text-[#40C351] shrink-0" />
                            <span className="font-medium text-[11px]">Multi-Godown Live Sync</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <RefreshCw className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                            <span className="font-medium text-[11px]">Auto Low-Stock Purchase Order</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Activity className="w-4 h-4 text-sky-600 shrink-0" />
                            <span className="font-medium text-[11px]">Batch &amp; Expiry Prevention</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="font-medium text-[11px]">Supplier Credit Ledger</span>
                          </div>
                        </>
                      )}

                      {activeEcosystemTab === "crm" && (
                        <>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-medium text-[11px]">Official WhatsApp API</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <BadgePercent className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                            <span className="font-medium text-[11px]">Loyalty Cashback Points</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                            <span className="font-medium text-[11px]">Customer Khata (Credit)</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="font-medium text-[11px]">+38% Customer Retention</span>
                          </div>
                        </>
                      )}

                      {activeEcosystemTab === "payroll" && (
                        <>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Clock className="w-4 h-4 text-[#EFAF08] shrink-0" />
                            <span className="font-medium text-[11px]">Biometric Thumb &amp; Face Sync</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <ShieldCheck className="w-4 h-4 text-[#40C351] shrink-0" />
                            <span className="font-medium text-[11px]">Auto PF, ESI &amp; PT Tax</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <FileText className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                            <span className="font-medium text-[11px]">1-Click WhatsApp Payslips</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Wallet className="w-4 h-4 text-sky-600 shrink-0" />
                            <span className="font-medium text-[11px]">Staff Advance &amp; Loan Ledger</span>
                          </div>
                        </>
                      )}

                      {activeEcosystemTab === "custom" && (
                        <>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Cpu className="w-4 h-4 text-rose-600 shrink-0" />
                            <span className="font-medium text-[11px]">Serial COM &amp; USB Drivers</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Server className="w-4 h-4 text-[#5e2b9d] shrink-0" />
                            <span className="font-medium text-[11px]">RESTful Webhook Gateway</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Database className="w-4 h-4 text-sky-600 shrink-0" />
                            <span className="font-medium text-[11px]">Legacy DB Data Migration</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            <Award className="w-4 h-4 text-[#40C351] shrink-0" />
                            <span className="font-medium text-[11px]">Dedicated Enterprise SLA</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={
                        activeEcosystemTab === "pos"
                          ? "/products#billing"
                          : activeEcosystemTab === "erp"
                          ? "/products#erp"
                          : activeEcosystemTab === "crm"
                          ? "/products#crm"
                          : activeEcosystemTab === "payroll"
                          ? "/products#payroll"
                          : "/products#custom"
                      }
                      className="text-xs sm:text-sm font-medium text-[#5e2b9d] hover:text-[#4d2282] flex items-center gap-1.5 group/btn"
                    >
                      <span>
                        Explore {activeEcosystemTab === "pos" ? "Billing" : activeEcosystemTab.toUpperCase()} Suite
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() =>
                        openDemoWithProduct(
                          activeEcosystemTab === "pos"
                            ? "Doonext Billing"
                            : activeEcosystemTab === "erp"
                            ? "Doonext ERP"
                            : activeEcosystemTab === "crm"
                            ? "Doonext CRM"
                            : activeEcosystemTab === "payroll"
                            ? "Doonext Payroll"
                            : "Custom Enterprise Solution"
                        )
                      }
                      className="px-4 py-2 rounded-full bg-[#5e2b9d] text-white text-xs font-medium hover:bg-[#4d2282] transition-colors shadow-xs cursor-pointer"
                    >
                      Request Live Walkthrough
                    </button>
                  </div>
                </div>

                {/* Right Column: Interactive Simulated Operating Engine (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50/70 flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Subtle Background Circuit Pattern */}
                  <div className="absolute inset-0 bg-dots-tech opacity-30 pointer-events-none" />

                  {/* ------------------------------------------------------------- */}
                  {/* SIMULATED VIEW 1: POS & BILLING COUNTER                       */}
                  {/* ------------------------------------------------------------- */}
                  {activeEcosystemTab === "pos" && (
                    <div className="relative z-10 space-y-4">
                      {/* POS Station Top Bar */}
                      <div className="bg-[#282023] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#5e2b9d] flex items-center justify-center text-white">
                            <Receipt className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium flex items-center gap-1.5">
                              <span>Counter #01 Terminal</span>
                              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                            </div>
                            <div className="text-[10px] text-slate-400">Cashier: Ramesh S. • Shift #1</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-medium bg-[#40C351]/20 text-[#40C351] border border-[#40C351]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                            <WifiOff className="w-3 h-3" />
                            Offline Safe
                          </span>
                        </div>
                      </div>

                      {/* Cashier Screen & Cart Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Scanned Cart Items (8 cols) */}
                        <div className="md:col-span-8 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] font-medium text-slate-500">
                            <span>Scanned Product</span>
                            <div className="flex gap-4">
                              <span>Qty</span>
                              <span>Total</span>
                            </div>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <div>
                                <div className="font-medium text-[#282023]">Aashirvaad Shudh Atta 5kg</div>
                                <div className="text-[10px] text-slate-400 font-mono">Barcode: 8901030849201</div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="px-2 py-0.5 bg-white rounded border border-slate-200 font-mono text-[11px]">2×</span>
                                <span className="font-medium text-[#282023] font-mono">₹ 480.00</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <div>
                                <div className="font-medium text-[#282023]">Amul Pure Cow Ghee 1L</div>
                                <div className="text-[10px] text-slate-400 font-mono">Barcode: 8901262010045</div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="px-2 py-0.5 bg-white rounded border border-slate-200 font-mono text-[11px]">1×</span>
                                <span className="font-medium text-[#282023] font-mono">₹ 620.00</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <div>
                                <div className="font-medium text-[#282023]">Tata Salt Iodized 1kg</div>
                                <div className="text-[10px] text-slate-400 font-mono">Barcode: 8901058852309</div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="px-2 py-0.5 bg-white rounded border border-slate-200 font-mono text-[11px]">3×</span>
                                <span className="font-medium text-[#282023] font-mono">₹ 84.00</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Totals Bar */}
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-slate-500">Subtotal: ₹1,184.00 + GST (5%): ₹59.20</span>
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 block">Total Due</span>
                              <span className="text-lg font-medium text-[#5e2b9d] font-mono">₹ 1,243.20</span>
                            </div>
                          </div>
                        </div>

                        {/* UPI QR & Receipt Preview (4 cols) */}
                        <div className="md:col-span-4 flex flex-col gap-3">
                          {/* Dynamic UPI Payment Card */}
                          <div className="bg-gradient-to-br from-[#5e2b9d] to-[#40C351] p-[1px] rounded-2xl shadow-sm">
                            <div className="bg-white rounded-2xl p-3.5 text-center space-y-2">
                              <span className="text-[10px] font-medium text-[#5e2b9d] uppercase tracking-wider block">
                                Dynamic UPI QR
                              </span>
                              <div className="w-20 h-20 mx-auto bg-slate-900 rounded-xl p-2 text-white flex flex-col items-center justify-center relative overflow-hidden">
                                <QrCode className="w-14 h-14 text-white" />
                                <div className="absolute inset-0 border-2 border-[#40C351] rounded-xl animate-pulse" />
                              </div>
                              <div className="text-[10px] font-medium text-[#2d963b]">
                                GPay • PhonePe • Paytm
                              </div>
                            </div>
                          </div>

                          {/* Simulated Thermal Print Slip */}
                          <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs font-mono text-[10px] text-slate-600 space-y-1">
                            <div className="flex items-center justify-between text-[9px] text-[#5e2b9d] font-sans font-medium">
                              <span className="flex items-center gap-1">
                                <Printer className="w-3 h-3 text-[#5e2b9d]" /> Thermal Print
                              </span>
                              <span className="text-[#40C351]">Auto-Cut ON</span>
                            </div>
                            <div className="text-center font-bold text-slate-800 text-[10px]">DOONEXT SUPERMART</div>
                            <div className="text-center text-[9px] text-slate-400">INV-2026-0941 • 19:42:10</div>
                            <div className="border-b border-dashed border-slate-300 my-1" />
                            <div className="flex justify-between">
                              <span>3 Items Sold</span>
                              <span className="font-bold text-slate-900">₹ 1,243.20</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* SIMULATED VIEW 2: ERP & MULTI-GODOWN                          */}
                  {/* ------------------------------------------------------------- */}
                  {activeEcosystemTab === "erp" && (
                    <div className="relative z-10 space-y-4">
                      {/* ERP Header Bar */}
                      <div className="bg-[#282023] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#40C351] flex items-center justify-center text-white">
                            <Boxes className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium flex items-center gap-1.5">
                              <span>Central Depot &amp; Multi-Branch Grid</span>
                              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                            </div>
                            <div className="text-[10px] text-slate-400">3 Godowns Synchronized • Zero Lag</div>
                          </div>
                        </div>

                        <span className="text-[10px] font-medium bg-[#40C351]/20 text-[#40C351] border border-[#40C351]/30 px-2.5 py-1 rounded-full">
                          Real-Time Stock
                        </span>
                      </div>

                      {/* Warehouses Grid */}
                      <div className="space-y-3">
                        {/* Godown 1 */}
                        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <div className="font-medium text-[#282023] flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                              <span>Chennai Central Godown (Depot A)</span>
                            </div>
                            <span className="text-[11px] font-medium text-[#2d963b] bg-[#40C351]/10 px-2 py-0.5 rounded">
                              96% Stocked (14,850 SKUs)
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[96%] h-full bg-[#40C351] rounded-full" />
                          </div>
                        </div>

                        {/* Godown 2 */}
                        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <div className="font-medium text-[#282023] flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#EFAF08]" />
                              <span>Coimbatore Hub Outlet #2</span>
                            </div>
                            <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              Auto Low-Stock PO Triggered
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[42%] h-full bg-[#EFAF08] rounded-full" />
                          </div>
                        </div>

                        {/* Batch and Transfer Info Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div className="bg-slate-100/80 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                            <div className="text-[10px] font-medium text-slate-500 uppercase">
                              Batch Expiry Watchlist
                            </div>
                            <div className="font-medium text-[#282023] flex items-center justify-between">
                              <span>Batch #DX-9942 (Pharma)</span>
                              <span className="text-[10px] text-[#40C351] bg-white px-1.5 py-0.5 rounded">
                                Exp: Dec 2027
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">Zero unsellable expired inventory</div>
                          </div>

                          <div className="bg-slate-100/80 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                            <div className="text-[10px] font-medium text-slate-500 uppercase">
                              Live Stock Transit
                            </div>
                            <div className="font-medium text-[#282023] flex items-center justify-between">
                              <span>Depot A ➔ Outlet #2</span>
                              <span className="text-[10px] text-[#5e2b9d] bg-white px-1.5 py-0.5 rounded font-mono">
                                250 Units
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">Truck TN-38-BZ-4102 in route</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* SIMULATED VIEW 3: WHATSAPP CRM & KHATA                        */}
                  {/* ------------------------------------------------------------- */}
                  {activeEcosystemTab === "crm" && (
                    <div className="relative z-10 space-y-4">
                      {/* CRM Header Bar */}
                      <div className="bg-[#282023] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium flex items-center gap-1.5">
                              <span>WhatsApp Engagement &amp; Khata</span>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            <div className="text-[10px] text-slate-400">Official Meta Cloud API Verified</div>
                          </div>
                        </div>

                        <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                          +38% Re-orders
                        </span>
                      </div>

                      {/* WhatsApp Chat Simulator Card */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700 text-xs">
                              PS
                            </div>
                            <div>
                              <div className="font-medium text-[#282023]">Priya Sundaram</div>
                              <div className="text-[10px] text-slate-400 font-sans">Gold VIP • 38 Orders</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Cashback Alert Sent
                          </span>
                        </div>

                        {/* WhatsApp Message Bubble */}
                        <div className="bg-[#E7FFDB] p-3 rounded-2xl rounded-tl-xs border border-emerald-200/60 text-xs text-slate-800 space-y-1.5">
                          <div className="flex items-center justify-between font-medium text-emerald-900 text-[11px]">
                            <span>Doonext SuperStore</span>
                            <span className="text-[9px] text-slate-400 font-mono">19:40</span>
                          </div>
                          <p className="leading-relaxed text-[11px]">
                            Hello Priya! 🌟 You have <span className="font-medium text-[#5e2b9d]">₹350 loyalty cashback</span> expiring in 48 hours. Shop this weekend and save an extra 10%!
                          </p>
                          <div className="bg-white/80 p-2 rounded-xl text-[10px] font-medium text-[#5e2b9d] text-center border border-emerald-200 cursor-pointer">
                            Tap to View Available Offers &amp; Digital Bill
                          </div>
                        </div>

                        {/* Khata Balance Strip */}
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block">Customer Khata Ledger</span>
                            <span className="font-medium text-[#282023]">Credit Balance: ₹ 4,200</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-medium text-[#40C351] bg-[#40C351]/10 px-2 py-1 rounded">
                              Auto-Reminder Scheduled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* SIMULATED VIEW 4: PAYROLL & BIOMETRIC HRMS                    */}
                  {/* ------------------------------------------------------------- */}
                  {activeEcosystemTab === "payroll" && (
                    <div className="relative z-10 space-y-4">
                      {/* HRMS Header Bar */}
                      <div className="bg-[#282023] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#EFAF08] flex items-center justify-center text-white">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium flex items-center gap-1.5">
                              <span>Biometric Machine &amp; HRMS Console</span>
                              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                            </div>
                            <div className="text-[10px] text-slate-400">LAN Device Online • Shift 09:00 - 18:00</div>
                          </div>
                        </div>

                        <span className="text-[10px] font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full">
                          48 / 50 Present
                        </span>
                      </div>

                      {/* Live Punch-In Feed */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                        <div className="text-[11px] font-medium text-slate-500 pb-2 border-b border-slate-100 flex justify-between">
                          <span>Live Biometric Clock-Ins Today</span>
                          <span className="text-[#40C351]">96% On-Time Turnout</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                              <span className="font-medium text-[#282023]">Anand Murugan (Store Mgr)</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500">09:01 AM • Face ID Verified</span>
                          </div>

                          <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                              <span className="font-medium text-[#282023]">Deepa Krishnan (Cashier)</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500">09:04 AM • Thumb Verified</span>
                          </div>
                        </div>

                        {/* Automated Statutory Salary Calculation */}
                        <div className="bg-gradient-to-r from-amber-50/70 to-slate-50 p-3 rounded-xl border border-amber-100 text-xs space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-[#282023]">Monthly Payroll Computation</span>
                            <span className="text-[10px] text-amber-700 font-medium">Auto PF &amp; ESI</span>
                          </div>
                          <div className="flex justify-between text-slate-600 text-[11px]">
                            <span>Gross: ₹35,000</span>
                            <span>PF: -₹1,800 | ESI: -₹262</span>
                            <span className="font-medium text-[#282023]">Net: ₹32,938</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* SIMULATED VIEW 5: CUSTOM ENTERPRISE ARCHITECTURE & APIS       */}
                  {/* ------------------------------------------------------------- */}
                  {activeEcosystemTab === "custom" && (
                    <div className="relative z-10 space-y-4">
                      {/* Terminal Header Bar */}
                      <div className="bg-[#1e1720] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-md font-mono">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                            <Code2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium flex items-center gap-1.5">
                              <span>api.doonext.internal/v1</span>
                              <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
                            </div>
                            <div className="text-[10px] text-slate-400">Gateway Latency: 12ms</div>
                          </div>
                        </div>

                        <span className="text-[10px] font-medium bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2.5 py-1 rounded-full font-sans">
                          Serial COM &amp; Webhooks
                        </span>
                      </div>

                      {/* Code and Terminal Monitor */}
                      <div className="bg-[#181318] text-slate-200 p-4 rounded-2xl border border-white/10 font-mono text-[11px] space-y-2.5 shadow-sm">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-white/10">
                          <span>HARDWARE SERIAL LISTENER</span>
                          <span className="text-emerald-400">ONLINE</span>
                        </div>

                        <div className="space-y-1">
                          <div className="text-slate-400">
                            &gt; COM3 [Weighing Scale RS-232]: <span className="text-emerald-400 font-bold">2.450 KG</span> (Auto-synced to POS)
                          </div>
                          <div className="text-slate-400">
                            &gt; COM1 [2D Barcode Scanner]: Ready
                          </div>
                          <div className="text-slate-400">
                            &gt; POST /v1/inventory/reconcile: <span className="text-emerald-400">200 OK (14ms)</span>
                          </div>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-[10px] text-slate-300">
                          <code>
                            &#123;&quot;event&quot;: &quot;invoice.finalized&quot;, &quot;gstin&quot;: &quot;33AAACD1234F1Z5&quot;, &quot;status&quot;: &quot;E-WAY_READY&quot;&#125;
                          </code>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* 4 Architectural Core Superpowers Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-[#282023] mb-1">100% Offline-First Resilient</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Internet broadband cut? Never stop billing. Cashiers continue scanning items and printing bills offline. Syncs instantly upon reconnection.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#40C351]/10 text-[#2d963b] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-[#282023] mb-1">Real-Time Data Backbone</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  A sale at Counter #2 instantly decrements warehouse stock, updates Khata ledgers, and recalculates GST without manual reconciliations.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Printer className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-[#282023] mb-1">Universal Hardware Drivers</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Works seamlessly with TVS, Epson, Posiflex, Honeywell, and Essae thermal printers, RS-232 weighing scales, and biometric scanners.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-[#282023] mb-1">Audit Trails &amp; Anti-Theft</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Granular role permissions for cashiers, managers, and accountants. Prevent unauthorized discounts, void bill pilferage, and cash leaks.
                </p>
              </div>
            </div>

            {/* Bottom Hardware & Cloud Integration Capabilities Banner */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-5 sm:p-6 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3.5 text-center lg:text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#282023]">Certified Peripherals &amp; Cloud Connectors</div>
                  <div className="text-xs text-slate-500 font-normal">Pre-configured plug &amp; play drivers for Indian retail and hospitality hardware</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-slate-700">
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-[#5e2b9d]" /> Thermal Receipt Printers (2&quot;/3&quot;)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#40C351]" /> 2D Barcode &amp; QR Scanners
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-sky-600" /> Digital Weighing Scales
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#EFAF08]" /> Biometric Thumb &amp; Face
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> Official WhatsApp Cloud
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. INDUSTRIES WE SERVE -> Software for Every Industry */}
        {/* ========================================================================= */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white/80 via-[#faf7fd]/70 to-white/80 backdrop-blur-xs border-t border-slate-200/70 overflow-hidden">
          {/* Subtle ambient decorative pattern & blurs */}
          <div className="absolute inset-0 bg-dots-tech opacity-35 pointer-events-none" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#5e2b9d] uppercase tracking-widest bg-gradient-to-r from-[#5e2b9d]/10 via-[#40C351]/10 to-[#5e2b9d]/10 px-4 py-1.5 rounded-full border border-[#5e2b9d]/20 shadow-2xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#5e2b9d]" />
                <span>INDUSTRIES WE SERVE • 8 SPECIALIZED ENGINES</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#282023] tracking-tight leading-[1.18]">
                Software Tailored to <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#5e2b9d] via-[#7d36d8] to-[#40C351] bg-clip-text text-transparent">
                  Your Exact Industry Needs
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Pre-configured workflows, custom receipt layouts, specialized tax rules, and integrated hardware drivers engineered to get your vertical operational from Day 1.
              </p>
            </div>

            {/* Interactive Sector Filter Ribbon */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {[
                { id: "all", label: "All Industries", count: "8" },
                { id: "retail", label: "Retail & Marts", count: "2" },
                { id: "food", label: "Dining & Stays", count: "3" },
                { id: "b2b", label: "Wholesale & Pharma", count: "2" },
                { id: "services", label: "Institutes & Custom", count: "2" },
              ].map((filter) => {
                const isActive = activeIndustryCategory === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveIndustryCategory(filter.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#5e2b9d] text-white border-[#5e2b9d] shadow-xs"
                        : "bg-white/80 text-slate-600 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 8 Enhanced Industry Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries
                .filter((ind) => {
                  if (activeIndustryCategory === "all") return true;
                  if (activeIndustryCategory === "retail") return ind.category === "retail" || ind.name.includes("Retail") || ind.name.includes("Bakeries");
                  if (activeIndustryCategory === "food") return ind.category === "food";
                  if (activeIndustryCategory === "b2b") return ind.category === "b2b";
                  if (activeIndustryCategory === "services") return ind.category === "services";
                  return true;
                })
                .map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${ind.cardBorder}`}
                    >
                      {/* Top Ambient Glow Bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.topGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div>
                        {/* Top Row: Icon + Badge + Popular Pill */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xs ${ind.iconColor}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>

                          <div className="flex items-center gap-1.5">
                            {ind.popular && (
                              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                                Popular
                              </span>
                            )}
                            <span
                              className={`text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wide border ${ind.badgeColor}`}
                            >
                              {ind.badge}
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-lg font-medium text-[#282023] group-hover:text-[#5e2b9d] transition-colors leading-snug">
                          {ind.name}
                        </h3>
                        <div className="text-[11px] font-medium text-[#40C351] mt-0.5">
                          {ind.tagline}
                        </div>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">
                          {ind.desc}
                        </p>

                        {/* Embedded Micro-Interface Visual Widget */}
                        <div className="mt-4 bg-slate-50/90 rounded-2xl p-3 border border-slate-100 shadow-2xs space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-medium text-slate-700 truncate mr-2">
                              {ind.metricSnippet.label}
                            </span>
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${ind.metricSnippet.accent}`}
                            >
                              {ind.metricSnippet.value}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {ind.metricSnippet.detail}
                          </div>
                        </div>

                        {/* 3 Core Capability Bullets */}
                        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                          {ind.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0" />
                              <span className="font-normal text-[11px]">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Row: Explore Link + Live Demo Trigger */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                        <Link
                          href={ind.link}
                          className="text-xs font-medium text-[#5e2b9d] group-hover:text-[#4d2282] flex items-center gap-1"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button
                          onClick={() => openDemoWithProduct(ind.name)}
                          className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-50 hover:bg-[#5e2b9d] text-slate-600 hover:text-white border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                        >
                          Live Demo
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Bottom Custom Vertical Consultation Spotlight Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-white via-[#faf7fd] to-white border border-[#5e2b9d]/25 shadow-md p-6 sm:p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#5e2b9d]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4 text-left max-w-2xl">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#5e2b9d] to-[#7d36d8] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#5e2b9d]/20">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-[#282023]">
                      Don't see your specific trade or trade vertical?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                      Doonext's flexible core architecture supports custom tax categories, tailored receipt formats, unique measurement units (grams, carats, metres, barrels), and specialized workflow automation.
                    </p>

                    {/* Quick Trade Badges */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                      <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        ✨ Jewellery &amp; Gold Hallmarking
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        ✨ Apparel Size &amp; Color Matrix
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        ✨ Auto Spare Parts OEM
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        ✨ Gym &amp; Fitness Memberships
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
                  <button
                    onClick={() => openDemoWithProduct("Custom Enterprise Solution")}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-medium shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
                  >
                    Request Tailored Demo
                  </button>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#282023] border border-slate-200 text-xs font-medium shadow-2xs transition-all text-center"
                  >
                    Speak With Specialist
                  </Link>
                </div>
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
        <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#faf7fd]/80 to-transparent border-t border-slate-200/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-tech opacity-35 pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#5e2b9d] uppercase tracking-widest bg-gradient-to-r from-[#5e2b9d]/10 via-[#40C351]/10 to-[#5e2b9d]/10 px-4 py-1.5 rounded-full border border-[#5e2b9d]/20 shadow-2xs backdrop-blur-xs">
                <Star className="w-3.5 h-3.5 fill-[#EFAF08] text-[#EFAF08]" />
                <span>WHAT OUR CLIENTS SAY • VERIFIED MERCHANT EXPERIENCES</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#282023] tracking-tight leading-[1.18]">
                Trusted by Businesses, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#5e2b9d] via-[#7d36d8] to-[#40C351] bg-clip-text text-transparent">
                  Loved by Users &amp; Teams
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Discover how multi-counter supermarkets, fine-dining restaurants, multi-godown wholesale distributors, and healthcare clinics across India scale daily operations with Doonext.
              </p>
            </div>

            {/* 4 Trust Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="flex items-center justify-center gap-1 text-[#EFAF08]">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#EFAF08]" />
                  ))}
                </div>
                <div className="text-lg sm:text-xl font-medium text-[#282023]">4.9 / 5.0 Rating</div>
                <div className="text-[11px] text-slate-500 font-normal">500+ Verified Merchant Reviews</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-emerald-600 text-xs font-medium uppercase tracking-wide">SUPPORT SLA</div>
                <div className="text-lg sm:text-xl font-medium text-[#282023]">&lt; 15 Mins</div>
                <div className="text-[11px] text-slate-500 font-normal">Average Engineer Turnaround</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-[#5e2b9d] text-xs font-medium uppercase tracking-wide">ANNUAL RENEWAL</div>
                <div className="text-lg sm:text-xl font-medium text-[#282023]">99.8%</div>
                <div className="text-[11px] text-slate-500 font-normal">Long-Term Merchant Retention</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
                <div className="text-sky-600 text-xs font-medium uppercase tracking-wide">TRANSACTION RELIABILITY</div>
                <div className="text-lg sm:text-xl font-medium text-[#282023]">10M+ Invoices</div>
                <div className="text-[11px] text-slate-500 font-normal">Zero Data Loss Offline-First Engine</div>
              </div>
            </div>

            {/* Featured Client Spotlight Card (Interactive dynamic showcase) */}
            {testimonials[activeTestimonialIdx] && (
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#5e2b9d]/30 shadow-xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#5e2b9d]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#40C351]/8 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  
                  {/* Left: Testimonial Narrative & Author */}
                  <div className="space-y-5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1 text-[#EFAF08]">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-[#EFAF08]" />
                        ))}
                      </div>

                      <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#40C351]/10 text-[#2d963b] border border-[#40C351]/25 flex items-center gap-1.5 shadow-2xs">
                        <Zap className="w-3.5 h-3.5 text-[#40C351]" />
                        {testimonials[activeTestimonialIdx].metric}
                      </span>

                      <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20">
                        {testimonials[activeTestimonialIdx].product}
                      </span>
                    </div>

                    {/* Big Quote */}
                    <blockquote className="text-base sm:text-lg lg:text-xl text-[#282023] leading-relaxed font-normal italic">
                      &ldquo;{testimonials[activeTestimonialIdx].text}&rdquo;
                    </blockquote>

                    {/* Author Signature & Credentials */}
                    <div className="flex items-center gap-4 pt-2">
                      <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonialIdx].avatarBg} text-white flex items-center justify-center text-sm font-medium shadow-md shrink-0`}>
                        {testimonials[activeTestimonialIdx].initials}
                      </div>

                      <div>
                        <div className="text-base font-medium text-[#282023] flex items-center gap-2">
                          <span>{testimonials[activeTestimonialIdx].author}</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <ShieldCheck className="w-3 h-3 text-[#40C351]" />
                            Verified Client
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 font-normal">
                          {testimonials[activeTestimonialIdx].role} • {testimonials[activeTestimonialIdx].company}
                        </div>
                        <div className="text-[11px] text-slate-400 font-normal flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {testimonials[activeTestimonialIdx].location}
                          </span>
                          <span>•</span>
                          <span>{testimonials[activeTestimonialIdx].scale}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Slider Navigation Controls & Quick Index Thumbnails */}
                  <div className="shrink-0 flex lg:flex-col items-center justify-between lg:justify-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200/80 lg:pl-8">
                    <div className="text-left lg:text-center">
                      <div className="text-xs font-mono font-medium text-[#5e2b9d]">
                        0{activeTestimonialIdx + 1} / 0{testimonials.length}
                      </div>
                      <div className="text-[10px] text-slate-400">Client Stories</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveTestimonialIdx((prev) =>
                            prev === 0 ? testimonials.length - 1 : prev - 1
                          )
                        }
                        aria-label="Previous Testimonial"
                        className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#5e2b9d] hover:border-[#5e2b9d] shadow-xs flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() =>
                          setActiveTestimonialIdx((prev) =>
                            prev === testimonials.length - 1 ? 0 : prev + 1
                          )
                        }
                        aria-label="Next Testimonial"
                        className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#5e2b9d] hover:border-[#5e2b9d] shadow-xs flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-1.5">
                      {testimonials.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setActiveTestimonialIdx(dotIdx)}
                          aria-label={`Jump to review ${dotIdx + 1}`}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            activeTestimonialIdx === dotIdx
                              ? "w-6 bg-[#5e2b9d]"
                              : "w-2 bg-slate-200 hover:bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Interactive Grid of 6 Verified Client Reviews (Click to Inspect) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => {
                const isSelected = activeTestimonialIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 ${
                      isSelected
                        ? "border-[#5e2b9d] ring-2 ring-[#5e2b9d]/20 shadow-lg bg-gradient-to-b from-[#5e2b9d]/5 to-transparent"
                        : "border-slate-200/90 shadow-2xs hover:border-[#5e2b9d]/40 hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Top Row: Stars + Metric Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 text-[#EFAF08]">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-3.5 h-3.5 fill-[#EFAF08]" />
                          ))}
                        </div>

                        <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#40C351]/10 text-[#2d963b] border border-[#40C351]/25">
                          {item.metric}
                        </span>
                      </div>

                      {/* Review Quote */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic line-clamp-4">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.avatarBg} text-white flex items-center justify-center text-xs font-medium shadow-2xs shrink-0`}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-[#282023] group-hover:text-[#5e2b9d] transition-colors">
                            {item.author}
                          </div>
                          <div className="text-[10px] text-slate-400 font-normal truncate max-w-[170px]">
                            {item.company}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Merchant Assurance Banner */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-5 sm:p-6 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#40C351]/10 text-[#2d963b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#282023]">Guaranteed Onsite Setup &amp; Free Staff Training</div>
                  <div className="text-xs text-slate-500 font-normal">Our implementation engineers deploy hardware, import past data, and train staff on your premises.</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-700">
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> 100% Free Data Migration
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Zero Setup Downtime
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351]" /> Direct Founder Escalation
                </span>
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
