"use client";

import React from "react";
import Link from "next/link";
import styles from "./HomeTrustCTA.module.css";

// 1. Industries Data
const industries = [
    {
        id: "cafes",
        label: "Cafes & Restaurants",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
            </svg>
        ),
    },
    {
        id: "hotels",
        label: "Hotels & Lodges",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" />
            </svg>
        ),
    },
    {
        id: "meat",
        label: "Chicken & Meat Shops",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c1-2 3-4 6-4s4 2 2 4-5 6-8 0z" />
            </svg>
        ),
    },
    {
        id: "pharmacy",
        label: "Pharmacy Stores",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7zM8.5 8.5l7 7" />
            </svg>
        ),
    },
    {
        id: "retail",
        label: "Retail Shops",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />
            </svg>
        ),
    },
    {
        id: "supermarkets",
        label: "Supermarkets",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        ),
    },
    {
        id: "bakeries",
        label: "Bakeries & Sweet Shops",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 11V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4M12 3v8" />
            </svg>
        ),
    },
    {
        id: "more",
        label: "And More...",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
        ),
    },
];

// 2. Testimonials Data
const testimonials = [
    {
        id: 1,
        quote:
            "“BillNext has made our restaurant billing so easy. The kitchen printing feature is amazing!”",
        author: "Ramesh K.",
        role: "Restaurant Owner",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 2,
        quote:
            "“PharmaNext is perfect for our pharmacy. Stock and expiry management is very helpful.”",
        author: "Priya S.",
        role: "Pharmacy Owner",
        avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 3,
        quote:
            "“GrowNext helped us manage leads and close more customers. Very easy to use!”",
        author: "Arun M.",
        role: "Business Owner",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
];

export default function HomeTrustCTA() {
    return (
        <div className={styles.wrapper}>
            {/* ---------------- 1. Industries Section ---------------- */}
            <section className={styles.industriesSection}>
                <div className={styles.container}>
                    <div className={styles.headerBlock}>
                        <span className={styles.topBadge}>MADE FOR MULTIPLE INDUSTRIES</span>
                        <h2 className={styles.mainTitle}>
                            Trusted by Businesses Across Industries
                        </h2>
                        <p className={styles.subTitle}>
                            Our software solutions work for all types of small and growing
                            businesses.
                        </p>
                    </div>

                    <div className={styles.industriesGrid}>
                        {industries.map((item) => (
                            <div key={item.id} className={styles.industryCard}>
                                <div className={styles.iconCircle}>{item.icon}</div>
                                <span className={styles.industryLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- 2. CTA Banner with herocustomer.png ---------------- */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <div className={styles.bannerGrid}>
                            {/* Left Content Area */}
                            <div className={styles.bannerContent}>
                                <span className={styles.bannerBadge}>
                                    READY TO GROW YOUR BUSINESS?
                                </span>
                                <h3 className={styles.bannerHeading}>
                                    Let&apos;s Build a Smarter <br />
                                    Tomorrow Together
                                </h3>
                                <p className={styles.bannerDesc}>
                                    Join thousands of businesses who trust Doonext to manage their
                                    operations and grow faster.
                                </p>

                                <div className={styles.bannerButtons}>
                                    <Link href="/contact" className={styles.btnPrimary}>
                                        <span>Get Started</span>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>

                                    <Link href="/contact" className={styles.btnOutline}>
                                        <span>Contact Us</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Spacer allowing background illustration on the right to display cleanly */}
                            <div className={styles.bannerVisualSpacer} aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- 3. Testimonials Section ---------------- */}
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <div className={styles.headerBlock}>
                        <span className={styles.topBadge}>WHAT OUR CUSTOMERS SAY</span>
                        <h2 className={styles.mainTitle}>Loved by Business Owners</h2>
                    </div>

                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((t) => (
                            <div key={t.id} className={styles.testimonialCard}>
                                <p className={styles.quoteText}>{t.quote}</p>

                                <div className={styles.authorRow}>
                                    <div className={styles.authorLeft}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={t.avatar}
                                            alt={t.author}
                                            className={styles.authorAvatar}
                                            loading="lazy"
                                        />
                                        <div className={styles.authorMeta}>
                                            <span className={styles.authorName}>{t.author}</span>
                                            <span className={styles.authorRole}>{t.role}</span>
                                        </div>
                                    </div>

                                    <div
                                        className={styles.starsWrapper}
                                        aria-label="5 stars rating"
                                    >
                                        {"★★★★★"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}