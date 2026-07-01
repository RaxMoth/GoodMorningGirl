import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    /** Percentage change vs. previous period, e.g. 12.5 or -3.2. */
    change?: number;
    changeLabel?: string;
    icon?: LucideIcon;
}

/** KPI tile for dashboards: value, delta and an icon. */
export function StatCard({
    label,
    value,
    change,
    changeLabel = "vs last month",
    icon: Icon,
}: StatCardProps) {
    const positive = (change ?? 0) >= 0;
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground">
                        {label}
                    </p>
                    {Icon && (
                        <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <Icon className="size-5" />
                        </span>
                    )}
                </div>
                <p className="mt-3 text-3xl font-bold tracking-tight">{value}</p>
                {change !== undefined && (
                    <p className="mt-2 flex items-center gap-1 text-xs">
                        <span
                            className={cn(
                                "inline-flex items-center gap-0.5 font-medium",
                                positive ? "text-success" : "text-destructive",
                            )}
                        >
                            {positive ? (
                                <ArrowUpRight className="size-3.5" />
                            ) : (
                                <ArrowDownRight className="size-3.5" />
                            )}
                            {Math.abs(change)}%
                        </span>
                        <span className="text-muted-foreground">
                            {changeLabel}
                        </span>
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
