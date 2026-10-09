"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./reviews.module.css";

interface Review {
    id: string;
    name: string;
    role: string;
    business: string;
    product: string;
    rating: number;
    date: string;
    headline: string;
    comment: string;
    verified: boolean;
}

const initialReviews: Review[] = [
    {
        id: "1",
        name: "Ramesh K.",
        role: "Proprietor",
        business: "Spice Garden Restaurant",
        product: "BillNext",
        rating: 5,
        date: "2 days ago",
        headline: "Weekend rushes are 10x smoother now",
        comment:
            "BillNext has transformed our table billing and kitchen printing (KOT). Even during rush hours on Sunday evenings, no tickets get dropped. Highly recommend to all food outlet owners!",
        verified: true,
    },
    {
        id: "2",
        name: "Dr. Ananya Rao",
        role: "Chief Pharmacist",
        business: "Lifeline Medicos",
        product: "PharmaNext",
        rating: 5,
        date: "1 week ago",
        headline: "Saved thousands in near-expiry returns",
        comment:
            "The automatic 90-day expiry tracker alerted us before medicines hit our shelf limit. Batch lookups take literally two seconds per barcode scan.",
        verified: true,
    },
    {
        id: "3",
        name: "Suresh Patel",
        role: "Retail Owner",
        business: "Apex Supermart",
        product: "RetailNext",
        rating: 5,
        date: "2 weeks ago",
        headline: "Daily cash register balancing is 100% accurate",
        comment:
            "We operate 4 counters simultaneously. At closing time, daily totals match the system report down to the rupee. Zero inventory discrepancies.",
        verified: true,
    },
    {
        id: "4",
        name: "Karthik Verma",
        role: "Co-Founder",
        business: "Urban Brew Cafe",
        product: "BillNext",
        rating: 5,
        date: "3 weeks ago",
        headline: "Monitor 3 cafes right from my phone",
        comment:
            "The mobile reporting view provides live revenue counters, fastest-selling drinks, and staff efficiency metrics wherever I travel.",
        verified: true,
    },
    {
        id: "5",
        name: "Pooja",
        role: "Operations Head",
        business: "CareFirst Pharmacy",
        product: "PharmaNext",
        rating: 5,
        date: "1 month ago",
        headline: "Trained 3 junior cashiers in just 15 minutes",
        comment:
            "The UI is exceptionally user-friendly. You do not need technical expertise or complex software training to operate the sales screen.",
        verified: true,
    },
    {
        id: "6",
        name: "Manoj Sundaram",
        role: "General Manager",
        business: "Trendz Lifestyle Store",
        product: "GrowNext",
        rating: 5,
        date: "1 month ago",
        headline: "Repeat customer sales jumped by 32%",
        comment:
            "Automated WhatsApp promotional campaigns and anniversary discounts brought back customers we hadn't seen in months. Invaluable tool.",
        verified: true,
    },
];

const ratingLabels: Record<number, string> = {
    1: "Needs Improvement",
    2: "Fair",
    3: "Good",
    4: "Very Good!",
    5: "Exceptional! 🌟",
};

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [activeCategory, setActiveCategory] = useState("all");
    const [modalOpen, setModalOpen] = useState(false);

    // Modal Form Inputs
    const [name, setName] = useState("");
    const [business, setBusiness] = useState("");
    const [role, setRole] = useState("");
    const [product, setProduct] = useState("BillNext");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const [headline, setHeadline] = useState("");
    const [comment, setComment] = useState("");

    const filteredReviews =
        activeCategory === "all"
            ? reviews
            : reviews.filter((r) => r.product.toLowerCase() === activeCategory.toLowerCase());

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;

        const newEntry: Review = {
            id: Date.now().toString(),
            name,
            business: business || "Retail Merchant",
            role: role || "Owner",
            product,
            rating,
            date: "Just now",
            headline: headline || "Wonderful billing software",
            comment,
            verified: true,
        };

        setReviews([newEntry, ...reviews]);
        setName("");
        setBusiness("");
        setRole("");
        setHeadline("");
        setComment("");
        setRating(5);
        setHoverRating(null);
        setModalOpen(false);
    };

    const activeStarCount = hoverRating !== null ? hoverRating : rating;

    return (
        <main className={styles.pageWrapper}>
            {/* ---------------- 1. Reviews Showcase Hero ---------------- */}
            <section className={styles.reviewsHero}>
                <div className={styles.container}>
                    <div className={styles.heroSplit}>
                        {/* Left Content */}
                        <div className={styles.heroLeft}>
                            <span className={styles.heroBadge}>VOICE OF OUR CUSTOMERS</span>
                            <h1 className={styles.heroHeading}>
                                Trusted by Businesses, <br />
                                <span className={styles.purpleAccent}>Proven by Numbers.</span>
                            </h1>
                            <p className={styles.heroSubText}>
                                Discover genuine experiences from store owners, pharmacists, and restaurateurs
                                who rely on DooNext every single day to run their business counters.
                            </p>

                            <div className={styles.heroActionCluster}>
                                <button
                                    type="button"
                                    className={styles.writeReviewBtn}
                                    onClick={() => setModalOpen(true)}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                    <span>Share Your Experience</span>
                                </button>
                                <div className={styles.trustSummary}>
                                    <div className={styles.starsCluster}>★★★★★</div>
                                    <span className={styles.ratingCount}>4.9 / 5 from over 1,200+ ratings</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Live Rating Breakdown Card */}
                        <div className={styles.heroRight}>
                            <div className={styles.scoreBoardCard}>
                                <div className={styles.scoreHeader}>
                                    <div className={styles.bigScore}>4.9</div>
                                    <div className={styles.scoreMeta}>
                                        <div className={styles.starRow}>★★★★★</div>
                                        <span className={styles.scoreText}>Overall Merchant Score</span>
                                    </div>
                                </div>

                                <div className={styles.scoreBreakdown}>
                                    <div className={styles.barItem}>
                                        <span className={styles.barLabel}>5 Star</span>
                                        <div className={styles.track}>
                                            <div className={styles.fill} style={{ width: "94%" }} />
                                        </div>
                                        <span className={styles.percent}>94%</span>
                                    </div>
                                    <div className={styles.barItem}>
                                        <span className={styles.barLabel}>4 Star</span>
                                        <div className={styles.track}>
                                            <div className={styles.fill} style={{ width: "5%" }} />
                                        </div>
                                        <span className={styles.percent}>5%</span>
                                    </div>
                                    <div className={styles.barItem}>
                                        <span className={styles.barLabel}>3 Star</span>
                                        <div className={styles.track}>
                                            <div className={styles.fill} style={{ width: "1%" }} />
                                        </div>
                                        <span className={styles.percent}>1%</span>
                                    </div>
                                </div>

                                <div className={styles.cardFooterNote}>
                                    <span className={styles.greenDot} />
                                    <span>100% Verified Merchant Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- 2. Category Filter & Wall of Love ---------------- */}
            <section className={styles.wallSection}>
                <div className={styles.container}>
                    <div className={styles.filterSectionHeader}>
                        <div className={styles.filterLeft}>
                            <h2 className={styles.sectionTitle}>Wall of Love</h2>
                            <p className={styles.sectionDesc}>Filter feedback by specific business software suite</p>
                        </div>

                        <div className={styles.filterTabs}>
                            {[
                                { id: "all", label: "All Reviews" },
                                { id: "billnext", label: "BillNext (POS)" },
                                { id: "pharmanext", label: "PharmaNext" },
                                { id: "retailnext", label: "RetailNext" },
                                { id: "grownext", label: "GrowNext" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`${styles.tabBtn} ${activeCategory === tab.id ? styles.activeTab : ""
                                        }`}
                                    onClick={() => setActiveCategory(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial Cards Masonry Grid */}
                    <div className={styles.masonryGrid}>
                        {filteredReviews.map((rev) => (
                            <article key={rev.id} className={styles.reviewArticle}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.productBadge}>{rev.product}</span>
                                    <div className={styles.starCluster}>
                                        {"★".repeat(rev.rating)}
                                    </div>
                                </div>

                                <h3 className={styles.reviewHeadline}>{rev.headline}</h3>
                                <p className={styles.reviewQuote}>&ldquo;{rev.comment}&rdquo;</p>

                                <div className={styles.authorSection}>
                                    <div className={styles.avatarCircle}>
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <div className={styles.nameRow}>
                                            <strong className={styles.authorName}>{rev.name}</strong>
                                            {rev.verified && (
                                                <span className={styles.verifiedTag}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                    </svg>
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                        <span className={styles.authorSub}>
                                            {rev.role} • {rev.business}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- 3. High-Contrast Bottom Banner ---------------- */}
            <section className={styles.ctaBannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerWrapper}>
                        <div className={styles.bannerInner}>
                            <span className={styles.bannerBadge}>AUTOMATE YOUR COUNTERS</span>
                            <h2 className={styles.bannerHeading}>
                                Join 10,000+ Thriving <br />
                                Business Owners Today
                            </h2>
                            <p className={styles.bannerDesc}>
                                Set up fast barcode billing, automated inventory, and instant WhatsApp receipts
                                without complex training.
                            </p>
                            <div className={styles.bannerBtnGroup}>
                                <Link href="/contact" className={styles.primaryDemoBtn}>
                                    <span>Schedule Free Demo</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                                    className={styles.outlineReviewBtn}
                                    onClick={() => setModalOpen(true)}
                                >
                                    Write a Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- 4. Modern Animated Modal ---------------- */}
            {modalOpen && (
                <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
                    <div
                        className={styles.modalDialog}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Modal Header */}
                        <div className={styles.dialogHeader}>
                            <div className={styles.headerTitleWrap}>
                                <span className={styles.dialogBadge}>COMMUNITY REVIEW</span>
                                <h3 className={styles.dialogTitle}>Rate Your Experience</h3>
                                <p className={styles.dialogSubtitle}>
                                    Your feedback helps thousands of retail merchants choose DooNext.
                                </p>
                            </div>
                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={() => setModalOpen(false)}
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
                            {/* Interactive Animated Star Rating Picker */}
                            <div className={styles.starPickerCard}>
                                <span className={styles.pickerHeaderLabel}>Overall Satisfaction</span>
                                <div
                                    className={styles.interactiveStarRow}
                                    onMouseLeave={() => setHoverRating(null)}
                                >
                                    {[1, 2, 3, 4, 5].map((starVal) => {
                                        const isLit = starVal <= activeStarCount;
                                        return (
                                            <button
                                                key={starVal}
                                                type="button"
                                                aria-label={`Rate ${starVal} out of 5 stars`}
                                                className={`${styles.starBtnAnimated} ${isLit ? styles.starBtnLit : styles.starBtnDim
                                                    }`}
                                                onMouseEnter={() => setHoverRating(starVal)}
                                                onClick={() => setRating(starVal)}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className={styles.starSvgIcon}
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className={styles.ratingSentimentBadge}>
                                    {ratingLabels[activeStarCount]}
                                </div>
                            </div>

                            {/* Form Input Grid */}
                            <div className={styles.inputGrid}>
                                <div className={styles.fieldBlock}>
                                    <label className={styles.fieldLabel}>Your Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Ramesh Kumar"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.fieldBlock}>
                                    <label className={styles.fieldLabel}>Store / Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Spice Garden Restaurant"
                                        value={business}
                                        onChange={(e) => setBusiness(e.target.value)}
                                        className={styles.formInput}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGrid}>
                                <div className={styles.fieldBlock}>
                                    <label className={styles.fieldLabel}>Your Role / Designation</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Owner, Store Manager"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.fieldBlock}>
                                    <label className={styles.fieldLabel}>Product You Use *</label>
                                    <select
                                        value={product}
                                        onChange={(e) => setProduct(e.target.value)}
                                        className={styles.formSelect}
                                    >
                                        <option value="BillNext">BillNext (Restaurants / POS)</option>
                                        <option value="PharmaNext">PharmaNext (Pharmacy & Batch)</option>
                                        <option value="RetailNext">RetailNext (Supermarkets)</option>
                                        <option value="GrowNext">GrowNext (Marketing & CRM)</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.fieldBlock}>
                                <label className={styles.fieldLabel}>Review Headline</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Blisteringly fast billing & zero errors"
                                    value={headline}
                                    onChange={(e) => setHeadline(e.target.value)}
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.fieldBlock}>
                                <label className={styles.fieldLabel}>Your Experience *</label>
                                <textarea
                                    rows={4}
                                    required
                                    placeholder="Tell us what you love about DooNext and how it helped your counter operations..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className={styles.formTextarea}
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className={styles.dialogActions}>
                                <button
                                    type="button"
                                    className={styles.dismissBtn}
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className={styles.postBtn}>
                                    <span>Publish Review</span>
                                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}