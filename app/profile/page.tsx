"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  User, 
  Building2, 
  Store, 
  Receipt, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  Printer, 
  Layers, 
  CheckCircle2, 
  Key, 
  Edit3, 
  LogOut, 
  Bell, 
  Database,
  Smartphone,
  Save,
  Boxes
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<"general" | "licenses" | "hardware" | "security">("general");
  const [saveMessage, setSaveMessage] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Arvind Patel",
    email: "arvind.patel@patelsupermarket.com",
    phone: "+91 98765 43210",
    businessName: "Patel Supermarket & Retail Mart",
    gstin: "33AAAAA0000A1Z5",
    tradeCategory: "Supermarket & FMCG Retail",
    address: "Shop 12-14, Commercial Complex, Gandhipuram, Coimbatore, Tamil Nadu - 641012",
    city: "Coimbatore",
    state: "Tamil Nadu",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveMessage(true);
    setTimeout(() => {
      setSaveMessage(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#5e2b9d] selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* ========================================================================= */}
          {/* Top Profile Summary Header Card */}
          {/* ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5e2b9d] to-[#4a1f7d] text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-purple-900/10">
                  AP
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#40C351] border-2 border-white flex items-center justify-center" title="Active Account" />
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-[#282023]">
                    {profileData.fullName}
                  </h1>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20 uppercase tracking-wider">
                    Store Owner
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351] border border-[#40C351]/25">
                    Verified GSTIN
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-500">
                  {profileData.businessName} • {profileData.city}, {profileData.state}
                </p>

                <p className="text-xs text-slate-400">
                  Member since May 2022 • Enterprise Plan
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white text-xs font-bold shadow-md shadow-[#5e2b9d]/20 transition-all cursor-pointer"
              >
                <span>Support Desk</span>
              </Link>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Main Profile Grid: Tabs & Content */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav Tabs (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-4 space-y-1.5">
              {[
                { id: "general", label: "Business & Profile Details", icon: Building2 },
                { id: "licenses", label: "Active Software Licenses", icon: Layers },
                { id: "hardware", label: "Connected POS Terminals", icon: Printer },
                { id: "security", label: "Security & Cloud Sync", icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left cursor-pointer ${
                      isSelected
                        ? "bg-[#5e2b9d]/10 text-[#5e2b9d] border border-[#5e2b9d]/20"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#5e2b9d]"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 p-3 bg-[#faf7fd] rounded-2xl space-y-2">
                <div className="text-xs font-bold text-[#5e2b9d] flex items-center justify-between">
                  <span>Cloud Database Sync</span>
                  <span className="text-[10px] text-[#40C351] font-bold">Live</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Your store database last synchronized 1 minute ago with Coimbatore Cloud Cluster.
                </p>
              </div>
            </div>

            {/* Right Tab Content Panels (8 cols) */}
            <div className="lg:col-span-8">
              
              {/* TAB 1: General Profile & Business Details */}
              {activeSection === "general" && (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#282023]">Business &amp; Account Settings</h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Update your store credentials, registered GSTIN, and contact points.
                    </p>
                  </div>

                  {saveMessage && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#40C351]" />
                      <span>Account information updated successfully!</span>
                    </div>
                  )}

                  <form onSubmit={handleSave} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Owner Full Name
                        </label>
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Registered Email
                        </label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Business / Store Name
                        </label>
                        <input
                          type="text"
                          value={profileData.businessName}
                          onChange={(e) => setProfileData({ ...profileData, businessName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Registered GSTIN
                        </label>
                        <input
                          type="text"
                          value={profileData.gstin}
                          onChange={(e) => setProfileData({ ...profileData, gstin: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white uppercase"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Trade Category
                        </label>
                        <input
                          type="text"
                          value={profileData.tradeCategory}
                          onChange={(e) => setProfileData({ ...profileData, tradeCategory: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#282023] mb-1.5">
                        Store Address
                      </label>
                      <textarea
                        rows={2}
                        value={profileData.address}
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#5e2b9d] focus:ring-2 focus:ring-[#5e2b9d]/15 outline-hidden text-[#282023] bg-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#5e2b9d] hover:bg-[#4d2282] text-white font-bold text-xs shadow-md shadow-[#5e2b9d]/20 flex items-center gap-2 cursor-pointer transition-all"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Account Changes</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 2: Active Software Licenses */}
              {activeSection === "licenses" && (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#282023]">Active Software Subscriptions</h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Your current active Doonext software modules and renewal dates.
                    </p>
                  </div>

                  <div className="space-y-4">
                    
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#5e2b9d]/10 text-[#5e2b9d] flex items-center justify-center shrink-0">
                          <Receipt className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-[#282023]">Doonext Billing POS Pro</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351]">Active</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">3 Counter Terminals • Offline-First License</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xs font-bold text-[#282023]">Valid till May 2026</div>
                        <div className="text-[11px] text-slate-400">Auto-Renewal Active</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
                          <Boxes className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-[#282023]">Doonext Cloud ERP &amp; Multi-Godown</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351]">Active</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Central Warehouse + 2 Sub-Branches</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xs font-bold text-[#282023]">Valid till May 2026</div>
                        <div className="text-[11px] text-slate-400">Auto-Renewal Active</div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-[#282023]">WhatsApp Automated CRM Funnel</h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#40C351]/10 text-[#40C351]">Active</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">5,000 Digital Bills / Month Included</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xs font-bold text-[#282023]">Valid till May 2026</div>
                        <div className="text-[11px] text-slate-400">Auto-Renewal Active</div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 3: Connected POS Terminals & Hardware */}
              {activeSection === "hardware" && (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#282023]">Connected POS Hardware &amp; Terminals</h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Hardware stations synchronized with your Doonext local network.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#282023]">Counter 01 (Main Billing)</span>
                        <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                      </div>
                      <p className="text-xs text-slate-500">Windows Touch POS • Thermal 3-inch USB</p>
                      <div className="text-[11px] text-[#5e2b9d] font-bold">Driver: POS-80 Series OK</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#282023]">Counter 02 (Express Checkout)</span>
                        <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                      </div>
                      <p className="text-xs text-slate-500">Desktop PC • 2D Omnidirectional Scanner</p>
                      <div className="text-[11px] text-[#5e2b9d] font-bold">Driver: USB HID OK</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#282023]">Godown Barcode Terminal</span>
                        <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                      </div>
                      <p className="text-xs text-slate-500">Android Rugged Handheld Scanner</p>
                      <div className="text-[11px] text-[#40C351] font-bold">Doonext Stock App v3.2</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#282023]">Electronic Cash Drawer</span>
                        <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                      </div>
                      <p className="text-xs text-slate-500">RJ11 Auto-Kick connected to Counter 01</p>
                      <div className="text-[11px] text-[#40C351] font-bold">Auto-Open on Bill Print</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Security & Cloud Sync */}
              {activeSection === "security" && (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#282023]">Security, Backups &amp; Sync Status</h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Verify encrypted backups and session controls.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="p-4 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-[#5e2b9d]" />
                        <div>
                          <div className="font-bold text-[#282023]">Automated Cloud Backup</div>
                          <div className="text-slate-500 mt-0.5">Hourly snapshot stored in Indian Cloud Tier-4</div>
                        </div>
                      </div>
                      <span className="font-bold text-[#40C351] bg-[#40C351]/10 px-2.5 py-1 rounded-full">
                        Enabled
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Key className="w-5 h-5 text-[#5e2b9d]" />
                        <div>
                          <div className="font-bold text-[#282023]">Two-Factor Authentication (2FA)</div>
                          <div className="text-slate-500 mt-0.5">Require OTP for manager override and tax changes</div>
                        </div>
                      </div>
                      <span className="font-bold text-[#40C351] bg-[#40C351]/10 px-2.5 py-1 rounded-full">
                        Active
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf7fd] border border-[#5e2b9d]/15 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#40C351]" />
                        <div>
                          <div className="font-bold text-[#282023]">Local Cashier Permission Sandbox</div>
                          <div className="text-slate-500 mt-0.5">Cashiers cannot delete bills without manager PIN</div>
                        </div>
                      </div>
                      <span className="font-bold text-[#5e2b9d] bg-[#5e2b9d]/10 px-2.5 py-1 rounded-full">
                        Enforced
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
