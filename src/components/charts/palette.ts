/**
 * Chart palette — references the same CSS variables as the Tailwind theme,
 * so charts recolor automatically in light/dark mode.
 */
export const CHART_COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
];

export const AXIS_COLOR = "hsl(var(--muted-foreground))";
export const GRID_COLOR = "hsl(var(--border))";

/** Shared tooltip style so every chart matches the design system. */
export const tooltipStyle = {
    contentStyle: {
        background: "hsl(var(--popover))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "0.5rem",
        color: "hsl(var(--popover-foreground))",
        fontSize: "0.8rem",
        boxShadow: "0 4px 12px rgb(0 0 0 / 0.08)",
    },
    labelStyle: { color: "hsl(var(--foreground))", fontWeight: 600 },
    itemStyle: { color: "hsl(var(--muted-foreground))" },
} as const;
