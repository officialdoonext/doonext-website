"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Sparkles, Building, Phone, Mail, User } from "lucide-react";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function RequestDemoModal({
  isOpen,
  onClose,
  defaultProduct = "Doonext Billing",
}: RequestDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    product: defaultProduct,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      product: "Doonext Billing",
      notes: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#282023]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#8C5288]/20 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon Solid Color */}
        <div className="bg-[#8C5288] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-purple-100 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-[#EFAF08]" />
            Book a Free 1-on-1 Demo
          </div>
          <h3 className="text-2xl font-bold text-white">Experience Doonext</h3>
          <p className="text-purple-100 text-xs mt-1">
            See how our smart software transforms your operations in under 15 minutes.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#40C351]/15 text-[#40C351] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#282023]">Demo Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <span className="font-bold text-[#8C5288]">{formData.name}</span>. Our software specialist will reach out within 2 hours at <span className="font-bold text-[#282023]">{formData.phone || formData.email}</span> with your personalized live demo link.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#8C5288] text-white rounded-xl text-sm font-bold hover:bg-[#763f72] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
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

                <div>
                  <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="rajesh@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
                    Business / Store Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="Grand Retail Hub"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
                    Product Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden bg-white text-[#282023] cursor-pointer"
                  >
                    <option value="Doonext Billing">Doonext Billing POS</option>
                    <option value="Doonext Restaurant">Doonext Restaurant POS</option>
                    <option value="Doonext Hotel">Doonext Hotel ERP</option>
                    <option value="Doonext CRM">Doonext CRM</option>
                    <option value="Doonext Payroll">Doonext Payroll & HR</option>
                    <option value="Custom Software">Custom Enterprise Software</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#282023] uppercase tracking-wider mb-1">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what features you need or questions you have..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[#8C5288] hover:bg-[#763f72] text-white font-bold text-sm shadow-lg shadow-[#8C5288]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Schedule Demo</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 No credit card required. Free onboarding guidance included.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
