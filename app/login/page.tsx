"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Lock, 
  Mail, 
  Phone, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  User, 
  Store,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("owner");

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    otp: "",
    rememberMe: true,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to profile dashboard
      router.push("/profile");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#282023] flex flex-col selection:bg-[#8C5288] selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 flex items-center justify-center relative overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#8C5288]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#40C351]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-10 space-y-6">
            
            {/* Top Brand & Title */}
            <div className="text-center space-y-2">
              <Link href="/" className="inline-block mb-1">
                <Image
                  src="/logo.png"
                  alt="Doonext Logo"
                  width={140}
                  height={38}
                  className="h-8 w-auto mx-auto object-contain"
                />
              </Link>

              <h1 className="text-2xl font-bold text-[#282023] tracking-tight">
                Sign in to your Account
              </h1>
              <p className="text-xs text-slate-500">
                Access your Doonext Billing, ERP &amp; Store Management Portal
              </p>
            </div>

            {/* Role Selector Pills */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Login Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "owner", label: "Owner", icon: Building2 },
                  { id: "manager", label: "Manager", icon: User },
                  { id: "cashier", label: "Cashier", icon: Store },
                ].map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#8C5288]/10 text-[#8C5288] border-[#8C5288]/30 shadow-2xs"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{role.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Login Method Toggle */}
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200/80">
              <button
                type="button"
                onClick={() => setLoginMethod("password")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  loginMethod === "password"
                    ? "bg-white text-[#8C5288] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Password Login
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("otp")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  loginMethod === "otp"
                    ? "bg-white text-[#8C5288] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Fast OTP Login
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              
              {/* Phone or Email */}
              <div>
                <label className="block text-xs font-bold text-[#282023] mb-1.5">
                  Mobile Number or Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 9876543210 or store@domain.com"
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] bg-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {loginMethod === "password" ? (
                /* Password */
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-[#282023]">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <a href="#" className="text-xs font-semibold text-[#8C5288] hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ) : (
                /* OTP */
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-[#282023]">
                      Enter 6-Digit OTP <span className="text-red-500">*</span>
                    </label>
                    <button type="button" className="text-xs font-bold text-[#8C5288] hover:underline cursor-pointer">
                      Send OTP
                    </button>
                  </div>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="Enter 6-digit OTP"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    className="w-full px-4 py-2.5 text-center tracking-widest text-base font-bold rounded-xl border border-slate-200 focus:border-[#8C5288] focus:ring-2 focus:ring-[#8C5288]/15 outline-hidden transition-all text-[#282023] bg-white placeholder:text-slate-400 placeholder:tracking-normal placeholder:font-normal placeholder:text-sm"
                  />
                </div>
              )}

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded text-[#8C5288] border-slate-300 focus:ring-[#8C5288]"
                  />
                  <span>Keep me logged in on this device</span>
                </label>
              </div>

              {/* Submit Button */}
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
                      <span>Sign In to Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Bottom Support Callout */}
            <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 space-y-2">
              <p>
                Don&apos;t have a Doonext account yet?{" "}
                <Link href="/contact" className="font-bold text-[#8C5288] hover:underline">
                  Get Free Account Setup
                </Link>
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#40C351] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted Indian Cloud Stack</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
