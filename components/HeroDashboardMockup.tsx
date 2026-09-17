"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Bell, 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Settings, 
  ChevronDown, 
  ArrowUpRight,
  FileText,
  CheckCircle,
  CreditCard
} from "lucide-react";

export default function HeroDashboardMockup() {
  const [activeTab, setActiveTab] = useState("Sales");

  return (
    <div className="relative mx-auto w-full max-w-2xl select-none group">
      {/* Background Soft Solid Shadow/Glow */}
      <div className="absolute -inset-2 bg-[#5e2b9d]/10 rounded-3xl blur-2xl -z-10 transition-all opacity-80" />

      {/* Main Dashboard Window */}
      <div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_20px_50px_rgba(40,32,35,0.10)] overflow-hidden font-sans text-xs">
        
        {/* Top Header Mockup */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            {/* Logo Mark in Dashboard */}
            <div className="w-7 h-7 rounded-lg bg-[#5e2b9d] flex items-center justify-center text-white font-bold text-xs shadow-xs">
              D
            </div>
            <span className="font-bold text-[#282023] text-sm tracking-tight">Dashboard</span>
          </div>

          {/* Search bar & User controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 w-44">
              <Search className="w-3.5 h-3.5" />
              <span className="text-[11px] text-slate-400">Search...</span>
            </div>

            {/* Notification Bell */}
            <div className="relative p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/60 cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FB5454] ring-2 ring-white" />
            </div>

            {/* Avatar */}
            <div className="flex items-center gap-2 pl-1 border-l border-slate-200">
              <div className="w-7 h-7 rounded-full bg-[#5e2b9d] flex items-center justify-center text-white font-bold text-[10px] ring-2 ring-[#5e2b9d]/30">
                JD
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Body with Left Icon Sidebar & Content */}
        <div className="flex min-h-[380px]">
          
          {/* Mini Sidebar */}
          <div className="w-12 bg-[#282023] text-purple-200 flex flex-col items-center py-4 space-y-4 shrink-0">
            <div className="p-2 rounded-lg bg-[#5e2b9d] text-white cursor-pointer shadow-xs">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer text-slate-300">
              <Users className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer text-slate-300">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer text-slate-300">
              <CreditCard className="w-4 h-4" />
            </div>
            <div className="mt-auto p-2 rounded-lg hover:bg-white/10 cursor-pointer text-slate-300">
              <Settings className="w-4 h-4" />
            </div>
          </div>

          {/* Right Main Analytics Pane */}
          <div className="flex-1 p-4 bg-slate-50/60 space-y-4 overflow-hidden">
            
            {/* Top 4 KPI Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              
              {/* Stat 1: Total Sales */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-[#5e2b9d]/40 transition-colors">
                <div className="text-[10px] font-medium text-slate-500">Total Sales</div>
                <div className="text-sm sm:text-base font-bold text-[#282023] mt-0.5">₹ 25,68,930</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 py-0.5 rounded">
                    +12.5%
                  </span>
                  <svg className="w-12 h-3 stroke-[#40C351] fill-none" viewBox="0 0 50 12">
                    <path d="M1 9 L15 6 L30 8 L49 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 2: Total Customers */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-[#5e2b9d]/40 transition-colors">
                <div className="text-[10px] font-medium text-slate-500">Total Customers</div>
                <div className="text-sm sm:text-base font-bold text-[#282023] mt-0.5">2,568</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 py-0.5 rounded">
                    +8.3%
                  </span>
                  <svg className="w-12 h-3 stroke-[#40C351] fill-none" viewBox="0 0 50 12">
                    <path d="M1 10 L15 7 L28 4 L49 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 3: Total Orders */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-[#5e2b9d]/40 transition-colors">
                <div className="text-[10px] font-medium text-slate-500">Total Orders</div>
                <div className="text-sm sm:text-base font-bold text-[#282023] mt-0.5">1,456</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#40C351] bg-[#40C351]/10 px-1 py-0.5 rounded">
                    +5.7%
                  </span>
                  <svg className="w-12 h-3 stroke-[#40C351] fill-none" viewBox="0 0 50 12">
                    <path d="M1 8 L18 10 L32 5 L49 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 4: Pending Invoices */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-[#5e2b9d]/40 transition-colors">
                <div className="text-[10px] font-medium text-slate-500">Pending Invoices</div>
                <div className="text-sm sm:text-base font-bold text-[#282023] mt-0.5">128</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#FB5454] bg-[#FB5454]/10 px-1 py-0.5 rounded">
                    -2.1%
                  </span>
                  <svg className="w-12 h-3 stroke-[#FB5454] fill-none" viewBox="0 0 50 12">
                    <path d="M1 3 L16 4 L31 8 L49 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom Row: Spline Chart & Recent Transactions */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              
              {/* Sales Overview Chart (7 cols) */}
              <div className="md:col-span-7 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="font-bold text-[#282023] text-xs">Sales Overview</h5>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md text-[#282023] cursor-pointer">
                    <span>This Year</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* Spline Graph SVG */}
                <div className="relative w-full h-36 pt-1">
                  <svg className="w-full h-full" viewBox="0 0 320 110" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="25" y1="15" x2="310" y2="15" stroke="#f1f5f9" strokeDasharray="3 3" />
                    <line x1="25" y1="45" x2="310" y2="45" stroke="#f1f5f9" strokeDasharray="3 3" />
                    <line x1="25" y1="75" x2="310" y2="75" stroke="#f1f5f9" strokeDasharray="3 3" />

                    {/* Y Axis Numbers */}
                    <text x="18" y="18" fill="#94a3b8" fontSize="8" textAnchor="end">100</text>
                    <text x="18" y="48" fill="#94a3b8" fontSize="8" textAnchor="end">50</text>
                    <text x="18" y="78" fill="#94a3b8" fontSize="8" textAnchor="end">0</text>

                    {/* Solid fill & line */}
                    <path
                      d="M35 70 C 65 72, 85 45, 115 50 C 145 55, 165 30, 195 20 C 225 15, 245 42, 275 35 C 290 30, 305 25, 310 22 L 310 95 L 35 95 Z"
                      fill="#5e2b9d"
                      fillOpacity="0.12"
                    />
                    <path
                      d="M35 70 C 65 72, 85 45, 115 50 C 145 55, 165 30, 195 20 C 225 15, 245 42, 275 35 C 290 30, 305 25, 310 22"
                      fill="none"
                      stroke="#5e2b9d"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Coordinate Nodes */}
                    <circle cx="35" cy="70" r="3" fill="#ffffff" stroke="#5e2b9d" strokeWidth="2" />
                    <circle cx="115" cy="50" r="3" fill="#ffffff" stroke="#5e2b9d" strokeWidth="2" />
                    <circle cx="195" cy="20" r="3.5" fill="#5e2b9d" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="275" cy="35" r="3" fill="#ffffff" stroke="#5e2b9d" strokeWidth="2" />
                    <circle cx="310" cy="22" r="3" fill="#ffffff" stroke="#5e2b9d" strokeWidth="2" />

                    {/* X Axis Months */}
                    <text x="35" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Jan</text>
                    <text x="80" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Feb</text>
                    <text x="125" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Mar</text>
                    <text x="170" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Apr</text>
                    <text x="215" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">May</text>
                    <text x="260" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Jun</text>
                    <text x="305" y="105" fill="#94a3b8" fontSize="8" textAnchor="middle">Jul</text>
                  </svg>
                </div>
              </div>

              {/* Recent Transactions (5 cols) */}
              <div className="md:col-span-5 p-3 rounded-xl bg-white border border-slate-100 shadow-xs flex flex-col justify-between">
                <div>
                  <h5 className="font-bold text-[#282023] text-xs mb-2">Recent Transactions</h5>
                  <div className="space-y-2">
                    {[
                      { inv: "Invoice #INV-001", amount: "₹25,000", time: "Just now" },
                      { inv: "Invoice #INV-002", amount: "₹18,500", time: "10m ago" },
                      { inv: "Invoice #INV-003", amount: "₹32,000", time: "25m ago" },
                      { inv: "Invoice #INV-004", amount: "₹21,250", time: "1h ago" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#40C351]" />
                          <span className="text-[11px] font-medium text-slate-700">{item.inv}</span>
                        </div>
                        <span className="text-[11px] font-bold text-[#282023]">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button className="w-full py-1 text-[10px] font-bold text-[#5e2b9d] hover:text-[#4d2282] border border-[#5e2b9d]/30 hover:border-[#5e2b9d] rounded-lg hover:bg-[#5e2b9d]/5 transition-all cursor-pointer">
                    View All
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
