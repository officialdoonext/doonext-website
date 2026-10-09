"use client";

import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const stats = [
    { value: "10,000+", label: "Businesses Powered" },
    { value: "99.9%", label: "System Uptime" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "4.9/5", label: "Customer Satisfaction" },
];

const coreValues = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: "Affordable by Design",
        desc: "Enterprise-grade software capabilities engineered with reasonable pricing for small and growing retailers, pharmacies, and restaurants.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: "Simplicity First",
        desc: "Zero complicated onboarding. Your staff can get completely trained and start billing within 15 minutes of initial setup.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Rock-Solid Reliability",
        desc: "Cloud sync with local offline resilience so peak-hour billing, inventory tracking, and reports never get disrupted.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Customer-Centric Care",
        desc: "Direct support from real software engineers who understand everyday retail operations, inventory flows, and billing speeds.",
    },
];

const milestones = [
    {
        year: "2021",
        title: "The Founding Vision",
        desc: "Started with a clear mission: build point-of-sale software that owners love to run without IT teams.",
    },
    {
        year: "2023",
        title: "Multi-Industry Expansion",
        desc: "Introduced dedicated product suites tailored specifically for restaurants, pharmacy stores, and retail outlets.",
    },
    {
        year: "2025",
        title: "Unified Cloud Ecosystem",
        desc: "Empowered 10,000+ business locations across India with connected multi-branch analytics and real-time alerts.",
    },
];

export default function AboutPage() {
    return (
        <main className={styles.pageWrapper}>
            {/* ---------------- 1. Hero Section ---------------- */}
            <section className={styles.heroSection}>
                {/* Mobile Graphic Display (Visible ONLY on 320px - 425px) */}
                <div className={styles.mobileHeroTopImage} aria-hidden="true" />

                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>ABOUT DOONEXT</span>
                            <h1 className={styles.heroTitle}>
                                Empowering Businesses With <br />
                                <span className={styles.highlightText}>Smarter, Simpler Tools</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                At DooNext, we build intelligent software products designed to replace
                                clunky legacy systems. Whether you operate a restaurant, medical shop, or
                                growing retail chain, our tools give you absolute operational clarity.
                            </p>
                            <div className={styles.heroCtas}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    <span>Work With Us</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                                <Link href="/reviews" className={styles.secondaryBtn}>
                                    <span>Read Customer Stories</span>
                                </Link>
                            </div>
                        </div>
                        {/* Visual Spacer for Tablet / Desktop Background Graphic */}
                        <div className={styles.heroVisualSpacer} aria-hidden="true" />
                    </div>
                </div>
            </section>

            {/* ---------------- 2. Numbers / Impact Strip ---------------- */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((s, idx) => (
                            <div key={idx} className={styles.statCard}>
                                <span className={styles.statNumber}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- 3. Core Values Section ---------------- */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.headerBlock}>
                        <span className={styles.sectionBadge}>WHAT DRIVES US</span>
                        <h2 className={styles.sectionTitle}>Built on Principles That Put You First</h2>
                        <p className={styles.sectionSubtitle}>
                            Every feature and line of code we write is aimed at saving your time,
                            preventing inventory losses, and boosting your daily profits.
                        </p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {coreValues.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{v.icon}</div>
                                <h3 className={styles.valueTitle}>{v.title}</h3>
                                <p className={styles.valueDesc}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- 4. Timeline / Journey Section ---------------- */}
            <section className={styles.journeySection}>
                <div className={styles.container}>
                    <div className={styles.headerBlock}>
                        <span className={styles.sectionBadge}>OUR JOURNEY</span>
                        <h2 className={styles.sectionTitle}>How We Got Here</h2>
                        <p className={styles.sectionSubtitle}>
                            Continuous iteration shaped by real feedback from shop floors, billing
                            counters, and restaurant kitchens.
                        </p>
                    </div>

                    <div className={styles.timelineGrid}>
                        {milestones.map((m, index) => (
                            <div key={index} className={styles.timelineCard}>
                                <span className={styles.timelineYear}>{m.year}</span>
                                <h4 className={styles.timelineTitle}>{m.title}</h4>
                                <p className={styles.timelineDesc}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- 5. Bottom CTA Banner ---------------- */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <div className={styles.bannerGrid}>
                            <div className={styles.bannerContent}>
                                <span className={styles.bannerBadge}>JOIN THE DOONEXT FAMILY</span>
                                <h3 className={styles.bannerHeading}>
                                    Ready to Transform Your <br />
                                    Business Operations?
                                </h3>
                                <p className={styles.bannerDesc}>
                                    Experience why thousands of businesses trust DooNext to automate their
                                    billing and accelerate growth.
                                </p>
                                <div className={styles.bannerButtons}>
                                    <Link href="/contact" className={styles.bannerBtnPrimary}>
                                        <span>Schedule Free Demo</span>
                                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                    <Link href="/contact" className={styles.bannerBtnOutline}>
                                        <span>Talk to Sales</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.bannerVisualSpacer} aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}