import { DollarSign, Users, CreditCard, Activity, Download } from "lucide-react";
import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import { StatCard } from "../../components/dashboard/StatCard";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { AreaChart, PieChart } from "../../components/charts";
import { revenueSeries, trafficSources, users } from "../../lib/mock-data";
import { formatCurrency } from "../../utils/helpers";

const stats = [
    { label: "Total Revenue", value: "$84,231", change: 12.5, icon: DollarSign },
    { label: "Active Users", value: "2,318", change: 8.2, icon: Users },
    { label: "Sales", value: "1,204", change: -3.1, icon: CreditCard },
    { label: "Active Now", value: "312", change: 4.6, icon: Activity },
];

export default function Dashboard() {
    const recent = users.slice(0, 5);

    return (
        <div className="space-y-6">
            <Seo title="Dashboard" path="/app" noindex />
            <PageHeader
                title="Dashboard"
                description="Welcome back — here's what's happening today."
                actions={
                    <Button variant="outline">
                        <Download /> Export
                    </Button>
                }
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                    <StatCard key={s.label} {...s} />
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Revenue overview</CardTitle>
                        <CardDescription>
                            Monthly revenue vs. expenses
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AreaChart
                            data={revenueSeries}
                            xKey="month"
                            series={[
                                { key: "revenue", label: "Revenue" },
                                { key: "expenses", label: "Expenses" },
                            ]}
                        />
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Traffic sources</CardTitle>
                        <CardDescription>Sessions by channel</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PieChart data={trafficSources} innerRadius={60} />
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent customers</CardTitle>
                    <CardDescription>
                        Your latest active accounts
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                    {recent.map((u) => (
                        <div
                            key={u.id}
                            className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-muted/50"
                        >
                            <Avatar className="size-9">
                                <AvatarFallback>
                                    {u.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium">
                                    {u.name}
                                </p>
                                <p className="truncate text-xs text-muted-foreground">
                                    {u.email}
                                </p>
                            </div>
                            <Badge
                                variant={
                                    u.status === "active"
                                        ? "success"
                                        : u.status === "invited"
                                          ? "secondary"
                                          : "destructive"
                                }
                            >
                                {u.status}
                            </Badge>
                            <span className="hidden w-24 text-right text-sm font-medium sm:block">
                                {formatCurrency(u.revenue)}
                            </span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
