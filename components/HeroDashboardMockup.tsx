"use client";

import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Zap, 
  Receipt,
  Utensils,
  Boxes,
  Printer,
  Sparkles,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight,
  Barcode
} from "lucide-react";

export default function HeroDashboardMockup() {
  const [activeMode, setActiveMode] = useState<"pos" | "restaurant" | "erp">("pos");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 3 tabs every 5 seconds unless user hovers or clicks
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveMode((prev) => {
        if (prev === "pos") return "restaurant";
        if (prev === "restaurant") return "erp";
        return "pos";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative mx-auto w-full max-w-2xl select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Dynamic Multi-Color Ambient Glow Aura with breathing pulse */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#5e2b9d]/25 via-[#40C351]/15 to-[#EFAF08]/15 rounded-3xl blur-2xl -z-10 transition-all opacity-80 group-hover:opacity-100 duration-700 animate-pulse-glow" />

      {/* ========================================================================= */}
      {/* FLOATING BADGE 1: Top-Left Instant Scan Chip (Float Animation) */}
      {/* ========================================================================= */}
      <div className="absolute -top-6 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 animate-float-slow hover:scale-105 transition-transform duration-300">
        <div className="w-9 h-9 rounded-xl bg-[#40C351]/15 text-[#40C351] flex items-center justify-center shrink-0 shadow-2xs">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
            <span>Express POS Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-ping" />
          </div>
          <div className="text-xs font-bold text-[#282023]">&lt; 0.2s Sub-Second Scan ⚡</div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING BADGE 2: Bottom-Right Revenue Pill (Reverse Float Animation) */}
      {/* ========================================================================= */}
      <div className="absolute -bottom-6 -right-3 sm:-right-6 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 animate-float-reverse hover:scale-105 transition-transform duration-300">
        <div className="w-9 h-9 rounded-xl bg-[#5e2b9d]/15 text-[#5e2b9d] flex items-center justify-center shrink-0 shadow-2xs">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] font-medium text-slate-500">Gross MTD Volume</div>
          <div className="text-xs sm:text-sm font-bold text-[#282023] flex items-center gap-1.5">
            <span>₹ 2.45 Cr</span>
            <span className="text-[10px] text-[#40C351] font-bold bg-[#40C351]/10 px-1.5 py-0.5 rounded-full">+18.4%</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING BADGE 3: Bottom-Left Offline Guarantee */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex absolute -bottom-4 left-6 z-30 bg-[#282023]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full shadow-lg border border-white/10 items-center gap-2 text-[11px] animate-pulse-glow-delayed">
        <span className="w-2 h-2 rounded-full bg-[#40C351] animate-pulse" />
        <span className="font-medium">Offline-First Core Active</span>
        <span className="text-slate-400 text-[10px]">• 0 Outages</span>
      </div>

      {/* ========================================================================= */}
      {/* MAIN DASHBOARD CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(40,32,35,0.12)] overflow-hidden font-sans text-xs transition-all">
        
        {/* 1. Window Frame Bar with macOS dots & URL chip */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50/90 backdrop-blur-xs">
          {/* macOS 3 Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-500/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/20" />
          </div>

          {/* URL Pill with security icon */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] text-slate-500 max-w-[210px] sm:max-w-xs truncate shadow-2xs">
            <span className="text-[#40C351]">🔒</span>
            <span className="font-medium text-[#282023]">app.doonext.com</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#5e2b9d] font-semibold">{activeMode}</span>
          </div>

          {/* Right Live Sync Beacon */}
          <div className="flex items-center gap-1.5 text-[10px] text-[#40C351] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
            <span className="hidden sm:inline">POS Cloud Sync</span>
          </div>
        </div>

        {/* 2. Interactive Mode Switcher Tabs */}
        <div className="bg-slate-100/70 p-1.5 border-b border-slate-200/80 flex items-center justify-between gap-1 overflow-x-auto">
          <button
            onClick={() => {
              setActiveMode("pos");
              setIsPaused(true);
            }}
            className={`relative flex-1 py-1.5 px-3 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer overflow-hidden ${
              activeMode === "pos"
                ? "bg-white text-[#5e2b9d] shadow-xs"
                : "text-slate-600 hover:text-[#5e2b9d] hover:bg-white/50"
            }`}
          >
            <Barcode className="w-3.5 h-3.5 text-[#5e2b9d]" />
            <span>Retail &amp; Supermarket POS</span>
            {activeMode === "pos" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5e2b9d]" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveMode("restaurant");
              setIsPaused(true);
            }}
            className={`relative flex-1 py-1.5 px-3 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer overflow-hidden ${
              activeMode === "restaurant"
                ? "bg-white text-[#EFAF08] shadow-xs"
                : "text-slate-600 hover:text-[#EFAF08] hover:bg-white/50"
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-[#EFAF08]" />
            <span>Restaurant &amp; KOT</span>
            {activeMode === "restaurant" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EFAF08]" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveMode("erp");
              setIsPaused(true);
            }}
            className={`relative flex-1 py-1.5 px-3 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer overflow-hidden ${
              activeMode === "erp"
                ? "bg-white text-[#40C351] shadow-xs"
                : "text-slate-600 hover:text-[#40C351] hover:bg-white/50"
            }`}
          >
            <Boxes className="w-3.5 h-3.5 text-[#40C351]" />
            <span>ERP &amp; Inventory</span>
            {activeMode === "erp" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#40C351]" />
            )}
          </button>
        </div>

        {/* 3. Dynamic Mode Content */}
        <div className="p-4 bg-slate-50/40 min-h-[360px]">
          
          {/* ========================================================================= */}
          {/* MODE A: RETAIL & SUPERMARKET POS */}
          {/* ========================================================================= */}
          {activeMode === "pos" && (
            <div className="space-y-3.5 animate-in fade-in-50 duration-300">
              
              {/* POS Top Bar: Counter & Cashier */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#5e2b9d] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    01
                  </div>
                  <div>
                    <div className="font-bold text-[#282023] text-xs flex items-center gap-1.5">
                      <span>Express Checkout Counter #1</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
                    </div>
                    <div className="text-[10px] text-slate-500">Scanner: Honeywell 2D • Offline Mode Active</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#40C351]/10 text-[#2d963b] border border-[#40C351]/25">
                    GST Active
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">INV-9842</span>
                </div>
              </div>

              {/* Scanned Cart Items List with Animated Laser Scanner Line */}
              <div className="relative bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
                
                {/* Laser Barcode Scanner Animation Beam */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FB5454] to-transparent shadow-[0_0_8px_rgba(251,84,84,0.9)] pointer-events-none z-10 animate-scanner-laser" />

                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                  <span>Item &amp; Barcode</span>
                  <span>Qty / Rate</span>
                  <span>Total</span>
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  <div className="px-3 py-2 flex items-center justify-between hover:bg-purple-50/40 transition-colors">
                    <div>
                      <div className="font-bold text-[#282023] flex items-center gap-1.5">
                        <span>Aashirvaad Shudh Chakki Atta 5kg</span>
                        <span className="text-[9px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 rounded">Scanned</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">8901030384912</div>
                    </div>
                    <div className="text-slate-600 text-[11px]">2 × ₹240.00</div>
                    <div className="font-bold text-[#282023]">₹480.00</div>
                  </div>

                  <div className="px-3 py-2 flex items-center justify-between hover:bg-purple-50/40 transition-colors">
                    <div>
                      <div className="font-bold text-[#282023]">Amul Pasteurized Butter 500g</div>
                      <div className="text-[10px] text-slate-400 font-mono">8901262010053</div>
                    </div>
                    <div className="text-slate-600 text-[11px]">1 × ₹275.00</div>
                    <div className="font-bold text-[#282023]">₹275.00</div>
                  </div>

                  <div className="px-3 py-2 flex items-center justify-between hover:bg-purple-50/40 transition-colors">
                    <div>
                      <div className="font-bold text-[#282023]">Tata Tea Gold Leaf 500g</div>
                      <div className="text-[10px] text-slate-400 font-mono">8901052002108</div>
                    </div>
                    <div className="text-slate-600 text-[11px]">1 × ₹310.00</div>
                    <div className="font-bold text-[#282023]">₹310.00</div>
                  </div>
                </div>

                {/* Subtotal & GST Calculation */}
                <div className="bg-slate-50/80 px-3 py-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <div className="text-[10px] text-slate-500">
                    Subtotal: ₹1,065.00 • CGST (2.5%): ₹26.62 • SGST (2.5%): ₹26.62
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 mr-1">Net Pay:</span>
                    <span className="text-base font-bold text-[#5e2b9d]">₹ 1,118.25</span>
                  </div>
                </div>
              </div>

              {/* Instant Payment Actions */}
              <div className="grid grid-cols-4 gap-2">
                <button className="py-2.5 rounded-xl bg-white border border-slate-200 text-[#282023] font-bold text-[11px] hover:border-[#5e2b9d] hover:bg-slate-50 transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
                  <span>💵 Cash</span>
                </button>
                <button className="py-2.5 rounded-xl bg-[#40C351]/10 border border-[#40C351]/30 text-[#2d963b] font-bold text-[11px] hover:bg-[#40C351]/20 transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
                  <span>📱 UPI Pay</span>
                </button>
                <button className="py-2.5 rounded-xl bg-white border border-slate-200 text-[#282023] font-bold text-[11px] hover:border-[#5e2b9d] hover:bg-slate-50 transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
                  <span>💳 Card</span>
                </button>
                <button className="py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-[11px] transition-all flex items-center justify-center gap-1 shadow-md shadow-[#5e2b9d]/20 cursor-pointer group/btn">
                  <Printer className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  <span>Print &lt;0.2s</span>
                </button>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* MODE B: RESTAURANT & KOT */}
          {/* ========================================================================= */}
          {activeMode === "restaurant" && (
            <div className="space-y-3.5 animate-in fade-in-50 duration-300">
              
              {/* Tables Overview Bar */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white border border-[#40C351]/40 shadow-2xs">
                  <div className="text-[10px] text-slate-500 font-bold">Table 01</div>
                  <div className="text-xs font-bold text-[#40C351] mt-0.5">Dining (4 Pax)</div>
                  <div className="text-[9px] text-slate-400">₹850 • KOT #1</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#EFAF08]/15 border border-[#EFAF08]/40 shadow-2xs">
                  <div className="text-[10px] text-slate-500 font-bold">Table 02</div>
                  <div className="text-xs font-bold text-[#c79105] mt-0.5 flex items-center justify-center gap-1">
                    <span>Cooking</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EFAF08] animate-pulse" />
                  </div>
                  <div className="text-[9px] text-slate-600">8 mins ago</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] text-slate-400 font-bold">Table 03</div>
                  <div className="text-xs font-bold text-slate-400 mt-0.5">Vacant</div>
                  <div className="text-[9px] text-slate-400">Ready</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#5e2b9d]/10 border border-[#5e2b9d]/30 shadow-2xs">
                  <div className="text-[10px] text-slate-500 font-bold">Table 04</div>
                  <div className="text-xs font-bold text-[#5e2b9d] mt-0.5">Bill Printed</div>
                  <div className="text-[9px] text-slate-600">₹1,420.00</div>
                </div>
              </div>

              {/* Live Kitchen Order Ticket (KOT) */}
              <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#282023]">
                    <Utensils className="w-3.5 h-3.5 text-[#EFAF08]" />
                    <span>Live Kitchen Display (KDS) — Order #KOT-402</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
                    <span>In Preparation</span>
                  </span>
                </div>

                <div className="py-2.5 space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between items-center">
                    <span>1 × Paneer Butter Masala (Less Spicy)</span>
                    <span className="font-bold text-[#282023]">₹ 260</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 × Garlic Butter Naan</span>
                    <span className="font-bold text-[#282023]">₹ 180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 × Fresh Sweet Lime Soda</span>
                    <span className="font-bold text-[#282023]">₹ 120</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Captain: Rajesh • Station: Tandoor</span>
                  <button className="px-3 py-1 rounded-lg bg-[#40C351] text-white font-bold text-[10px] shadow-xs hover:bg-[#349c42] transition-colors cursor-pointer">
                    Mark Ready &amp; Serve
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* MODE C: ERP & MULTI-STORE INVENTORY */}
          {/* ========================================================================= */}
          {activeMode === "erp" && (
            <div className="space-y-3.5 animate-in fade-in-50 duration-300">
              
              {/* Multi-Branch Live Revenue */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] text-slate-500">Coimbatore Hub</div>
                  <div className="text-xs sm:text-sm font-bold text-[#5e2b9d] mt-0.5">₹ 14.80 L</div>
                  <div className="text-[9px] text-[#40C351] font-bold">+14.2% Today</div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] text-slate-500">Chennai Outlet</div>
                  <div className="text-xs sm:text-sm font-bold text-[#282023] mt-0.5">₹ 9.40 L</div>
                  <div className="text-[9px] text-[#40C351] font-bold">+9.8% Today</div>
                </div>

                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] text-slate-500">Bangalore Store</div>
                  <div className="text-xs sm:text-sm font-bold text-[#282023] mt-0.5">₹ 11.25 L</div>
                  <div className="text-[9px] text-[#40C351] font-bold">+12.5% Today</div>
                </div>
              </div>

              {/* Warehouse Inventory Health & Reorder Alert */}
              <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#282023]">Central Depot Stock Synchronization</span>
                  <span className="text-[10px] font-bold text-[#40C351] bg-[#40C351]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#40C351] animate-pulse" />
                    <span>100% Synced</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                      <span>FMCG &amp; Packaged Goods (4,250 SKUs)</span>
                      <span className="font-bold text-[#282023]">92% In Stock</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-[#40C351] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                      <span>Dairy &amp; Fresh Perishables (380 SKUs)</span>
                      <span className="font-bold text-[#EFAF08]">Low Reorder Alert</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-[#EFAF08] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px]">
                  <span className="text-slate-500">Auto-Generated PO #PO-8812 ready for supplier review</span>
                  <span className="text-[#5e2b9d] font-bold hover:underline cursor-pointer">View PO</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
