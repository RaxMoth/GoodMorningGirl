import { Link } from "react-router-dom";
import {
    ArrowRight,
    LayoutDashboard,
    BarChart3,
    Table2,
    FileText,
    Moon,
    Component,
    Quote,
} from "lucide-react";
import { Seo } from "../../components/Seo";
import { siteConfig } from "../../config/site";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../../components/ui/card";

const features = [
    {
        icon: LayoutDashboard,
        title: "Ready-made dashboards",
        description:
            "Metric cards, activity feeds and layouts wired up out of the box so you start with a real product, not a blank page.",
    },
    {
        icon: BarChart3,
        title: "Beautiful analytics",
        description:
            "Composable charts with sensible defaults, responsive containers and theme-aware colors for light and dark mode.",
    },
    {
        icon: Table2,
        title: "Powerful data tables",
        description:
            "Sortable, filterable and paginated tables that handle real datasets without any extra glue code.",
    },
    {
        icon: FileText,
        title: "Validated forms",
        description:
            "React Hook Form and Zod schemas working together, with inline error states and a smooth submit experience.",
    },
    {
        icon: Component,
        title: "Complete UI kit",
        description:
            "Dozens of accessible, unstyled-first components built on Radix — buttons, dialogs, accordions and more.",
    },
    {
        icon: Moon,
        title: "Light & dark mode",
        description:
            "Every screen is themed with semantic tokens, so switching modes is instant and always looks intentional.",
    },
];

const stats = [
    { value: "10k+", label: "Active users" },
    { value: "50+", label: "Components" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "Average rating" },
];

const testimonials = [
    {
        quote: "We shipped our internal dashboard in a weekend. The components just work and everything looks polished by default.",
        name: "Jordan Lee",
        role: "Founder, Northwind Labs",
    },
    {
        quote: "The best React starter I've used. Clean conventions, sensible defaults and it saved our team weeks of setup.",
        name: "Priya Sharma",
        role: "Engineering Lead, Cascade",
    },
];

export default function Landing() {
    return (
        <>
            <Seo path="/" />

            {/* Hero */}
            <section className="border-b border-border">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge variant="secondary" className="mb-6">
                            Now in public beta
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            {siteConfig.tagline}
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                            {siteConfig.description}
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="lg">
                                <Link to="/app">
                                    Get started
                                    <ArrowRight />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link to="/features">Explore features</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Trusted by */}
            <section className="border-b border-border">
                <Container size="xl" className="py-12">
                    <p className="text-center text-sm font-medium text-muted-foreground">
                        Trusted by teams building on {siteConfig.name}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                        {[
                            "Northwind",
                            "Cascade",
                            "Meridian",
                            "Lumen",
                            "Vantage",
                            "Atlas",
                        ].map((logo) => (
                            <span
                                key={logo}
                                className="text-xl font-semibold tracking-tight text-muted-foreground/70"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Features grid */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Everything you need to ship
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            A batteries-included foundation so you can focus on
                            what makes your product unique.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <Card key={feature.title}>
                                <CardHeader>
                                    <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="size-6" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Stats band */}
            <section className="border-y border-border bg-muted/40">
                <Container size="xl" className="py-16">
                    <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Testimonials */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Loved by developers
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Don't just take our word for it.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {testimonials.map((t) => (
                            <Card key={t.name}>
                                <CardContent className="pt-6">
                                    <Quote className="size-8 text-primary/40" />
                                    <p className="mt-4 text-lg text-foreground">
                                        “{t.quote}”
                                    </p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                                            {t.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                {t.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {t.role}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="border-t border-border">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to build something great?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                            Start with a foundation that scales. Fork the
                            template and ship your first release today.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="lg" variant="secondary">
                                <Link to="/app">
                                    Open the dashboard
                                    <ArrowRight />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                            >
                                <Link to="/pricing">View pricing</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
