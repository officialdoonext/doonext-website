"use client";

import React from "react";
import Link from "next/link";
import styles from "./HomeFeatures.module.css";

const featurePoints = [
    "Cloud Based - Access from anywhere",
    "Works on Desktop, Tablet & Mobile",
    "Easy Setup & Training",
    "Regular Feature Updates",
    "Dedicated Support",
];

export default function HomeFeatures() {
    return (
        <section className={styles.sectionWrapper} id="features">
            <div className={styles.container}>
                {/* Left Column: Content */}
                <div className={styles.contentCol}>
                    <span className={styles.badge}>BUILT FOR REAL BUSINESSES</span>

                    <h2 className={styles.title}>
                        Everything You Need <br />
                        to <span className={styles.highlightText}>Run and Grow</span>
                    </h2>

                    <p className={styles.description}>
                        Our software solutions are designed to be simple, powerful and
                        affordable — so you can focus on what matters most, your business.
                    </p>

                    {/* Dedicated mobile mockup display (visible only on mobile 320px-425px) */}
                    <div className={styles.mobileDevicesCard} aria-hidden="true" />

                    <ul className={styles.featureList}>
                        {featurePoints.map((point, index) => (
                            <li key={index} className={styles.featureItem}>
                                <span className={styles.checkCircle}>
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={styles.checkIcon}
                                    >
                                        <path
                                            d="M13.3 4.3L6.5 11.1L2.7 7.3"
                                            stroke="#ffffff"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.ctaWrapper}>
                        <Link href="/contact" className={styles.ctaBtn}>
                            <span>Get Started Today</span>
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
                    </div>
                </div>

                {/* Right Spacer (Reserves space for the homefeatures.png background visual on Desktop & Tablet) */}
                <div className={styles.visualSpacer} aria-hidden="true" />
            </div>
        </section>
    );
}