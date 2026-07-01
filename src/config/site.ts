/**
 * Site configuration
 * ===================
 * The single source of truth for branding, navigation and contact details.
 * Fork this template and edit THIS FILE first — everything downstream
 * (header, footer, sidebar, SEO defaults) reads from here.
 */

import type { LucideIcon } from "lucide-react";
import {
    LayoutDashboard,
    BarChart3,
    Table2,
    FileText,
    Settings,
    Home,
    Info,
    Sparkles,
    CreditCard,
    Mail,
    Component,
} from "lucide-react";

export interface NavLink {
    label: string;
    href: string;
    icon?: LucideIcon;
    /** Optional short description, used by mega-menus / command palette. */
    description?: string;
}

export interface NavSection {
    title?: string;
    items: NavLink[];
}

export const siteConfig = {
    name: "Launchpad",
    /** Short tagline shown under the logo / in hero sections. */
    tagline: "The all-in-one React starter template",
    description:
        "A production-ready React + TypeScript template with a full UI kit, dashboards, charts, data tables and forms — fork it and ship.",
    url: "https://example.com",
    /** Path (in /public) or absolute URL to the social share image. */
    ogImage: "/og-image.png",
    /** Default locale, used for <html lang> and Intl formatting. */
    locale: "en-US",

    author: {
        name: "Your Name",
        url: "https://example.com",
    },

    contact: {
        email: "hello@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Example Street, San Francisco, CA 94103",
    },

    social: {
        twitter: "https://twitter.com/example",
        github: "https://github.com/example",
        linkedin: "https://linkedin.com/company/example",
        instagram: "https://instagram.com/example",
    },
} as const;

/** Top navigation for the public / marketing site. */
export const marketingNav: NavLink[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Features", href: "/features", icon: Sparkles },
    { label: "Pricing", href: "/pricing", icon: CreditCard },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
];

/** Sidebar navigation for the authenticated / app area. */
export const dashboardNav: NavSection[] = [
    {
        title: "Overview",
        items: [
            {
                label: "Dashboard",
                href: "/app",
                icon: LayoutDashboard,
                description: "Key metrics at a glance",
            },
            {
                label: "Analytics",
                href: "/app/analytics",
                icon: BarChart3,
                description: "Charts and trends",
            },
        ],
    },
    {
        title: "Manage",
        items: [
            {
                label: "Data Table",
                href: "/app/data",
                icon: Table2,
                description: "Sortable, filterable records",
            },
            {
                label: "Forms",
                href: "/app/forms",
                icon: FileText,
                description: "Validated form examples",
            },
        ],
    },
    {
        title: "System",
        items: [
            {
                label: "Components",
                href: "/app/components",
                icon: Component,
                description: "UI kit showcase",
            },
            {
                label: "Settings",
                href: "/app/settings",
                icon: Settings,
                description: "Preferences and account",
            },
        ],
    },
];

/** Grouped footer links for the marketing layout. */
export const footerNav: NavSection[] = [
    {
        title: "Product",
        items: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Dashboard", href: "/app" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Resources",
        items: [
            { label: "Components", href: "/app/components" },
            { label: "GitHub", href: siteConfig.social.github },
        ],
    },
];

export type SiteConfig = typeof siteConfig;
