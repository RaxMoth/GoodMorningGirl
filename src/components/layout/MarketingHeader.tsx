import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Rocket, X } from "lucide-react";
import { marketingNav, siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { ThemeToggle } from "../ThemeToggle";

export function MarketingHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container size="xl">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-bold"
                        onClick={() => setOpen(false)}
                    >
                        <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Rocket className="size-5" />
                        </span>
                        {siteConfig.name}
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {marketingNav.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                end={item.href === "/"}
                                className={({ isActive }) =>
                                    cn(
                                        "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted-foreground",
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 md:flex">
                        <ThemeToggle />
                        <Button asChild variant="ghost" size="sm">
                            <Link to="/login">Sign in</Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link to="/app">Dashboard</Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-1 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </Container>

            {open && (
                <div className="border-t border-border md:hidden">
                    <Container size="xl" className="flex flex-col gap-1 py-4">
                        {marketingNav.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                end={item.href === "/"}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "rounded-md px-3 py-2 text-sm font-medium",
                                        isActive
                                            ? "bg-accent text-foreground"
                                            : "text-muted-foreground",
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="mt-2 flex gap-2">
                            <Button asChild variant="outline" className="flex-1">
                                <Link to="/login" onClick={() => setOpen(false)}>
                                    Sign in
                                </Link>
                            </Button>
                            <Button asChild className="flex-1">
                                <Link to="/app" onClick={() => setOpen(false)}>
                                    Dashboard
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
