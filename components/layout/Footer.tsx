"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.container}>
                {/* Main 5-Column Grid */}
                <div className={styles.mainGrid}>
                    {/* Col 1: Brand, Tagline & Socials */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logoLink} aria-label="Doonext Home">
                            <Image
                                src="/logo.png"
                                alt="Doonext Logo"
                                width={280}
                                height={76}
                                className={styles.logoImage}
                            />
                        </Link>

                        <p className={styles.brandDesc}>
                            Simple software solutions for every business. Automate, manage and
                            grow with Doonext.
                        </p>

                        <div className={styles.socialRow}>
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialIcon}
                                aria-label="Facebook"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialIcon}
                                aria-label="Instagram"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialIcon}
                                aria-label="LinkedIn"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialIcon}
                                aria-label="YouTube"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#081d33" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Products */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.columnTitle}>Products</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/billnext" className={styles.footerLink}>BillNext</Link></li>
                            <li><Link href="/pharmanext" className={styles.footerLink}>PharmaNext</Link></li>
                            <li><Link href="/grownext" className={styles.footerLink}>GrowNext</Link></li>
                            <li><Link href="/retailnext" className={styles.footerLink}>RetailNext</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Company */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                            <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
                            <li><Link href="/blog" className={styles.footerLink}>Blog</Link></li>
                            <li><Link href="/careers" className={styles.footerLink}>Careers</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Support */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.columnTitle}>Support</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/help" className={styles.footerLink}>Help Center</Link></li>
                            <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
                            <li><Link href="/terms" className={styles.footerLink}>Terms of Service</Link></li>
                            <li><Link href="/refund" className={styles.footerLink}>Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Col 5: Get in Touch */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.columnTitle}>Get in Touch</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <svg
                                    className={styles.contactIcon}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <a href="mailto:hello@doonext.com" className={styles.contactTextLink}>
                                    hello@doonext.com
                                </a>
                            </li>

                            <li className={styles.contactItem}>
                                <svg
                                    className={styles.contactIcon}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a href="tel:+919876543210" className={styles.contactTextLink}>
                                    +91 98765 43210
                                </a>
                            </li>

                            <li className={styles.contactItem}>
                                <svg
                                    className={styles.contactIcon}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className={styles.contactText}>Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Horizontal Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyText}>© 2026 Doonext. All rights reserved.</p>
                    <div className={styles.tagline}>
                        <span>Building a Smarter Tomorrow</span>
                        <span className={styles.divider}>|</span>
                        <span className={styles.subBrand}>DOONEXT</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}