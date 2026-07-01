import { Heart, Zap, Shield, Users } from "lucide-react";
import { Seo } from "../../components/Seo";
import { siteConfig } from "../../config/site";
import { Container } from "../../components/ui/container";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../../components/ui/card";

const values = [
    {
        icon: Heart,
        title: "Craft first",
        description:
            "We sweat the details so the experience feels effortless. Good defaults, thoughtful states and no rough edges.",
    },
    {
        icon: Zap,
        title: "Move fast",
        description:
            "Momentum matters. We ship small, learn quickly and keep the feedback loop tight for everyone we build with.",
    },
    {
        icon: Shield,
        title: "Earn trust",
        description:
            "Reliability and transparency are non-negotiable. We do what we say and we're honest when we get it wrong.",
    },
    {
        icon: Users,
        title: "For builders",
        description:
            "Every decision is made with the developer in mind. If it doesn't make your job easier, it doesn't ship.",
    },
];

const team = [
    { name: "Alex Rivera", role: "Co-founder & CEO" },
    { name: "Sam Chen", role: "Co-founder & CTO" },
    { name: "Maya Patel", role: "Head of Design" },
    { name: "Chris Okafor", role: "Head of Engineering" },
];

export default function About() {
    return (
        <>
            <Seo title="About" path="/about" />

            {/* Mission */}
            <section className="border-b border-border">
                <Container size="lg" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Building the tools we wished we had
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Our mission is simple: give every team a
                            production-ready foundation so they can spend their
                            energy on the product, not the plumbing.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Story */}
            <section>
                <Container size="sm" className="py-16 sm:py-24">
                    <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                            Our story
                        </h2>
                        <p>
                            {siteConfig.name} started with a frustration every
                            developer knows: spending the first two weeks of a
                            new project wiring up the same boilerplate. Auth,
                            layouts, theming, forms, tables — solved problems,
                            solved again and again.
                        </p>
                        <p>
                            We believed there was a better way. A foundation
                            that was genuinely production-ready, not a toy demo.
                            Something opinionated enough to be fast, but flexible
                            enough to make your own. So we built it — for
                            ourselves first, and then for everyone.
                        </p>
                        <p>
                            Today, thousands of teams ship on top of{" "}
                            {siteConfig.name}. From weekend side projects to
                            venture-backed startups, they all start from the
                            same place: a clean, well-structured codebase that's
                            ready to grow.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="border-y border-border bg-muted/40">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            What we value
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            The principles that guide how we work and what we
                            build.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <Card key={value.title}>
                                <CardHeader>
                                    <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <value.icon className="size-6" />
                                    </div>
                                    <CardTitle>{value.title}</CardTitle>
                                    <CardDescription>
                                        {value.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Meet the team
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            A small, focused group of people who care deeply
                            about the craft.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="flex size-24 items-center justify-center rounded-full bg-muted text-2xl font-semibold text-foreground">
                                    {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                                <div className="mt-4 text-lg font-semibold">
                                    {member.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {member.role}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
