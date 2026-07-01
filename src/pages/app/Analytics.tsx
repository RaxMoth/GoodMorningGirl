import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/ui/tabs";
import { StatCard } from "../../components/dashboard/StatCard";
import { AreaChart, BarChart, LineChart, PieChart } from "../../components/charts";
import {
    revenueSeries,
    trafficSources,
    weeklyActivity,
} from "../../lib/mock-data";
import { Eye, MousePointerClick, Timer, TrendingUp } from "lucide-react";

export default function Analytics() {
    return (
        <div className="space-y-6">
            <Seo title="Analytics" path="/app/analytics" noindex />
            <PageHeader
                title="Analytics"
                description="Traffic, engagement and conversion trends."
                actions={
                    <Select defaultValue="30d">
                        <SelectTrigger className="w-36">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7d">Last 7 days</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="90d">Last 90 days</SelectItem>
                            <SelectItem value="12m">Last 12 months</SelectItem>
                        </SelectContent>
                    </Select>
                }
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Page views" value="128.4k" change={18.2} icon={Eye} />
                <StatCard label="Click rate" value="4.7%" change={2.1} icon={MousePointerClick} />
                <StatCard label="Avg. session" value="3m 42s" change={-1.4} icon={Timer} />
                <StatCard label="Conversion" value="2.9%" change={6.8} icon={TrendingUp} />
            </div>

            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="traffic">Traffic</TabsTrigger>
                    <TabsTrigger value="engagement">Engagement</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue trend</CardTitle>
                            <CardDescription>Last 12 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AreaChart
                                data={revenueSeries}
                                xKey="month"
                                series={[{ key: "revenue", label: "Revenue" }]}
                                height={320}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="traffic" className="grid gap-4 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sessions by channel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PieChart data={trafficSources} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Weekly sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <BarChart
                                data={weeklyActivity}
                                xKey="day"
                                series={[{ key: "sessions", label: "Sessions" }]}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="engagement" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sessions vs. signups</CardTitle>
                            <CardDescription>This week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LineChart
                                data={weeklyActivity}
                                xKey="day"
                                series={[
                                    { key: "sessions", label: "Sessions" },
                                    { key: "signups", label: "Signups" },
                                ]}
                                height={320}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
