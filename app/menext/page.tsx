"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menext.module.css";

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

interface WacrmModule {
    id: string;
    title: string;
    shortTitle: string;
    tagline: string;
    theme: ModuleTheme;
    capabilities: string[];
    icon: React.ReactNode;
    features: SubFeature[];
}

export default function MeNextPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const modulesData: WacrmModule[] = [
        {
            id: "platform-overview",
            title: "Platform Overview & Core Architecture",
            shortTitle: "Overview",
            tagline: "Enterprise-grade, self-hostable WhatsApp CRM built for high-throughput sales and multi-agent support teams.",
            theme: {
                accent: "#059669",
                lightBg: "#f0fdf4",
                border: "#bbf7d0",
                badgeBg: "#dcfce7",
            },
            capabilities: ["Next.js 16 App Router", "Supabase Realtime & RLS", "Official Meta Cloud API", "AES-256-GCM Encryption"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            features: [
                {
                    name: "Modern Technical Stack",
                    code: "ARCH-01",
                    description: "Built on Next.js 16 (React 19, Server Actions, TypeScript) with Tailwind CSS v4, Lucide Icons, Shadcn UI / Radix primitives, and Sonner toasts.",
                    highlights: [
                        "Next.js 16 App Router with server-first rendering and fast server actions",
                        "Supabase PostgreSQL 15+ with Auth, Realtime WebSockets, and Storage",
                        "Official Meta WhatsApp Business Cloud API (Graph API v21.0+)",
                        "Standalone Node.js worker bundled with esbuild for Docker or VPS"
                    ],
                    operationalPill: "⚡ Full-Stack Modern Architecture",
                },
                {
                    name: "Military-Grade Security & Encryption",
                    code: "ARCH-02",
                    description: "End-to-end data protection using AES-256-GCM symmetric encryption for WhatsApp tokens, Meta secrets, AI provider keys, and payment credentials.",
                    highlights: [
                        "AES-256-GCM authenticated encryption for all customer and API secrets",
                        "Row-Level Security (RLS) strictly enforced on 100% of PostgreSQL tables",
                        "HMAC SHA-256 verification on all incoming Meta webhooks",
                        "Sliding-window rate limiters protecting against denial of service"
                    ],
                    operationalPill: "🔒 AES-256-GCM Protection",
                },
                {
                    name: "Decoupled Scalable Infrastructure",
                    code: "ARCH-03",
                    description: "Separated web dashboard from asynchronous background worker tasks ensuring high resilience and zero message loss under burst loads.",
                    highlights: [
                        "Stateless web process with instant cold-boot performance",
                        "Isolated worker runner executing background queues and RAG vector searches",
                        "Deployable anywhere: Docker, Railway, Hostinger, AWS, or self-hosted VPS",
                        "Continuous telemetry, queue depth monitoring, and p95 latency tracking"
                    ],
                    operationalPill: "🚀 High-Concurrency Isolation",
                }
            ]
        },
        {
            id: "team-inbox",
            title: "Shared WhatsApp Team Inbox",
            shortTitle: "Team Inbox",
            tagline: "Collaborative multi-agent inbox allowing entire teams to handle customer queries without collisions or missed messages.",
            theme: {
                accent: "#5e2b9d",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["Multi-Agent Collaboration", "WebAssembly Opus Voice", "Live Typing & Presence", "Permanent Media Mirroring"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            ),
            features: [
                {
                    name: "Multi-Agent Collaboration & Smart Views",
                    code: "INBOX-01",
                    description: "Multiple team agents handle one or multiple WhatsApp numbers simultaneously with segmented views for All, Mine, Unassigned, and Closed.",
                    highlights: [
                        "Segmented views: All, Mine, Unassigned, and Closed with 1-click reopen",
                        "Real-time search by contact name, phone number, tags, or message text",
                        "Live team presence indicators showing who is currently viewing or typing",
                        "Collision prevention eliminating duplicate agent replies"
                    ],
                    operationalPill: "👥 Multi-Agent Workspace",
                },
                {
                    name: "Rich Message Composer & Opus Voice Notes",
                    code: "INBOX-02",
                    description: "Comprehensive messaging interface supporting full Unicode emoji, file attachments, quoted replies, WhatsApp reactions, and in-browser voice notes.",
                    highlights: [
                        "Built-in WebAssembly Opus recorder (`audio/ogg; codecs=opus`) for native WhatsApp voice messages",
                        "Swipe or click quoted replies for context-aware customer conversations",
                        "Meta approved template picker with dynamic parameter variable substitution",
                        "Quick replies canned library accessible via slash `/` shortcuts"
                    ],
                    operationalPill: "🎙️ Native Opus Voice & Media",
                },
                {
                    name: "Permanent Media Mirroring & CRM Drawer",
                    code: "INBOX-03",
                    description: "Automatically downloads incoming WhatsApp media to Supabase Storage, bypassing Meta's 14-day expiration, paired with instant CRM contact drawers.",
                    highlights: [
                        "Inbound media mirroring preserving images, audio, and documents forever",
                        "Live message tracking: sent (✓), delivered (✓✓), read blue (✓✓), and failed (!)",
                        "Instant right-hand drawer with contact attributes, assigned rep, tags, and deals",
                        "Internal private team collaboration notes hidden from customers"
                    ],
                    operationalPill: "📁 Permanent Media Storage",
                }
            ]
        },
        {
            id: "contact-crm",
            title: "Contact & Audience Management (CRM)",
            shortTitle: "CRM Contacts",
            tagline: "Single source of truth for customer identities, custom dynamic attributes, tags, and complete historical timelines.",
            theme: {
                accent: "#0284c7",
                lightBg: "#f0f9ff",
                border: "#bae6fd",
                badgeBg: "#e0f2fe",
            },
            capabilities: ["E.164 Normalization", "Dynamic Custom Fields", "Bulk CSV Import/Export", "Full Activity Timeline"],
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
                    name: "E.164 Phone Normalization & Deduplication",
                    code: "CRM-01",
                    description: "Automatic international phone number formatting and duplicate prevention to ensure clean, accurate contact databases across regions.",
                    highlights: [
                        "Automatic international country code normalization (E.164)",
                        "Intelligent deduplication preventing duplicate customer profiles",
                        "Cross-channel contact identity reconciliation",
                        "Phone number validation before initiating broadcast sends"
                    ],
                    operationalPill: "📱 E.164 Number Hygiene",
                },
                {
                    name: "Dynamic Custom Fields & Multi-Tagging",
                    code: "CRM-02",
                    description: "Add custom attributes (text, numbers, dates, dropdown options, URLs) without schema migrations, and organize contacts with color-coded tags.",
                    highlights: [
                        "Flexible custom attributes without modifying database tables",
                        "Multi-tagging system for segmentation and automated workflow triggers",
                        "Filtering and segmentation by any combination of tags or custom attributes",
                        "Instant search and bulk tag application"
                    ],
                    operationalPill: "🏷️ Flexible Custom Fields",
                },
                {
                    name: "Bulk CSV Tools & Activity Timeline",
                    code: "CRM-03",
                    description: "Import and export thousands of contacts with intelligent column mapping and inspect complete chronological customer activity histories.",
                    highlights: [
                        "Smart CSV import wizard with field mapping and duplicate merge/skip rules",
                        "Chronological timeline of conversations, deals, and automation runs",
                        "Internal private team notes attached to customer profiles",
                        "1-click export of filtered audience lists for external marketing"
                    ],
                    operationalPill: "📊 Full Customer History",
                }
            ]
        },
        {
            id: "sales-pipelines",
            title: "Sales Pipelines & Kanban Deals",
            shortTitle: "Deals & Pipelines",
            tagline: "Visual drag-and-drop sales pipelines integrated directly with live WhatsApp conversations to close deals faster.",
            theme: {
                accent: "#7c3aed",
                lightBg: "#faf5ff",
                border: "#ddd6fe",
                badgeBg: "#ede9fe",
            },
            capabilities: ["@dnd-kit Kanban Board", "In-Chat Deal Creation", "Multi-Currency Engine", "Conversion Velocity"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="18" rx="1" />
                    <rect x="14" y="3" width="7" height="12" rx="1" />
                </svg>
            ),
            features: [
                {
                    name: "Interactive Drag-and-Drop Kanban Board",
                    code: "DEAL-01",
                    description: "Built with `@dnd-kit` for fluid, tactile deal stage progression across customizable pipelines representing sales, onboarding, or support.",
                    highlights: [
                        "Fluid drag-and-drop card movements with stage transition validation",
                        "Multiple pipelines for distinct business units or product lines",
                        "Customizable stages, win probabilities, and stage color codes",
                        "Quick deal creation straight from active WhatsApp chat messages"
                    ],
                    operationalPill: "🎯 Drag-and-Drop Pipelines",
                },
                {
                    name: "Multi-Currency & Deal Valuation",
                    code: "DEAL-02",
                    description: "Comprehensive currency handling supporting USD ($), EUR (€), GBP (£), INR (₹), BRL (R$), KRW (₩), and other global currencies.",
                    highlights: [
                        "Native support for global and regional currencies",
                        "Automatic pipeline valuation and weighted probability revenue forecasts",
                        "Real-time stage-by-stage deal volume and conversion analytics",
                        "Deal aging alerts highlighting opportunities stuck in current stages"
                    ],
                    operationalPill: "💵 Global Multi-Currency",
                },
                {
                    name: "Sales Velocity & Performance Analytics",
                    code: "DEAL-03",
                    description: "Deep visibility into team close rates, sales cycle duration, stage bottlenecks, and individual sales rep performance.",
                    highlights: [
                        "Win/loss ratio analytics and deal age breakdown",
                        "Sales rep deal attribution and conversion velocity metrics",
                        "Direct links between deals, contact profiles, and chat conversations",
                        "Exportable deal reports for board meetings and sales reviews"
                    ],
                    operationalPill: "📈 Deal Velocity Tracking",
                }
            ]
        },
        {
            id: "broadcast-campaigns",
            title: "Broadcast Campaigns & Outbound Marketing",
            shortTitle: "Broadcasts",
            tagline: "Deliver personalized WhatsApp template messages at scale with queue-backed rate limiting and real-time delivery analytics.",
            theme: {
                accent: "#d97706",
                lightBg: "#fffbeb",
                border: "#fde68a",
                badgeBg: "#fef3c7",
            },
            capabilities: ["4-Step Campaign Builder", "Async Queue Engine", "Real-Time Delivery Stats", "Meta Rate-Limit Guard"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
            ),
            features: [
                {
                    name: "4-Step Campaign Builder",
                    code: "BCAST-01",
                    description: "Intuitive campaign flow: Choose approved Meta template, select segmented audience, personalize dynamic variables, and schedule send.",
                    highlights: [
                        "Approved Meta template picker (Marketing, Utility, Authentication)",
                        "Target contacts by tags, custom attributes, or ad-hoc CSV upload",
                        "Dynamic variable mapping (`{{1}}`, `{{2}}`) to contact properties with fallbacks",
                        "Send immediately or schedule for optimal timezone delivery"
                    ],
                    operationalPill: "📢 4-Step Campaign Flow",
                },
                {
                    name: "Asynchronous Queue Engine & Rate Limiting",
                    code: "BCAST-02",
                    description: "Bulk messages are queued in PostgreSQL and dispatched through background workers to respect Meta's throughput limits and protect your number tier.",
                    highlights: [
                        "Database-backed job queue preventing Meta rate-limit bans",
                        "Automatic throttle adjustments based on WhatsApp Business account quality score",
                        "Adaptive retry logic with exponential backoff for transient delivery failures",
                        "Pause running campaigns, resume interrupted jobs, or retry failed recipients"
                    ],
                    operationalPill: "🛡️ Meta Tier Protection",
                },
                {
                    name: "Live Delivery & Read Analytics",
                    code: "BCAST-03",
                    description: "Track campaign performance metrics in real time as webhooks arrive from WhatsApp.",
                    highlights: [
                        "Live metrics: Queued, Sent, Delivered, Read, and Failed counts",
                        "Click-through tracking on template buttons and quick reply links",
                        "Instant recipient error inspection with Meta error code explanations",
                        "Campaign ROI calculations comparing spend to closed sales deals"
                    ],
                    operationalPill: "📊 Real-Time Campaign Analytics",
                }
            ]
        },
        {
            id: "automations-engine",
            title: "Visual No-Code Automations Engine",
            shortTitle: "Automations",
            tagline: "Build event-driven workflows, auto-responders, and automated routing trees without writing code.",
            theme: {
                accent: "#2563eb",
                lightBg: "#eff6ff",
                border: "#bfdbfe",
                badgeBg: "#dbeafe",
            },
            capabilities: ["Event-Driven Triggers", "Conditional If/Else Logic", "Webhook Dispatchers", "Delayed Timers"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            features: [
                {
                    name: "Comprehensive Workflow Triggers",
                    code: "AUTO-01",
                    description: "Trigger automations on inbound messages, first-time contacts, keyword matches, tag additions, conversation assignment, or timed delays.",
                    highlights: [
                        "Triggers: New Inbound Message, First Message, Keyword match (exact/contains/regex)",
                        "Triggers: Contact created, Tag attached, Deal stage moved, Interactive reply clicked",
                        "Timed drip campaign triggers and delay timers (minutes, hours, or days)",
                        "Multi-trigger support with deduplication protection"
                    ],
                    operationalPill: "⚡ 8+ Event Triggers",
                },
                {
                    name: "Rich Action Library",
                    code: "AUTO-02",
                    description: "Execute actions including sending text messages, interactive buttons, list menus, pre-approved templates, and managing contact attributes.",
                    highlights: [
                        "`send_message`, `send_buttons` (up to 3), `send_list` interactive menus",
                        "`send_template` with dynamic parameter insertion",
                        "`add_tag`, `remove_tag`, `update_contact_field`, `create_deal`",
                        "`assign_conversation` to specific agents or round-robin rotation"
                    ],
                    operationalPill: "🛠️ 12+ Workflow Actions",
                },
                {
                    name: "Branching Logic & Webhooks",
                    code: "AUTO-03",
                    description: "If/Else conditional branching based on message text, contact fields, or prior responses, plus external HTTP webhook dispatch.",
                    highlights: [
                        "If/Else branching evaluate contact properties, tags, and message content",
                        "External webhook dispatch (POST) with dynamic JSON payloads to Zapier, Make, n8n",
                        "Automatic conversation resolution (`close_conversation`) after inactivity",
                        "Execution logs with step-by-step audit trails and error recovery"
                    ],
                    operationalPill: "🔀 If/Else Branching & Webhooks",
                }
            ]
        },
        {
            id: "interactive-flows",
            title: "WhatsApp Native Interactive Flows",
            shortTitle: "Native Flows",
            tagline: "Design and execute rich multi-screen forms and interactive experiences directly inside WhatsApp without external browser hops.",
            theme: {
                accent: "#0d9488",
                lightBg: "#f0fdfa",
                border: "#99f6e4",
                badgeBg: "#ccfbf1",
            },
            capabilities: ["@xyflow/react Canvas", "Native Meta Flows API", "Form Validation Panel", "Screen-to-Screen Logic"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
            ),
            features: [
                {
                    name: "Visual Node Flow Canvas",
                    code: "FLOW-01",
                    description: "Drag-and-drop visual flow designer powered by `@xyflow/react` and `@dagrejs/dagre` for building native multi-step WhatsApp forms.",
                    highlights: [
                        "Visual screen designer with drag-and-drop layout arrangement",
                        "Multi-screen forms: appointment booking, lead intake, surveys, onboarding",
                        "Component library: text fields, numbers, emails, radio lists, dropdowns, date pickers",
                        "Screen-to-screen conditional routing based on customer answers"
                    ],
                    operationalPill: "🎨 Drag-and-Drop Node Canvas",
                },
                {
                    name: "Official Meta Flows Integration",
                    code: "FLOW-02",
                    description: "Publishes directly to Meta's official WhatsApp Flows API endpoint with real-time schema validation.",
                    highlights: [
                        "Direct sync with Meta Flows API endpoint",
                        "Pre-publish syntax and JSON schema validator catching errors before submission",
                        "Zero-latency execution rendering natively within customer WhatsApp apps",
                        "Supports both draft and published flow modes"
                    ],
                    operationalPill: "🌐 Native Meta Endpoint Sync",
                },
                {
                    name: "Flow Analytics & Response Submission",
                    code: "FLOW-03",
                    description: "Monitor form completion funnels, identify screen drop-offs, and automatically map submitted data into CRM contact records.",
                    highlights: [
                        "Screen-by-screen completion and drop-off rate analytics",
                        "Form submission inspector with full customer payload views",
                        "Auto-mapping form fields to CRM contact attributes and deal values",
                        "Trigger downstream automations immediately upon flow completion"
                    ],
                    operationalPill: "📈 Flow Funnel Analytics",
                }
            ]
        },
        {
            id: "ai-assistant",
            title: "AI Reply Assistant & Autonomous Bot",
            shortTitle: "AI Copilot & Bot",
            tagline: "Empower human agents with generative reply drafts and deploy 24/7 autonomous support bots using BYOK LLMs and hybrid RAG.",
            theme: {
                accent: "#9333ea",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["BYOK AES-256-GCM", "Claude / GPT-4o / Gemini", "Hybrid pgvector RAG", "Clean Human Handoff"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 12L2.1 12.05" />
                    <path d="M12 12a10 10 0 0 1 10-10" />
                </svg>
            ),
            features: [
                {
                    name: "Bring-Your-Own-Key (BYOK) Multi-Provider Support",
                    code: "AI-01",
                    description: "Store your own API keys securely encrypted with AES-256-GCM. Zero per-seat AI markup across leading LLM providers.",
                    highlights: [
                        "Anthropic: Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus",
                        "OpenAI: GPT-4o, GPT-4o-mini, GPT-4-turbo",
                        "Google Gemini: Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 2.0",
                        "OpenAI-Compatible: Groq, Together AI, Mistral, Ollama, self-hosted LLMs"
                    ],
                    operationalPill: "🔑 BYOK Encrypted Keys",
                },
                {
                    name: "Hybrid Knowledge Base (RAG)",
                    code: "AI-02",
                    description: "Upload product documentation, FAQs, and price sheets for automated document chunking and hybrid full-text + vector retrieval.",
                    highlights: [
                        "Upload PDFs, Markdown, TXT, and FAQs with automatic chunking",
                        "Hybrid retrieval: PostgreSQL Full-Text Search combined with `pgvector` embeddings",
                        "High-accuracy context matching eliminating hallucinations",
                        "Live AI Playground to test prompts and inspect retrieval telemetry"
                    ],
                    operationalPill: "📚 Hybrid pgvector RAG",
                },
                {
                    name: "Inbox Copilot & Autonomous Bot with Handoff",
                    code: "AI-03",
                    description: "Draft context-aware replies for human agents in 1 click or deploy autonomous auto-reply bots with loop prevention and human handoff.",
                    highlights: [
                        "In-Inbox 'Draft with AI' button generating editable context drafts",
                        "Autonomous 24/7 bot answering customer queries from Knowledge Base",
                        "Loop prevention turn limits avoiding infinite automated chatter",
                        "Clean Human Handoff detecting agent requests or frustration sentiment"
                    ],
                    operationalPill: "🤖 Autonomous & Copilot Modes",
                }
            ]
        },
        {
            id: "whatsapp-commerce",
            title: "WhatsApp Commerce, Catalog & Payments",
            shortTitle: "Commerce & Pay",
            tagline: "Turn customer WhatsApp conversations into active revenue channels with native catalogs and multi-gateway payments.",
            theme: {
                accent: "#16a34a",
                lightBg: "#f0fdf4",
                border: "#bbf7d0",
                badgeBg: "#dcfce7",
            },
            capabilities: ["Meta Catalog Sync", "In-Chat Shopping Cart", "Razorpay / Stripe / UPI", "Orders Dashboard"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            ),
            features: [
                {
                    name: "Meta Catalog Sync & In-Chat Cards",
                    code: "COMM-01",
                    description: "Synchronize inventory, prices, descriptions, and media from Meta Commerce Manager, and dispatch product cards directly in chats.",
                    highlights: [
                        "Automatic sync with Meta Commerce Manager catalog items",
                        "Send single product highlight cards or multi-product catalog pickers",
                        "Real-time stock status and currency pricing updates",
                        "Product search directly inside the live chat composer"
                    ],
                    operationalPill: "🛍️ Meta Catalog Integration",
                },
                {
                    name: "WhatsApp Native Shopping Cart",
                    code: "COMM-02",
                    description: "Receive and process native shopping carts submitted by customers through WhatsApp's official `order_details` format.",
                    highlights: [
                        "Receive WhatsApp native shopping cart submissions directly in chat threads",
                        "Automatic order total, tax, and shipping calculation",
                        "Interactive order confirmation receipts with dynamic payment links",
                        "Auto-created deals in sales pipelines corresponding to placed orders"
                    ],
                    operationalPill: "🛒 In-Chat Shopping Cart",
                },
                {
                    name: "Multi-Gateway Payment Orchestration",
                    code: "COMM-03",
                    description: "Frictionless payment links and automated webhook settlement across Razorpay, Stripe, UPI Instant Pay, and Meta Pay.",
                    highlights: [
                        "Razorpay: Dynamic payment links sent in chat with auto-settlement verification",
                        "Stripe: Stripe Checkout Sessions with instant order status reconciliation",
                        "UPI Instant Pay (India): Dynamic `upi://pay` deep links and dynamic QR codes",
                        "Meta Pay support and unified orders dashboard (pending, paid, completed)"
                    ],
                    operationalPill: "💳 Multi-Gateway Settlement",
                }
            ]
        },
        {
            id: "mobile-support",
            title: "Push Notifications, PWA & Mobile Support",
            shortTitle: "Mobile & FCM",
            tagline: "Empower your team on desktop, mobile, and web with native FCM push notifications and installable Progressive Web Apps.",
            theme: {
                accent: "#ea580c",
                lightBg: "#fff7ed",
                border: "#fed7aa",
                badgeBg: "#ffedd5",
            },
            capabilities: ["Firebase Cloud Messaging v1", "Native Mobile App (menext)", "Installable PWA (sw.js)", "Web Push Alerts"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            ),
            features: [
                {
                    name: "Firebase Cloud Messaging (FCM HTTP v1)",
                    code: "MOB-01",
                    description: "Native push notifications delivered to the mobile application (`menext`), dispatched via both Next.js server actions and background workers.",
                    highlights: [
                        "Direct integration with Firebase Cloud Messaging HTTP v1 API",
                        "Dispatched instantly on incoming WhatsApp chats and conversation assignments",
                        "Custom sound alerts, badge counters, and deep-link metadata routing to specific chats",
                        "Resilient fallback delivery if agent device is momentarily offline"
                    ],
                    operationalPill: "🔔 Real-Time FCM Push Alerts",
                },
                {
                    name: "Progressive Web App (PWA) Engine",
                    code: "MOB-02",
                    description: "Full PWA support featuring an offline service worker (`sw.js`) and web app manifest installable on desktop and mobile operating systems.",
                    highlights: [
                        "Installable directly on Windows, macOS, Android, and iOS home screens",
                        "Service worker caching ensuring snappy UI transitions and offline awareness",
                        "Desktop web push notifications for browser-based agents",
                        "Native desktop notification badge updates"
                    ],
                    operationalPill: "📲 Installable PWA App",
                },
                {
                    name: "In-App Notification Center",
                    code: "MOB-03",
                    description: "Centralized notification inbox in the dashboard header displaying unread conversation alerts, deal stage changes, and team mentions.",
                    highlights: [
                        "Unread notification indicator with real-time assignment alerts",
                        "Quick jump directly to active customer conversation threads",
                        "Configurable notification preferences per agent profile",
                        "Audio chime toggle for busy customer support counters"
                    ],
                    operationalPill: "📬 In-App Notification Hub",
                }
            ]
        },
        {
            id: "security-rbac",
            title: "Team Accounts, Roles & Security",
            shortTitle: "Security & RBAC",
            tagline: "Enterprise security architecture with granular role-based access control, Row-Level Security, and cryptographic protection.",
            theme: {
                accent: "#dc2626",
                lightBg: "#fef2f2",
                border: "#fecaca",
                badgeBg: "#fee2e2",
            },
            capabilities: ["RBAC (4 Roles)", "100% RLS PostgreSQL", "HMAC X-Hub Signature", "Tokenized Email Invites"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            features: [
                {
                    name: "Granular Role-Based Access Control (RBAC)",
                    code: "SEC-01",
                    description: "Four clearly delineated permission tiers: Owner, Admin, Agent, and Viewer ensuring team members only access what they need.",
                    highlights: [
                        "Owner: Full system control, billing, WhatsApp connections, ownership transfer",
                        "Admin: Team management, automations, templates, pipelines, and API keys",
                        "Agent: View inbox, reply to chats, manage contacts, create deals, broadcasts",
                        "Viewer: Read-only access to chats, contacts, pipelines, and reporting metrics"
                    ],
                    operationalPill: "🛡️ 4-Tier RBAC Matrix",
                },
                {
                    name: "Supabase Row-Level Security (RLS)",
                    code: "SEC-02",
                    description: "PostgreSQL Row-Level Security enforced on 100% of tables to guarantee strict multi-tenant isolation and data segregation.",
                    highlights: [
                        "RLS policies active across all tables preventing cross-tenant leakage",
                        "Cryptographic AES-256-GCM encryption for all sensitive credentials",
                        "HMAC webhook verification against `X-Hub-Signature-256`",
                        "Sliding-window rate limiters across auth, messaging, and API routes"
                    ],
                    operationalPill: "🔐 100% RLS Multi-Tenant Isolation",
                },
                {
                    name: "Team Invitations & Audits",
                    code: "SEC-03",
                    description: "Secure tokenized email invitations with configurable expiration and chronological team action audit logs.",
                    highlights: [
                        "Tokenized invite links with 7-day expiration and one-time use tokens",
                        "Instant agent deactivation with immediate session revocation",
                        "Audit logs recording template edits, broadcasts, and bulk exports",
                        "Strict enterprise GDPR and data compliance safeguards"
                    ],
                    operationalPill: "✉️ Tokenized Team Invites",
                }
            ]
        },
        {
            id: "rest-api-mcp",
            title: "Public REST API, Webhooks & MCP Server",
            shortTitle: "API & MCP",
            tagline: "Programmatic CRM control via scoped REST APIs, real-time outbound webhooks, and Model Context Protocol (MCP) server.",
            theme: {
                accent: "#4338ca",
                lightBg: "#eef2ff",
                border: "#c7d2fe",
                badgeBg: "#e0e7ff",
            },
            capabilities: ["REST API /api/v1", "Scoped Bearer Tokens", "HMAC Outbound Webhooks", "MCP Server for AI"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
            ),
            features: [
                {
                    name: "Public REST API (`/api/v1`)",
                    code: "API-01",
                    description: "Developer-friendly REST API authenticated with scoped bearer tokens (`wacrm_live_...`) with SHA-256 storage hash protection.",
                    highlights: [
                        "Scoped keys: `messages:send`, `contacts:write`, `broadcasts:send`, etc.",
                        "`/api/v1/messages`: Send text, media, or Meta templates programmatically",
                        "`/api/v1/contacts`: Query, create, or update contact records",
                        "`/api/v1/conversations`: Fetch conversation threads and messages"
                    ],
                    operationalPill: "🔑 Scoped REST API Endpoints",
                },
                {
                    name: "Outbound Event Webhooks",
                    code: "API-02",
                    description: "Subscribe your external backends (Zapier, n8n, ERP) to real-time events signed with cryptographic HMAC SHA-256 signatures.",
                    highlights: [
                        "Events: `message.received`, `message.sent`, `contact.created`, `deal.created`",
                        "Cryptographic HMAC SHA-256 header signatures verifying authenticity",
                        "Automatic retry mechanism with exponential backoff on delivery failure",
                        "Webhook payload inspect logs inside developer settings"
                    ],
                    operationalPill: "📡 Real-Time HMAC Webhooks",
                },
                {
                    name: "Model Context Protocol (MCP) Server",
                    code: "API-03",
                    description: "Built-in MCP server in `mcp-server/` connecting your WhatsApp CRM directly to Claude Desktop, Cursor, and autonomous AI agents.",
                    highlights: [
                        "Standard Model Context Protocol (MCP) compliant server",
                        "Query customer messages, contact profiles, and pipeline deals with conversational AI",
                        "Read-only by default with opt-in write tools for supervised message drafting",
                        "Seamless plug-and-play setup for Cursor and Claude Desktop"
                    ],
                    operationalPill: "🧠 Model Context Protocol (MCP)",
                }
            ]
        },
        {
            id: "background-worker",
            title: "High-Concurrency Background Worker & Queue",
            shortTitle: "Worker Engine",
            tagline: "Resilient, standalone background task runner designed to handle high-throughput messaging independently of the web process.",
            theme: {
                accent: "#0891b2",
                lightBg: "#ecfeff",
                border: "#a5f3fc",
                badgeBg: "#cffafe",
            },
            capabilities: ["Standalone Node.js Runner", "7 Database-Backed Queues", "Ring Buffer Telemetry", "Docker & Railway Ready"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            features: [
                {
                    name: "Decoupled Architecture & esbuild Runner",
                    code: "WRK-01",
                    description: "Bundled via esbuild (`dist/worker.mjs`) to execute as a lightweight isolated standalone Node.js process (`npm run worker`) or Docker container.",
                    highlights: [
                        "Isolated Node.js runner independent of Next.js web process",
                        "Executes on low-cost VPS, Docker, or platforms like Railway and Hostinger",
                        "Zero blocking on Next.js server actions or API responses",
                        "Graceful shutdown handling on SIGTERM / SIGINT signals"
                    ],
                    operationalPill: "⚙️ Standalone esbuild Runner",
                },
                {
                    name: "Dedicated Database-Backed Job Queues",
                    code: "WRK-02",
                    description: "Specialized job queues handling high-volume outbound messages, broadcast dispatching, automation steps, and media mirroring.",
                    highlights: [
                        "`outbound_message` & `broadcast_recipient`: Rate-limited mass messaging",
                        "`automation_trigger` & `delayed_automation_step`: Complex automation trees",
                        "`webhook_event`: Asynchronous Meta webhook processing preventing dropped events",
                        "`ai_auto_reply`, `media_mirror`, and `inbound_push_notification` queues"
                    ],
                    operationalPill: "📋 7 Specialized Job Queues",
                },
                {
                    name: "Telemetry Ring Buffer & Queue Monitoring",
                    code: "WRK-03",
                    description: "In-memory circular ring buffer capturing job throughput, p95 execution latency, error stacks, and queue backlog depths.",
                    highlights: [
                        "Real-time throughput metrics (jobs processed per minute)",
                        "p95 and p99 latency monitoring across queue types",
                        "Automatic dead-letter queue (DLQ) for inspecting failed jobs",
                        "Live status health checks exposed via internal monitoring endpoints"
                    ],
                    operationalPill: "📊 Ring Buffer Queue Telemetry",
                }
            ]
        },
        {
            id: "i18n-customization",
            title: "Internationalization & UI Customization",
            shortTitle: "i18n & Branding",
            tagline: "Built for global enterprises with multilingual message catalogues, theme sync, and brand customization.",
            theme: {
                accent: "#be185d",
                lightBg: "#fdf2f8",
                border: "#fbcfe8",
                badgeBg: "#fce7f3",
            },
            capabilities: ["4 Global Locales", "Dark / Light Mode", "Custom Logo & Favicon", "App Icon Theming"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            features: [
                {
                    name: "Complete Multilingual Locales",
                    code: "I18N-01",
                    description: "Native support for four major global languages with translation catalogues maintained in `messages/`.",
                    highlights: [
                        "English (`en`), Spanish (`es`), Korean (`ko`), and Brazilian Portuguese (`pt`)",
                        "Configurable via `NEXT_PUBLIC_APP_LOCALE` or individual agent profile settings",
                        "RTL-ready interface structure and localized date/time formatting",
                        "Easily extensible to additional languages with JSON dictionary keys"
                    ],
                    operationalPill: "🌍 Multilingual Translations",
                },
                {
                    name: "Theme Modes & Visual Polish",
                    code: "I18N-02",
                    description: "Built-in themes supporting Dark Mode, Light Mode, and automatic System Theme synchronization.",
                    highlights: [
                        "Crisp Light Mode and high-contrast OLED-friendly Dark Mode",
                        "Automatic System Theme preference detection",
                        "Smooth CSS transition variables preventing theme flashing",
                        "Accessible color contrasts meeting WCAG 2.1 AA standards"
                    ],
                    operationalPill: "🎨 Dark / Light / System Theme",
                },
                {
                    name: "White-Label & Brand Customization",
                    code: "I18N-03",
                    description: "Tailor the platform with custom company logos, brand color accents, custom favicons, and dedicated mobile app icons.",
                    highlights: [
                        "Upload custom primary logo and inverted dark-mode logo",
                        "Custom browser favicon and web app manifest icons",
                        "Configurable brand company name and support links",
                        "Branded email notifications and broadcast message footers"
                    ],
                    operationalPill: "✨ Custom Brand Identity",
                }
            ]
        }
    ];

    const faqs = [
        {
            q: "What is MeNext (wacrm) and how does it connect to WhatsApp?",
            a: "MeNext is an enterprise-grade WhatsApp CRM, customer support, and sales automation platform. It integrates directly with the official Meta WhatsApp Business Cloud API (Graph API v21.0+), allowing your business to use official WhatsApp numbers with zero risk of unofficial ban locks, supported by verified blue badge compatibility."
        },
        {
            q: "Can multiple support and sales agents use the same WhatsApp phone number simultaneously?",
            a: "Yes! MeNext is specifically architected as a Shared Team Inbox. Multiple team members can log in simultaneously, reply to customer chats, see live typing indicators and presence to avoid duplicate responses, and assign conversations to specific reps."
        },
        {
            q: "How does MeNext protect our data and API keys?",
            a: "All sensitive credentials—including WhatsApp Access Tokens, Meta secrets, payment API keys, and BYOK AI keys—are encrypted with military-grade AES-256-GCM symmetric encryption. Furthermore, Row-Level Security (RLS) is strictly enforced on 100% of PostgreSQL tables in Supabase for total multi-tenant data isolation."
        },
        {
            q: "Does MeNext have a mobile app, and how are push notifications handled?",
            a: "Yes. MeNext features a native mobile application (`menext`) powered by Firebase Cloud Messaging (FCM HTTP v1), delivering real-time push alerts with sound and badges when new messages or leads arrive. It is also available as a full installable Progressive Web App (PWA)."
        },
        {
            q: "Where can I read the official Privacy Policy and data retention terms?",
            a: "You can review our complete, transparent Privacy Policy anytime by clicking the Privacy Policy link at the top of this page or visiting /menext/privacy-policy. It details device permissions (FCM, microphone, media), encryption standards, 30-day account deletion rights, and Google Play Developer policy compliance."
        },
        {
            q: "Can I bring my own AI keys for the AI Reply Assistant?",
            a: "Yes! MeNext adopts a Bring-Your-Own-Key (BYOK) architecture. You can connect your OpenAI, Anthropic Claude, Google Gemini, or self-hosted Ollama keys without any per-seat AI markups. You also get a Hybrid Knowledge Base (RAG) powered by pgvector for hallucination-free automated replies."
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            {/* 1. HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <span className={`${styles.badge} ${styles.badgeWhatsapp}`}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                OFFICIAL META CLOUD API &bull; ENTERPRISE CRM
                            </span>
                            <h1 className={styles.title}>
                                Scale Customer Engagement with <br />
                                <span className={styles.highlightText}>MeNext</span>{" "}
                                <span className={styles.highlightGreen}>WhatsApp CRM</span>
                            </h1>
                            <p className={styles.description}>
                                Enterprise-grade WhatsApp CRM and sales platform for multi-agent support teams.
                                Unified team inbox, drag-and-drop Kanban pipelines, mass broadcast marketing, visual automations,
                                and hybrid RAG AI reply assistants.
                            </p>

                            <div className={styles.ctaGroup}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    Request Live Demo
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <a href="#modules-suite" className={styles.secondaryBtn}>
                                    Architecture &amp; Features
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <Link href="/menext/privacy-policy" className={styles.privacyPolicyHeroBtn}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    Privacy Policy
                                </Link>
                            </div>

                            <div className={styles.statsBar}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Official Meta API</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>&lt; 1s</span>
                                    <span className={styles.statLabel}>Realtime WebSockets</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>AES-256</span>
                                    <span className={styles.statLabel}>Encrypted Secrets</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>Multi-Agent</span>
                                    <span className={styles.statLabel}>Shared Team Inbox</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Live Mockup Visual Card */}
                        <div className={styles.heroVisualWrapper}>
                            <div className={styles.heroVisualCard}>
                                <div className={styles.heroVisualHeader}>
                                    <div className={styles.heroBrand}>
                                        <Image
                                            src="/menext_icon.png"
                                            alt="MeNext App Icon"
                                            width={38}
                                            height={38}
                                            className={styles.heroIconImg}
                                        />
                                        <div>
                                            <div className={styles.heroBrandTitle}>MeNext WhatsApp CRM</div>
                                            <span className={styles.heroBrandTag}>Official Cloud API v21.0+</span>
                                        </div>
                                    </div>
                                    <span className={styles.livePill}>
                                        <span className={styles.liveDot} />
                                        <span>Live Multi-Agent</span>
                                    </span>
                                </div>

                                <div className={styles.heroPreviewChat}>
                                    <div className={styles.chatBubbleCustomer}>
                                        <p>Hi! Can you share pricing for your software and book a live demo for our team?</p>
                                        <div className={styles.chatMeta}>09:41 AM</div>
                                    </div>

                                    <div className={styles.chatBubbleAgent}>
                                        <p>
                                            Hello! Absolutely. Here is our product brochure and available demo slots.
                                            You can pick a time directly below!
                                        </p>
                                        <div className={styles.chatMeta}>
                                            <span>Agent Rahul &bull; 09:41 AM</span>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.5 4.5l-6 6-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.5 4.5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.heroFeaturePillsRow}>
                                    <span className={styles.heroFeaturePill}>
                                        <span>🎙️</span> In-Browser Opus Voice
                                    </span>
                                    <span className={styles.heroFeaturePill}>
                                        <span>🏷️</span> Dynamic CRM Tags
                                    </span>
                                    <span className={styles.heroFeaturePill}>
                                        <span>🤖</span> AI Draft Copilot
                                    </span>
                                    <span className={styles.heroFeaturePill}>
                                        <span>🔔</span> FCM Push Notifications
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OPERATIONAL PILLARS (Top Highlights) */}
            <section className={styles.pillarsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>CORE ARCHITECTURAL PILLARS</span>
                        <h2 className={styles.sectionTitle}>Built for High-Growth Sales &amp; Support Operations</h2>
                        <p className={styles.sectionSubtitle}>
                            Three interconnected engines engineered to eliminate message collisions, automate repetitive
                            conversations, and convert WhatsApp leads into paid customers.
                        </p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        {/* Pillar 1: Shared Team Inbox */}
                        <div className={styles.pillarCard}>
                            <div className={`${styles.pillarIconWrap} ${styles.pillarIconWrapGreen}`}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Multi-Agent Shared Inbox</h3>
                            <p className={styles.pillarDesc}>
                                Unified collaborative workspace. Multiple agents handle the same WhatsApp number simultaneously with zero collision.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={`${styles.bulletDot} ${styles.bulletDotGreen}`} />
                                    <span>Segmented views: All, Mine, Unassigned, Closed</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={`${styles.bulletDot} ${styles.bulletDotGreen}`} />
                                    <span>Live typing indicators &amp; active agent presence</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={`${styles.bulletDot} ${styles.bulletDotGreen}`} />
                                    <span>Built-in WebAssembly Opus voice note recorder</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={`${styles.bulletDot} ${styles.bulletDotGreen}`} />
                                    <span>Permanent media mirroring into Supabase Storage</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Sales Pipelines & Automations */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="18" rx="1" />
                                    <rect x="14" y="3" width="7" height="12" rx="1" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Kanban Deals &amp; Automations</h3>
                            <p className={styles.pillarDesc}>
                                Convert chat conversations into visual pipeline deals and build visual no-code event-driven automations.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Interactive drag-and-drop Kanban board (@dnd-kit)</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Direct deal creation from active WhatsApp messages</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Visual no-code automation tree with If/Else logic</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Official Meta Flows interactive multi-screen forms</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: AI & High-Concurrency Worker */}
                        <div className={styles.pillarCard}>
                            <div className={`${styles.pillarIconWrap} ${styles.pillarIconWrapBlue}`}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                                    <path d="M12 12L2.1 12.05" />
                                    <path d="M12 12a10 10 0 0 1 10-10" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>AI Copilot &amp; Worker Engine</h3>
                            <p className={styles.pillarDesc}>
                                Bring-your-own-key LLM support with hybrid pgvector RAG, paired with standalone queue workers.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>BYOK encrypted keys (Claude, GPT-4o, Gemini, Ollama)</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Autonomous AI bot with turn limits &amp; human handoff</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Decoupled standalone Node.js background runner</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>7 database-backed job queues with retry backoff</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ARCHITECTURE OVERVIEW & TECH STACK SECTION */}
            <section className={styles.archSection}>
                <div className={styles.container}>
                    <div className={styles.archCard}>
                        <div className={styles.sectionHeader} style={{ marginBottom: "1.5rem" }}>
                            <span className={styles.sectionBadge}>SYSTEM ARCHITECTURE</span>
                            <h2 className={styles.sectionTitle}>Decoupled, Resilient Cloud Architecture</h2>
                            <p className={styles.sectionSubtitle}>
                                Built for high concurrency. Web sessions, real-time message feeds, background job queues,
                                and push notification dispatchers operate in complete harmony.
                            </p>
                        </div>

                        <div className={styles.archGrid}>
                            <div className={styles.archStackBlock}>
                                <h4 className={styles.archBlockTitle}>
                                    <span>⚡</span> Frontend &amp; API
                                </h4>
                                <p className={styles.archBlockText}>
                                    Next.js 16 App Router, React 19, Server Actions, TypeScript, Tailwind CSS v4, Lucide Icons,
                                    and Radix primitives.
                                </p>
                            </div>

                            <div className={styles.archStackBlock}>
                                <h4 className={styles.archBlockTitle}>
                                    <span>🐘</span> Supabase &amp; Database
                                </h4>
                                <p className={styles.archBlockText}>
                                    PostgreSQL 15+, Supabase SSR Auth, Realtime WebSockets, Supabase Storage, and strict Row-Level Security (RLS) on 100% of tables.
                                </p>
                            </div>

                            <div className={styles.archStackBlock}>
                                <h4 className={styles.archBlockTitle}>
                                    <span>⚙️</span> Background Worker
                                </h4>
                                <p className={styles.archBlockText}>
                                    Standalone Node.js worker runner bundled with esbuild (`dist/worker.mjs`) executing mass broadcasts, FCM notifications, and RAG indexing.
                                </p>
                            </div>
                        </div>

                        {/* ASCII Architecture Flow Box */}
                        <pre className={styles.archDiagramCode}>
{`                          ┌────────────────────────┐
                          │   Meta WhatsApp Cloud  │
                          └───────────┬────────────┘
                                      │ Webhooks & Graph API v21.0+
                                      ▼
┌─────────────────┐       ┌────────────────────────┐       ┌─────────────────┐
│ Next.js 16 App  │ ◄───► │ Supabase (PostgreSQL)  │ ◄───► │ Worker Engine   │
│ (Dashboard/API) │       │ Auth, DB, RLS, Storage │       │ (Queues/Jobs)   │
└─────────────────┘       └────────────────────────┘       └─────────────────┘
         ▲                                                          ▲
         │                                                          │
         └───────────── Firebase Cloud Messaging (FCM) ─────────────┘
                                      │
                                      ▼
                         Native Mobile App (menext)`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* 4. PRIVACY POLICY SPOTLIGHT BANNER */}
            <section className={styles.privacyBannerSection}>
                <div className={styles.container}>
                    <div className={styles.privacyBannerCard}>
                        <div>
                            <span className={styles.privacyBadge}>SECURITY &amp; COMPLIANCE</span>
                            <h2 className={styles.privacyHeading}>Privacy Policy for MeNext</h2>
                            <p className={styles.privacyText}>
                                We are committed to complete transparency regarding your data. Review our official Privacy Policy
                                detailing device permissions, end-to-end data encryption, Firebase Cloud Messaging (FCM) usage,
                                and 30-day account deletion rights under Google Play Developer guidelines.
                            </p>
                            <div className={styles.privacyButtons}>
                                <Link href="/menext/privacy-policy" className={styles.privacyBtnPrimary}>
                                    Read Full Privacy Policy
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <a href="#security-rbac" className={styles.privacyBtnOutline}>
                                    Inspect RBAC &amp; RLS Security
                                </a>
                            </div>
                        </div>

                        <div className={styles.privacyPermissionsCard}>
                            <h4 className={styles.permissionsCardTitle}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                Key Device Permissions
                            </h4>
                            <ul className={styles.permissionList}>
                                <li className={styles.permissionItem}>
                                    <span className={styles.permissionName}>POST_NOTIFICATIONS</span>
                                    <span>Real-time FCM chat alerts</span>
                                </li>
                                <li className={styles.permissionItem}>
                                    <span className={styles.permissionName}>RECORD_AUDIO</span>
                                    <span>In-chat Opus voice notes</span>
                                </li>
                                <li className={styles.permissionItem}>
                                    <span className={styles.permissionName}>CAMERA</span>
                                    <span>Photo attachments in chat</span>
                                </li>
                                <li className={styles.permissionItem}>
                                    <span className={styles.permissionName}>READ_MEDIA_*</span>
                                    <span>Document and image sharing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. MENEXT MODULE DEEP DIVE (14 Modules Sequential Stack) */}
            <section className={styles.modulesSection} id="modules-suite">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>COMPLETE FEATURE SPECIFICATION</span>
                        <h2 className={styles.sectionTitle}>14 Core System Modules &amp; Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore how each specialized subsystem inside MeNext powers your WhatsApp operations,
                            automates client engagements, and protects business data.
                        </p>
                    </div>

                    {/* Quick Anchor Jump Bar */}
                    <div className={styles.quickNavWrapper}>
                        <div className={styles.quickNavTitle}>
                            <span>Jump to MeNext Architecture Module</span>
                            <span>{modulesData.length} Modules Available</span>
                        </div>
                        <div className={styles.quickNavList}>
                            {modulesData.map((m) => (
                                <a key={m.id} href={`#${m.id}`} className={styles.quickNavBtn}>
                                    <span className={styles.quickNavDot} style={{ backgroundColor: m.theme.accent }} />
                                    <span>{m.shortTitle}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sequential Stack of 14 Modules */}
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
                                                Module {String(mIndex + 1).padStart(2, "0")} &bull; {m.shortTitle}
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
                                            {m.features.length} Sub-Capabilities
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

            {/* 6. MOBILE APP & PWA SHOWCASE */}
            <section className={styles.mobileShowcaseSection}>
                <div className={styles.container}>
                    <div className={styles.mobileShowcaseGrid}>
                        <div className={styles.mobileShowcaseText}>
                            <span className={styles.sectionBadge}>NATIVE MOBILE APP &amp; PWA</span>
                            <h2 className={styles.mobileShowcaseTitle}>Manage WhatsApp CRM on the Go with MeNext Mobile</h2>
                            <p className={styles.mobileShowcaseDesc}>
                                Never leave a high-intent customer waiting. The MeNext mobile application brings the full power of
                                the shared inbox, lead pipelines, broadcast monitoring, and voice messaging directly to your pocket.
                            </p>

                            <ul className={styles.mobileChecklist}>
                                <li className={styles.mobileCheckItem}>
                                    <div className={styles.mobileCheckIcon}>
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Instant Push Alerts (FCM HTTP v1):</strong> Real-time alerts for incoming WhatsApp chats and assigned leads.
                                    </div>
                                </li>
                                <li className={styles.mobileCheckItem}>
                                    <div className={styles.mobileCheckIcon}>
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Voice Notes &amp; Media Attachments:</strong> Record voice notes and send photos or PDFs on the go.
                                    </div>
                                </li>
                                <li className={styles.mobileCheckItem}>
                                    <div className={styles.mobileCheckIcon}>
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Mobile Kanban Sales Stages:</strong> Progress lead deals across pipeline stages with simple touch gestures.
                                    </div>
                                </li>
                                <li className={styles.mobileCheckItem}>
                                    <div className={styles.mobileCheckIcon}>
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>PWA Home Screen Install:</strong> Works across Android, iOS, Windows, and macOS devices.
                                    </div>
                                </li>
                            </ul>

                            <div className={styles.ctaGroup}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    Get Mobile App Access
                                </Link>
                                <Link href="/menext/privacy-policy" className={styles.secondaryBtn}>
                                    Review Mobile Privacy Policy
                                </Link>
                            </div>
                        </div>

                        {/* Phone Mockup Frame */}
                        <div className={styles.mobileMockupContainer}>
                            <div className={styles.phoneFrame}>
                                <div className={styles.phoneScreen}>
                                    <Image
                                        src="/menext_screenshot.png"
                                        alt="MeNext Mobile App Interface"
                                        width={280}
                                        height={560}
                                        className={styles.phoneImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. RBAC & SECURITY TABLE */}
            <section className={styles.securitySection} id="security-rbac">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>ENTERPRISE RBAC MATRIX</span>
                        <h2 className={styles.sectionTitle}>Strict Role-Based Access Control</h2>
                        <p className={styles.sectionSubtitle}>
                            Protect customer data with four granular permission levels, 100% PostgreSQL Row-Level Security,
                            and authenticated AES-256-GCM symmetric encryption.
                        </p>
                    </div>

                    <div className={styles.rbacTableCard}>
                        <table className={styles.rbacTable}>
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Permissions &amp; Capabilities</th>
                                    <th>Target Team Member</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className={`${styles.rbacRoleBadge} ${styles.roleOwner}`}>Owner</span>
                                    </td>
                                    <td>
                                        Full system control, subscription billing, WhatsApp phone connection &amp; WABA migration,
                                        Meta App secrets, API key generation, ownership transfer, and account deletion.
                                    </td>
                                    <td>Company Founders &amp; Chief Executives</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className={`${styles.rbacRoleBadge} ${styles.roleAdmin}`}>Admin</span>
                                    </td>
                                    <td>
                                        Manage team members &amp; invitations, configure visual automations, submit Meta templates,
                                        customize sales pipelines, manage product catalogs, and review audit logs.
                                    </td>
                                    <td>Operations Leads &amp; Support Managers</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className={`${styles.rbacRoleBadge} ${styles.roleAgent}`}>Agent</span>
                                    </td>
                                    <td>
                                        View shared team inbox, claim unassigned chats, reply to customers, record voice notes,
                                        manage contact tags &amp; attributes, create pipeline deals, and launch targeted broadcasts.
                                    </td>
                                    <td>Frontline Support Reps &amp; Sales Agents</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className={`${styles.rbacRoleBadge} ${styles.roleViewer}`}>Viewer</span>
                                    </td>
                                    <td>
                                        Read-only access to customer chat history, contact directories, sales pipeline stages,
                                        and executive reporting dashboards. No message sending permissions.
                                    </td>
                                    <td>Auditors, Trainees &amp; Stakeholders</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8. FREQUENTLY ASKED QUESTIONS */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className={styles.sectionTitle}>Everything You Need to Know About MeNext</h2>
                        <p className={styles.sectionSubtitle}>
                            Have questions regarding WhatsApp Business API connections, multi-agent setup, AI features, or compliance?
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
                                            width="18"
                                            height="18"
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

            {/* 9. BOTTOM CTA BANNER */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <span className={styles.bannerBadge}>ACCELERATE YOUR REVENUE</span>
                        <h2 className={styles.bannerHeading}>Transform Your Customer Conversations with MeNext</h2>
                        <p className={styles.bannerDesc}>
                            Empower your team with a unified WhatsApp inbox, visual sales pipelines, and intelligent AI replies.
                            Deliver faster customer responses, close more deals, and scale on WhatsApp with Doonext.
                        </p>
                        <div className={styles.bannerButtons}>
                            <Link href="/contact" className={styles.bannerBtnPrimary}>
                                Request Free Live Demo
                            </Link>
                            <Link href="/menext/privacy-policy" className={styles.bannerBtnOutline}>
                                Read Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

