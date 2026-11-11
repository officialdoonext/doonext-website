"use client";

import React from "react";
import Link from "next/link";
import styles from "./privacy.module.css";

export default function MeNextPrivacyPolicyPage() {
    return (
        <main className={styles.pageWrapper}>
            {/* Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                        <Link href="/" className={styles.breadcrumbLink}>
                            Home
                        </Link>
                        <span className={styles.breadcrumbSep}>/</span>
                        <Link href="/menext" className={styles.breadcrumbLink}>
                            MeNext
                        </Link>
                        <span className={styles.breadcrumbSep}>/</span>
                        <span>Privacy Policy</span>
                    </nav>

                    <span className={styles.badge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        LEGAL &amp; DATA PROTECTION
                    </span>

                    <h1 className={styles.mainTitle}>Privacy Policy for MeNext</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                            <strong>Last Updated:</strong>
                            <span>November 11, 2026</span>
                        </div>
                        <span className={styles.breadcrumbSep}>&bull;</span>
                        <div className={styles.metaItem}>
                            <strong>Effective Date:</strong>
                            <span>November 11, 2026</span>
                        </div>
                        <span className={styles.breadcrumbSep}>&bull;</span>
                        <div className={styles.metaItem}>
                            <strong>Platform:</strong>
                            <span>MeNext / Doonext</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentWrapper}>
                <div className={styles.container}>
                    <div className={styles.layoutGrid}>
                        {/* Table of Contents Sticky Sidebar */}
                        <aside className={styles.tocSidebar}>
                            <h3 className={styles.tocTitle}>Table of Contents</h3>
                            <ul className={styles.tocList}>
                                <li><a href="#section-1" className={styles.tocLink}>1. Information We Collect</a></li>
                                <li><a href="#section-2" className={styles.tocLink}>2. Device Permissions</a></li>
                                <li><a href="#section-3" className={styles.tocLink}>3. How We Use Information</a></li>
                                <li><a href="#section-4" className={styles.tocLink}>4. Third-Party Services</a></li>
                                <li><a href="#section-5" className={styles.tocLink}>5. Data Security</a></li>
                                <li><a href="#section-6" className={styles.tocLink}>6. Retention &amp; Deletion</a></li>
                                <li><a href="#section-7" className={styles.tocLink}>7. Children's Privacy</a></li>
                                <li><a href="#section-8" className={styles.tocLink}>8. International Transfers</a></li>
                                <li><a href="#section-9" className={styles.tocLink}>9. Policy Changes</a></li>
                                <li><a href="#section-10" className={styles.tocLink}>10. Contact Us</a></li>
                            </ul>
                        </aside>

                        {/* Main Policy Document */}
                        <article className={styles.policyArticle}>
                            <div className={styles.introCallout}>
                                Welcome to <strong>MeNext</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). MeNext is a WhatsApp CRM, customer support, and sales automation platform operated by MeNext / Doonext. This Privacy Policy describes how we collect, use, process, and disclose your personal information when you use our mobile application (&ldquo;MeNext App&rdquo; or &ldquo;Application&rdquo;) and associated services.
                                <br /><br />
                                By installing, registering for, or using MeNext, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use the Application.
                            </div>

                            {/* Section 1 */}
                            <section id="section-1" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>1. Information We Collect</h2>

                                <h3 className={styles.subHeading}>A. Information You Provide to Us</h3>
                                <ul className={styles.bulletList}>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Account Information:</strong> When you register or log in, we collect your name, email address, phone number, and organization/business details.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Customer &amp; Contact Data:</strong> Contacts, phone numbers, customer names, tags, and custom attributes you import, create, or manage within the CRM.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Communications &amp; Messages:</strong> Content of messages, conversation notes, broadcast templates, and customer interactions sent or received via WhatsApp through the app.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Media Files:</strong> Images, documents, videos, and voice notes that you choose to capture, record, or upload to send to customers in chats.
                                        </span>
                                    </li>
                                </ul>

                                <h3 className={styles.subHeading}>B. Information Collected Automatically</h3>
                                <ul className={styles.bulletList}>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Device Information:</strong> Device model, operating system version, unique device identifiers, and network information.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Push Notification Tokens:</strong> Firebase Cloud Messaging (FCM) registration tokens used solely to deliver real-time push notifications to your device when new messages or leads arrive.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Log and Usage Data:</strong> Access logs, timestamps, error logs, and performance metrics to ensure stability and diagnose technical issues.
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section id="section-2" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>2. Device Permissions We Request</h2>
                                <p className={styles.paragraph}>
                                    The MeNext Application requests access to specific device capabilities only when necessary to perform its core CRM and messaging functions:
                                </p>

                                <div className={styles.tableContainer}>
                                    <table className={styles.permissionsTable}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "35%" }}>Permission</th>
                                                <th>Purpose &amp; Operational Usage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className={styles.permissionCode}>INTERNET</span>
                                                </td>
                                                <td>Required to communicate with our secure backend APIs, sync real-time chat data, and authenticate users.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className={styles.permissionCode}>POST_NOTIFICATIONS</span>
                                                </td>
                                                <td>Required on Android 13+ to send you push alerts when customers send new WhatsApp messages or when workflow tasks trigger.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className={styles.permissionCode}>CAMERA</span>
                                                </td>
                                                <td>Used exclusively when you choose to capture and send a photo directly within a customer conversation or update a profile image.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className={styles.permissionCode}>RECORD_AUDIO</span>
                                                </td>
                                                <td>Used only when you choose to record and send voice messages to customers within the chat interface.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className={styles.permissionCode}>READ_MEDIA_IMAGES / VIDEO / AUDIO</span>
                                                </td>
                                                <td>Used to allow you to select and attach existing photos, videos, and audio files from your gallery to customer conversations.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className={styles.paragraph}>
                                    You can grant or revoke these permissions at any time through your device&rsquo;s operating system settings. Revoking certain permissions may limit related features (such as attaching media or receiving push notifications).
                                </p>
                            </section>

                            {/* Section 3 */}
                            <section id="section-3" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>3. How We Use Your Information</h2>
                                <p className={styles.paragraph}>
                                    We use the collected information for the following legitimate business purposes:
                                </p>
                                <ul className={styles.bulletList}>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Core Service Delivery:</strong> To provide, operate, and maintain the WhatsApp CRM, shared team inbox, lead pipelines, and automation flows.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Real-Time Notifications:</strong> To deliver timely alerts for incoming customer inquiries and assignments via Firebase Cloud Messaging.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Customer Support:</strong> To diagnose technical bugs, resolve crashes, and assist you with support inquiries.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Account Security:</strong> To verify user credentials, maintain authenticated sessions, and prevent fraud or unauthorized access.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            <strong>Compliance:</strong> To comply with applicable laws, regulations, and Meta/WhatsApp Business Solution Terms.
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section id="section-4" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>4. Third-Party Services &amp; Data Sharing</h2>
                                <p className={styles.paragraph}>
                                    We do not sell, rent, or trade your personal data or your customer data to third parties. We share data only with trusted service providers essential to operating our Application under strict confidentiality obligations:
                                </p>

                                <div className={styles.thirdPartyGrid}>
                                    <div className={styles.thirdPartyCard}>
                                        <h4 className={styles.thirdPartyTitle}>Supabase</h4>
                                        <p className={styles.thirdPartyDesc}>
                                            Cloud database and authentication infrastructure used to securely store account credentials and CRM records under PostgreSQL Row-Level Security.
                                        </p>
                                    </div>
                                    <div className={styles.thirdPartyCard}>
                                        <h4 className={styles.thirdPartyTitle}>Google Firebase (FCM)</h4>
                                        <p className={styles.thirdPartyDesc}>
                                            Push notification gateway (HTTP v1) used solely to deliver real-time alerts to your mobile and desktop devices.
                                        </p>
                                    </div>
                                    <div className={styles.thirdPartyCard}>
                                        <h4 className={styles.thirdPartyTitle}>Meta Platforms (WhatsApp API)</h4>
                                        <p className={styles.thirdPartyDesc}>
                                            Official WhatsApp Business Cloud APIs used to send and receive WhatsApp messages on behalf of your connected business number.
                                        </p>
                                    </div>
                                </div>

                                <p className={styles.paragraph}>
                                    Each of these third parties processes data in accordance with their respective privacy policies and industry-standard security frameworks.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section id="section-5" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>5. Data Security</h2>
                                <p className={styles.paragraph}>
                                    We implement appropriate technical, administrative, and physical security measures to protect your data against unauthorized access, alteration, disclosure, or destruction:
                                </p>
                                <ul className={styles.bulletList}>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            All data transmitted between the Application, backend servers, and third-party APIs is encrypted using industry-standard <strong>TLS/HTTPS</strong> protocols.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            Authentication tokens and sensitive credentials (WhatsApp tokens, Meta secrets, payment keys, AI provider keys) are encrypted using <strong>AES-256-GCM</strong> symmetric encryption.
                                        </span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletDot} />
                                        <span>
                                            Access to production databases is strictly restricted to authorized personnel under zero-trust operational protocols.
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 6 */}
                            <section id="section-6" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>6. Data Retention and Account Deletion</h2>
                                <p className={styles.paragraph}>
                                    <strong>Retention:</strong> We retain your account and CRM data for as long as your account remains active or as needed to provide you with the services.
                                </p>

                                <div className={styles.deletionBox}>
                                    <h4 className={styles.deletionTitle}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        </svg>
                                        Account &amp; Data Deletion (Google Play Compliance)
                                    </h4>
                                    <p className={styles.deletionText}>
                                        In compliance with Google Play Developer policies, you have the right to request deletion of your account and all associated personal data at any time:
                                        <br />
                                        &bull; Navigate to <strong>Settings &gt; Account &gt; Delete Account</strong> within the app, or
                                        <br />
                                        &bull; Send an email to our data privacy team at <a href="mailto:privacy@doonext.com" style={{ color: "#92400e", fontWeight: 500 }}>privacy@doonext.com</a>.
                                        <br /><br />
                                        Upon receiving your verified request, we will permanently delete or anonymize your personal information within <strong>30 days</strong>, except where retention is required by law.
                                    </p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section id="section-7" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>7. Children&rsquo;s Privacy</h2>
                                <p className={styles.paragraph}>
                                    MeNext is an enterprise and business-to-business (B2B) CRM tool. It is not intended for use by children under the age of 13 (or under 16 in the European Economic Area). We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will delete it promptly.
                                </p>
                            </section>

                            {/* Section 8 */}
                            <section id="section-8" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>8. International Data Transfers</h2>
                                <p className={styles.paragraph}>
                                    Your information may be transferred to and maintained on servers located outside of your state, province, or country where data protection laws may differ. By using MeNext, you consent to the transfer of your data to facilities in which our cloud infrastructure operates.
                                </p>
                            </section>

                            {/* Section 9 */}
                            <section id="section-9" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>9. Changes to This Privacy Policy</h2>
                                <p className={styles.paragraph}>
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically for any updates. Continued use of the Application after changes constitute acceptance of the revised policy.
                                </p>
                            </section>

                            {/* Section 10 */}
                            <section id="section-10" className={styles.policySection}>
                                <h2 className={styles.sectionHeading}>10. Contact Us</h2>
                                <p className={styles.paragraph}>
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or your data privacy rights, please contact us:
                                </p>

                                <div className={styles.contactCard}>
                                    <ul className={styles.contactList}>
                                        <li>
                                            <strong>Company / Product:</strong> MeNext (Doonext)
                                        </li>
                                        <li>
                                            <strong>Email:</strong>{" "}
                                            <a href="mailto:support@doonext.com" className={styles.contactLink}>
                                                support@doonext.com
                                            </a>{" "}
                                            /{" "}
                                            <a href="mailto:privacy@doonext.com" className={styles.contactLink}>
                                                privacy@doonext.com
                                            </a>
                                        </li>
                                        <li>
                                            <strong>Website:</strong>{" "}
                                            <a href="https://doonext.com" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                                https://doonext.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Back and Action Buttons */}
                            <div className={styles.footerActions}>
                                <Link href="/menext" className={styles.primaryBtn}>
                                    &larr; Back to MeNext Overview
                                </Link>
                                <Link href="/contact" className={styles.secondaryBtn}>
                                    Contact Support Team
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

