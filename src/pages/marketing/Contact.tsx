import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { Seo } from "../../components/Seo";
import { siteConfig } from "../../config/site";
import { contactSchema, type ContactValues } from "../../lib/validations";
import { toast } from "sonner";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../../components/ui/card";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        icon: Phone,
        label: "Phone",
        value: siteConfig.contact.phone,
        href: `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`,
    },
    {
        icon: MapPin,
        label: "Office",
        value: siteConfig.contact.address,
        href: undefined,
    },
];

const socials = [
    { icon: Twitter, label: "Twitter", href: siteConfig.social.twitter },
    { icon: Github, label: "GitHub", href: siteConfig.social.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
    { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
];

const topics = [
    "General inquiry",
    "Sales",
    "Support",
    "Partnership",
    "Something else",
];

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            topic: "",
            message: "",
        },
    });

    async function onSubmit(_values: ContactValues) {
        await new Promise((resolve) => setTimeout(resolve, 700));
        toast.success("Message sent");
        reset();
    }

    return (
        <>
            <Seo title="Contact" path="/contact" />

            <section>
                <Container size="xl" className="py-16 sm:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Get in touch
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Have a question or want to work together? We'd love
                            to hear from you.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-10 lg:grid-cols-2">
                        {/* Left: contact info */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">
                                Contact details
                            </h2>
                            <p className="mt-2 text-muted-foreground">
                                Reach out through any of the channels below and
                                we'll get back to you shortly.
                            </p>

                            <div className="mt-8 space-y-6">
                                {contactMethods.map((method) => (
                                    <div
                                        key={method.label}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <method.icon className="size-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-muted-foreground">
                                                {method.label}
                                            </div>
                                            {method.href ? (
                                                <a
                                                    href={method.href}
                                                    className="text-foreground hover:text-primary"
                                                >
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <div className="text-foreground">
                                                    {method.value}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <div className="text-sm font-medium text-muted-foreground">
                                    Follow us
                                </div>
                                <div className="mt-4 flex gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={social.label}
                                            className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                        >
                                            <social.icon className="size-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a message</CardTitle>
                                <CardDescription>
                                    Fill out the form and we'll be in touch.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-5"
                                    noValidate
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Jane Doe"
                                            {...register("name")}
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-destructive">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="jane@example.com"
                                            {...register("email")}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-destructive">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="topic">Topic</Label>
                                        <select
                                            id="topic"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            defaultValue=""
                                            {...register("topic")}
                                        >
                                            <option value="" disabled>
                                                Choose a topic
                                            </option>
                                            {topics.map((topic) => (
                                                <option key={topic} value={topic}>
                                                    {topic}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.topic && (
                                            <p className="text-sm text-destructive">
                                                {errors.topic.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            rows={5}
                                            placeholder="How can we help?"
                                            {...register("message")}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-destructive">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                    >
                                        Send message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
