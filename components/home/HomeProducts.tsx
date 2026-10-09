"use client";

import React from "react";
import Link from "next/link";
import styles from "./HomeProducts.module.css";

interface ProductCard {
    id: string;
    name: string;
    badgeTag: string;
    description: string;
    features: string[];
    buttonText: string;
    href: string;
    imageUrl: string;
}

const products: ProductCard[] = [
    {
        id: "billnext",
        name: "BillNext",
        badgeTag: "Billing Software for Small Businesses",
        description:
            "Perfect for cafes, restaurants, hotels, bakeries, chicken shops and more.",
        features: [
            "Fast Billing",
            "Menu Management",
            "Kitchen Printing",
            "Daily Reports",
        ],
        buttonText: "Learn More",
        href: "/billnext",
        imageUrl:
            "/cafe.png",
    },
    {
        id: "pharmanext",
        name: "PharmaNext",
        badgeTag: "Billing Software for Pharmacy Shops",
        description:
            "Complete pharmacy management with billing, stock and expiry management.",
        features: [
            "Medicine Billing",
            "Expiry Alerts",
            "Stock Management",
            "GST Reports",
        ],
        buttonText: "Learn More",
        href: "/pharmanext",
        imageUrl:
            "/pharmacy.png",
    },
    {
        id: "grownext",
        name: "GrowNext",
        badgeTag: "Lead Management for All Businesses",
        description:
            "Capture, track and convert leads with a simple and powerful CRM solution.",
        features: [
            "Lead Tracking",
            "Follow-up Reminders",
            "Pipeline Management",
            "Analytics & Reports",
        ],
        buttonText: "Learn More",
        href: "/grownext",
        imageUrl:
            "/managment.png",
    },
    {
        id: "retailnext",
        name: "RetailNext",
        badgeTag: "Retail Billing Software for Retail Shops",
        description:
            "Complete retail management for supermarkets, grocery shops and all retail businesses.",
        features: [
            "Barcode Billing",
            "Inventory Management",
            "Multi-Branch Support",
            "Sales & Purchase Reports",
        ],
        buttonText: "Learn More",
        href: "/retailnext",
        imageUrl:
            "/retail.png",
    },
];

export default function HomeProducts() {
    return (
        <section className={styles.sectionWrapper} id="products">
            <div className={styles.container}>
                {/* Section Heading */}
                <div className={styles.headerArea}>
                    <span className={styles.sectionBadge}>OUR PRODUCTS</span>
                    <h2 className={styles.sectionTitle}>
                        Software Solutions for Every Business
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Choose the right software for your business and take control with smarter tools.
                    </p>
                </div>

                {/* 4 Cards Grid - Unified styling */}
                <div className={styles.grid}>
                    {products.map((item) => (
                        <div key={item.id} className={styles.card}>
                            {/* Product Visual Area */}
                            <div className={styles.imageContainer}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className={styles.productImage}
                                    loading="lazy"
                                />
                            </div>

                            {/* Title & Badge */}
                            <div className={styles.cardHeader}>
                                <h3 className={styles.productTitle}>{item.name}</h3>
                                <span className={styles.productSubTag}>{item.badgeTag}</span>
                            </div>

                            <p className={styles.productDesc}>{item.description}</p>

                            {/* Features List */}
                            <ul className={styles.featureList}>
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <span className={styles.checkCircle}>
                                            <svg
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={styles.checkIcon}
                                            >
                                                <path
                                                    d="M13.3 4.3L6.5 11.1L2.7 7.3"
                                                    stroke="currentColor"
                                                    strokeWidth="2.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Action Button */}
                            <div className={styles.cardFooter}>
                                <Link href={item.href} className={styles.learnMoreBtn}>
                                    <span>{item.buttonText}</span>
                                    <svg
                                        width="15"
                                        height="15"
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
                    ))}
                </div>
            </div>
        </section>
    );
}