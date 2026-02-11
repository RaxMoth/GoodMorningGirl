/**
 * SEO Configuration for Good Morning Girl
 */

import { MetaTags, StructuredData } from "../types";

export const SITE_CONFIG = {
    name: "Good Morning Girl",
    url: "https://goodmorninggirl.com",
    description:
        "Start your day right with wellness tips, meditation, and community support.",
    logo: "https://goodmorninggirl.com/logo.png",
    ogImage: "https://goodmorninggirl.com/og-image.png",
    socialLinks: {
        twitter: "https://twitter.com/goodmorninggirl",
        instagram: "https://instagram.com/goodmorninggirl",
        facebook: "https://facebook.com/goodmorninggirl",
    },
};

export const PAGE_META: Record<string, MetaTags> = {
    home: {
        title: "Good Morning Girl | Start Your Day With Wellness",
        description:
            "Beautiful morning wellness template for daily meditation, wellness tracking, and community support.",
        keywords: [
            "wellness",
            "meditation",
            "morning routine",
            "self-care",
            "wellbeing",
        ],
        ogType: "website",
    },
    about: {
        title: "About Us | Good Morning Girl",
        description:
            "Learn about our mission to help women start their day with wellness and positivity.",
        keywords: ["about", "mission", "wellness", "community"],
        ogType: "website",
    },
    features: {
        title: "Features | Good Morning Girl",
        description:
            "Discover our wellness tracking, guided meditation, and community features.",
        keywords: ["features", "wellness", "meditation", "tracking"],
        ogType: "website",
    },
    contact: {
        title: "Contact Us | Good Morning Girl",
        description: "Get in touch with our wellness team. We're here to help.",
        keywords: ["contact", "support", "help", "email"],
        ogType: "website",
    },
};

export const generateOrganizationSchema = (): StructuredData => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Good Morning Girl",
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    sameAs: [
        SITE_CONFIG.socialLinks.twitter,
        SITE_CONFIG.socialLinks.facebook,
        SITE_CONFIG.socialLinks.instagram,
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "hello@goodmorninggirl.com",
    },
});
