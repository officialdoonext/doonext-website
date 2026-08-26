"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown,
  MessageSquare,
  HelpCircle,
  Building,
  User
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function ContactPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "Doonext Billing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  const faqs = [
    {
      q: "How fast can Doonext be set up in our business?",
      a: "Most retail, restaurant, and POS deployments are set up within 24 to 48 hours. We handle complete menu/item master migration, barcode mapping, and on-site or remote staff training.",
    },
    {
      q: "Does Doonext Billing work without an internet connection?",
      a: "Yes! Our POS and billing engines are offline-first. Your cashier can continue generating bills and scanning items seamlessly even if the internet drops. Data automatically synchronizes with the cloud once connectivity resumes.",
    },
    {
      q: "Which hardware devices and printers are supported?",
      a: "Doonext is compatible with all standard thermal receipt printers (2-inch, 3-inch USB/LAN/Bluetooth), barcode scanners, electronic cash drawers, digital weighing scales, and desktop/touchscreen POS terminals.",
    },
    {
      q: "What kind of ongoing support do you provide?",
      a: "We offer dedicated phone, WhatsApp, and remote desktop support from 9:00 AM to 9:00 PM every day. For hospitality and 24/7 businesses, we offer priority critical hotline assistance.",
    },
    {
      q: "Can we get custom modules built for our workflow?",
      a: "Absolutely. Our engineering team builds custom integrations, reporting dashboards, and specialized workflow modules for growing Indian enterprises and distributors.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1">
        
        {/* Hero Header Solid Color */}
        <section className="relative pt-16 pb-16 bg-[#fbf6fa] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5288]/10 border border-[#8C5288]/20 text-[#8C5288] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch With Doonext
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#282023] tracking-tight leading-tight">
              Let&apos;s Accelerate Your <br />
              <span className="text-[#8C5288]">
                Business Growth Today
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our software, need a customized enterprise quote, or want to schedule an on-premise demo? We&apos;re here to assist.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Direct Contact Details & Info (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                
                <div>
                  <h3 className="text-2xl font-bold text-[#282023]">Direct Office Contact</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Connect directly with our sales and technical support departments in Coimbatore.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 hover:border-[#8C5288]/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#8C5288]/10 text-[#8C5288] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#282023] text-sm">Headquarters</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        123, Business Park, Coimbatore, <br />
                        Tamil Nadu, India - 641001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 hover:border-[#8C5288]/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#40C351]/10 text-[#40C351] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#282023] text-sm">Helpline &amp; Sales</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        <a href="tel:+911234567890" className="hover:text-[#8C5288] font-bold text-[#282023]">+91 12345 67890</a>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 hover:border-[#8C5288]/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#282023] text-sm">Email Inquiries</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        <a href="mailto:info@doonext.com" className="hover:text-[#8C5288] font-bold text-[#282023]">info@doonext.com</a>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Response guaranteed within 2 hours</p>
                    </div>
                  </div>

                  {/* Web & Hours */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 hover:border-[#8C5288]/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#EFAF08]/15 text-[#EFAF08] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#282023] text-sm">Working Hours</h4>
                      <p className="text-xs text-slate-600 mt-1">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                      <p className="text-[11px] text-[#40C351] font-bold mt-0.5">24/7 Priority Emergency Support for POS</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Contact Inquiry Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#282023]">Send an Inquiry</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Fill out the form below and our software specialist will prepare a customized proposal.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-[#40C351]/15 text-[#40C351] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#282023]">Message Sent Successfully!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you for reaching out to Doonext. One of our technical representatives will get in touch with you at <span className="font-bold text-[#8C5288]">{formData.email || formData.phone}</span> shortly.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            solution: "Doonext Billing",
                            message: "",
                          });
                        }}
                        className="mt-4 px-6 py-2.5 bg-[#8C5288] text-white rounded-xl text-xs font-bold hover:bg-[#763f72] transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                            <input
                              type="text"
                              required
                              placeholder="Arvind Patel"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                            Work Email *
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                            <input
                              type="email"
                              required
                              placeholder="arvind@store.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                            Business / Brand Name
                          </label>
                          <div className="relative">
                            <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                            <input
                              type="text"
                              placeholder="Patel Supermarket"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                          Solution of Interest
                        </label>
                        <select
                          value={formData.solution}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden bg-white text-[#282023] cursor-pointer"
                        >
                          <option value="Doonext Billing">Doonext Billing POS (Retail &amp; Supermarkets)</option>
                          <option value="Doonext Restaurant">Doonext Restaurant (KOT &amp; Dining)</option>
                          <option value="Doonext Hotel">Doonext Hotel ERP (Rooms &amp; Hospitality)</option>
                          <option value="Doonext CRM">Doonext CRM (Sales &amp; Leads)</option>
                          <option value="Doonext Payroll">Doonext Payroll &amp; HRMS</option>
                          <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1.5">
                          How can we help you? *
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Describe your current business setup, number of counters/branches, and requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 px-6 rounded-xl bg-[#8C5288] hover:bg-[#763f72] text-white font-bold text-sm shadow-lg shadow-[#8C5288]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                        >
                          {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Inquiry</span>
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) Section */}
        <section className="py-20 bg-[#fafbfc] border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold text-[#8C5288] uppercase tracking-widest bg-[#8C5288]/10 px-3 py-1 rounded-full border border-[#8C5288]/20 mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-3xl font-bold text-[#282023]">Got Questions? We&apos;ve Got Answers</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#282023] text-sm sm:text-base hover:text-[#8C5288] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-5 h-5 text-[#8C5288] shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#8C5288]" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
