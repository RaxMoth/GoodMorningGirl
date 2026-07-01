import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    BarChart3,
    Component,
    FileText,
    Moon,
    Code2,
    ArrowRight,
    Check,
} from "lucide-react";
import { Seo } from "../../components/Seo";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../../components/ui/card";

const sections = [
    {
        category: "Dashboards",
        icon: LayoutDashboard,
        title: "Dashboards that feel finished",
        description:
            "Start from real layouts, not empty grids. Metric cards, activity feeds and responsive shells are ready to drop your data into — every state designed, every breakpoint covered.",
        points: [
            "Composable metric and stat cards",
            "Responsive sidebar and topbar shell",
            "Loading and empty states included",
        ],
    },
    {
        category: "Analytics",
        icon: BarChart3,
        title: "Analytics with theme-aware charts",
        description:
            "Visualize anything with charts that read from your theme tokens. Colors adapt to light and dark mode automatically, so your data always looks intentional.",
        points: [
            "Line, bar and area chart primitives",
            "Automatic light and dark palettes",
            "Tooltips and legends out of the box",
        ],
    },
    {
        category: "Components",
        icon: Component,
        title: "A complete, accessible UI kit",
        description:
            "Dozens of components built on Radix primitives and styled with semantic tokens. Accessible by default, composable by design and consistent everywhere.",
        points: [
            "Buttons, dialogs, accordions, tabs and more",
            "Keyboard and screen-reader friendly",
            "Fully themeable with CSS variables",
        ],
    },
    {
        category: "Forms",
        icon: FileText,
        title: "Forms that validate themselves",
        description:
            "React Hook Form paired with Zod schemas gives you type-safe validation with almost no boilerplate. Inline errors, loading states and a clean submit flow come standard.",
        points: [
            "Shared Zod schemas for reuse",
            "Inline, accessible error messaging",
            "Async submit with loading states",
        ],
    },
    {
        category: "Theming",
        icon: Moon,
        title: "Light and dark mode, done right",
        description:
            "Every surface is built on semantic color tokens, so switching modes is instant and never breaks the design. No hardcoded colors, no surprises.",
        points: [
            "One-click theme toggle",
            "Semantic tokens across every component",
            "Respects system preference",
        ],
    },
    {
        category: "Developer experience",
        icon: Code2,
        title: "TypeScript from top to bottom",
        description:
            "Strict types, clear conventions and a tidy project structure make the codebase a pleasure to work in — and easy to onboard new teammates onto.",
        points: [
            "End-to-end type safety",
            "Vite for instant hot reload",
            "Clear, documented conventions",
        ],
    },
];

const highlights = [
    "Production-ready out of the box",
    "Zero hardcoded colors",
    "Fully responsive layouts",
    "Accessible components",
    "Type-safe forms and data",
    "Fast Vite build tooling",
    "Composable UI primitives",
    "Light and dark mode",
];

export default function Features() {
    return (
        <>
            <Seo title="Features" path="/features" />

            {/* Header */}
            <section className="border-b border-border">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge variant="secondary" className="mb-6">
                            Features
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Everything's included, nothing's in your way
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            A carefully assembled set of building blocks that
                            work together — so you can go from idea to shipped in
                            days, not months.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Alternating feature sections */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="space-y-20 sm:space-y-28">
                        {sections.map((section, i) => (
                            <div
                                key={section.title}
                                className="grid items-center gap-10 lg:grid-cols-2"
                            >
                                <div
                                    className={
                                        i % 2 === 1 ? "lg:order-2" : undefined
                                    }
                                >
                                    <Badge variant="outline" className="mb-4">
                                        {section.category}
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tight">
                                        {section.title}
                                    </h2>
                                    <p className="mt-4 text-lg text-muted-foreground">
                                        {section.description}
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        {section.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-3"
                                            >
                                                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                                                <span className="text-foreground">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={
                                        i % 2 === 1 ? "lg:order-1" : undefined
                                    }
                                >
                                    <div className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-muted/40">
                                        <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <section.icon className="size-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Highlights grid */}
            <section className="border-y border-border bg-muted/40">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            And a whole lot more
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            The details that add up to a great developer
                            experience.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((item) => (
                            <Card key={item}>
                                <CardHeader className="flex-row items-center gap-3 space-y-0">
                                    <Check className="size-5 shrink-0 text-primary" />
                                    <CardTitle className="text-base">
                                        {item}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <Card className="text-center">
                        <CardHeader className="items-center">
                            <CardTitle className="text-2xl sm:text-3xl">
                                See it all in action
                            </CardTitle>
                            <CardDescription className="max-w-xl text-base">
                                Jump into the live dashboard and explore every
                                feature for yourself.
                            </CardDescription>
                            <div className="mt-4">
                                <Button asChild size="lg">
                                    <Link to="/app">
                                        Open the dashboard
                                        <ArrowRight />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                </Container>
            </section>
        </>
    );
}
