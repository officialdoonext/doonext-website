"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Headphones,
  User,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function ContactPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white font-sans">
      <Navbar onRequestDemo={() => setDemoModalOpen(true)} />
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <main className="flex-1 pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Matching image with Envelope Illustration) */}
        {/* ========================================================================= */}
        <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#fbf8fc] via-white to-[#fafbfc] overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headline, Narrative & 3 Feature Badges */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Green Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#40C351]/10 border border-[#40C351]/30 text-[#2d963b] text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#40C351]" />
                  <span>Get In Touch</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#282023] tracking-tight leading-[1.12]">
                  We&apos;re Here to Help <br />
                  <span className="text-[#40C351]">You Grow</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Have a question, need a demo, or looking for the right software solution for your business? Our team is ready to assist you.
                </p>

                {/* 3 Feature Value Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-full bg-purple-50 border border-purple-100 text-[#8C5288] flex items-center justify-center shadow-2xs">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#282023]">Quick Response</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-full bg-purple-50 border border-purple-100 text-[#8C5288] flex items-center justify-center shadow-2xs">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#282023]">Expert Support</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Talk to our product specialists
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 text-[#40C351] flex items-center justify-center shadow-2xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#282023]">Tailored Solutions</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Solutions built for your business
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Contact Hero Image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-lg flex items-center justify-center">
                  <Image
                    src="/contact-hero.png"
                    alt="Let's Start a Conversation - Doonext"
                    width={600}
                    height={500}
                    priority
                    className="w-full h-auto max-h-[440px] object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAIN 2-COLUMN SECTION: "Send us a Message" & "Contact Information" */}
        {/* ========================================================================= */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT CARD: Send us a Message (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-10 space-y-6">
                
                <div>
                  <h2 className="text-2xl font-bold text-[#282023]">Send us a Message</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-[#40C351]/15 text-[#40C351] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#282023]">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Doonext. A specialist from our team will get in touch with you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 bg-[#8C5288] hover:bg-[#763f72] text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#282023] mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] placeholder:text-slate-400 bg-white"
                      />
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] placeholder:text-slate-400 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#282023] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] placeholder:text-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#282023] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] placeholder:text-slate-400 bg-white"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-[#282023] mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden bg-white text-[#282023] cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="billing-pos">Doonext Billing POS Demo &amp; Pricing</option>
                        <option value="restaurant-kot">Restaurant &amp; Dining KOT Suite</option>
                        <option value="hotel-erp">Hotel &amp; Resort ERP Software</option>
                        <option value="crm-whatsapp">CRM &amp; WhatsApp Marketing</option>
                        <option value="payroll-hrms">Biometric Payroll &amp; HRMS</option>
                        <option value="custom-software">Custom Software &amp; API Integration</option>
                        <option value="general-support">General Technical Support</option>
                      </select>
                    </div>

                    {/* Your Message */}
                    <div>
                      <label className="block text-xs font-bold text-[#282023] mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] placeholder:text-slate-400 resize-none bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#643477] hover:bg-[#532865] text-white font-bold text-sm shadow-md shadow-purple-900/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-75"
                      >
                        {loading ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>

              {/* RIGHT CARD: Contact Information (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-10 space-y-6">
                
                <div>
                  <h2 className="text-2xl font-bold text-[#282023]">Contact Information</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-purple-50 border border-purple-100 text-[#8C5288] flex items-center justify-center shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                      <div className="text-sm font-bold text-[#282023] mt-1 space-y-0.5">
                        <div>
                          <a href="tel:+911234567890" className="hover:text-[#8C5288] transition-colors">+91 12345 67890</a>
                        </div>
                        <div>
                          <a href="tel:+919876543210" className="hover:text-[#8C5288] transition-colors">+91 98765 43210</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 text-[#40C351] flex items-center justify-center shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                      <div className="text-sm font-bold text-[#282023] mt-1 space-y-0.5">
                        <div>
                          <a href="mailto:hello@doonext.com" className="hover:text-[#8C5288] transition-colors">hello@doonext.com</a>
                        </div>
                        <div>
                          <a href="mailto:support@doonext.com" className="hover:text-[#8C5288] transition-colors">support@doonext.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-purple-50 border border-purple-100 text-[#8C5288] flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</div>
                      <div className="text-sm font-bold text-[#282023] mt-1 leading-snug">
                        Doonext Solutions Pvt. Ltd.
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        2nd Floor, Tech Park, Coimbatore, <br />
                        Tamil Nadu - 641001, India
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 text-[#40C351] flex items-center justify-center shrink-0 shadow-2xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</div>
                      <div className="text-sm font-bold text-[#282023] mt-1">
                        Monday – Saturday
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-purple-50 border border-purple-100 text-[#8C5288] flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website</div>
                      <div className="text-sm font-bold text-[#282023] mt-1">
                        <a href="https://www.doonext.com" target="_blank" rel="noreferrer" className="hover:text-[#8C5288] transition-colors">
                          www.doonext.com
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MAP SECTION ("Our Location") */}
        {/* ========================================================================= */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 h-80 sm:h-96 flex items-center justify-center">
              
              {/* Map Texture / Stylized Background Grid */}
              <div 
                className="absolute inset-0 bg-[#e8ecf2] opacity-80"
                style={{
                  backgroundImage: `
                    radial-gradient(#c7d2e2 1.5px, transparent 1.5px),
                    linear-gradient(to right, #dde3ec 1px, transparent 1px),
                    linear-gradient(to bottom, #dde3ec 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px, 96px 96px, 96px 96px'
                }}
              />

              {/* Decorative Map Roads & Regions Lines */}
              <svg className="absolute inset-0 w-full h-full text-[#d0d9e6] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50 150 Q 200 80, 500 200 T 1200 100" stroke="#bcc8db" strokeWidth="8" fill="none" opacity="0.6" />
                <path d="M200 -20 Q 350 200, 600 400" stroke="#bcc8db" strokeWidth="6" fill="none" opacity="0.6" />
                <path d="M400 0 L 800 400" stroke="#bcc8db" strokeWidth="4" fill="none" opacity="0.5" />
              </svg>

              {/* Center Map Pin Beacon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#8C5288] text-white flex items-center justify-center shadow-2xl shadow-purple-900/40 border-2 border-white transform hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 fill-current text-white" />
                  </div>
                  {/* Ping Animation */}
                  <span className="absolute -inset-2 rounded-full bg-[#8C5288]/30 animate-ping pointer-events-none" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 shadow-md text-[11px] font-bold text-[#282023]">
                  Doonext HQ
                </div>
              </div>

              {/* Floating Location Overlay Card (Left) */}
              <div className="absolute top-6 left-6 z-20 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Our Location
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#40C351]" />
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-[#282023]">
                    Doonext Solutions Pvt. Ltd.
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    2nd Floor, Tech Park, Coimbatore, <br />
                    Tamil Nadu - 641001, India
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5288] hover:text-[#763f72] transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. BOTTOM BANNER ("Looking for the Right Solution for Your Business?") */}
        {/* ========================================================================= */}
        <section className="pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#f7f2fa] via-[#faf6fc] to-[#f4f0f9] border border-purple-100/80 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-5 text-left">
                <div className="w-14 h-14 rounded-2xl bg-white border border-purple-100 text-[#8C5288] flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#282023]">
                    Looking for the Right Solution for Your Business?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
                    Book a free demo with our experts and see how Doonext can help you streamline operations and grow faster.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#643477] hover:bg-[#532865] text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-900/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Request a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

