/**
 * App Configuration
 * Central configuration for the application
 */

export const APP_CONFIG = {
    name: "Good Morning Girl",
    version: "1.0.0",
    description: "A beautiful morning wellness template",
    url: "https://goodmorninggirl.com",

    // Colors
    colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        accent: "#F59E0B",
        danger: "#EF4444",
        warning: "#FBBF24",
        success: "#10B981",
        info: "#3B82F6",
    },

    // Navigation
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Features", href: "/features" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
    ],

    // Social Links
    social: {
        twitter: "https://twitter.com/goodmorninggirl",
        instagram: "https://instagram.com/goodmorninggirl",
        facebook: "https://facebook.com/goodmorninggirl",
        linkedin: "https://linkedin.com/company/goodmorninggirl",
    },

    // Contact Info
    contact: {
        email: "hello@goodmorninggirl.com",
        phone: "+1 (555) 123-4567",
        address: "123 Morning Ave, Wellness City, WC 12345",
    },

    // Features
    features: [
        {
            id: "wellness",
            title: "Wellness Tracking",
            description: "Track your daily wellness goals and progress",
            icon: "Heart",
        },
        {
            id: "meditation",
            title: "Guided Meditation",
            description: "Start your day with guided meditation sessions",
            icon: "Lightbulb",
        },
        {
            id: "community",
            title: "Community",
            description: "Join our supportive wellness community",
            icon: "Users",
        },
        {
            id: "insights",
            title: "Personal Insights",
            description:
                "Get personalized wellness insights and recommendations",
            icon: "Brain",
        },
    ],

    // Pagination
    pagination: {
        defaultLimit: 10,
        maxLimit: 100,
    },

    // Timeouts (in ms)
    timeouts: {
        api: 10000,
        notification: 5000,
        debounce: 300,
    },
};
