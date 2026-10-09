"use client";

import React from "react";
import Link from "next/link";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
    return (
        <section className={styles.heroSection}>
            {/* Mobile Top Office Visual (visible only in 320px - 425px) */}
            <div className={styles.mobileHeroTopImage} aria-hidden="true" />

            <div className={styles.container}>
                {/* Content Area */}
                <div className={styles.contentCol}>
                    <span className={styles.badge}>
                        SIMPLE SOFTWARES. BIGGER BUSINESSES.
                    </span>

                    <h1 className={styles.title}>
                        Powerful Software <br />
                        for <span className={styles.highlightText}>Every Business</span>
                    </h1>

                    <p className={styles.description}>
                        Doonext builds easy-to-use, powerful software solutions to help small
                        and growing businesses manage, automate and grow — all in one place.
                    </p>

                    <span className={styles.mobileSubTag}>
                        SOFTWARE FOR A SMARTER TOMORROW
                    </span>

                    {/* Action CTAs */}
                    <div className={styles.ctaGroup}>
                        <Link href="/products" className={styles.primaryBtn}>
                            <span>Explore Products</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
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

                        <button
                            type="button"
                            className={styles.secondaryBtn}
                            onClick={() => alert("Watch video")}
                        >
                            <span className={styles.playIconWrapper}>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="#5e2b9d" />
                                </svg>
                            </span>
                            <span>Watch Video</span>
                        </button>
                    </div>

                    {/* Trust Highlights */}
                    <div className={styles.trustRow}>
                        <div className={styles.trustItem}>
                            <svg
                                className={styles.trustIcon}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5 10c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5S5.858 2.5 10 2.5s7.5 3.358 7.5 7.5z"
                                    stroke="#5e2b9d"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M7 10l2 2 4-4"
                                    stroke="#5e2b9d"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Easy to Use</span>
                        </div>

                        <div className={styles.trustItem}>
                            <svg
                                className={styles.trustIcon}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="10" cy="10" r="7.5" stroke="#5e2b9d" strokeWidth="1.5" />
                                <path
                                    d="M10 6v8M8 8h4"
                                    stroke="#5e2b9d"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span>Affordable Plans</span>
                        </div>

                        <div className={styles.trustItem}>
                            <svg
                                className={styles.trustIcon}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2.5l6 2.5v5c0 4.2-2.8 7.6-6 8.5-3.2-.9-6-4.3-6-8.5v-5l6-2.5z"
                                    stroke="#5e2b9d"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Trusted by Businesses</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual Spacer for Desktop & Tablet */}
                <div className={styles.visualSpacer} aria-hidden="true" />
            </div>
        </section>
    );
}