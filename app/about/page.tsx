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
  Building, 
  HeartHandshake, 
  TrendingUp,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const values = [
    {
      title: "Simplicity First",
      desc: "We design software that requires zero complex training. Anyone on your team can master it on day one.",
      icon: Zap,
      color: "bg-[#8C5288]/10 text-[#8C5288]",
    },
    {
      title: "Rock-Solid Reliability",
      desc: "Our cloud and offline-first architectures ensure your checkout, billing, and data never experience downtime.",
      icon: ShieldCheck,
      color: "bg-[#40C351]/10 text-[#40C351]",
    },
    {
      title: "Customer-Centric Growth",
      desc: "We measure our success purely by the business efficiency and profits gained by our 500+ Indian enterprises.",
      icon: HeartHandshake,
      color: "bg-sky-100 text-sky-700",
    },
    {
      title: "Continuous Innovation",
      desc: "Regular automated updates with latest GST rules, AI analytics, and cutting-edge hardware compatibility.",
      icon: TrendingUp,
      color: "bg-[#EFAF08]/15 text-[#EFAF08]",
    },
  ];

  const milestones = [
    { year: "2015", title: "Foundation in Coimbatore", desc: "Started with a vision to build modern billing software for regional retail businesses." },
    { year: "2018", title: "Restaurant & Hotel Suite", desc: "Launched KOT and Hotel ERP systems adopted by 100+ hospitality partners." },
    { year: "2021", title: "Cloud ERP & CRM Launch", desc: "Expanded into comprehensive cloud CRM and automated payroll compliance systems." },
    { year: "2025", title: "500+ Businesses Across India", desc: "Serving diverse retail, food, manufacturing, and wholesale sectors with 99.9% uptime." },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1">
        {/* Hero Header Solid Color */}
        <section className="relative pt-16 pb-20 bg-[#fbf6fa] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5288]/10 border border-[#8C5288]/20 text-[#8C5288] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              About Doonext Software Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#282023] tracking-tight leading-tight">
              Empowering Businesses with <br className="hidden sm:inline" />
              <span className="text-[#8C5288]">
                Intelligent &amp; Simple Software
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Based in Coimbatore, Tamil Nadu, Doonext crafts high-performance software solutions that turn daily business operations into seamless, profitable engines.
            </p>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-3xl bg-[#8C5288]/5 border border-[#8C5288]/15 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#8C5288] text-white flex items-center justify-center mb-6 shadow-md shadow-[#8C5288]/20">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#282023] mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To democratize enterprise-grade software for every business in India — from single retail counters and bustling restaurants to large wholesale distributors — by making technology affordable, intuitive, and remarkably reliable.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#40C351]/5 border border-[#40C351]/20 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#40C351] text-white flex items-center justify-center mb-6 shadow-md shadow-[#40C351]/20">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#282023] mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To be India&apos;s most trusted business operating ecosystem, recognized for effortless user experience, transparent pricing, and unmatched customer onboarding support.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Company Numbers */}
        <section className="py-16 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-4xl font-bold text-[#8C5288]">500+</div>
                <div className="text-sm font-bold text-[#282023] mt-1">Active Business Clients</div>
                <p className="text-xs text-slate-500 mt-1">Across 12+ industry verticals</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-4xl font-bold text-[#40C351]">50+</div>
                <div className="text-sm font-bold text-[#282023] mt-1">Custom Software Modules</div>
                <p className="text-xs text-slate-500 mt-1">Billing, ERP, CRM &amp; Payroll</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-4xl font-bold text-[#8C5288]">10+</div>
                <div className="text-sm font-bold text-[#282023] mt-1">Years Industry Experience</div>
                <p className="text-xs text-slate-500 mt-1">Proven market expertise</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-4xl font-bold text-[#40C351]">99.9%</div>
                <div className="text-sm font-bold text-[#282023] mt-1">Uptime &amp; Live Support</div>
                <p className="text-xs text-slate-500 mt-1">Dedicated support helpline</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
                WHAT DRIVES US
              </div>
              <h2 className="text-3xl font-bold text-[#282023]">Our Core Values</h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Every line of code and feature we release is anchored by these guiding principles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                    <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#282023] text-lg mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestones / Journey */}
        <section className="py-20 bg-[#fafbfc] border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
                OUR JOURNEY
              </div>
              <h2 className="text-3xl font-bold text-[#282023]">A Decade of Empowering Businesses</h2>
            </div>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#8C5288]/30 transition-colors">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-[#8C5288]/10 text-[#8C5288] font-bold text-sm">
                      {m.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#282023]">{m.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Solid Color */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-3xl bg-[#8C5288] p-8 sm:p-12 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to explore Doonext products?</h3>
              <p className="text-purple-100 text-sm mt-1">Experience personalized walkthroughs built for your specific trade.</p>
            </div>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-7 py-3.5 rounded-full bg-white text-[#8C5288] font-bold text-sm hover:bg-slate-50 shadow-md transition-all shrink-0 cursor-pointer"
            >
              Request Free Demo
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
