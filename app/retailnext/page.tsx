"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./retailnext.module.css";

interface SubFeature {
    name: string;
    code: string;
    description: string;
    highlights: string[];
    operationalPill: string;
    previewBadge: string;
    previewDetail: string;
}

interface ManagerTheme {
    accent: string;
    lightBg: string;
    border: string;
    badgeBg: string;
}

interface ManagerModule {
    id: string;
    title: string;
    shortTitle: string;
    tagline: string;
    theme: ManagerTheme;
    capabilities: string[];
    icon: React.ReactNode;
    features: SubFeature[];
}

export default function RetailNextPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const modulesData: ManagerModule[] = [
        {
            id: "system-architecture",
            title: "System Architecture & Design Standards",
            shortTitle: "Architecture",
            tagline: "100% Dynamic PostgreSQL cloud database via Supabase REST APIs, standardized 24-item pagination, and zero mock data.",
            theme: {
                accent: "#5e2b9d",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["Supabase PostgreSQL", "Standard 24-Item Pagination", "Strict Zero Mock Data", "Multi-Tenant Isolation"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            ),
            features: [
                {
                    name: "100% Dynamic Data Architecture",
                    code: "ARCH-01",
                    description: "Every figure, sales ledger, inventory metric, and customer account is queried live from Supabase PostgreSQL tables via REST APIs. Zero mock arrays or hardcoded lists.",
                    highlights: [
                        "Real-time transactional integrity across all registers",
                        "Row-Level Security (RLS) policies protecting tenant stores",
                        "Sub-second REST queries with automated connection pooling",
                        "Optimized indexing for multi-million transaction histories"
                    ],
                    operationalPill: "🐘 Live Supabase PostgreSQL",
                    previewBadge: "Data Mode: 100% Dynamic Live Cloud DB",
                    previewDetail: "Zero hardcoded mock data. Real-time REST endpoints sync all POS counters and inventory bins."
                },
                {
                    name: "Standardized 24-Item Pagination",
                    code: "ARCH-02",
                    description: "Universal pagination across all registers, directories, orders, and inventory tables enforcing precisely 24 items per page with complete first/prev/page/next/last controls.",
                    highlights: [
                        "Enforced 24 records per page across all system directories",
                        "Dynamic pagination controls: First, Previous, Page Numbers, Next, Last",
                        "Total count and active range indicators (e.g., Showing 1-24 of 1,842)",
                        "Consistent URL query synchronization (?page=...&limit=24)"
                    ],
                    operationalPill: "📄 Unified 24-Item Pagination",
                    previewBadge: "Standard: 24 Records Per Page Enforced",
                    previewDetail: "Uniform navigation controls across all sales registers, customer lists, and product tables."
                },
                {
                    name: "Royal Purple Brand & Status Accents",
                    code: "ARCH-03",
                    description: "Engineered around Royal Indigo/Purple (#5e2b9d) with standardized status accents: Emerald (success/active), Rose (returns/refunds), Indigo (exchanges/credit), Sky Blue (UPI/QR), and Amber (low stock/card).",
                    highlights: [
                        "Royal Purple (#5e2b9d) brand theme with #4e2284 hover states",
                        "Emerald (#10b981): Cash tender, active stock, successful bills",
                        "Rose (#e11d48): Product returns, refunds, out-of-stock alarms",
                        "Indigo (#6366f1): Exchanges, store credits, exchange vouchers",
                        "Sky Blue (#0ea5e9): UPI/QR tender & Amber (#f59e0b): Low stock alerts"
                    ],
                    operationalPill: "🎨 Harmonized Status Palette",
                    previewBadge: "Brand: Royal Purple (#5e2b9d) System",
                    previewDetail: "Clear visual cues for instant cashier recognition across high-speed counter checkouts."
                }
            ]
        },
        {
            id: "dashboard",
            title: "Executive Dashboard",
            shortTitle: "Dashboard",
            tagline: "The command center for store owners and retail supervisors, delivering 9 interactive visual charts and real-time KPIs.",
            theme: {
                accent: "#059669",
                lightBg: "#f0fdf4",
                border: "#bbf7d0",
                badgeBg: "#dcfce7",
            },
            capabilities: ["9 Visual Analytics Charts", "Real-Time KPI Cards", "Date Range Presets", "Recent 24 Orders Register"],
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
                    name: "Real-Time KPI Cards & Date Presets",
                    code: "DASH-01",
                    description: "Monitor Gross Revenue, Net Sales, Tender Split (Cash/UPI/Card), Orders Velocity, Customer Reach, GST Liability, and Catalog Valuation across 6 instant date filters.",
                    highlights: [
                        "KPIs: Gross Revenue, Net Sales, Orders Count, Average Order Value (AOV)",
                        "Tender breakdown: Real-time split across Cash, UPI, and Card collections",
                        "Catalog health: Stock valuation at retail and cost, low stock warnings",
                        "Instant date filters: Today, Yesterday, Last 7 Days, Last 30 Days, This Month, All Time"
                    ],
                    operationalPill: "⚡ Instant KPI Calculations",
                    previewBadge: "Today's Gross: ₹1,42,850 • 98 Bills Settled",
                    previewDetail: "Tender: Cash ₹54,200 | UPI ₹62,450 | Card ₹26,200 • Catalog Value: ₹18.4 Lakhs."
                },
                {
                    name: "9 Interactive Visual Analytics Charts",
                    code: "DASH-02",
                    description: "Comprehensive visual intelligence tracking daily revenues, tender distribution, peak hourly rush, top products, category market share, and cashier leaderboard.",
                    highlights: [
                        "Dual-axis Area chart: Revenue & Order Velocity trends",
                        "Donut chart: Payment Tender distribution (Cash vs UPI vs Card)",
                        "12-hour bar chart: Hourly store footfall and peak rush hours",
                        "Ranked leaderboards: Top best-selling products and cashier sales collections",
                        "Financial stack: Subtotal vs GST tax liability vs promotional discounts"
                    ],
                    operationalPill: "📊 9 Dynamic Chart Engines",
                    previewBadge: "Peak Rush: 06:00 PM - 08:30 PM (42% Volume)",
                    previewDetail: "Hourly matrix active. Donut chart shows UPI leading at 43.7% of daily collections."
                },
                {
                    name: "Recent Transactions Register (24 Orders)",
                    code: "DASH-03",
                    description: "Live operational feed displaying the latest 24 transactions with customer names, items count, grand totals, and tender badges, with direct links to full sales registers.",
                    highlights: [
                        "Shows latest 24 orders with real-time WebSocket refresh",
                        "Displays customer name, items count, bill status, and tender badges",
                        "1-click link to view full itemized invoice modal or reprint receipt",
                        "Instant audit flags for returns, exchanges, or cancelled bills"
                    ],
                    operationalPill: "🧾 Live 24-Order Feed",
                    previewBadge: "Latest: #INV-4921 • ₹3,490 • Split Tender",
                    previewDetail: "Customer: Rajesh Kumar • 4 items • Cash ₹1,490 + UPI ₹2,000 • Status: Settled."
                }
            ]
        },
        {
            id: "pos",
            title: "Point of Sale (POS) Billing Engine",
            shortTitle: "POS Billing",
            tagline: "High-velocity counter checkout terminal engineered for rapid touch/barcode operations with automated exchange credit detection.",
            theme: {
                accent: "#5e2b9d",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["Barcode Auto-Enter", "Exchange Credit Banner", "Hold/Recall Draft Carts", "Dual 58/80mm & A4 Print"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            features: [
                {
                    name: "Barcode Scan & Instant SKU Lookup",
                    code: "POS-01",
                    description: "Ultra-fast barcode scanning with auto-add on scanner Enter trigger, combined with multi-parameter live search across titles, SKUs, and barcodes simultaneously.",
                    highlights: [
                        "Instant auto-add on scanner Enter trigger (< 15ms)",
                        "Simultaneous search across Product Title, SKU, and Barcode",
                        "Visual product touch grid with category quick-pills & stock badges",
                        "Selling price and MRP comparison with inline savings display"
                    ],
                    operationalPill: "⚡ Auto-Enter Barcode Scanner",
                    previewBadge: "Scanner Active • Auto-Add on Enter Key",
                    previewDetail: "Barcode 890412891204 scanned: Linen Shirt Size L added to cart in 12ms."
                },
                {
                    name: "Automated Exchange Credit Redemption Banner",
                    code: "POS-02",
                    description: "Detects if the assigned customer holds unused product exchange credit from previous returns, displaying an interactive banner to deduct credit in 1 click.",
                    highlights: [
                        "Displays banner: 'Active Exchange Credit Found: ₹X (Voucher #EXC-...)'",
                        "1-click 'Apply Exchange Credit' button immediately deducts credit from bill total",
                        "Dismiss option to preserve credit for future visits",
                        "Automatically links previous bill reference into the new invoice for audit trails"
                    ],
                    operationalPill: "💳 Auto Exchange Voucher Banner",
                    previewBadge: "Active Credit Found: ₹1,499 (Voucher #EXC-904)",
                    previewDetail: "1-click 'Apply Exchange Credit' applied. Total payable reduced from ₹3,850 to ₹2,351."
                },
                {
                    name: "Cart Controls, Multi-Tender & Hold Bills",
                    code: "POS-03",
                    description: "Incremental quantity stepper, salesperson tagging per line item, coupons validation, multi-tender split payments (Cash+UPI+Card), and hold-and-recall draft bills.",
                    highlights: [
                        "Incremental quantity stepper (+/-) and supervisor price override",
                        "Salesperson tagging per line item for sales commission tracking",
                        "Split Tender: Cash + UPI + Card with residual balance indicator",
                        "Hold & Recall: Suspend active carts into quick drawer to serve next customer",
                        "Dual print templates: 3-inch (80mm) / 2-inch (58mm) Thermal or A4 GST Tax Invoice"
                    ],
                    operationalPill: "🛒 Multi-Tender & Hold Carts",
                    previewBadge: "Tender: Split (Cash ₹500 + UPI ₹1,851)",
                    previewDetail: "Staff commission tagged to Rahul • 3-inch 80mm thermal receipt auto-printed."
                }
            ]
        },
        {
            id: "returns-exchanges",
            title: "Returns & Product Exchanges",
            shortTitle: "Returns & Exchanges",
            tagline: "Full reverse logistics cycle with automatic stock replenishment, itemized reasons, and exchange credit vouchers.",
            theme: {
                accent: "#e11d48",
                lightBg: "#fff1f2",
                border: "#fecdd3",
                badgeBg: "#ffe4e6",
            },
            capabilities: ["Instant Bill Lookup", "Itemized Restocking", "Credit Note (RET-...)", "Exchange Voucher (EXC-...)"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <polyline points="23 20 23 14 17 14" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                </svg>
            ),
            features: [
                {
                    name: "Product Returns Terminal (/returns)",
                    code: "RET-01",
                    description: "Lookup bills by Invoice Number or Mobile, select itemized return products, record return reasons, restock inventory automatically, and disburse refunds.",
                    highlights: [
                        "Search customer bills by Bill Number or Mobile Number (fetches latest 10 bills)",
                        "Itemized selection: pick exact items and quantities being returned",
                        "Reason input: free-text input accompanied by quick tags (Defective, Wrong Size, Mismatch)",
                        "Refund settlement: Cash Refund, UPI Transfer, Store Credit, or Card Reverse",
                        "Generates formal Return Credit Note with return transaction ID (RET-...)"
                    ],
                    operationalPill: "🔁 Return Credit Note (RET-...)",
                    previewBadge: "Return #RET-1092 • ₹1,299 Disbursed",
                    previewDetail: "Reason: Wrong Size • Item auto-restocked into catalog • Store credit note issued."
                },
                {
                    name: "Product Exchanges Terminal (/returns/exchanges)",
                    code: "RET-02",
                    description: "Simplified direct exchange allowing cashiers to accept returned goods without forcing an immediate replacement pick, issuing an Exchange Voucher (EXC-...).",
                    highlights: [
                        "Simplified direct exchange: accept returned goods immediately",
                        "Issues Exchange Voucher / Slip with unique ID (EXC-...) with initial status ACTIVE",
                        "Immediate stock restocking: restores exchanged merchandise into active catalog",
                        "Seamless POS redemption: voucher automatically surfaces during customer's next checkout"
                    ],
                    operationalPill: "🎫 Exchange Voucher (EXC-...)",
                    previewBadge: "Voucher #EXC-4819 • ₹2,450 ACTIVE",
                    previewDetail: "Exchanged item restocked into inventory. Voucher linked to customer mobile for POS auto-deduction."
                }
            ]
        },
        {
            id: "sales-ledgers",
            title: "Sales Register & Transaction Ledgers",
            shortTitle: "Sales Ledgers",
            tagline: "Complete transaction history paginated at 24 items per page with Walk-in, Exchange, and Return badges.",
            theme: {
                accent: "#0284c7",
                lightBg: "#f0f9ff",
                border: "#bae6fd",
                badgeBg: "#e0f2fe",
            },
            capabilities: ["24-Record Pagination", "Walk-in/Exchange/Return Badges", "Shift X/Z Audits", "Staff Commission Quotas"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ),
            features: [
                {
                    name: "All Sales Register (/sales)",
                    code: "SALES-01",
                    description: "Comprehensive invoices register displaying all store transactions with deep date presets, tender filters, bill type badges, and reverse transaction tracking.",
                    highlights: [
                        "Enforces 24 records per page with search across Invoice, Name, or Mobile",
                        "Bill Type Badges: Walk-in Bill (emerald), Exchange Bill (purple Ref: #{prevBill}), Return Bill (rose)",
                        "Exchange & Return column: Displays '↩ X Returned', '⇄ Y Exchanged', or 'None (0 Ret / 0 Exc)'",
                        "Actions: View full invoice modal, reprint thermal slip, or generate A4 PDF invoice"
                    ],
                    operationalPill: "📑 24-Item Sales Register",
                    previewBadge: "Bill #RN-4892 • Exchange Bill (Ref: #RN-4120)",
                    previewDetail: "Badge: ⇄ 1 Exchanged • Payment: UPI • Net Amount: ₹1,650 • Cashier: Rahul."
                },
                {
                    name: "Counter Sales & Balancing (/sales/counter-sales)",
                    code: "SALES-02",
                    description: "Shift opening float declarations, continuous drawer float tracking, midday cash drops, and end-of-day register balancing comparing software receipts against drawer counts.",
                    highlights: [
                        "Shift opening float declaration and counter cash drawer tracking",
                        "Physical drawer count vs system cash discrepancy alerts",
                        "Automated X-Report (mid-shift summary) & Z-Report (day closing summary)",
                        "Cashier handover logs with supervisor sign-off verification"
                    ],
                    operationalPill: "🧾 Shift X/Z Reconciliation",
                    previewBadge: "Counter #01 • Float: ₹5,000 Verified",
                    previewDetail: "Z-Report closing generated. Physical cash: ₹48,200 matches software tally precisely."
                },
                {
                    name: "Employee Sales Performance (/sales/employee-sales)",
                    code: "SALES-03",
                    description: "Sales revenue generated per salesperson, tracking average bill value, conversion volumes, and earned commissions to power staff incentive programs.",
                    highlights: [
                        "Salesperson-wise revenue attribution and quota tracking",
                        "Average bill value and transaction count per sales rep",
                        "Commission percentage rules applied automatically",
                        "Leaderboard rankings driving healthy floor competition"
                    ],
                    operationalPill: "🎯 Commission Attribution",
                    previewBadge: "Rep Ananya • Gross: ₹94,800 (118% Quota)",
                    previewDetail: "38 orders handled • Average bill value: ₹2,495 • Earned Commission: ₹2,844."
                }
            ]
        },
        {
            id: "crm-customers",
            title: "Customer Relationship Management (CRM)",
            shortTitle: "CRM Customers",
            tagline: "Searchable customer directory paginated at 24 records per page and 360° individual profiles with 4 dedicated tabs.",
            theme: {
                accent: "#7c3aed",
                lightBg: "#faf5ff",
                border: "#ddd6fe",
                badgeBg: "#ede9fe",
            },
            capabilities: ["24-Item Customer Directory", "360° Customer Profile", "4 Standalone Tabs", "1-Click Quick Bill"],
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
                    name: "Customer Directory (/customers)",
                    code: "CRM-01",
                    description: "Master database of retail shoppers and wholesale B2B clients paginated at 24 records per page with search across Name, Phone, Email, and Code.",
                    highlights: [
                        "Master records: Name, Mobile, Landline, Email, Full Address, City, PIN",
                        "Financial & Tax: GSTIN, State/Place of Supply, Credit Limit, Credit Days, Opening Balance",
                        "Segmentation: Customer Group, Classification, Discount %, Stop Credit switch",
                        "Quick Bill Action: 1-click launcher opening POS billing with customer preloaded"
                    ],
                    operationalPill: "👥 24-Record Directory",
                    previewBadge: "Customer: Vikramaditya Patel • VIP Gold",
                    previewDetail: "Credit Limit: ₹50,000 • Outstanding: ₹0.00 • 1-click 'Quick Bill' launcher active."
                },
                {
                    name: "Individual Customer 360° Profile (/customers/individual)",
                    code: "CRM-02",
                    description: "Comprehensive customer dossier with URL deep-linking (?id=..., ?phone=..., ?tab=...), header stat cards, and 4 dedicated standalone tabs.",
                    highlights: [
                        "Header Stat Cards: Total Purchases (₹), Orders Count, Returns Count, Exchanges Count, Loyalty Points",
                        "Tab 1 (Profile Details): Address, credit terms, tax details, communication preferences",
                        "Tab 2 (Orders & Bills): Paginated list of all customer invoices with item breakdowns",
                        "Tab 3 (Returns Tab): All product returns logged, total refund disbursed (₹), items returned count, search filter, and '+ Record Return' button",
                        "Tab 4 (Exchanges Tab): All exchange vouchers issued, total exchange credit, active balance, voucher status (ACTIVE CREDIT / REDEEMED IN BILL), and '+ New Exchange Voucher' button"
                    ],
                    operationalPill: "👤 360° Dossier (4 Tabs)",
                    previewBadge: "Profile: Priya Sharma • 4 Dedicated Tabs",
                    previewDetail: "Purchases: ₹42,800 • Orders: 14 • Exchanges Tab: ₹1,499 Active Credit available."
                }
            ]
        },
        {
            id: "product-catalog",
            title: "Product Catalog & Variation Matrix",
            shortTitle: "Product Matrix",
            tagline: "Master catalog paginated at 24 items per page, hierarchical categories with default GST slabs, and multi-variant matrices.",
            theme: {
                accent: "#0d9488",
                lightBg: "#f0fdfa",
                border: "#99f6e4",
                badgeBg: "#ccfbf1",
            },
            capabilities: ["24-Item Catalog Master", "Size × Color Variations", "Hierarchical Categories", "Automated GST Tax Slabs"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            ),
            features: [
                {
                    name: "Master Products Catalog (/products)",
                    code: "PROD-01",
                    description: "Standardized 24 items per page directory with search across Title, SKU, Barcode, and Brand, paired with comprehensive Add/Edit modal dialogs.",
                    highlights: [
                        "Directory search by Title, SKU, Barcode, and Brand (24 items/page)",
                        "Stock filter: In Stock, Low Stock (≤ 5), Out of Stock",
                        "Pricing & Tax: Cost Price, Selling Price (List Price), MRP, GST Rate (0-28%), Tax Inclusion flag",
                        "Inventory controls: Current Stock, Low Stock Reorder Threshold, UOM (Pcs, Box, Kg)"
                    ],
                    operationalPill: "📦 24-Item Master Catalog",
                    previewBadge: "SKU: RN-DRS-109 • Selling Price: ₹1,499",
                    previewDetail: "Cost: ₹720 • MRP: ₹1,999 • GST Rate: 12% • Stock: 48 pcs across 2 outlets."
                },
                {
                    name: "Categories & Subcategories (/categories)",
                    code: "PROD-02",
                    description: "Organize products into hierarchical departments and subcategories with default GST tax brackets automatically applied during product entry.",
                    highlights: [
                        "Multi-level category hierarchy (Department > Category > Subcategory)",
                        "Default GST tax slab and HSN code assignment at category level",
                        "POS quick-touch tile groupings for fast cashier navigation",
                        "Departmental gross profit margin analysis"
                    ],
                    operationalPill: "📂 Category GST Brackets",
                    previewBadge: "Apparel > Women > Ethnic Kurtis (12% GST)",
                    previewDetail: "HSN 6204 auto-assigned. Quick tile visible on POS Billing Counter 1 & 2."
                },
                {
                    name: "Product Variations Matrix (/variations)",
                    code: "PROD-03",
                    description: "Manage multi-variant apparel and retail products across Sizes (S, M, L, XL, XXL), Colors, Fabrics, and Fits with unique SKUs and barcodes.",
                    highlights: [
                        "Variant builder across Sizes (S, M, L, XL, XXL), Colors, and Fabrics",
                        "Generates distinct SKU and barcode per variant permutation",
                        "Independent stock counts and pricing tiers per variant",
                        "Unified reporting rolling up to the parent master item"
                    ],
                    operationalPill: "🎨 Multi-Variant Matrix",
                    previewBadge: "Sizes [S, M, L, XL] × Colors [Navy, Olive]",
                    previewDetail: "8 distinct variant SKUs auto-generated with unique barcodes and inventory levels."
                }
            ]
        },
        {
            id: "barcode-studio",
            title: "Barcode & Price Label Studio",
            shortTitle: "Barcode Studio",
            tagline: "Custom label designer supporting thermal rolls, A4 sheets, Code 128, EAN-13, and batch printing.",
            theme: {
                accent: "#4338ca",
                lightBg: "#eef2ff",
                border: "#c7d2fe",
                badgeBg: "#e0e7ff",
            },
            capabilities: ["Thermal Roll (38x25, 50x25)", "A4 Sheets (24/48-up)", "Code 128 & EAN-13 & QR", "Batch Inward Printing"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5v14" />
                    <path d="M8 5v14" />
                    <path d="M12 5v14" />
                    <path d="M17 5v14" />
                    <path d="M21 5v14" />
                </svg>
            ),
            features: [
                {
                    name: "Custom Label Designer (/barcode)",
                    code: "BAR-01",
                    description: "Design custom barcode and price stickers incorporating store name, product title, SKU, barcode graphic, MRP, sale price, and variant tags.",
                    highlights: [
                        "Visual label layout editor with customizable fields",
                        "Supported barcode types: Code 128, EAN-13, and QR Codes",
                        "Includes store logo, MRP, selling price, and size/color tags",
                        "Dynamic preview rendering with exact millimeter scaling"
                    ],
                    operationalPill: "🏷️ Drag-and-Drop Label Studio",
                    previewBadge: "Template: 50×25mm Thermal Label Roll",
                    previewDetail: "Code 128 barcode + MRP ₹1,999 + Sale ₹1,499 + Store Branding verified."
                },
                {
                    name: "Multi-Paper Support & Batch Printing",
                    code: "BAR-02",
                    description: "Pre-configured print profiles for thermal label rolls (38x25mm, 50x25mm, 50x50mm) and A4 sticker sheets (24-up, 48-up labels) with 1-click batch generation.",
                    highlights: [
                        "Thermal rolls: 38×25mm, 50×25mm, 50×50mm for Zebra, TSC, TVS printers",
                        "A4 multi-up sheets: 24-up and 48-up sheet printing for laser printers",
                        "Batch printing triggered straight from vendor inward invoices (GRN)",
                        "Quantity multiplier matching received stock volume automatically"
                    ],
                    operationalPill: "🖨️ Thermal & A4 Sheet Profiles",
                    previewBadge: "Batch: 120 Labels Generated from GRN #48",
                    previewDetail: "Direct thermal USB/LAN print queue active. Zero label alignment offset."
                }
            ]
        },
        {
            id: "discounts-loyalty",
            title: "Discounts, Coupons & Loyalty Engine",
            shortTitle: "Discounts & Loyalty",
            tagline: "Order-level bill coupons, product-specific BOGO rules, and exclusive customer loyalty vouchers.",
            theme: {
                accent: "#9333ea",
                lightBg: "#faf5ff",
                border: "#e9d5ff",
                badgeBg: "#f3e8ff",
            },
            capabilities: ["Order Coupons (FESTIVE20)", "Product Coupons & BOGO", "Customer Loyalty VIP Vouchers", "Margin Protection"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="5" x2="5" y2="19" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
            ),
            features: [
                {
                    name: "Order / Bill Coupons (/discounts/order-coupons)",
                    code: "DISC-01",
                    description: "Create promotional coupon codes applied to the entire cart at checkout with minimum spend thresholds, flat or percentage savings, and caps.",
                    highlights: [
                        "Codes like FESTIVE20, FLAT500 with flat or percentage discount rules",
                        "Minimum cart value prerequisites and maximum discount caps",
                        "Usage limit rules per individual customer and scheduling dates",
                        "Automated validation in POS billing with instant net savings display"
                    ],
                    operationalPill: "🎟️ Cart-Level Promo Codes",
                    previewBadge: "Coupon: FESTIVE20 (Min Cart: ₹2,000)",
                    previewDetail: "Auto-applies 20% discount (capped at ₹500). Active until Sunday midnight."
                },
                {
                    name: "Product Coupons & BOGO (/discounts/product-coupons)",
                    code: "DISC-02",
                    description: "Run targeted promotional pricing on specific items, categories, or brands including Buy-One-Get-One (BOGO) deals with margin protection.",
                    highlights: [
                        "SKU-specific, brand-specific, and category-wide discount rules",
                        "Buy 2 Get 1 Free (BOGO) combo deal support",
                        "Automatic discount deduction upon scanning items at counter",
                        "Margin protection rules prohibiting negative-margin sales"
                    ],
                    operationalPill: "🛍️ BOGO & Clearance Combos",
                    previewBadge: "Buy 2 Get 1 Free • Summer Shirts SKU",
                    previewDetail: "Discount applies to lowest-priced item instantly when scanned at the till."
                },
                {
                    name: "Customer Loyalty Coupons (/discounts/customer-coupons)",
                    code: "DISC-03",
                    description: "Exclusive VIP coupons and milestone vouchers restricted to specific customer groups or individual customer mobile numbers.",
                    highlights: [
                        "Single-use promo codes restricted to specific customer phone numbers",
                        "Birthday, anniversary, and VIP tier milestone perks",
                        "Direct delivery via SMS and WhatsApp integration",
                        "Redemption tracking and conversion analytics"
                    ],
                    operationalPill: "🎁 Personalized VIP Perks",
                    previewBadge: "Birthday Voucher #BDAY-500 • Single-Use",
                    previewDetail: "Linked to mobile 98765***** with automated WhatsApp delivery on customer birthday."
                }
            ]
        },
        {
            id: "inventory-warehouse",
            title: "Inventory, Stock Transfers & Warehouses",
            shortTitle: "Stock & Warehouses",
            tagline: "Real-time stock audit, inter-store stock transfers (STO), multi-warehouse rack/bin picking, and FSN/ABC analytics.",
            theme: {
                accent: "#ea580c",
                lightBg: "#fff7ed",
                border: "#fed7aa",
                badgeBg: "#ffedd5",
            },
            capabilities: ["Multi-Depot Bin Storage", "Inter-Store STO Transfers", "FSN / ABC Velocity", "Expiry Date Safeguards"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            features: [
                {
                    name: "Stock Overview & Inventory Audit (/stock & /inventory)",
                    code: "STK-01",
                    description: "Real-time inventory audit dashboard displaying total SKUs, units on hand, valuation at cost, and retail valuation with low stock warnings.",
                    highlights: [
                        "Real-time audit: total SKUs, units on hand, cost value, retail value",
                        "Automated low stock alerts and reorder threshold reminders",
                        "Negative stock prevention locking sales on depleted inventory",
                        "Physical cycle counting audit tools with variance reconciliation"
                    ],
                    operationalPill: "📊 Real-Time Inventory Audit",
                    previewBadge: "Catalog: 1,842 SKUs • Valuation: ₹28.5L",
                    previewDetail: "Healthy stock: 88% • Low stock: 9% (165 items) • Out-of-stock: 3% (55 items)."
                },
                {
                    name: "Inter-Store Stock Transfers (/stock/transfers)",
                    code: "STK-02",
                    description: "Transfer stock between multiple store branches or central warehouse to retail stores via structured Transfer Order (STO) workflows.",
                    highlights: [
                        "Workflow: Transfer Request > Dispatch Note > Goods in Transit > Inward",
                        "Real-time tracking of in-transit inventory across locations",
                        "Discrepancy and damaged merchandise reporting during inward",
                        "One-click receiving with barcode scanner quantity verification"
                    ],
                    operationalPill: "🚚 Multi-Store STO Transfers",
                    previewBadge: "STO #TR-5401: Warehouse -> Store #03",
                    previewDetail: "Status: In-Transit (Dispatched 11:30 AM). Receiving verification pending barcode scan."
                },
                {
                    name: "Warehouse Racks & Stock Analytics (/warehouse & /stock-analysis)",
                    code: "STK-03",
                    description: "Multi-warehouse location management (Central Depot, Annex, Store Backroom) with aisle/rack/bin tracking, paired with FSN/ABC velocity analytics.",
                    highlights: [
                        "Depot storage hierarchy: Aisle, Rack, Shelf, and Bin allocations",
                        "Fast-Moving vs Slow-Moving analysis (FSN matrix)",
                        "ABC Analysis segmenting revenue contribution per SKU",
                        "Dead stock reporting highlighting items with zero sales in 60/90 days"
                    ],
                    operationalPill: "🏭 Bin Tracking & FSN Matrix",
                    previewBadge: "Bin #A4-R2 • FSN: Fast-Moving (94 units/wk)",
                    previewDetail: "Zero dead stock identified in last 60 days. Recommended reorder: 150 units."
                }
            ]
        },
        {
            id: "vendor-procurement",
            title: "Vendor Management & Procurement",
            shortTitle: "Vendors & PO",
            tagline: "Supplier registry, formal Purchase Orders with lifecycle tracking, GRN inward 3-way matching, and accounts payable aging.",
            theme: {
                accent: "#0891b2",
                lightBg: "#ecfeff",
                border: "#a5f3fc",
                badgeBg: "#cffafe",
            },
            capabilities: ["Supplier KYC & Terms", "Purchase Orders (POs)", "3-Way GRN Reconciliation", "Payables Aging (0-60+ Days)"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="2" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M8 10h.01" />
                    <path d="M16 10h.01" />
                </svg>
            ),
            features: [
                {
                    name: "Supplier Directory & Dues (/vendors & /vendors/due)",
                    code: "VEN-01",
                    description: "Vendor profiles recording contact persons, GSTIN, PAN, credit terms, and a payables dashboard with aging brackets (0-30, 31-60, 60+ days).",
                    highlights: [
                        "Vendor profiles: Contact, Phone, Email, Address, GSTIN, PAN, Credit Terms",
                        "Running account dues ledger showing balances and payment disbursement history",
                        "Payables aging schedule (0-30 days, 31-60 days, 60+ days)",
                        "Upcoming due date alerts preventing late payment interest charges"
                    ],
                    operationalPill: "🏢 Supplier KYC & Aging Ledger",
                    previewBadge: "Apex Textiles Ltd • Due: ₹85,000 in 12 Days",
                    previewDetail: "Aging: 0-30 days bracket. Total purchases YTD: ₹8.4 Lakhs • Rating: 4.9/5."
                },
                {
                    name: "Purchase Orders & GRN Inward (/vendors/orders & /vendors/invoices)",
                    code: "VEN-02",
                    description: "Create formal Purchase Orders with PO lifecycle tracking (Draft > Sent > Partial > Completed) and 3-way inward matching for GST ITC accounting.",
                    highlights: [
                        "PO creation with itemized quantities, delivery dates, and negotiated rates",
                        "PO lifecycle: Draft > Sent > Partially Received > Completed > Cancelled",
                        "Goods Received Notes (GRN) auto-updating product stock upon confirmation",
                        "3-way matching (PO vs Inward GRN vs Vendor Bill) computing Input Tax Credit (ITC)"
                    ],
                    operationalPill: "🛡️ 3-Way GRN Reconciliation",
                    previewBadge: "PO #PO-982 vs Inward Bill #V-8819 Matched",
                    previewDetail: "Stock auto-credited to warehouse depot. Input Tax Credit (ITC) ₹15,240 logged for GST."
                }
            ]
        },
        {
            id: "hr-payroll",
            title: "Human Resources & Payroll",
            shortTitle: "HR & Payroll",
            tagline: "Employee master directory, QR kiosk attendance scanner (/attendance-scan), leave quotas, salary advances, automated payroll, and ID cards.",
            theme: {
                accent: "#d97706",
                lightBg: "#fffbeb",
                border: "#fde68a",
                badgeBg: "#fef3c7",
            },
            capabilities: ["QR Attendance Kiosk", "1-Click Payroll Calculation", "Salary Advance Repayments", "Printable ID Card Studio"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="11" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                </svg>
            ),
            features: [
                {
                    name: "Employee Directory & QR Kiosk (/employees & /attendance-scan)",
                    code: "HR-01",
                    description: "Comprehensive employee directory and a dedicated Attendance Scan Kiosk page where employees scan their ID card barcode/QR to log clock-in and out automatically.",
                    highlights: [
                        "Directory: Name, Mobile, Designation, Department, Date of Joining, Salary, Bank Details",
                        "Daily attendance ledger: In-Time, Out-Time, Total Hours, Present, Late, Half Day",
                        "Dedicated QR Terminal Kiosk (/attendance-scan) using device camera for instant scans",
                        "Automated late clock-in and overtime calculation linked to payroll"
                    ],
                    operationalPill: "📷 QR Kiosk Attendance Scan",
                    previewBadge: "Kiosk Scan: Emp #042 • Clock-In 08:58 AM",
                    previewDetail: "Shift logged on time. Status: Present. Attendance auto-synced to payroll."
                },
                {
                    name: "Leave Quotas & Salary Advances (/employees/leaves & /advances)",
                    code: "HR-02",
                    description: "Track leave balances (Casual, Sick, Earned Leave) with approval workflows, paired with salary advance disbursement and installment repayments.",
                    highlights: [
                        "Track Casual Leave, Sick Leave, and Earned Leave balances",
                        "Leave request approval workflows with automated salary deduction linkage",
                        "Salary advance loans disbursed via Cash or UPI with installment schedules",
                        "Auto-deduction of advance installments during monthly payroll runs"
                    ],
                    operationalPill: "📅 Leave & Advance Repayments",
                    previewBadge: "Advance Loan: ₹10,000 (Installment #2 of 5)",
                    previewDetail: "₹2,000 installment auto-scheduled for payroll deduction. Leave balance: 4 CL available."
                },
                {
                    name: "Automated Payroll & ID Card Studio (/employees/payroll & /id-cards)",
                    code: "HR-03",
                    description: "1-click monthly salary generation incorporating attendance, deductions, sales commissions, and advances, plus an instant printable ID card designer.",
                    highlights: [
                        "1-click salary generation: basic salary, attendance days, leave deductions",
                        "Automated inclusion of sales target commissions and advance repayments",
                        "Generates printable digital employee salary slips",
                        "Employee ID Card Studio: printable staff cards with photo, ID, barcode, logo"
                    ],
                    operationalPill: "💰 1-Click Monthly Payroll",
                    previewBadge: "Net Salary: ₹28,400 • Commission: +₹2,100",
                    previewDetail: "Advance deduction: -₹2,000 linked. Payslip & Barcoded ID Card ready for print."
                }
            ]
        },
        {
            id: "bi-tax-reports",
            title: "Business Intelligence & Tax Reports",
            shortTitle: "BI & Tax Reports",
            tagline: "GSTR-1 tax summaries grouped by tax slabs (0-28%), category/product profitability margins, and hourly peak footfall reports.",
            theme: {
                accent: "#2563eb",
                lightBg: "#eff6ff",
                border: "#bfdbfe",
                badgeBg: "#dbeafe",
            },
            capabilities: ["GSTR-1 Tax Slabs (0-28%)", "Category Profitability", "Hourly Traffic Heatmap", "One-Click Export"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            ),
            features: [
                {
                    name: "GSTR-1 Tax Summary (/analytics)",
                    code: "TAX-01",
                    description: "Taxable value, CGST, SGST, IGST totals grouped by statutory tax slabs (0%, 5%, 12%, 18%, 28%) for seamless monthly GST filing.",
                    highlights: [
                        "Automated calculation of Taxable Value, CGST, SGST, and IGST totals",
                        "Grouped by statutory tax slabs: 0%, 5%, 12%, 18%, 28%",
                        "1-click export to government-compatible Excel and JSON formats",
                        "Reconciliation reports highlighting B2B invoices with customer GSTINs"
                    ],
                    operationalPill: "📑 GSTR-1 Tax Slabs",
                    previewBadge: "GSTR-1 Taxable: ₹14.8L • CGST: ₹88,800 • SGST: ₹88,800",
                    previewDetail: "Slab Breakdown: 12% GST accounts for 68% of sales. Export ready for portal upload."
                },
                {
                    name: "Profitability & Hourly Traffic (/analytics)",
                    code: "TAX-02",
                    description: "Detailed profitability and gross margin analysis per line of business, combined with hourly traffic heatmaps to optimize staff counter scheduling.",
                    highlights: [
                        "Sales velocity by category and individual product margins",
                        "Gross profit margin vs net margin after promotional discounts",
                        "Hourly peak traffic heatmap identifying busiest billing counter rush hours",
                        "Staff scheduling recommendations based on hourly customer counts"
                    ],
                    operationalPill: "📈 Profitability & Traffic Heatmap",
                    previewBadge: "Gross Margin: 38.4% • Peak Hour: 07:00 PM",
                    previewDetail: "Evening rush requires 3 active billing counters. Ethnic wear yields highest margin (44%)."
                }
            ]
        },
        {
            id: "store-preferences",
            title: "Store Setup & Global Preferences",
            shortTitle: "Store Preferences",
            tagline: "Multi-branch store manager, legal entity profiles, thermal printer configurations (58mm vs 80mm), and cash drawer kick pulse.",
            theme: {
                accent: "#16a34a",
                lightBg: "#f0fdf4",
                border: "#bbf7d0",
                badgeBg: "#dcfce7",
            },
            capabilities: ["Multi-Branch Stores", "Thermal 58/80mm Config", "Cash Drawer Kick Pulse", "Barcode Scanner Settings"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            features: [
                {
                    name: "Multi-Store Branch Manager (/stores)",
                    code: "SET-01",
                    description: "Configure multiple store branches, assign active branch locations, set branch-specific GSTIN, phone, address, and receipt footers.",
                    highlights: [
                        "Multi-branch master setup: assign active counter branch",
                        "Branch-specific GSTIN, phone, address, and receipt footers",
                        "Role-based staff assignment restricted to specific physical stores",
                        "Consolidated multi-branch P&L reporting across all outlets"
                    ],
                    operationalPill: "🏢 Multi-Branch Configuration",
                    previewBadge: "Active Store: Flagship Outlet #01 (Hyderabad)",
                    previewDetail: "GSTIN: 36AAAAA0000A1Z5 • 3 Counters Active • Receipts configured."
                },
                {
                    name: "Billing & Hardware Preferences (/settings)",
                    code: "SET-02",
                    description: "Set default tax inclusion, auto-print receipts, barcode scanner auto-add triggers, thermal printer width (58mm vs 80mm), margin offsets, and cash drawer kick pulse.",
                    highlights: [
                        "Billing: default tax inclusion, auto-print receipt on settlement",
                        "Printer: 3-inch (80mm) vs 2-inch (58mm) thermal roll width selection",
                        "Hardware: RJ11 cash drawer kick pulse on cash tender settlement",
                        "Scanner: barcode prefix/suffix settings and sensitivity tuning"
                    ],
                    operationalPill: "🖨️ Thermal 58/80mm & Drawer Pulse",
                    previewBadge: "Hardware: 80mm Thermal + RJ11 Drawer Pulse",
                    previewDetail: "Drawer kick pulse active. Auto-print on payment confirmation enabled."
                }
            ]
        },
        {
            id: "system-utilities",
            title: "System Utilities & Data Tools",
            shortTitle: "Utilities",
            tagline: "Database backup export, CSV/Excel catalog import, cache clearing, and offline synchronization health monitor.",
            theme: {
                accent: "#be185d",
                lightBg: "#fdf2f8",
                border: "#fbcfe8",
                badgeBg: "#fce7f3",
            },
            capabilities: ["DB Backup Export", "CSV/Excel Catalog Import", "Cache Maintenance", "Offline Sync Monitor"],
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            features: [
                {
                    name: "Data Tools & Offline Health (/utilities)",
                    code: "UTIL-01",
                    description: "Database backup export, mass catalog import/export via CSV templates, system cache clearing, and offline sync health monitor.",
                    highlights: [
                        "1-click complete database backup export (JSON/CSV)",
                        "Bulk product catalog import with column matching and error checks",
                        "System cache purging to ensure real-time price & tax slab updates",
                        "Offline synchronization health monitor for resilient counter continuity"
                    ],
                    operationalPill: "💾 Backup & Offline Sync Engine",
                    previewBadge: "Status: Online Sync Healthy (Latency: 14ms)",
                    previewDetail: "Last backup: Today 04:00 AM • 1,842 products verified • Zero synchronization lag."
                }
            ]
        }
    ];

    const faqs = [
        {
            q: "Can RetailNext run across multiple retail branch stores simultaneously?",
            a: "Yes! RetailNext is architected from the ground up for multi-store chains. You can manage central inventory in a master warehouse, transfer stock between branch stores using Inter-Store Transfer Orders (STOs), and view centralized sales performance in real time from any device."
        },
        {
            q: "How does the Automated Exchange Credit Redemption Banner work in POS Billing?",
            a: "When a customer brings merchandise for exchange, the cashier logs it at /returns/exchanges and issues an Exchange Voucher (EXC-...). The next time this customer is selected at POS (/pos), the system automatically detects their active credit and surfaces an interactive banner: 'Active Exchange Credit Found: ₹X (Voucher #EXC-...)'. Clicking 'Apply Exchange Credit' immediately deducts that amount from their bill total!"
        },
        {
            q: "How does RetailNext guarantee data integrity with zero mock data?",
            a: "Every transaction, inventory balance, customer profile, and sales report is queried live from Supabase PostgreSQL tables via secured REST APIs. Zero mock arrays or hardcoded lists are used, and all lists enforce a standardized 24-item pagination with complete pagination controls."
        },
        {
            q: "How does RetailNext handle high-traffic billing counters during peak hours?",
            a: "RetailNext features high-speed keyboard shortcuts, instant barcode scanning with auto-add on Enter, hold-and-recall draft cart capabilities, and multi-tender split payments (Cash + UPI + Card) to ensure customer checkout takes less than 5 seconds per transaction."
        },
        {
            q: "What printing options are supported for receipts and barcode stickers?",
            a: "RetailNext supports dual receipt templates: 3-inch (80mm) or 2-inch (58mm) Thermal Receipts and A4 GST Tax Invoices. For products, the Barcode & Price Label Studio generates Code 128, EAN-13, and QR code stickers on thermal rolls (38x25mm, 50x25mm, 50x50mm) or A4 sticker sheets (24-up, 48-up)."
        },
        {
            q: "How does the Employee QR Attendance Kiosk work?",
            a: "The system provides a dedicated attendance terminal at /attendance-scan. Employees can simply present their barcoded staff ID card to any camera or scanner kiosk, logging clock-in and clock-out automatically. The hours and overtime are synced directly into the 1-click monthly payroll engine."
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            {/* 1. HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>RETAIL NEXT ENTERPRISE SUITE 2026.1</span>
                            <h1 className={styles.title}>
                                Retail Next POS &amp; <br />
                                <span className={styles.highlightText}>Retail ERP</span>{" "}
                                <span className={styles.highlightIndigo}>Platform</span>
                            </h1>
                            <p className={styles.description}>
                                Enterprise-grade retail operating system built on a 100% dynamic PostgreSQL cloud database.
                                High-velocity POS billing, automated exchange vouchers, inter-store stock transfers,
                                employee QR attendance kiosk, and GSTR-1 tax compliance.
                            </p>

                            <div className={styles.ctaGroup}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    Book Live Retail Demo
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <a href="#managers-suite" className={styles.secondaryBtn}>
                                    Explore All 15 Modules
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <div className={styles.statsBar}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>&lt; 5s</span>
                                    <span className={styles.statLabel}>Billing Speed</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Dynamic Supabase</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>24 / page</span>
                                    <span className={styles.statLabel}>Standard Pagination</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>All-in-One</span>
                                    <span className={styles.statLabel}>POS + HR + ERP</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroVisualWrapper}>
                            <Image
                                src="/retail.png"
                                alt="RetailNext POS Billing and Supermarket Terminal"
                                width={680}
                                height={440}
                                className={styles.heroImage}
                                priority
                            />
                            <div className={styles.floatingTag}>
                                <span className={styles.liveDot} />
                                <span>100% Dynamic PostgreSQL Database &bull; Supabase REST</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SYSTEM ARCHITECTURE & DESIGN LANGUAGE SPOTLIGHT */}
            <section className={styles.archDesignSection}>
                <div className={styles.container}>
                    <div className={styles.archBannerCard}>
                        <div className={styles.archHeader}>
                            <div className={styles.archHeaderLeft}>
                                <span className={styles.archBadge}>SYSTEM ARCHITECTURE &amp; DESIGN LANGUAGE</span>
                                <h2 className={styles.archTitle}>Enterprise PostgreSQL Data Integrity</h2>
                                <p className={styles.archDesc}>
                                    Retail Next Enterprise Suite 2026.1 operates on a strict zero-mock-data philosophy.
                                    All registers, metrics, and directories enforce standardized 24-item pagination with
                                    real-time Supabase PostgreSQL REST APIs and harmonized status accents.
                                </p>
                            </div>
                            <span className={styles.paginationPill}>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Standard 24 Items / Page Enforced
                            </span>
                        </div>

                        {/* Status Accents Row */}
                        <div className={styles.statusAccentsGrid}>
                            <div className={styles.statusCard}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusColorDot} style={{ backgroundColor: "#10b981" }} />
                                    <span>Emerald Accent</span>
                                </div>
                                <p className={styles.statusDesc}>Successful bills, active stock, cash tender, active credits.</p>
                            </div>

                            <div className={styles.statusCard}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusColorDot} style={{ backgroundColor: "#e11d48" }} />
                                    <span>Rose Accent</span>
                                </div>
                                <p className={styles.statusDesc}>Product returns, refunds, out-of-stock items, urgent alerts.</p>
                            </div>

                            <div className={styles.statusCard}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusColorDot} style={{ backgroundColor: "#6366f1" }} />
                                    <span>Indigo / Purple</span>
                                </div>
                                <p className={styles.statusDesc}>Product exchanges, exchange vouchers, store credit notes.</p>
                            </div>

                            <div className={styles.statusCard}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusColorDot} style={{ backgroundColor: "#0ea5e9" }} />
                                    <span>Sky Blue Accent</span>
                                </div>
                                <p className={styles.statusDesc}>UPI / digital QR payments, system notifications.</p>
                            </div>

                            <div className={styles.statusCard}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusColorDot} style={{ backgroundColor: "#f59e0b" }} />
                                    <span>Amber Accent</span>
                                </div>
                                <p className={styles.statusDesc}>Low stock alerts, card payments, draft hold bills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OPERATIONAL PILLARS (Top Highlights) */}
            <section className={styles.pillarsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>CORE OPERATIONAL PILLARS</span>
                        <h2 className={styles.sectionTitle}>Built for High-Velocity Retail Operations</h2>
                        <p className={styles.sectionSubtitle}>
                            Three interconnected pillars that keep checkout counters running fast,
                            shelves replenished across warehouses, and store management in total command.
                        </p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        {/* Pillar 1: POS Billing */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>High-Speed POS Billing</h3>
                            <p className={styles.pillarDesc}>
                                Lightning checkout designed for peak rushes with keyboard auto-enter, barcode scanner trigger, and split payments.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Fast barcode input with auto-add on Enter trigger</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Automated Exchange Credit Redemption Banner</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Multi-tender payments: Cash, UPI, Card, Split</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Dual thermal receipt (58/80mm) &amp; A4 GST invoice</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Real-time Dashboard */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="9" />
                                    <rect x="14" y="3" width="7" height="5" />
                                    <rect x="14" y="12" width="7" height="9" />
                                    <rect x="3" y="16" width="7" height="5" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Executive Visual Dashboard</h3>
                            <p className={styles.pillarDesc}>
                                9 interactive dynamic charts tracking daily revenues, tender split, peak rush hours, and inventory health.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Dual-axis revenue &amp; order velocity trend chart</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Payment tender split donut &amp; hourly rush matrix</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Cashier leaderboard and best-selling products</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Live 24-order recent transactions register</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Multi-Store & Warehouses */}
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrap}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>Multi-Store &amp; Warehouses</h3>
                            <p className={styles.pillarDesc}>
                                Inter-store stock transfers (STO), multi-warehouse rack/bin storage, and QR kiosk attendance scanner.
                            </p>
                            <ul className={styles.pillarFeatureList}>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Inter-store stock transfer order (STO) workflow</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>Central depot, annex, and backroom bin tracking</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>QR attendance kiosk scanner (/attendance-scan)</span>
                                </li>
                                <li className={styles.pillarFeatureItem}>
                                    <span className={styles.bulletDot} />
                                    <span>1-click monthly staff payroll generation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. POS EXCHANGE CREDIT BANNER PREVIEW COMPONENT */}
            <section className={styles.exchangeBannerSection}>
                <div className={styles.container}>
                    <div className={styles.exchangeBannerCard}>
                        <div className={styles.exchangeBannerLeft}>
                            <div className={styles.exchangeIconBox}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 4 23 10 17 10" />
                                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                                </svg>
                            </div>
                            <div>
                                <h4 className={styles.exchangeBannerTitle}>
                                    Active Exchange Credit Found: ₹1,499 (Voucher #EXC-904)
                                </h4>
                                <p className={styles.exchangeBannerSub}>
                                    Customer Priya Sharma holds unused exchange credit from Return Bill #RET-1092.
                                    Click below to deduct credit from current checkout.
                                </p>
                            </div>
                        </div>

                        <a href="#pos" className={styles.exchangeBannerAction}>
                            <span>Apply Exchange Credit</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. COMPLETE 15-MODULE OPERATIONS MANUAL SUITE */}
            <section className={styles.managersSection} id="managers-suite">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>COMPLETE OPERATIONS MANUAL</span>
                        <h2 className={styles.sectionTitle}>15 Core Retail ERP &amp; POS Modules</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore how each specialized module inside Retail Next automates your retail store operations
                            from the front POS checkout counter to warehouse logistics, staff payroll, and tax compliance.
                        </p>
                    </div>

                    {/* Quick Anchor Jump Bar with Color Accents */}
                    <div className={styles.quickNavWrapper}>
                        <div className={styles.quickNavTitle}>
                            <span>Jump to Retail Next Operational Module</span>
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

                    {/* Sequential Stack of 15 Modules */}
                    <div className={styles.managersStack}>
                        {modulesData.map((m, mIndex) => (
                            <div
                                key={m.id}
                                id={m.id}
                                className={styles.managerBlock}
                                style={
                                    {
                                        "--theme-accent": m.theme.accent,
                                        "--theme-light-bg": m.theme.lightBg,
                                        "--theme-border": m.theme.border,
                                        "--theme-badge-bg": m.theme.badgeBg,
                                    } as React.CSSProperties
                                }
                            >
                                <div className={styles.managerBlockHeader}>
                                    <div className={styles.managerHeaderLeft}>
                                        <div className={styles.managerBlockIcon}>{m.icon}</div>
                                        <div className={styles.managerBlockTitleGroup}>
                                            <span className={styles.managerBlockIndexBadge}>
                                                Module {String(mIndex + 1).padStart(2, "0")} &bull; {m.shortTitle}
                                            </span>
                                            <h3 className={styles.managerBlockTitle}>{m.title}</h3>
                                            <p className={styles.managerBlockTagline}>{m.tagline}</p>
                                        </div>
                                    </div>

                                    <div className={styles.managerHeaderRight}>
                                        <span className={styles.managerCountBadge}>
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
                                                <div className={styles.subFooterMetaRow}>
                                                    <span className={styles.subOperationalPill}>
                                                        {feature.operationalPill}
                                                    </span>
                                                    <span className={styles.subLivePreviewNote}>
                                                        <span className={styles.liveNoteDot} />
                                                        <span>PostgreSQL Live</span>
                                                    </span>
                                                </div>

                                                <div className={styles.previewBadgeCard}>
                                                    <div className={styles.previewBadgeTitle}>{feature.previewBadge}</div>
                                                    <div className={styles.previewBadgeDetail}>{feature.previewDetail}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. VISUAL DEEP DIVE SHOWCASE */}
            <section className={styles.deepDiveSection}>
                <div className={styles.container}>
                    {/* Showcase 1: Retail Operations & POS Management */}
                    <div className={styles.showcaseRow}>
                        <div className={styles.showcaseText}>
                            <span className={styles.showcaseBadge}>OMNICHANNEL POS COMMAND</span>
                            <h2 className={styles.showcaseTitle}>
                                Rapid Checkout &amp; Automatic Exchange Deduction
                            </h2>
                            <p className={styles.showcaseDesc}>
                                Deliver lightning counter checkout in seconds with barcode scanner auto-enter,
                                automatic customer exchange voucher detection, hold-and-recall draft carts,
                                and split payments across Cash, UPI, and Cards.
                            </p>
                            <ul className={styles.showcaseKeyPoints}>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Fast barcode input with auto-add on Enter trigger without clerk lookup delays</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Automated Exchange Credit Redemption Banner applying vouchers in 1 click</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Dual thermal receipt (58/80mm) and A4 GST invoice printing</span>
                                </li>
                            </ul>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Schedule POS Demo
                            </Link>
                        </div>
                        <div className={styles.showcaseImageCard}>
                            <Image
                                src="/retail_banner.jpg"
                                alt="Modern Retail Dashboard with Real Time Analytics"
                                width={620}
                                height={380}
                                className={styles.showcaseImg}
                            />
                        </div>
                    </div>

                    {/* Showcase 2: Warehouse & Stock Transfer Control */}
                    <div className={`${styles.showcaseRow} ${styles.showcaseRowReverse}`}>
                        <div className={styles.showcaseText}>
                            <span className={styles.showcaseBadge}>MULTI-DEPOT INVENTORY &amp; QR KIOSK</span>
                            <h2 className={styles.showcaseTitle}>
                                Inter-Store STO Transfers &amp; Automated Payroll
                            </h2>
                            <p className={styles.showcaseDesc}>
                                Eliminate stock discrepancies across branch stores. Retail Next tracks every single item
                                from supplier purchase orders and warehouse bin allocations to inter-store transfer orders (STOs),
                                while automating daily staff attendance via camera QR scan kiosks.
                            </p>
                            <ul className={styles.showcaseKeyPoints}>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Inter-store stock transfer tracking with real-time transit &amp; inward states</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Dedicated Attendance Kiosk page (/attendance-scan) with instant camera QR scanning</span>
                                </li>
                                <li className={styles.showcaseKeyPointItem}>
                                    <svg className={styles.keyPointCheck} width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.3 4.3L6.5 11.1L2.7 7.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>1-click monthly payroll incorporating attendance days, advances, and commissions</span>
                                </li>
                            </ul>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Explore Inventory Suite
                            </Link>
                        </div>
                        <div className={styles.showcaseImageCard}>
                            <Image
                                src="/retail_inventory.jpg"
                                alt="Warehouse Stock Management and Barcode Scanning"
                                width={620}
                                height={380}
                                className={styles.showcaseImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FREQUENTLY ASKED QUESTIONS */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className={styles.sectionTitle}>Everything You Need to Know About Retail Next</h2>
                        <p className={styles.sectionSubtitle}>
                            Answers regarding multi-store setup, hardware compatibility, exchange credit workflows, and dynamic database architecture.
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

            {/* 8. BOTTOM CTA BANNER */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerCard}>
                        <span className={styles.bannerBadge}>ACCELERATE YOUR RETAIL REVENUE</span>
                        <h2 className={styles.bannerHeading}>Transform Your Retail Store with Retail Next</h2>
                        <p className={styles.bannerDesc}>
                            Join leading supermarkets, fashion outlets, and retail chains simplifying checkout,
                            optimizing multi-store inventory with automated exchange credit vouchers, and boosting profitability.
                        </p>
                        <div className={styles.bannerButtons}>
                            <Link href="/contact" className={styles.bannerBtnPrimary}>
                                Request Free Onsite Demo
                            </Link>
                            <Link href="/contact" className={styles.bannerBtnOutline}>
                                Talk to Retail Specialist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
