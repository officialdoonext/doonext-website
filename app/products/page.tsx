"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

interface ProductFeature {
    title: string;
    desc: string;
}

interface ProductItem {
    id: string;
    name: string;
    categoryBadge: string;
    idealForBadge: string;
    tagline: string;
    description: string;
    imageUrl: string;
    features: ProductFeature[];
    specs: string[];
    exploreHref: string;
    demoHref: string;
    tryHref: string;
    categoryGroup: "all" | "pos" | "pharmacy" | "crm" | "retail" | "whatsapp";
}

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const products: ProductItem[] = [
        {
            id: "retailnext",
            name: "RetailNext",
            categoryBadge: "RETAIL POS & ENTERPRISE ERP",
            idealForBadge: "Supermarkets & Retail Chains",
            tagline: "High-velocity retail POS with 100% dynamic PostgreSQL, inter-store transfers, and exchange vouchers.",
            description:
                "Engineered for high-volume supermarkets, apparel stores, and multi-branch retail networks. Features instant barcode auto-add billing, standardized 24-item pagination, automated exchange credit deduction banners, central warehouse bin picking, and a camera QR attendance kiosk.",
            imageUrl: "/retail.png",
            features: [
                {
                    title: "High-Velocity POS Billing",
                    desc: "Fast barcode input with auto-add on Enter, hold-and-recall carts, and split payments (Cash+UPI+Card)."
                },
                {
                    title: "Auto Exchange Credit Banner",
                    desc: "Detects active customer exchange vouchers (EXC-...) and deducts balances in 1 click at checkout."
                },
                {
                    title: "100% Dynamic PostgreSQL",
                    desc: "Zero mock data; Supabase REST APIs and standard 24-record pagination across all ledgers."
                },
                {
                    title: "Inter-Store STO Transfers",
                    desc: "Transfer merchandise between branches and warehouses with real-time transit and receiving states."
                },
                {
                    title: "Camera QR Attendance Kiosk",
                    desc: "Dedicated attendance scan terminal (/attendance-scan) with instant camera clock-in and 1-click payroll."
                },
                {
                    title: "Barcode Label Studio & GST",
                    desc: "Design stickers for thermal rolls (58/80mm) or A4 sheets, paired with automated GSTR-1 tax filings."
                }
            ],
            specs: [
                "100% Dynamic PostgreSQL",
                "24-Item Pagination",
                "Auto Exchange Credit",
                "QR Attendance Kiosk",
                "Inter-Store STOs",
                "GSTR-1 Tax Slabs"
            ],
            exploreHref: "/retailnext",
            demoHref: "/contact?type=demo&product=retailnext",
            tryHref: "/contact?type=trial&product=retailnext",
            categoryGroup: "retail"
        },
        {
            id: "menext",
            name: "MeNext",
            categoryBadge: "OFFICIAL WHATSAPP CRM & AUTOMATION",
            idealForBadge: "Multi-Agent Support & Sales Desks",
            tagline: "Multi-agent shared team inbox, visual automations, AI reply bot, and native mobile CRM.",
            description:
                "Connects directly with the official Meta WhatsApp Business Cloud API (Graph API v21.0+). Multiple agents collaborate on the same business number simultaneously without collisions, launch queue-backed broadcast campaigns, and automate customer responses using BYOK AI models with pgvector knowledge retrieval.",
            imageUrl: "/menext.png",
            features: [
                {
                    title: "Shared Team WhatsApp Inbox",
                    desc: "Multi-agent chat collaboration with smart views (All, Mine, Unassigned, Closed) and typing presence."
                },
                {
                    title: "Native Opus Voice Notes",
                    desc: "In-browser WebAssembly Opus voice recorder and permanent Supabase media mirroring."
                },
                {
                    title: "Kanban Sales Pipelines",
                    desc: "Create and progress sales deals straight from active WhatsApp customer conversation threads."
                },
                {
                    title: "Queue-Backed Broadcasts",
                    desc: "4-step campaign builder with PostgreSQL rate-limiting queues protecting your Meta number quality tier."
                },
                {
                    title: "Visual No-Code Automations",
                    desc: "Event triggers, If/Else branching, and official Meta Flows multi-screen interactive forms."
                },
                {
                    title: "BYOK AI Copilot & Bot",
                    desc: "Encrypted AES-256-GCM keys for Claude, GPT-4o, or Gemini with hybrid pgvector RAG and human handoff."
                }
            ],
            specs: [
                "Official Meta Cloud API",
                "Multi-Agent Shared Inbox",
                "Native Opus Voice",
                "BYOK pgvector RAG",
                "FCM Push Alerts",
                "AES-256 Encryption"
            ],
            exploreHref: "/menext",
            demoHref: "/contact?type=demo&product=menext",
            tryHref: "/contact?type=trial&product=menext",
            categoryGroup: "whatsapp"
        },
        {
            id: "grownext",
            name: "GrowNext",
            categoryBadge: "ENTERPRISE CRM & BUSINESS OPERATIONS",
            idealForBadge: "B2B Sales Teams & Consultancies",
            tagline: "Capture leads, manage visual Kanban sales funnels, generate quotes, and model custom workflows.",
            description:
                "All-in-one operational CRM built for high-performing sales organizations. Captures leads from multiple channels, automates rep round-robin assignments, tracks weighted deal velocity, builds e-signed digital estimates, and provides 100% customizable database objects tailored to your business model.",
            imageUrl: "/grownext_crm.jpg",
            features: [
                {
                    title: "Multi-Channel Lead Ingestion",
                    desc: "Capture leads from web forms, WhatsApp, and marketing campaigns with automated rep routing."
                },
                {
                    title: "Kanban Sales Pipelines",
                    desc: "Interactive drag-and-drop deal stages with probability weighting and quarterly revenue forecasting."
                },
                {
                    title: "Custom Objects Engine",
                    desc: "100% adaptable database schemas to model projects, property units, vehicle fleets, or contracts."
                },
                {
                    title: "Quotations to Fast Invoicing",
                    desc: "Branded PDF estimates with online client e-signatures, converting to tax invoices in 1 click."
                },
                {
                    title: "2-Way WhatsApp Cloud Sync",
                    desc: "Trigger official WhatsApp business templates, chat directly from lead cards, and log all history."
                },
                {
                    title: "Executive Revenue Forecasting",
                    desc: "Monitor individual sales rep contributions, deal velocity bottlenecks, and customer lifetime value."
                }
            ],
            specs: [
                "Custom Database Objects",
                "Drag-and-Drop Kanban",
                "E-Sign Digital Quotes",
                "Official WhatsApp API",
                "Weighted Forecasting",
                "Granular Staff RBAC"
            ],
            exploreHref: "/grownext",
            demoHref: "/contact?type=demo&product=grownext",
            tryHref: "/contact?type=trial&product=grownext",
            categoryGroup: "crm"
        },
        {
            id: "billnext",
            name: "BillNext",
            categoryBadge: "POS & BILLING SOFTWARE FOR FOOD BIZ",
            idealForBadge: "Cafes, Restaurants & Bakeries",
            tagline: "Fast, reliable POS and restaurant billing with kitchen printing and recipe inventory.",
            description:
                "Purpose-built POS system for cafes, restaurants, bakeries, hotels, QSR outlets, chicken shops, and cloud kitchens. Delivers rapid 3-second billing, multi-station kitchen order tickets (KOT), floor table management, recipe consumption tracking, and offline billing continuity.",
            imageUrl: "/cafe.png",
            features: [
                {
                    title: "Lightning 3-Second Checkout",
                    desc: "High-speed billing with visual touch tiles, barcode scanning, and instant thermal receipt printing."
                },
                {
                    title: "Multi-Station KOT & KDS",
                    desc: "Send kitchen order tickets (KOT) directly to kitchen thermal printers or kitchen display screens."
                },
                {
                    title: "Dine-In Table Management",
                    desc: "Visual restaurant floor layout, table transfer, split bills, and room service counter management."
                },
                {
                    title: "Recipe-Level Raw Inventory",
                    desc: "Automatically deducts raw ingredients (flour, dairy, meat, spices) upon billing finished menu items."
                },
                {
                    title: "Daily Day-End Cash Balancing",
                    desc: "Counter drawer float reconciliation with detailed X-Report and Z-Report closing summaries."
                },
                {
                    title: "Offline Billing Continuity",
                    desc: "Keep billing customers without internet interruptions; sales auto-sync to cloud when online."
                }
            ],
            specs: [
                "< 3s Billing Speed",
                "Multi-Station KOT",
                "Dine-in Floor Plans",
                "Recipe Inventory",
                "Shift X/Z Audits",
                "Offline Mode"
            ],
            exploreHref: "/billnext",
            demoHref: "/contact?type=demo&product=billnext",
            tryHref: "/contact?type=trial&product=billnext",
            categoryGroup: "pos"
        },
        {
            id: "pharmanext",
            name: "PharmaNext",
            categoryBadge: "PHARMACY & HEALTHCARE RETAIL SOFTWARE",
            idealForBadge: "Chemists & Medical Outlets",
            tagline: "Complete medical store management with batch tracking, expiry quarantine, and GST compliance.",
            description:
                "Comprehensive software tailored specifically for retail pharmacies, medical stores, and pharmaceutical distributors. Features fractional strip and tablet cutting, automatic batch expiry quarantine, Drug Schedule H/H1 registers, generic salt substitute matching, and patient prescription histories.",
            imageUrl: "/pharmacy.png",
            features: [
                {
                    title: "Strip & Tablet Fraction Cutting",
                    desc: "Sell whole strips, loose tablets, or bottles with automated fractional pricing and stock math."
                },
                {
                    title: "Batch & Expiry Quarantine",
                    desc: "FIFO automated stock rotation and proactive alerts quarantining near-expiry medicines."
                },
                {
                    title: "Drug Schedule H & H1 Registers",
                    desc: "Statutory regulatory compliance registers logging prescribing doctors and patient identities."
                },
                {
                    title: "Salt & Substitute Finder",
                    desc: "Instant search by chemical salt composition to recommend generic alternatives during shortages."
                },
                {
                    title: "Supplier GRN & GSTR-2B Sync",
                    desc: "Import pharmaceutical distributor invoices with batch numbers and match GST Input Tax Credit."
                },
                {
                    title: "Prescription Patient History",
                    desc: "Maintain chronic patient medical profiles with automated refill reminders via WhatsApp and SMS."
                }
            ],
            specs: [
                "Fraction Strip Cutting",
                "Batch & Expiry Guard",
                "Schedule H/H1 Logs",
                "Salt Substitute Match",
                "GSTR-2B ITC Matching",
                "Chronic Refill Alerts"
            ],
            exploreHref: "/pharmanext",
            demoHref: "/contact?type=demo&product=pharmanext",
            tryHref: "/contact?type=trial&product=pharmanext",
            categoryGroup: "pharmacy"
        }
    ];

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((p) => p.categoryGroup === selectedCategory);

    const faqs = [
        {
            q: "How do I choose the right Doonext software for my business?",
            a: "If you operate a retail store, supermarket, or fashion brand with multi-store inventory and POS exchange vouchers, RetailNext is built for you. For cafes, restaurants, and cloud kitchens, choose BillNext. For medical and pharmacy shops, PharmaNext provides strict drug expiry and batch compliance. For B2B sales pipelines, quotations, and custom workflows, select GrowNext. For official WhatsApp multi-agent customer support and automation, MeNext is your platform."
        },
        {
            q: "Can I try these products before making a purchase?",
            a: "Yes! Every Doonext product comes with both a 'Book Free Demo' option (where a solution specialist provides an interactive walkthrough tailored to your operations) and a 'Try It Now' free trial option to test counter billing, inventory, and workflows directly."
        },
        {
            q: "Are Doonext products compatible with standard thermal printers and barcode scanners?",
            a: "Absolutely. All Doonext POS solutions (RetailNext, BillNext, PharmaNext) integrate natively with standard USB, Ethernet, and Bluetooth thermal printers (both 58mm and 80mm rolls), barcode/QR scanners (handheld and omnidirectional), weighing scales, and cash drawer kick pulses."
        },
        {
            q: "Can multiple products work together in a single organization?",
            a: "Yes. Many of our clients deploy combinations such as RetailNext (for front-desk POS and inventory) alongside MeNext (for automated WhatsApp order notifications, customer support, and marketing broadcasts), creating a unified retail and CRM ecosystem."
        },
        {
            q: "Is our business data secure and backed up?",
            a: "100%. All Doonext software operates on enterprise PostgreSQL cloud infrastructure with automated daily snapshots, TLS/HTTPS transmission, and AES-256 encryption for sensitive credentials and API keys."
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            {/* 1. HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>DOONEXT SOFTWARE PLATFORMS</span>
                        <h1 className={styles.title}>
                            Software Solutions Designed for <br />
                            <span className={styles.highlightText}>Speed, Control &amp; Scale</span>
                        </h1>
                        <p className={styles.description}>
                            Explore our comprehensive suite of point-of-sale, inventory, enterprise CRM,
                            pharmacy, and WhatsApp automation platforms engineered to streamline your daily operations.
                        </p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>5+</span>
                                <span className={styles.statLabel}>Specialized Platforms</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>&lt; 3s</span>
                                <span className={styles.statLabel}>POS Billing Speed</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>100%</span>
                                <span className={styles.statLabel}>Cloud Synchronized</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>24/7</span>
                                <span className={styles.statLabel}>Support &amp; Onboarding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CATEGORY FILTER PILLS */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterRow}>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("all")}
                            className={`${styles.filterBtn} ${selectedCategory === "all" ? styles.filterBtnActive : ""}`}
                        >
                            <span>All Products ({products.length})</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("retail")}
                            className={`${styles.filterBtn} ${selectedCategory === "retail" ? styles.filterBtnActive : ""}`}
                        >
                            <span>Retail &amp; Supermarkets</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("whatsapp")}
                            className={`${styles.filterBtn} ${selectedCategory === "whatsapp" ? styles.filterBtnActive : ""}`}
                        >
                            <span>WhatsApp CRM</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("crm")}
                            className={`${styles.filterBtn} ${selectedCategory === "crm" ? styles.filterBtnActive : ""}`}
                        >
                            <span>Sales CRM &amp; Ops</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("pos")}
                            className={`${styles.filterBtn} ${selectedCategory === "pos" ? styles.filterBtnActive : ""}`}
                        >
                            <span>Restaurants &amp; Cafes</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory("pharmacy")}
                            className={`${styles.filterBtn} ${selectedCategory === "pharmacy" ? styles.filterBtnActive : ""}`}
                        >
                            <span>Pharmacies</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. PRODUCTS LISTING STACK */}
            <section className={styles.productsStackSection}>
                <div className={styles.container}>
                    <div className={styles.productsList}>
                        {filteredProducts.map((product, index) => {
                            const isReversed = index % 2 === 1;
                            return (
                                <article
                                    key={product.id}
                                    id={product.id}
                                    className={`${styles.productCard} ${isReversed ? styles.productCardReverse : ""}`}
                                >
                                    {/* Left Column: Product Information & 3 Action Buttons */}
                                    <div className={styles.productInfo}>
                                        <div className={styles.productBadgeRow}>
                                            <span className={styles.productCategoryBadge}>
                                                {product.categoryBadge}
                                            </span>
                                            <span className={styles.productIdealForBadge}>
                                                {product.idealForBadge}
                                            </span>
                                        </div>

                                        <h2 className={styles.productTitle}>{product.name}</h2>
                                        <p className={styles.productTagline}>{product.tagline}</p>

                                        {/* Brief Features Grid */}
                                        <div className={styles.featuresGrid}>
                                            {product.features.map((feature, fIdx) => (
                                                <div key={fIdx} className={styles.featureItem}>
                                                    <div className={styles.featureCheckIcon}>
                                                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                                                            <path
                                                                d="M13.3 4.3L6.5 11.1L2.7 7.3"
                                                                stroke="currentColor"
                                                                strokeWidth="2.4"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <strong>{feature.title}:</strong> {feature.desc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Key Capabilities Pills */}
                                        <div className={styles.specsBar}>
                                            {product.specs.map((spec, sIdx) => (
                                                <span key={sIdx} className={styles.specPill}>
                                                    <span>&bull;</span>
                                                    <span>{spec}</span>
                                                </span>
                                            ))}
                                        </div>

                                        {/* 3 Action Buttons: Explore More, Book Free Demo, Try It Now */}
                                        <div className={styles.actionsRow}>
                                            {/* Button 1: Explore More */}
                                            <Link href={product.exploreHref} className={styles.btnExplore}>
                                                <span>Explore More</span>
                                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M3 8h10M9 4l4 4-4 4"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Link>

                                            {/* Button 2: Book Free Demo */}
                                            <Link href={product.demoHref} className={styles.btnDemo}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                    <line x1="16" y1="2" x2="16" y2="6" />
                                                    <line x1="8" y1="2" x2="8" y2="6" />
                                                    <line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                                <span>Book Free Demo</span>
                                            </Link>

                                            {/* Button 3: Try It Now */}
                                            <Link href={product.tryHref} className={styles.btnTry}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                                <span>Try It Now</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Column: Visual Product Display */}
                                    <div className={styles.productVisualCard}>
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} Interface Display`}
                                            width={540}
                                            height={340}
                                            className={styles.productImage}
                                        />
                                        <div className={styles.visualBadgeOverlay}>
                                            <span className={styles.onlineDot} />
                                            <span>Active Cloud Platform &bull; {product.name}</span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. PRODUCT COMPARISON MATRIX */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>PLATFORM MATRIX</span>
                        <h2 className={styles.sectionTitle}>Compare Doonext Solutions</h2>
                        <p className={styles.sectionSubtitle}>
                            A high-level comparison of operational features across all Doonext business platforms.
                        </p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.matrixTable}>
                            <thead>
                                <tr>
                                    <th>Platform</th>
                                    <th>Primary Focus</th>
                                    <th>Core Operational Strength</th>
                                    <th>Deployment</th>
                                    <th>Quick Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.productNameCol}>
                                            <strong>RetailNext</strong>
                                        </div>
                                    </td>
                                    <td>Retail ERP &amp; Supermarkets</td>
                                    <td>100% Dynamic DB, Auto Exchange Credit, 24-item pagination</td>
                                    <td>
                                        <span className={styles.checkPill}>
                                            <span>✓</span> Cloud &amp; Multi-Branch
                                        </span>
                                    </td>
                                    <td>
                                        <Link href="/retailnext" style={{ color: "#5e2b9d", fontWeight: 500, fontSize: "0.84rem" }}>
                                            View Details &rarr;
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.productNameCol}>
                                            <strong>MeNext</strong>
                                        </div>
                                    </td>
                                    <td>WhatsApp CRM &amp; Support</td>
                                    <td>Official Meta Cloud API, Team Shared Inbox, BYOK AI RAG</td>
                                    <td>
                                        <span className={styles.checkPill}>
                                            <span>✓</span> Cloud &amp; Mobile FCM
                                        </span>
                                    </td>
                                    <td>
                                        <Link href="/menext" style={{ color: "#5e2b9d", fontWeight: 500, fontSize: "0.84rem" }}>
                                            View Details &rarr;
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.productNameCol}>
                                            <strong>GrowNext</strong>
                                        </div>
                                    </td>
                                    <td>Sales CRM &amp; Custom Ops</td>
                                    <td>Kanban Pipelines, Custom Objects, Digital E-Sign Quotes</td>
                                    <td>
                                        <span className={styles.checkPill}>
                                            <span>✓</span> Cloud Web Suite
                                        </span>
                                    </td>
                                    <td>
                                        <Link href="/grownext" style={{ color: "#5e2b9d", fontWeight: 500, fontSize: "0.84rem" }}>
                                            View Details &rarr;
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.productNameCol}>
                                            <strong>BillNext</strong>
                                        </div>
                                    </td>
                                    <td>Restaurants, Cafes &amp; QSR</td>
                                    <td>3-sec POS checkout, KOT Printing, Floor Tables, Recipe Stock</td>
                                    <td>
                                        <span className={styles.checkPill}>
                                            <span>✓</span> Cloud + Offline Mode
                                        </span>
                                    </td>
                                    <td>
                                        <Link href="/billnext" style={{ color: "#5e2b9d", fontWeight: 500, fontSize: "0.84rem" }}>
                                            View Details &rarr;
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.productNameCol}>
                                            <strong>PharmaNext</strong>
                                        </div>
                                    </td>
                                    <td>Pharmacies &amp; Chemists</td>
                                    <td>Batch &amp; Expiry Quarantine, Schedule H/H1, Salt Substitutes</td>
                                    <td>
                                        <span className={styles.checkPill}>
                                            <span>✓</span> Cloud POS &amp; Ledger
                                        </span>
                                    </td>
                                    <td>
                                        <Link href="/pharmanext" style={{ color: "#5e2b9d", fontWeight: 500, fontSize: "0.84rem" }}>
                                            View Details &rarr;
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. FREQUENTLY ASKED QUESTIONS */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className={styles.sectionTitle}>Everything You Need to Know</h2>
                        <p className={styles.sectionSubtitle}>
                            Questions regarding onboarding, hardware setups, demos, and trials.
                        </p>
                    </div>

                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div key={index} className={styles.faqItem}>
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className={styles.faqTrigger}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.q}</span>
                                        <svg
                                            className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. BOTTOM CTA BANNER */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <span className={styles.bannerBadge}>ACCELERATE YOUR BUSINESS</span>
                        <h2 className={styles.bannerHeading}>Ready to Transform Your Operations?</h2>
                        <p className={styles.bannerDesc}>
                            Get in touch with our solutions specialists to see how Doonext can simplify billing,
                            automate customer interactions, and scale your organization.
                        </p>
                        <div className={styles.bannerButtons}>
                            <Link href="/contact" className={styles.bannerBtnPrimary}>
                                Schedule Free Consultation
                            </Link>
                            <Link href="/contact?type=trial" className={styles.bannerBtnOutline}>
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

