import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Seo } from "../../components/Seo";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "../../components/ui/card";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../../components/ui/accordion";

const tiers = [
    {
        name: "Starter",
        description: "For side projects and getting off the ground.",
        monthly: 0,
        annual: 0,
        highlighted: false,
        cta: "Get started",
        features: [
            "Up to 3 projects",
            "Core UI kit",
            "Community support",
            "Light and dark mode",
        ],
    },
    {
        name: "Pro",
        description: "For growing teams that need more power.",
        monthly: 29,
        annual: 24,
        highlighted: true,
        cta: "Start free trial",
        features: [
            "Unlimited projects",
            "Full UI kit and dashboards",
            "Advanced analytics",
            "Priority email support",
            "Team collaboration",
        ],
    },
    {
        name: "Enterprise",
        description: "For organizations with advanced needs.",
        monthly: 99,
        annual: 82,
        highlighted: false,
        cta: "Contact sales",
        features: [
            "Everything in Pro",
            "SSO and SAML",
            "Dedicated support",
            "Custom integrations",
            "SLA and onboarding",
        ],
    },
];

const faqs = [
    {
        question: "Can I change plans later?",
        answer:
            "Absolutely. You can upgrade, downgrade or cancel at any time from your account settings. Changes take effect immediately and we prorate the difference.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes — the Pro plan comes with a 14-day free trial. No credit card required to start, and you can cancel anytime before it ends.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit and debit cards. Enterprise customers can also pay by invoice on annual contracts.",
    },
    {
        question: "Do you offer discounts?",
        answer:
            "We offer discounted annual billing across every paid plan, plus special pricing for students, nonprofits and open-source projects.",
    },
    {
        question: "What happens when I hit a plan limit?",
        answer:
            "We'll let you know before you reach a limit and never cut you off mid-work. You can upgrade in a couple of clicks whenever you're ready.",
    },
];

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    return (
        <>
            <Seo title="Pricing" path="/pricing" />

            {/* Header + toggle */}
            <section className="border-b border-border">
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Simple, transparent pricing
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Start free and scale as you grow. No hidden fees, no
                            surprises.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <Label
                                htmlFor="billing-toggle"
                                className="text-muted-foreground"
                            >
                                Monthly
                            </Label>
                            <Switch
                                id="billing-toggle"
                                checked={annual}
                                onCheckedChange={setAnnual}
                            />
                            <Label
                                htmlFor="billing-toggle"
                                className="text-muted-foreground"
                            >
                                Annual
                            </Label>
                            <Badge variant="success">Save 20%</Badge>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Tiers */}
            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="grid items-start gap-8 lg:grid-cols-3">
                        {tiers.map((tier) => {
                            const price = annual ? tier.annual : tier.monthly;
                            return (
                                <Card
                                    key={tier.name}
                                    className={
                                        tier.highlighted
                                            ? "border-primary shadow-md lg:scale-105"
                                            : undefined
                                    }
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>{tier.name}</CardTitle>
                                            {tier.highlighted && (
                                                <Badge>Most popular</Badge>
                                            )}
                                        </div>
                                        <CardDescription>
                                            {tier.description}
                                        </CardDescription>
                                        <div className="mt-4 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold tracking-tight">
                                                ${price}
                                            </span>
                                            <span className="text-muted-foreground">
                                                /mo
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {tier.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-3"
                                                >
                                                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                                                    <span className="text-sm text-foreground">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            asChild
                                            className="w-full"
                                            variant={
                                                tier.highlighted
                                                    ? "primary"
                                                    : "outline"
                                            }
                                        >
                                            <Link
                                                to={
                                                    tier.name === "Enterprise"
                                                        ? "/contact"
                                                        : "/app"
                                                }
                                            >
                                                {tier.cta}
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="border-t border-border">
                <Container size="sm" className="py-16 sm:py-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Everything you need to know about plans and billing.
                        </p>
                    </div>
                    <div className="mt-12">
                        <Accordion type="single" collapsible>
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`faq-${i}`}
                                >
                                    <AccordionTrigger className="text-left text-base">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Container>
            </section>
        </>
    );
}
