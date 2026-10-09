"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

interface ProductItem {
    label: string;
    href: string;
    desc: string;
}

const productsList: ProductItem[] = [
    { label: "BillNext", href: "/billnext", desc: "Smart POS & billing software" },
    { label: "PharmaNext", href: "/pharmanext", desc: "Pharmacy & expiry management" },
    { label: "GrowNext", href: "/grownext", desc: "CRM & business growth tools" },
    { label: "RetailNext", href: "/retailnext", desc: "Retail inventory & barcode billing" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const pathname = usePathname();

    const isProductActive = productsList.some(
        (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
    );

    // Close menus on page navigation
    useEffect(() => {
        setMobileMenuOpen(false);
        setDesktopDropdownOpen(false);
        setMobileDropdownOpen(false);
    }, [pathname]);

    // Close on outside click for desktop dropdown
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDesktopDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.container}>
                {/* Left Side: Hamburger (Mobile/Tablet) + Logo */}
                <div className={styles.leftBrandSection}>
                    <button
                        type="button"
                        className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.open : ""}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={styles.hamburgerBar} />
                        <span className={styles.hamburgerBar} />
                        <span className={styles.hamburgerBar} />
                    </button>

                    <Link href="/" className={styles.logoLink} aria-label="DooNext Home">
                        <Image
                            src="/logo.png"
                            alt="DooNext Logo"
                            width={280}
                            height={76}
                            priority
                            loading="eager"
                            className={styles.logoImage}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav} aria-label="Main Navigation">
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                href="/"
                                className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}
                            >
                                Home
                            </Link>
                            {pathname === "/" && <span className={styles.activeIndicator} />}
                        </li>

                        {/* Products Dropdown */}
                        <li
                            ref={dropdownRef}
                            className={`${styles.navItem} ${styles.dropdownContainer}`}
                            onMouseEnter={() => setDesktopDropdownOpen(true)}
                            onMouseLeave={() => setDesktopDropdownOpen(false)}
                        >
                            <button
                                type="button"
                                className={`${styles.navLink} ${styles.dropdownTrigger} ${isProductActive ? styles.activeLink : ""
                                    }`}
                                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                                aria-expanded={desktopDropdownOpen}
                            >
                                <span>Products</span>
                                <svg
                                    className={`${styles.chevronIcon} ${desktopDropdownOpen ? styles.chevronOpen : ""
                                        }`}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M4 6L8 10L12 6"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {isProductActive && <span className={styles.activeIndicator} />}

                            {/* Dropdown Menu */}
                            <div
                                className={`${styles.dropdownMenu} ${desktopDropdownOpen ? styles.dropdownMenuOpen : ""
                                    }`}
                            >
                                <div className={styles.dropdownInner}>
                                    {productsList.map((product) => {
                                        const isItemActive =
                                            pathname === product.href || pathname.startsWith(`${product.href}/`);
                                        return (
                                            <Link
                                                key={product.label}
                                                href={product.href}
                                                className={`${styles.dropdownItem} ${isItemActive ? styles.activeDropdownItem : ""
                                                    }`}
                                            >
                                                <span className={styles.dropdownItemTitle}>{product.label}</span>
                                                <span className={styles.dropdownItemDesc}>{product.desc}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </li>

                        {/* Reviews */}
                        <li className={styles.navItem}>
                            <Link
                                href="/reviews"
                                className={`${styles.navLink} ${pathname === "/reviews" || pathname.startsWith("/reviews/")
                                    ? styles.activeLink
                                    : ""
                                    }`}
                            >
                                Reviews
                            </Link>
                            {(pathname === "/reviews" || pathname.startsWith("/reviews/")) && (
                                <span className={styles.activeIndicator} />
                            )}
                        </li>

                        {/* About */}
                        <li className={styles.navItem}>
                            <Link
                                href="/about"
                                className={`${styles.navLink} ${pathname === "/about" || pathname.startsWith("/about/")
                                    ? styles.activeLink
                                    : ""
                                    }`}
                            >
                                About
                            </Link>
                            {(pathname === "/about" || pathname.startsWith("/about/")) && (
                                <span className={styles.activeIndicator} />
                            )}
                        </li>

                        {/* Contact */}
                        <li className={styles.navItem}>
                            <Link
                                href="/contact"
                                className={`${styles.navLink} ${pathname === "/contact" || pathname.startsWith("/contact/")
                                    ? styles.activeLink
                                    : ""
                                    }`}
                            >
                                Contact
                            </Link>
                            {(pathname === "/contact" || pathname.startsWith("/contact/")) && (
                                <span className={styles.activeIndicator} />
                            )}
                        </li>
                    </ul>
                </nav>

                {/* Right CTA Button */}
                <div className={styles.ctaWrapper}>
                    <Link href="/contact" className={styles.ctaButton}>
                        <span>Free Demo</span>
                        <svg
                            className={styles.arrowIcon}
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

            {/* Mobile / Tablet Drawer */}
            <div
                className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ""
                    }`}
            >
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        <li className={styles.mobileNavItem}>
                            <Link
                                href="/"
                                className={`${styles.mobileNavLink} ${pathname === "/" ? styles.mobileActive : ""
                                    }`}
                            >
                                Home
                            </Link>
                        </li>

                        {/* Products Accordion */}
                        <li className={styles.mobileNavItem}>
                            <button
                                type="button"
                                className={`${styles.mobileDropdownTrigger} ${isProductActive ? styles.mobileActive : ""
                                    }`}
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                aria-expanded={mobileDropdownOpen}
                            >
                                <span>Products</span>
                                <svg
                                    className={`${styles.mobileChevron} ${mobileDropdownOpen ? styles.chevronOpen : ""
                                        }`}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M4 6L8 10L12 6"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`${styles.mobileSubListWrapper} ${mobileDropdownOpen ? styles.subListOpen : ""
                                    }`}
                            >
                                <ul className={styles.mobileSubList}>
                                    {productsList.map((product) => {
                                        const isItemActive =
                                            pathname === product.href || pathname.startsWith(`${product.href}/`);
                                        return (
                                            <li key={product.label} className={styles.mobileSubItem}>
                                                <Link
                                                    href={product.href}
                                                    className={`${styles.mobileSubLink} ${isItemActive ? styles.subActive : ""
                                                        }`}
                                                >
                                                    {product.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </li>

                        <li className={styles.mobileNavItem}>
                            <Link
                                href="/reviews"
                                className={`${styles.mobileNavLink} ${pathname === "/reviews" || pathname.startsWith("/reviews/")
                                    ? styles.mobileActive
                                    : ""
                                    }`}
                            >
                                Reviews
                            </Link>
                        </li>

                        <li className={styles.mobileNavItem}>
                            <Link
                                href="/about"
                                className={`${styles.mobileNavLink} ${pathname === "/about" || pathname.startsWith("/about/")
                                    ? styles.mobileActive
                                    : ""
                                    }`}
                            >
                                About
                            </Link>
                        </li>

                        <li className={styles.mobileNavItem}>
                            <Link
                                href="/contact"
                                className={`${styles.mobileNavLink} ${pathname === "/contact" || pathname.startsWith("/contact/")
                                    ? styles.mobileActive
                                    : ""
                                    }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.mobileCtaWrapper}>
                        <Link href="/contact" className={styles.ctaButton}>
                            <span>Free Demo</span>
                            <svg
                                className={styles.arrowIcon}
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
                </nav>
            </div>

            {/* Backdrop */}
            {mobileMenuOpen && (
                <div
                    className={styles.backdrop}
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}