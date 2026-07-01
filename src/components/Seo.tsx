import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";

interface SeoProps {
    title?: string;
    description?: string;
    /** Path to social image (relative to site root or absolute). */
    image?: string;
    /** Canonical path, e.g. "/pricing". */
    path?: string;
    type?: "website" | "article";
    noindex?: boolean;
}

/**
 * Drop-in <Seo /> for any page. Sets title, meta description, Open Graph
 * and Twitter card tags. Falls back to `siteConfig` defaults.
 */
export function Seo({
    title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    path = "",
    type = "website",
    noindex = false,
}: SeoProps) {
    const fullTitle = title
        ? `${title} · ${siteConfig.name}`
        : `${siteConfig.name} — ${siteConfig.tagline}`;
    const url = `${siteConfig.url}${path}`;
    const imageUrl = image.startsWith("http")
        ? image
        : `${siteConfig.url}${image}`;

    return (
        <Helmet>
            <html lang={siteConfig.locale.split("-")[0]} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
}
