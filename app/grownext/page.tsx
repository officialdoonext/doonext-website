"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./grownext.module.css";

interface SubFeature {
    name: string;
    code: string;
    description: string;
    highlights: string[];
    operationalPill: string;
}

interface ModuleTheme {
    accent: string;
    lightBg: string;
    border: string;
    badgeBg: string;
}

interface GrowNextModule {
    id: string;
    title: string;
    shortTitle: string;
    tagline: string;
    theme: ModuleTheme;
    capabilities: string[];
    icon: React.ReactNode;
    features: SubFeature[];
}

export default function GrowNextPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const modulesData: GrowNextModule[] = [
        {
            id: "dashboard",
            title: "Executive Dashboard",
            shortTitle: "Dashboard",
            tagline: "Real-time visibility into deal velocity, sales rep performance, and revenue forecasts.",
            theme: {
                accent: "#5e2b9d",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["Pipeline Forecasting", "Conversion Funnels", "Rep Leaderboards", "Revenue Velocity"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                </svg>
            ),
            features: [
                {
                    name: "Pipeline Intelligence",
                    code: "DASH-01",
                    description: "Live visual mapping of your sales funnel. Track active deals, deal values per stage, win probabilities, and weighted quarterly revenue projections.",
                    highlights: [
                        "Real-time deal volume and pipeline valuation",
                        "Weighted win-rate probability calculations",
                        "Stage-by-stage velocity & bottlenecks analysis",
                        "Custom date range and departmental filters"
                    ],
                    operationalPill: "📊 Real-Time Forecasting",
                },
                {
                    name: "Team Leaderboards",
                    code: "DASH-02",
                    description: "Monitor individual sales rep contributions, quota achievements, outbound call activities, and scheduled demo volumes in real time.",
                    highlights: [
                        "Rep target vs achievement gauges",
                        "Activity scorecards (calls, emails, meetings)",
                        "Deal conversion velocity benchmarks",
                        "Gamified leaderboards to inspire sales reps"
                    ],
                    operationalPill: "🏆 Rep Quota Tracking",
                },
                {
                    name: "Activity Stream & Alerts",
                    code: "DASH-03",
                    description: "Chronological operational feed of client interactions, quote approvals, payment arrivals, and urgent follow-up deadlines.",
                    highlights: [
                        "Instant alerts for stale or at-risk deals",
                        "Live notification of client quote opens",
                        "Integrated calendar for day-to-day agendas",
                        "One-click action buttons from alert feeds"
                    ],
                    operationalPill: "⚡ Live Event Feed",
                }
            ]
        },
        {
            id: "leads",
            title: "Leads Management",
            shortTitle: "Leads",
            tagline: "Capture, qualify, nurture, and convert inquiries into loyal high-value customers.",
            theme: {
                accent: "#7c3aed",
                lightBg: "#f5f3ff",
                border: "#ddd6fe",
                badgeBg: "#ede9fe",
            },
            capabilities: ["Multi-Channel Capture", "Kanban Drag-&-Drop", "Automated Routing", "Activity Timelines"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            features: [
                {
                    name: "Multi-Source Lead Capture",
                    code: "LEAD-01",
                    description: "Automatically pull inquiries from website landing pages, WhatsApp chats, Facebook/Google ads, email inboxes, and incoming phone calls into one inbox.",
                    highlights: [
                        "Zero lead leakage with instant API ingestion",
                        "Automated UTM tracking and marketing source tagging",
                        "Duplicate detection and lead merge capabilities",
                        "Instant WhatsApp auto-responder welcoming leads"
                    ],
                    operationalPill: "📥 Zero-Leak Ingestion",
                },
                {
                    name: "Interactive Kanban Pipeline",
                    code: "LEAD-02",
                    description: "Visual deal board where sales executives drag and drop leads through tailored stages: New, Qualified, Proposal, Negotiation, and Closed-Won.",
                    highlights: [
                        "Configurable pipeline stages per business unit",
                        "Drag-and-drop status transitions with validation gates",
                        "Quick deal preview cards with primary contacts & values",
                        "Colored status indicators for urgent follow-up dates"
                    ],
                    operationalPill: "🗂️ Drag-and-Drop Stages",
                },
                {
                    name: "Smart Routing & Scoring",
                    code: "LEAD-03",
                    description: "Automatically evaluate lead intent, budget, and readiness. Distribute leads to the right sales reps via round-robin or territory rules.",
                    highlights: [
                        "Behavioral lead scoring based on interactions",
                        "Automated round-robin distribution to available reps",
                        "SLA tracking ensuring responses within 5 minutes",
                        "Escalation alerts if leads remain untouched"
                    ],
                    operationalPill: "🎯 Automated Routing",
                },
                {
                    name: "Complete Activity History",
                    code: "LEAD-04",
                    description: "Chronological dossier recording every call recording, WhatsApp exchange, email conversation, internal note, and task for full context.",
                    highlights: [
                        "Unified communication timeline for every lead",
                        "Call logs and audio recording attachments",
                        "Shared internal team notes with @mentions",
                        "One-click schedule call or video meeting"
                    ],
                    operationalPill: "📜 360° Interaction Logs",
                }
            ]
        },
        {
            id: "quotations",
            title: "Quotations & Proposals",
            shortTitle: "Quotations",
            tagline: "Generate branded estimates, capture client e-signatures, and convert deals seamlessly.",
            theme: {
                accent: "#059669",
                lightBg: "#f0fdf4",
                border: "#bbf7d0",
                badgeBg: "#dcfce7",
            },
            capabilities: ["Custom PDF Builder", "Digital E-Signatures", "Multi-Currency & Tax", "1-Click Invoice Sync"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            features: [
                {
                    name: "Dynamic Quote Builder",
                    code: "QUOT-01",
                    description: "Create sleek, professional PDF estimates in seconds with product catalog item auto-fill, volume discounts, custom payment milestones, and terms.",
                    highlights: [
                        "Pre-saved item catalog and tiered pricing lookup",
                        "Automated GST, VAT, and international tax rules",
                        "Multi-currency support for cross-border clients",
                        "Custom brand headers, watermarks, and footers"
                    ],
                    operationalPill: "⚡ Instant Quote Builder",
                },
                {
                    name: "Online Approval & E-Sign",
                    code: "QUOT-02",
                    description: "Share live interactive quotation links via WhatsApp or email where clients can review line items, select optional add-ons, and digitally sign.",
                    highlights: [
                        "Real-time notification when client opens quote",
                        "Interactive client toggle for optional add-on services",
                        "Legal digital e-signature timestamping",
                        "Automated expiry reminder follow-ups"
                    ],
                    operationalPill: "✍️ Client E-Sign Links",
                },
                {
                    name: "1-Click Invoice Transition",
                    code: "QUOT-03",
                    description: "Eliminate manual double-entry. Instantly convert accepted proposals into tax invoices or project operational orders with a single click.",
                    highlights: [
                        "Direct data sync into billing and accounts",
                        "Partial milestone invoice generation options",
                        "Automated notification to accounts & fulfillment teams",
                        "Audit record linking quotation to resulting invoice"
                    ],
                    operationalPill: "🔄 Seamless Bill Sync",
                }
            ]
        },
        {
            id: "customers",
            title: "Customer Directory",
            shortTitle: "Customers",
            tagline: "360-degree account management, client lifetime value, and relationship retention.",
            theme: {
                accent: "#0284c7",
                lightBg: "#f0f9ff",
                border: "#bae6fd",
                badgeBg: "#e0f2fe",
            },
            capabilities: ["Account Hierarchies", "Lifetime Value (CLV)", "Smart Segmentation", "Contract History"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            features: [
                {
                    name: "360° Customer Dossier",
                    code: "CUST-01",
                    description: "Centralized account records grouping key company details, decision-makers, contract terms, active tickets, and historical transactions.",
                    highlights: [
                        "Parent company and subsidiary account mapping",
                        "Multi-contact directory with designation & phone",
                        "Complete financial ledger and payment status overview",
                        "Custom customer attributes matching your operations"
                    ],
                    operationalPill: "🏢 Enterprise Account Views",
                },
                {
                    name: "CLV & Health Scoring",
                    code: "CUST-02",
                    description: "Monitor customer health, engagement frequency, and total lifetime revenue yield to spot upsell opportunities and prevent churn.",
                    highlights: [
                        "Real-time Customer Lifetime Value (CLV) calculation",
                        "Engagement score tracking based on usage & check-ins",
                        "Churn alert triggers for inactive client accounts",
                        "Automated anniversary and contract renewal reminders"
                    ],
                    operationalPill: "📈 Health & CLV Metrics",
                },
                {
                    name: "Smart Segment Lists",
                    code: "CUST-03",
                    description: "Filter and segment your customer base by industry vertical, spending tier, contract size, or location for targeted re-engagement campaigns.",
                    highlights: [
                        "Dynamic filtering by multiple criteria simultaneously",
                        "Export customer cohorts to Excel/CSV in one click",
                        "Broadcast targeted WhatsApp updates to specific tiers",
                        "Tagging system for VIP, Standard, and Enterprise tiers"
                    ],
                    operationalPill: "🎯 Precision Segments",
                }
            ]
        },
        {
            id: "invoices",
            title: "Invoices & Payments",
            shortTitle: "Invoices",
            tagline: "Accelerate cash flow with automated milestone invoices, payment links, and dunning.",
            theme: {
                accent: "#d97706",
                lightBg: "#fffbeb",
                border: "#fde68a",
                badgeBg: "#fef3c7",
            },
            capabilities: ["Milestone Invoicing", "UPI & Gateway Links", "Automated Dunning", "Aging Reports"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
            ),
            features: [
                {
                    name: "Smart Invoicing Engine",
                    code: "INV-01",
                    description: "Generate compliant GST and international tax invoices for one-time orders, milestone deliverables, or recurring monthly retainer contracts.",
                    highlights: [
                        "Automated recurring subscription invoice generation",
                        "Proforma invoices with seamless tax bill conversion",
                        "HSN/SAC code mapping and input tax breakdown",
                        "Itemized discount and reimbursement expense logging"
                    ],
                    operationalPill: "🧾 Automated Tax Invoicing",
                },
                {
                    name: "Integrated Payment Links",
                    code: "INV-02",
                    description: "Collect payments faster by embedding dynamic UPI QR codes and payment gateway links (Razorpay, Stripe, NetBanking, Credit Cards) directly on invoices.",
                    highlights: [
                        "Direct QR code on PDF bills for instant UPI scan",
                        "Automated status reconciliation upon payment confirmation",
                        "Support for partial payments and advances",
                        "Instant automated digital receipts issued to clients"
                    ],
                    operationalPill: "💳 Instant UPI & Cards",
                },
                {
                    name: "Automated Dunning & Dues",
                    code: "INV-03",
                    description: "Eliminate awkward manual collections. Automate polite payment reminders via WhatsApp, SMS, and email before and after invoice due dates.",
                    highlights: [
                        "Configurable reminder intervals (3 days before, on due date, 7 days overdue)",
                        "Accounts receivable aging schedule (0-30, 31-60, 60+ days)",
                        "Customer statement of accounts generation with 1-click export",
                        "Escalation alerts for persistent overdue accounts"
                    ],
                    operationalPill: "🔔 Automated Collections",
                }
            ]
        },
        {
            id: "staff",
            title: "Staff & Team Hierarchy",
            shortTitle: "Staff",
            tagline: "Empower your sales force with role-based permissions, quota targets, and performance logs.",
            theme: {
                accent: "#4f46e5",
                lightBg: "#eef2ff",
                border: "#c7d2fe",
                badgeBg: "#e0e7ff",
            },
            capabilities: ["RBAC Permissions", "Sales Quota Setting", "Activity Scorecards", "Audit Logs"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            features: [
                {
                    name: "Role-Based Access Control",
                    code: "STF-01",
                    description: "Configure granular user roles (Admin, Sales Manager, Account Executive, Support Agent). Safeguard client data by limiting visibility by territory or team.",
                    highlights: [
                        "Branch and territory data isolation rules",
                        "Prohibit unauthorized export of customer lists",
                        "Manager override permissions for special discounts",
                        "Multi-level approval workflows for high-value quotes"
                    ],
                    operationalPill: "🔒 Strict Enterprise RBAC",
                },
                {
                    name: "Quota & Incentive Engine",
                    code: "STF-02",
                    description: "Set monthly and quarterly sales revenue quotas. Track targets vs achievements and compute rep commissions automatically without spreadsheets.",
                    highlights: [
                        "Custom quota targets per team member",
                        "Tiered commission calculations on closed revenue",
                        "Real-time rep target pacing forecasts",
                        "Transparent achievement reports accessible to reps"
                    ],
                    operationalPill: "💰 Commission Tracking",
                },
                {
                    name: "Comprehensive Audit Logs",
                    code: "STF-03",
                    description: "Maintain a complete tamper-proof log of every action taken within the system: deal status changes, deleted records, discount approvals, and logins.",
                    highlights: [
                        "Timestamped user action tracking",
                        "IP address and device session logs",
                        "Restore accidentally deleted records easily",
                        "Regulatory compliance security standards"
                    ],
                    operationalPill: "🛡️ Tamper-Proof Logs",
                }
            ]
        },
        {
            id: "integrations",
            title: "Integrations & API",
            shortTitle: "Integrations",
            tagline: "Connect GrowNext with WhatsApp, Google Calendar, accounting systems, and custom webhooks.",
            theme: {
                accent: "#c026d3",
                lightBg: "#fdf4ff",
                border: "#f5d0fe",
                badgeBg: "#fae8ff",
            },
            capabilities: ["WhatsApp Cloud API", "Google & Outlook 2-Way", "Payment Gateways", "REST Webhooks"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
            ),
            features: [
                {
                    name: "WhatsApp Cloud API",
                    code: "INT-01",
                    description: "Direct official WhatsApp Business integration. Trigger automated notifications, send proposals, schedule reminders, and chat directly from lead cards.",
                    highlights: [
                        "Official Meta WhatsApp Business Cloud API sync",
                        "Approved business message templates for quotes & bills",
                        "Live 2-way inbox for reps inside the CRM",
                        "Chatbot workflows routing queries to reps"
                    ],
                    operationalPill: "💬 Official WhatsApp API",
                },
                {
                    name: "Calendar & Email Sync",
                    code: "INT-02",
                    description: "Seamless 2-way synchronization with Google Workspace and Microsoft 365. Keep sales appointments, Zoom links, and email threads organized.",
                    highlights: [
                        "2-way Google Calendar & Outlook calendar sync",
                        "Automated Zoom / Google Meet link generation",
                        "Inbound and outbound email synchronization",
                        "Shared team availability booking links"
                    ],
                    operationalPill: "📅 2-Way Calendar Sync",
                },
                {
                    name: "Webhooks & REST API",
                    code: "INT-03",
                    description: "Robust REST API endpoints and real-time webhook events to connect GrowNext with your internal ERP, Tally, Zapier, or custom applications.",
                    highlights: [
                        "Secure token-authenticated RESTful API",
                        "Instant webhook triggers on deal won, invoice paid, etc.",
                        "Seamless integration with accounting platforms",
                        "Detailed interactive developer documentation"
                    ],
                    operationalPill: "⚡ Open Developer API",
                }
            ]
        },
        {
            id: "custom-objects",
            title: "Custom Objects & Operations",
            shortTitle: "Custom Objects",
            tagline: "Tailor the platform to your exact business model. Create custom entities, schemas, and logic.",
            theme: {
                accent: "#e11d48",
                lightBg: "#fff1f2",
                border: "#fecdd3",
                badgeBg: "#ffe4e6",
            },
            capabilities: ["Modular Entity Builder", "Custom Formula Fields", "Relational Database", "Custom Workflows"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
            ),
            features: [
                {
                    name: "Custom Entity Schema Builder",
                    code: "OBJ-01",
                    description: "Every business operates differently. Build custom business entities — such as Projects, Assets, Properties, Vehicles, Subscriptions, or Service Tickets — that mirror your operations.",
                    highlights: [
                        "Create unlimited custom operational objects",
                        "Link custom objects to leads, customers, and invoices",
                        "Define custom naming conventions and primary keys",
                        "Dedicated menu tabs auto-generated for each custom entity"
                    ],
                    operationalPill: "🧩 Tailored Business Schemas",
                },
                {
                    name: "Dynamic Field Customization",
                    code: "OBJ-02",
                    description: "Add custom fields to any standard or custom object. Supports text, numbers, dropdown options, formulas, dates, file attachments, and relational lookups.",
                    highlights: [
                        "15+ field types including calculation formulas",
                        "Mandatory validation gates and conditional display rules",
                        "Relational lookup fields linking records across objects",
                        "Role-level field edit and view permissions"
                    ],
                    operationalPill: "⚙️ 15+ Custom Field Types",
                },
                {
                    name: "Operational Workflow Triggers",
                    code: "OBJ-03",
                    description: "Automate internal operations. Trigger automated tasks, status transitions, notifications, or webhooks whenever a custom object status is updated.",
                    highlights: [
                        "Visual trigger-and-action logic flow builder",
                        "Auto-assign tasks to staff when status changes",
                        "Notify clients automatically when milestones are reached",
                        "Zero coding required to customize workflows"
                    ],
                    operationalPill: "🔄 Automated Logic Triggers",
                },
                {
                    name: "Personalized Departmental Views",
                    code: "OBJ-04",
                    description: "Create custom table grids, kanban boards, and detail layouts for different teams. Sales, operations, and finance each see only what matters to them.",
                    highlights: [
                        "Save customized filter and column layouts",
                        "Switch seamlessly between Table, Kanban, and Calendar views",
                        "Bulk editing and mass updates across custom records",
                        "Share tailored views with specific user roles"
                    ],
                    operationalPill: "👁️ Custom Table & Kanban Views",
                }
            ]
        },
        {
            id: "settings",
            title: "Settings & Administration",
            shortTitle: "Settings",
            tagline: "Global organization profile, custom branding, compliance controls, and data backups.",
            theme: {
                accent: "#0d9488",
                lightBg: "#f0fdfa",
                border: "#99f6e4",
                badgeBg: "#ccfbf1",
            },
            capabilities: ["White-Label Branding", "Enterprise 2FA", "Data Backups", "Custom Domains"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            features: [
                {
                    name: "Branding & Portal White-Labeling",
                    code: "SET-01",
                    description: "Customize the platform with your brand logo, corporate color theme, custom email sending domain, and client-facing portal appearance.",
                    highlights: [
                        "Upload custom store/company logo and favicon",
                        "Custom email domain configuration (DKIM, SPF)",
                        "Customizable document number prefixes (e.g. QT-2026-)",
                        "Personalized terms, payment policies, and notes"
                    ],
                    operationalPill: "🎨 Full Brand White-Labeling",
                },
                {
                    name: "Security & Multi-Factor Auth",
                    code: "SET-02",
                    description: "Enterprise security architecture protecting sensitive business records with two-factor authentication, IP range whitelisting, and encryption.",
                    highlights: [
                        "Mandatory Two-Factor Authentication (2FA) enforcement",
                        "Office IP address restriction settings",
                        "Session timeout and auto-lock security controls",
                        "Data encryption in-transit and at-rest"
                    ],
                    operationalPill: "🔒 Enterprise 2FA Guard",
                },
                {
                    name: "Data Exports & Disaster Recovery",
                    code: "SET-03",
                    description: "Full ownership of your business data. Schedule automated daily cloud backups and execute one-click full data exports in CSV or JSON format.",
                    highlights: [
                        "Automated encrypted daily cloud backups",
                        "One-click mass export of leads, clients, and invoices",
                        "Bulk CSV data import tools with column mapping wizards",
                        "99.9% uptime cloud infrastructure SLA"
                    ],
                    operationalPill: "💾 1-Click Mass Backups",
                }
            ]
        }
    ];

    const faqs = [
        {
            q: "Can GrowNext be customized to match our company's unique business operations?",
            a: "Yes! GrowNext includes a powerful 'Custom Objects' engine. You can model custom business entities (like Projects, Properties, Vehicles, Contracts, or Services), configure custom data fields with formulas, and set up automated workflow triggers without writing a single line of code."
        },
        {
            q: "How does the WhatsApp integration in GrowNext work?",
            a: "GrowNext connects directly to the official WhatsApp Business Cloud API. Your sales reps can send quotations, payment reminders, and follow-ups straight to your clients' WhatsApp with 1-click approval links, plus maintain full chat conversation histories inside lead profiles."
        },
        {
            q: "Can we convert approved quotations directly into tax invoices?",
            a: "Absolutely. With one click, an approved quotation transforms into a GST-compliant tax invoice, preserving all line items, agreed discounts, client addresses, and tax slabs with zero manual re-entry."
        },
        {
            q: "How do role-based access permissions protect our client leads and database?",
            a: "The Staff module enforces granular access control (RBAC). You can ensure sales executives only view their assigned leads, restrict bulk data exports, lock sensitive margin/purchase costs, and require supervisor approval for special discounts."
        },
        {
            q: "Can GrowNext integrate with external payment gateways for instant payment collection?",
            a: "Yes. Invoices generated in GrowNext support embedded dynamic UPI QR codes and direct checkout links via Razorpay, Stripe, and NetBanking, automatically marking invoices as paid upon transaction confirmation."
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            {/* 1. HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>ALL-IN-ONE ENTERPRISE CRM &amp; OPERATIONS</span>
                            <h1 className={styles.title}>
                                Scale Your Business with <br />
                                <span className={styles.highlightText}>GrowNext CRM</span>
                            </h1>
                            <p className={styles.description}>
                                From multi-channel lead capture and interactive visual pipelines to digital quotations,
                                automated invoices, and 100% customizable business objects tailored to your exact industry workflows.
                            </p>

                            <div className={styles.ctaGroup}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    Book a Live Demo
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <a href="#modules-suite" className={styles.secondaryBtn}>
                                    Explore All Modules
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <div className={styles.statsBar}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>3.2x</span>
                                    <span className={styles.statLabel}>Lead Conversion</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>&lt; 2 min</span>
                                    <span className={styles.statLabel}>Quote Generation</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Custom Schemas</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>All-in-One</span>
                                    <span className={styles.statLabel}>CRM + Invoicing + Ops</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroVisualWrapper}>
                            <Image
                                src="/grownext_crm.jpg"
                                alt="GrowNext CRM Kanban Lead Pipeline and Analytics"
                                width={680}
                                height={440}
                                className={styles.heroImage}
                                priority
                            />
                            <div className={styles.floatingTag}>
                                <span className={styles.liveDot} />
                                <span>Live Kanban Lead Pipeline &amp; CLV Intelligence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OPERATIONAL PILLARS (Top Highlights) */}
            <section className={styles.pillarsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>CORE PILLARS</span>
                        <h2 className={styles.sectionTitle}>Engineered for Modern High-Growth Businesses</h2>
                        <p className={styles.sectionSubtitle}>
                            Three interconnected pillars that streamline sales conversions, automate administrative
                            billing, and adapt to your unique company operations.
                        </p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        {/* Pillar 1: Unified CRM & Leads */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Multi-Channel CRM Pipeline</h3>
                            <p className={styles.pillarDesc}>
                                Capture inquiries from web forms, WhatsApp, and campaigns into an interactive drag-and-drop Kanban board.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Automated round-robin rep distribution</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Visual deal stages with probability weighting</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Complete call, email &amp; WhatsApp logs</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Automated follow-up tasks and SLA alerts</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Custom Objects Engine */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                    <polyline points="2 17 12 22 22 17" />
                                    <polyline points="2 12 12 17 22 12" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Custom Objects &amp; Schemas</h3>
                            <p className={styles.pillarDesc}>
                                Adapt GrowNext to your exact operational workflow. Build custom entities, formulas, and relational lookups.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Model Projects, Assets, Contracts &amp; Tickets</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>15+ custom field types including formula math</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Tailored Kanban, Table &amp; Calendar views</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Automated triggers on custom status updates</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Quotes to Invoices */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="5" width="20" height="14" rx="2" />
                                    <line x1="2" y1="10" x2="22" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Quotations to Fast Invoicing</h3>
                            <p className={styles.pillarDesc}>
                                Build beautiful PDF estimates, capture online client approvals with e-signatures, and convert to invoices in 1 click.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Professional branded PDF estimates</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Interactive online approval with e-signatures</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>1-click conversion into tax-compliant bills</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Embedded UPI QR codes and gateway links</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GROWNEXT MODULE DEEP DIVE (Sequential Colorful Stack) */}
            <section className={styles.modulesSection} id="modules-suite">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>COMPLETE SYSTEM ARCHITECTURE</span>
                        <h2 className={styles.sectionTitle}>GrowNext Module-by-Module Deep Dive</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore how each specialized module inside GrowNext powers your business growth,
                            automates client engagements, and adapts to your operational requirements.
                        </p>
                    </div>

                    {/* Quick Anchor Jump Bar with Color Accents */}
                    <div className={styles.quickNavWrapper}>
                        <div className={styles.quickNavTitle}>
                            <span>Jump to GrowNext Module</span>
                            <span>{modulesData.length} Modules Available</span>
                        </div>
                        <div className={styles.quickNavList}>
                            {modulesData.map((m) => (
                                <a key={m.id} href={`#${m.id}`} className={styles.quickNavBtn}>
                                    <span className={styles.quickNavDot} style={{ backgroundColor: m.theme.accent }} />
                                    <span>{m.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sequential Stack of Modules */}
                    <div className={styles.modulesStack}>
                        {modulesData.map((m, mIndex) => (
                            <div
                                key={m.id}
                                id={m.id}
                                className={styles.moduleBlock}
                                style={
                                    {
                                        "--theme-accent": m.theme.accent,
                                        "--theme-light-bg": m.theme.lightBg,
                                        "--theme-border": m.theme.border,
                                        "--theme-badge-bg": m.theme.badgeBg,
                                    } as React.CSSProperties
                                }
                            >
                                <div className={styles.moduleBlockHeader}>
                                    <div className={styles.moduleHeaderLeft}>
                                        <div className={styles.moduleBlockIcon}>{m.icon}</div>
                                        <div className={styles.moduleBlockTitleGroup}>
                                            <span className={styles.moduleBlockIndexBadge}>
                                                Module 0{mIndex + 1}
                                            </span>
                                            <h3 className={styles.moduleBlockTitle}>{m.title}</h3>
                                            <p className={styles.moduleBlockTagline}>{m.tagline}</p>
                                        </div>
                                    </div>

                                    <div className={styles.moduleHeaderRight}>
                                        <span className={styles.moduleCountBadge}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {m.features.length} Specialized Sub-Modules
                                        </span>
                                        <div className={styles.capabilitiesRow}>
                                            {m.capabilities.map((cap, cIdx) => (
                                                <span key={cIdx} className={styles.capabilityPill}>
                                                    <span>•</span>
                                                    <span>{cap}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sub-Features Grid for this Module */}
                                <div className={styles.subFeaturesGrid}>
                                    {m.features.map((feature) => (
                                        <div key={feature.name} className={styles.subFeatureCard}>
                                            <div className={styles.subCardTop}>
                                                <span className={styles.subCardCodeBadge}>{feature.code}</span>
                                                <div className={styles.subCardIconMini}>{m.icon}</div>
                                            </div>

                                            <h4 className={styles.subCardTitle}>{feature.name}</h4>
                                            <p className={styles.subCardDesc}>{feature.description}</p>

                                            <ul className={styles.subCardHighlightsList}>
                                                {feature.highlights.map((h, hIdx) => (
                                                    <li key={hIdx} className={styles.subCardHighlightItem}>
                                                        <div className={styles.subCheckIconWrap}>
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
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className={styles.subCardFooter}>
                                                <span className={styles.subOperationalPill}>
                                                    {feature.operationalPill}
                                                </span>
                                                <span className={styles.subLivePreviewNote}>
                                                    <span className={styles.liveNoteDot} />
                                                    <span>Active Cloud</span>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CUSTOM OBJECTS SPOTLIGHT BANNER */}
            <section className={styles.container}>
                <div className={styles.customObjectsBanner}>
                    <div>
                        <span className={styles.badge} style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                            BUSINESS AGILITY
                        </span>
                        <h2 className={styles.customBannerTitle}>Tailored to Your Exact Business Model</h2>
                        <p className={styles.customBannerText}>
                            Don't force your business into rigid CRM molds. GrowNext lets you manage custom options,
                            create custom database objects, and automate complex workflows matching your real-world operations.
                        </p>
                        <div className={styles.customBadgesWrap}>
                            <span className={styles.customFeaturePill}>🏗️ Project Tracking</span>
                            <span className={styles.customFeaturePill}>🏢 Property Units</span>
                            <span className={styles.customFeaturePill}>🚗 Vehicle Fleets</span>
                            <span className={styles.customFeaturePill}>📑 AMC &amp; Service Contracts</span>
                            <span className={styles.customFeaturePill}>📦 Custom Inventory Batches</span>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/grownext_custom_objects.jpg"
                            alt="Custom Objects and Operations Workflow Builder"
                            width={540}
                            height={330}
                            style={{ borderRadius: "8px", width: "100%", height: "auto", border: "1px solid rgba(255,255,255,0.2)" }}
                        />
                    </div>
                </div>
            </section>

            {/* 5. VISUAL DEEP DIVE SHOWCASE (Using Generated Matching Assets) */}
            <section className={styles.deepDiveSection}>
                <div className={styles.container}>
                    {/* Showcase 1: Lead Pipeline & Executive Sales Forecasts */}
                    <div className={styles.showcaseRow}>
                        <div className={styles.showcaseText}>
                            <span className={styles.showcaseBadge}>SALES REVENUE VELOCITY</span>
                            <h2 className={styles.showcaseTitle}>
                                Kanban Lead Pipeline &amp; Client Lifetime Value
                            </h2>
                            <p className={styles.showcaseDesc}>
                                Empower your sales executives to convert prospects faster. Visual drag-and-drop pipeline stages,
                                automated WhatsApp notifications, and customer lifetime value intelligence at your fingertips.
                            </p>
                            <ul className={styles.showcaseKeyPoints}>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Interactive drag-and-drop deal management with custom validation gates</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Automated round-robin distribution ensuring immediate inquiry response times</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Real-time executive pipeline forecasting with weighted probability computation</span>
                                </li>
                            </ul>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Schedule CRM Demo
                            </Link>
                        </div>
                        <div className={styles.showcaseImageCard}>
                            <Image
                                src="/grownext_crm.jpg"
                                alt="GrowNext CRM Kanban Lead Pipeline Interface"
                                width={620}
                                height={380}
                                className={styles.showcaseImg}
                            />
                        </div>
                    </div>

                    {/* Showcase 2: Custom Operations & Modular Entity Builder */}
                    <div className={`${styles.showcaseRow} ${styles.showcaseRowReverse}`}>
                        <div className={styles.showcaseText}>
                            <span className={styles.showcaseBadge}>OPERATIONAL CUSTOMIZATION</span>
                            <h2 className={styles.showcaseTitle}>
                                Visual Schema Builder for Any Business Workflow
                            </h2>
                            <p className={styles.showcaseDesc}>
                                Build custom data models, link relational databases, and set up automated actions without writing code.
                                GrowNext flexes around how you actually deliver value to your customers.
                            </p>
                            <ul className={styles.showcaseKeyPoints}>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Custom object creation with formula fields, lookups, and file attachments</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Event-driven workflow triggers sending auto-emails, WhatsApps, or webhooks</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Tailored Kanban and tabular views custom-filtered for specific departments</span>
                                </li>
                            </ul>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Explore Custom Builder
                            </Link>
                        </div>
                        <div className={styles.showcaseImageCard}>
                            <Image
                                src="/grownext_custom_objects.jpg"
                                alt="GrowNext Custom Objects and Workflow Builder"
                                width={620}
                                height={380}
                                className={styles.showcaseImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FREQUENTLY ASKED QUESTIONS */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className={styles.sectionTitle}>Everything You Need to Know About GrowNext</h2>
                        <p className={styles.sectionSubtitle}>
                            Have questions regarding setup, WhatsApp integrations, custom objects, or migrations? We're here to help.
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

            {/* 7. BOTTOM CTA BANNER */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <span className={styles.bannerBadge}>ACCELERATE YOUR REVENUE</span>
                        <h2 className={styles.bannerHeading}>Transform Your Business Operations with GrowNext</h2>
                        <p className={styles.bannerDesc}>
                            Join high-performing sales teams, professional service providers, and growing enterprises
                            streamlining client pipelines and customizing workflows with GrowNext.
                        </p>
                        <div className={styles.bannerButtons}>
                            <Link href="/contact" className={styles.bannerBtnPrimary}>
                                Request Free Onsite Demo
                            </Link>
                            <Link href="/contact" className={styles.bannerBtnOutline}>
                                Talk to CRM Specialist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
