"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Printer, 
  Laptop, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  Scale, 
  Keyboard, 
  Mouse, 
  Tv, 
  QrCode, 
  CreditCard, 
  Truck,
  Check,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function ProductsPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Retail POS Starter Bundle");
  const [activeCategory, setActiveCategory] = useState("all");

  const openQuoteFor = (productName: string) => {
    setSelectedProduct(productName);
    setDemoModalOpen(true);
  };

  const hardwareCatalog = [
    {
      id: "touch-pos",
      category: "computers",
      title: "15.6\" Capacitive Touch POS Billing Machine",
      badge: "Commercial All-in-One",
      tagline: "Heavy-duty capacitive touchscreen desktop POS with dual customer display option.",
      icon: Tv,
      specs: [
        "15.6-inch Full HD (1920x1080) True-Flat Touchscreen",
        "Intel Core i5 High Performance Processor",
        "8GB DDR4 RAM + 256GB High-Speed SSD",
        "IP54 Spill & Dust Resistant Bezel",
        "Multiple Ports: 6x USB, 2x COM (RS232), 1x LAN, 1x VGA",
        "Pre-installed Windows 11 Pro & Doonext Drivers"
      ],
      idealFor: "Supermarket Counters, Restaurant Dining Terminals, Apparel Stores, Bakeries",
      warranty: "1 Year Onsite Warranty + Lifetime Driver Support"
    },
    {
      id: "commercial-laptop",
      category: "laptops",
      title: "Commercial Business Laptop for Store Managers",
      badge: "Portable Workstation",
      tagline: "Durable business laptop designed for store managers, stock audits & mobile billing.",
      icon: Laptop,
      specs: [
        "15.6-inch Anti-Glare Eye-Care IPS Display",
        "Intel Core i5 12th Gen Turbo Processor",
        "16GB DDR4 RAM + 512GB NVMe M.2 SSD",
        "Full-Size Numeric Keyboard for Fast Data Entry",
        "Up to 10 Hours Long Battery Backup",
        "Wi-Fi 6, Bluetooth 5.2, USB-C & HDMI"
      ],
      idealFor: "Store Management, Godown Stock Audits, Backoffice Accounting & Mobile Sales",
      warranty: "1 Year Manufacturer Comprehensive Warranty"
    },
    {
      id: "printer-3inch",
      category: "printers",
      title: "3-Inch High Speed Thermal Receipt Printer",
      badge: "Fast 260mm/s Auto-Cutter",
      tagline: "Heavy-duty 80mm thermal receipt printer with USB, Ethernet (LAN) & Bluetooth connectivity.",
      icon: Printer,
      specs: [
        "High-Speed 260mm/sec Ultra-Quiet Printing",
        "Auto-Cutter Mechanism (Rated for 1.5 Million Cuts)",
        "Triple Interface: USB + LAN (Ethernet) + Serial / Bluetooth",
        "Supports ESC/POS & OPOS Standard Drivers",
        "Drop-in Easy Paper Roll Loading Mechanism",
        "Direct RJ11 Cash Drawer Kick-Out Port"
      ],
      idealFor: "High-Traffic Supermarket Checkouts, Kitchen KOT Stations, Retail Billing Counters",
      warranty: "1 Year Replacement Warranty"
    },
    {
      id: "printer-2inch",
      category: "printers",
      title: "2-Inch Portable Bluetooth Thermal Printer",
      badge: "Wireless & Compact",
      tagline: "Rechargeable 58mm pocket printer for van sales, delivery billing & table ordering.",
      icon: Printer,
      specs: [
        "Compact Pocket Size with Rugged Silicone Casing",
        "Bluetooth 4.0 + USB Dual Mode Connection",
        "Long-Lasting 2000mAh Rechargeable Li-Ion Battery",
        "Prints 2-inch Receipts, QR Codes & UPI Payment Receipts",
        "Compatible with Android, iOS & Windows Tablets",
        "Clear 203 DPI Thermal Resolution"
      ],
      idealFor: "Home Delivery Agents, Van Sales, Table-Side Dining Billing, Event Counters",
      warranty: "1 Year Standard Warranty"
    },
    {
      id: "scanner-2d-wireless",
      category: "scanners",
      title: "2D Wireless Barcode & QR Code Scanner",
      badge: "Long Range 50m",
      tagline: "High-precision handheld scanner that reads printed barcodes and mobile phone screens.",
      icon: QrCode,
      specs: [
        "Advanced CMOS Image Sensor (Reads 1D & 2D QR Codes)",
        "2.4GHz Wireless + USB Wired Dual Mode (50m Range)",
        "Reads damaged, smudged, low-contrast & digital screen codes",
        "2000mAh Battery with 30 Hours Continuous Scanning",
        "Drop-Resistant (Withstands 1.8m Concrete Drops)",
        "Includes Hands-Free Auto-Sensing Charging Stand"
      ],
      idealFor: "Retail Counters, Warehouse Godowns, Pharmacy Counters, Courier Hubs",
      warranty: "1 Year Full Warranty"
    },
    {
      id: "scanner-desktop",
      category: "scanners",
      title: "Omnidirectional Desktop Counter Barcode Scanner",
      badge: "Hands-Free Multi-Beam",
      tagline: "High-throughput supermarket hands-free scanner with 360-degree automatic scan zone.",
      icon: Zap,
      specs: [
        "Multi-line 360° Omnidirectional Optical Scanning",
        "Instant Scan Rate: 1500 Scans / Second",
        "Heavy-Duty Anti-Slip Base for Countertop Stability",
        "Automatic Sleep & Instant Wakeup Sensor",
        "Plug-and-Play USB HID Keyboard Emulation",
        "Reads All 1D / 2D / GS1 DataBar Barcodes"
      ],
      idealFor: "Busy Hypermarkets, Grocery Superstores, Department Stores, Wholesale Counters",
      warranty: "1 Year Replacement Warranty"
    },
    {
      id: "keyboard-mouse-combo",
      category: "keyboards",
      title: "Spill-Resistant POS Mechanical Keyboard & Mouse Combo",
      badge: "Tactile & Heavy-Duty",
      tagline: "Commercial billing keyboard with spill drainage and ergonomic optical mouse.",
      icon: Keyboard,
      specs: [
        "Spill-Resistant Sealed Membrane with Drainage Holes",
        "Laser-Etched Durable Keycaps (Rated for 20M Keystrokes)",
        "Full Numeric Numpad with Large '+ / Enter' Cashier Keys",
        "Precision 1600 DPI Ergonomic Optical USB Mouse",
        "1.8 Meter Reinforced USB Cable",
        "Plug & Play Driverless Setup on Windows & Linux"
      ],
      idealFor: "All Retail Billing Counters, Grocery Desks, Restaurant Order Stations",
      warranty: "1 Year Comprehensive Warranty"
    },
    {
      id: "pos-keypad",
      category: "keyboards",
      title: "50-Key Programmable POS Shortcut Keypad",
      badge: "Cashier Turbo Keys",
      tagline: "Programmable mechanical keypad with custom labels for fast product shortcuts.",
      icon: Cpu,
      specs: [
        "50 Fully Programmable Mechanical Switch Keys",
        "Clear Removable Keycap Lids for Custom Label Inserts",
        "Single, Double & Quadruple Key Matrix Configuration",
        "Direct PLU Hotkeys for Top 50 Fast-Moving Items",
        "Built-in EEPROM (Retains Key Maps Without Drivers)",
        "Solid Steel Internal Plate for Maximum Counter Durability"
      ],
      idealFor: "Fast Food Counters, Bakeries, Canteens, Juice Bars, High-Speed Express Checkouts",
      warranty: "1 Year Warranty"
    },
    {
      id: "cash-drawer",
      category: "accessories",
      title: "Heavy-Duty Metal RJ11 Electronic Cash Drawer",
      badge: "Auto-Kick on Bill Print",
      tagline: "Solid steel electronic cash drawer with steel ball-bearing rollers and dual media slots.",
      icon: CreditCard,
      specs: [
        "Heavy Gauge Thick Cold-Rolled Steel Construction",
        "5 Adjustable Bill Compartments with Steel Spring Clips",
        "8 Removable Coin Cups for Easy Tallying",
        "Dual Front Media Slots for Card Slips & Checks",
        "Standard RJ11 Interface with 12V/24V Printer Kick Trigger",
        "3-Position Key Lock (Manual Open, Auto, Locked)"
      ],
      idealFor: "All Retail & Hospitality Billing Counters, Supermarkets, Bars",
      warranty: "1 Year Warranty"
    },
    {
      id: "weighing-scale",
      category: "accessories",
      title: "Certified Digital Weighing Scale with POS Auto-Sync",
      badge: "Legal Metrology Approved",
      tagline: "High-precision digital weighing scale with RS232 port for instant weight transfer to billing POS.",
      icon: Scale,
      specs: [
        "Government Legal Metrology Model Approved (Stamped)",
        "Capacity: Up to 31 Kg with 1g / 2g High Accuracy",
        "Dual Bright Green LED Display (Cashier & Customer Facing)",
        "RS232 Serial Port for Real-Time Weight Sync to Doonext POS",
        "Stainless Steel Grade 304 Removable Platter",
        "Built-in Rechargeable Battery with 40 Hours Backup"
      ],
      idealFor: "Supermarket Vegetable & Fruit Counters, Sweet Shops, Butcheries, Dry Fruit Stores",
      warranty: "1 Year Stamping & Service Warranty"
    },
    {
      id: "retail-starter-bundle",
      category: "bundles",
      title: "Complete Retail POS Starter Hardware Bundle",
      badge: "Best Value Kit",
      tagline: "Everything you need to launch a modern, high-speed retail checkout counter.",
      icon: Package,
      specs: [
        "1x 15.6\" Capacitive Touch POS All-in-One Terminal (i5 / 8GB / 256GB)",
        "1x 3-Inch High Speed Thermal Receipt Printer with Auto-Cutter",
        "1x 2D Wireless Barcode & QR Code Scanner with Stand",
        "1x Heavy-Duty Metal Cash Drawer (Auto-Kick RJ11)",
        "Free 10x 3-Inch Thermal Paper Rolls Included",
        "Free Onsite Setup & Doonext Driver Pre-Installation"
      ],
      idealFor: "New Store Openings, Supermarkets, Apparel Stores, Electronics Showrooms",
      warranty: "1 Year Full Hardware Onsite Replacement Warranty"
    }
  ];

  const filteredHardware = activeCategory === "all"
    ? hardwareCatalog
    : hardwareCatalog.filter(h => h.category === activeCategory);

  return (
    <div className="min-h-screen text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white font-sans">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />

      <main className="flex-1 pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER */}
        {/* ========================================================================= */}
        <section className="pt-14 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#f8f3fd] via-[#fbf9fe] to-transparent border-b border-purple-100/60 relative overflow-hidden text-center">
          {/* Grid pattern & glowing ambient blobs */}
          <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#5e2b9d]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#40C351]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5e2b9d]/10 border border-[#5e2b9d]/20 text-[#5e2b9d] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified POS Hardware &amp; Equipment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#282023] tracking-tight leading-[1.14]">
              Commercial POS Hardware <br className="hidden sm:inline" />
              <span className="text-[#5e2b9d]">&amp; Business Devices</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Equip your stores with heavy-duty commercial touch POS computers, business laptops, thermal receipt printers, wireless barcode scanners, spill-proof keyboards, and electronic cash drawers.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Products (11)" },
                { id: "computers", label: "Touch POS & Desktops" },
                { id: "laptops", label: "Laptops" },
                { id: "printers", label: "Thermal Printers" },
                { id: "scanners", label: "Barcode Scanners" },
                { id: "keyboards", label: "Keyboards & Mice" },
                { id: "accessories", label: "Cash Drawers & Scales" },
                { id: "bundles", label: "Starter Bundles" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#5e2b9d] text-white shadow-md shadow-[#5e2b9d]/25"
                      : "bg-white text-[#282023] hover:bg-[#5e2b9d]/5 hover:text-[#5e2b9d] border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. HARDWARE PRODUCTS CATALOG GRID */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {filteredHardware.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="p-7 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
                  >
                    <div className="space-y-4">
                      
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#5e2b9d] group-hover:text-white transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-xl font-bold text-[#282023] group-hover:text-[#5e2b9d] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Technical Specifications */}
                      <div className="space-y-2 pt-1">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Hardware Specifications:
                        </div>
                        <div className="space-y-1.5">
                          {item.specs.slice(0, 4).map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#40C351] shrink-0 mt-0.5" />
                              <span className="leading-snug">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200/70 text-[11px] text-slate-600 leading-snug">
                        <span className="font-bold text-[#282023]">Best for: </span>
                        {item.idealFor}
                      </div>

                      {/* Warranty Badge */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-[#40C351] font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{item.warranty}</span>
                      </div>

                    </div>

                    {/* Action Row */}
                    <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between gap-3">
                      <button
                        onClick={() => openQuoteFor(item.title)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Get Hardware Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <Link
                        href="/contact"
                        className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs transition-colors shrink-0"
                      >
                        Inquire
                      </Link>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. HARDWARE COMPATIBILITY & SUPPORT GUARANTEES */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#fafbfc] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block text-xs font-bold text-[#5e2b9d] uppercase tracking-widest bg-[#5e2b9d]/10 px-3 py-1 rounded-full border border-[#5e2b9d]/20 mb-2">
                RELIABILITY COMMITMENTS
              </div>
              <h2 className="text-3xl font-bold text-[#282023]">The Doonext Hardware Guarantee</h2>
              <p className="text-slate-600 mt-2 text-sm">
                Every hardware device sold by Doonext is pre-flashed with universal drivers, tested for 48-hour continuous burn-in, and backed by direct engineer replacement support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#282023] text-sm">1-Year Replacement Warranty</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fast replacement warranty across Tamil Nadu &amp; major cities in India.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#282023] text-sm">Plug &amp; Play Driver Stack</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pre-configured with ESC/POS, OPOS and USB HID drivers — zero manual setup headaches.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#EFAF08] flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#282023] text-sm">Fast Pan-India Dispatch</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dispatched within 24 hours from Coimbatore with transit insurance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#282023] text-sm">Direct Remote Installation</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our Coimbatore technical desk connects via remote desktop to test print and calibrate scales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section className="pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#5e2b9d] via-[#4d2282] to-[#3b1766] p-8 sm:p-12 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Need a custom hardware quote for multiple counters?</h3>
                <p className="text-purple-100 text-sm mt-1">Get discounted bulk pricing and free on-site installation for your store chain.</p>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-[#5e2b9d] font-bold text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
              >
                Request Hardware Pricing
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
