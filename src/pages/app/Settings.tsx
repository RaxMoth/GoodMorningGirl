import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import { useTheme } from "../../providers/ThemeProvider";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Separator } from "../../components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Monitor, Moon, Sun } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../../lib/utils";

const themeOptions = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
] as const;

export default function Settings() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="space-y-6">
            <Seo title="Settings" path="/app/settings" noindex />
            <PageHeader
                title="Settings"
                description="Manage your account and application preferences."
            />

            <Tabs defaultValue="account" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="appearance">Appearance</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Update your account details.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="s-name">Name</Label>
                                    <Input id="s-name" defaultValue="Demo User" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="s-email">Email</Label>
                                    <Input
                                        id="s-email"
                                        type="email"
                                        defaultValue="demo@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="s-lang">Language</Label>
                                <Select defaultValue="en">
                                    <SelectTrigger id="s-lang" className="sm:w-64">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="de">German</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="es">Spanish</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => toast.success("Settings saved")}>
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Appearance</CardTitle>
                            <CardDescription>
                                Customize how the app looks on your device.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="mb-3 block">Theme</Label>
                            <div className="grid max-w-md grid-cols-3 gap-3">
                                {themeOptions.map((opt) => {
                                    const Icon = opt.icon;
                                    const active = theme === opt.value;
                                    return (
                                        <button
                                            key={opt.value}
                                            onClick={() => setTheme(opt.value)}
                                            className={cn(
                                                "flex flex-col items-center gap-2 rounded-lg border-2 p-4 text-sm transition-colors",
                                                active
                                                    ? "border-primary bg-primary/5"
                                                    : "border-border hover:bg-accent",
                                            )}
                                        >
                                            <Icon className="size-5" />
                                            {opt.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>
                                Choose what you want to be notified about.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-1">
                            {[
                                {
                                    t: "Product updates",
                                    d: "News about features and improvements.",
                                    on: true,
                                },
                                {
                                    t: "Security alerts",
                                    d: "Important notices about your account.",
                                    on: true,
                                },
                                {
                                    t: "Marketing emails",
                                    d: "Tips, offers and announcements.",
                                    on: false,
                                },
                            ].map((item, i, arr) => (
                                <div key={item.t}>
                                    <div className="flex items-center justify-between py-3">
                                        <div className="space-y-0.5 pr-4">
                                            <p className="text-sm font-medium">
                                                {item.t}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.d}
                                            </p>
                                        </div>
                                        <Switch defaultChecked={item.on} />
                                    </div>
                                    {i < arr.length - 1 && <Separator />}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
