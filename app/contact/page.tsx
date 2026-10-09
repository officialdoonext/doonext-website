"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        requirement: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <main className={styles.pageWrapper}>
            {/* ================= HERO SECTION WITH CONTACTHERO.PNG BACKGROUND ================= */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    {/* Header Title Block */}
                    <div className={styles.headerBlock}>
                        <span className={styles.pageBadge}>CONTACT US</span>
                        <h1 className={styles.pageTitle}>
                            Let&apos;s Build a <br />
                            <span className={styles.highlightTitle}>
                                Smarter Tomorrow Together
                            </span>
                        </h1>
                        <p className={styles.pageSubtitle}>
                            Have questions about our products, pricing or need a custom solution?{" "}
                            <br />
                            Our team is here to help you.
                        </p>
                    </div>

                    {/* Form & Contact Details Grid */}
                    <div className={styles.heroContentGrid}>
                        {/* Form Card */}
                        <div className={styles.formCard}>
                            <h2 className={styles.formTitle}>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className={styles.formElement}>
                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <span className={styles.inputIcon}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <span className={styles.inputIcon}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className={styles.textInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <span className={styles.inputIcon}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        className={styles.textInput}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <span className={styles.inputIcon}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <path d="M3 9h18" />
                                        </svg>
                                    </span>
                                    <select
                                        value={formData.product}
                                        onChange={(e) =>
                                            setFormData({ ...formData, product: e.target.value })
                                        }
                                        className={styles.selectInput}
                                    >
                                        <option value="" disabled>
                                            Select Product
                                        </option>
                                        <option value="billnext">BillNext</option>
                                        <option value="pharmanext">PharmaNext</option>
                                        <option value="grownext">GrowNext</option>
                                        <option value="retailnext">RetailNext</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroupTextarea}>
                                    <span className={styles.textareaIcon}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </span>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about your requirement..."
                                        value={formData.requirement}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                requirement: e.target.value,
                                            })
                                        }
                                        className={styles.textareaInput}
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <span>Send Message</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Quick Contact Details Column */}
                        <div className={styles.contactDetailsCol}>
                            {/* Call Us */}
                            <div className={styles.contactDetailItem}>
                                <div className={`${styles.detailIconCircle} ${styles.purpleIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className={styles.detailText}>
                                    <span className={styles.detailLabel}>Call Us</span>
                                    <a href="tel:+919876543210" className={styles.detailValueBold}>
                                        +91 98765 43210
                                    </a>
                                    <span className={styles.detailSub}>
                                        Mon - Sat, 9:00 AM - 6:00 PM
                                    </span>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className={styles.contactDetailItem}>
                                <div className={`${styles.detailIconCircle} ${styles.blueIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div className={styles.detailText}>
                                    <span className={styles.detailLabel}>Email Us</span>
                                    <a
                                        href="mailto:info@doonext.com"
                                        className={styles.detailValueBold}
                                    >
                                        info@doonext.com
                                    </a>
                                    <span className={styles.detailSub}>We reply within 24 hours</span>
                                </div>
                            </div>

                            {/* Our Office */}
                            <div className={styles.contactDetailItem}>
                                <div className={`${styles.detailIconCircle} ${styles.purpleIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className={styles.detailText}>
                                    <span className={styles.detailLabel}>Our Office</span>
                                    <span className={styles.detailValueBold}>
                                        Hyderabad, Telangana, India
                                    </span>
                                    <span className={styles.detailSub}>
                                        Gamanext Tech Solutions Pvt Ltd <br />
                                        HITEC City, Hyderabad - 500081
                                    </span>
                                </div>
                            </div>

                            {/* Support */}
                            <div className={styles.contactDetailItem}>
                                <div className={`${styles.detailIconCircle} ${styles.tealIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                    </svg>
                                </div>
                                <div className={styles.detailText}>
                                    <span className={styles.detailLabel}>Support</span>
                                    <a
                                        href="mailto:support@doonext.com"
                                        className={styles.detailValueBold}
                                    >
                                        support@doonext.com
                                    </a>
                                    <span className={styles.detailSub}>Get help with our products</span>
                                </div>
                            </div>
                        </div>

                        {/* Spacer for Right-side Office visual inside background image */}
                        <div className={styles.heroVisualSpacer} aria-hidden="true" />
                    </div>
                </div>
            </section>

            {/* ================= LOWER SECTION: MAP + LOCATIONS + IMMEDIATE HELP ================= */}
            <div className={styles.lowerContainer}>
                {/* Middle Section: Map + Location + Help */}
                <div className={styles.middleGrid}>
                    {/* Map Preview Card */}
                    <div className={styles.mapCard}>
                        <div className={styles.mockMapArea}>
                            <div className={styles.mapGridPattern} />
                            <div className={styles.mapRoad1} />
                            <div className={styles.mapRoad2} />
                            <div className={styles.metroLine} />

                            <span className={styles.landmarkTag1}>HITEC City IT Park</span>
                            <span className={styles.landmarkTag2}>Mindspace IT Park</span>
                            <span className={styles.landmarkTag3}>
                                IKEA Hyderabad Metro Station
                            </span>

                            <div className={styles.mainPinBox}>
                                <div className={styles.pinCircle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                    </svg>
                                </div>
                                <div className={styles.pinBubble}>
                                    <strong>DOONEXT</strong>
                                    <span>Hyderabad, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Details Card */}
                    <div className={styles.locationDetailsCard}>
                        <span className={styles.miniBadge}>VISIT US</span>
                        <h3 className={styles.sectionHeading}>Our Location</h3>
                        <p className={styles.sectionText}>
                            Come say hello! We&apos;d love to meet you and show you how Doonext
                            can help your business grow.
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mapLinkBtn}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                            <span>View on Google Maps</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* We're Here to Help */}
                    <div className={styles.helpCard}>
                        <span className={styles.miniBadge}>WHY CONTACT US</span>
                        <h3 className={styles.sectionHeading}>We&apos;re Here to Help</h3>
                        <p className={styles.sectionText}>
                            Whether you have a question, need a demo or want to partner with us,
                            our team is always ready to assist you.
                        </p>

                        <div className={styles.helpFeaturesRow}>
                            <div className={styles.helpFeature}>
                                <div className={`${styles.helpIconCircle} ${styles.purpleIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <strong className={styles.helpTitle}>Product Demo</strong>
                                <span className={styles.helpDesc}>See our software in action</span>
                            </div>

                            <div className={styles.helpFeature}>
                                <div className={`${styles.helpIconCircle} ${styles.blueIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <line x1="2" y1="10" x2="22" y2="10" />
                                    </svg>
                                </div>
                                <strong className={styles.helpTitle}>Sales Enquiry</strong>
                                <span className={styles.helpDesc}>
                                    Get pricing and custom plans
                                </span>
                            </div>

                            <div className={styles.helpFeature}>
                                <div className={`${styles.helpIconCircle} ${styles.tealIcon}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <strong className={styles.helpTitle}>Technical Support</strong>
                                <span className={styles.helpDesc}>Quick and reliable assistance</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Need Immediate Help? */}
                <div className={styles.bottomHelpBar}>
                    <div className={styles.barLeft}>
                        <div className={styles.barHeadsetCircle}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                            </svg>
                        </div>
                        <div className={styles.barText}>
                            <strong className={styles.barTitle}>Need Immediate Help?</strong>
                            <span className={styles.barSub}>
                                Chat with our support team for quick assistance.
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={styles.liveChatBtn}
                        onClick={() => alert("Opening Live Chat...")}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>Live Chat</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    );
}