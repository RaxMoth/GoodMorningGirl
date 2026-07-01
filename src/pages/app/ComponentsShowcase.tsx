import { useState } from "react";
import { toast } from "sonner";
import { Rocket, Info } from "lucide-react";
import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Checkbox } from "../../components/ui/checkbox";
import { Slider } from "../../components/ui/slider";
import { Progress } from "../../components/ui/progress";
import { Skeleton } from "../../components/ui/skeleton";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../../components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
                {children}
            </CardContent>
        </Card>
    );
}

export default function ComponentsShowcase() {
    const [slider, setSlider] = useState([60]);

    return (
        <div className="space-y-6">
            <Seo title="Components" path="/app/components" noindex />
            <PageHeader
                title="Component library"
                description="Every UI primitive in the template, ready to copy."
            />

            <Section title="Buttons">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
                <Button isLoading>Loading</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="icon">
                    <Rocket />
                </Button>
            </Section>

            <Section title="Badges">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
            </Section>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Alert variant="info">
                            <Info />
                            <AlertTitle>Heads up</AlertTitle>
                            <AlertDescription>
                                This is an informational alert.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="success">
                            <Info />
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription>
                                Your changes were saved.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                            <Info />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Something needs your attention.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Form controls</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="demo-input">Email</Label>
                            <Input id="demo-input" placeholder="you@example.com" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch id="demo-switch" defaultChecked />
                            <Label htmlFor="demo-switch">Airplane mode</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="demo-check" defaultChecked />
                            <Label htmlFor="demo-check">Accept terms</Label>
                        </div>
                        <div className="space-y-2">
                            <Label>Volume — {slider[0]}%</Label>
                            <Slider
                                value={slider}
                                onValueChange={setSlider}
                                max={100}
                                step={1}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Progress</Label>
                            <Progress value={slider[0]} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Section title="Overlays & menus">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Open dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                                This is an accessible modal dialog built on Radix.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                onClick={() => toast.success("Confirmed")}
                            >
                                Confirm
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>Helpful tooltip</TooltipContent>
                </Tooltip>

                <Button onClick={() => toast("Event created", { description: "Just now" })}>
                    Show toast
                </Button>
            </Section>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Accordion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            {["Is it accessible?", "Is it styled?", "Is it animated?"].map(
                                (q, i) => (
                                    <AccordionItem key={q} value={`item-${i}`}>
                                        <AccordionTrigger>{q}</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It uses Radix under the hood and
                                            respects the design tokens.
                                        </AccordionContent>
                                    </AccordionItem>
                                ),
                            )}
                        </Accordion>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Skeletons</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Skeleton className="size-12 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-2/3" />
                                <Skeleton className="h-4 w-1/3" />
                            </div>
                        </div>
                        <Skeleton className="h-24 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
