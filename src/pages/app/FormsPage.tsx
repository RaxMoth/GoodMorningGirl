import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { profileSchema, type ProfileValues } from "../../lib/validations";

export default function FormsPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ProfileValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: { name: "", email: "", bio: "", website: "" },
    });

    const onSubmit = async (values: ProfileValues) => {
        await new Promise((r) => setTimeout(r, 700)); // simulate request
        toast.success("Profile saved", {
            description: `${values.name} · ${values.email}`,
        });
    };

    return (
        <div className="space-y-6">
            <Seo title="Forms" path="/app/forms" noindex />
            <PageHeader
                title="Forms"
                description="Type-safe forms with react-hook-form + Zod validation."
            />

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>
                                Update your public profile information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Ada Lovelace"
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
                                        placeholder="ada@example.com"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-destructive">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="website">Website</Label>
                                <Input
                                    id="website"
                                    placeholder="https://example.com"
                                    {...register("website")}
                                />
                                {errors.website && (
                                    <p className="text-sm text-destructive">
                                        {errors.website.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    rows={4}
                                    placeholder="Tell us about yourself…"
                                    {...register("bio")}
                                />
                                {errors.bio && (
                                    <p className="text-sm text-destructive">
                                        {errors.bio.message}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button type="submit" isLoading={isSubmitting}>
                                Save changes
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => reset()}
                            >
                                Reset
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>
                            Toggle example (uncontrolled demo).
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            "Email notifications",
                            "Product updates",
                            "Weekly digest",
                        ].map((label, i) => (
                            <div
                                key={label}
                                className="flex items-center justify-between"
                            >
                                <Label htmlFor={`pref-${i}`}>{label}</Label>
                                <Switch id={`pref-${i}`} defaultChecked={i === 0} />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
