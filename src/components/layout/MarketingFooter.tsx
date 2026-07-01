import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Rocket, Twitter } from "lucide-react";
import { footerNav, siteConfig } from "../../config/site";
import { Container } from "../ui/container";

const socialIcons = [
    { href: siteConfig.social.twitter, Icon: Twitter, label: "Twitter" },
    { href: siteConfig.social.github, Icon: Github, label: "GitHub" },
    { href: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
];

function isExternal(href: string) {
    return href.startsWith("http");
}

export function MarketingFooter() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <Container size="xl" className="py-12">
                <div className="grid gap-8 md:grid-cols-[1.5fr_repeat(3,1fr)]">
                    <div className="space-y-3">
                        <Link to="/" className="flex items-center gap-2 font-bold">
                            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <Rocket className="size-5" />
                            </span>
                            {siteConfig.name}
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            {siteConfig.description}
                        </p>
                        <div className="flex gap-2">
                            {socialIcons.map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerNav.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-3 text-sm font-semibold">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 text-sm">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        {isExternal(item.href) ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {siteConfig.name}. All
                        rights reserved.
                    </p>
                    <p>Built with React, Vite, Tailwind &amp; ❤️</p>
                </div>
            </Container>
        </footer>
    );
}
