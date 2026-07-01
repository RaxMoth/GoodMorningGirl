import {
    Area,
    AreaChart as ReAreaChart,
    Bar,
    BarChart as ReBarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart as ReLineChart,
    Pie,
    PieChart as RePieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { AXIS_COLOR, CHART_COLORS, GRID_COLOR, tooltipStyle } from "./palette";

type Row = Record<string, string | number>;

interface BaseProps {
    data: Row[];
    /** Column used for the X axis / category labels. */
    xKey: string;
    /** One or more numeric columns to plot. */
    series: { key: string; label?: string }[];
    height?: number;
    className?: string;
}

const axisProps = {
    stroke: AXIS_COLOR,
    fontSize: 12,
    tickLine: false,
    axisLine: false,
} as const;

export function AreaChart({
    data,
    xKey,
    series,
    height = 300,
    className,
}: BaseProps) {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height={height}>
                <ReAreaChart
                    data={data}
                    margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                >
                    <defs>
                        {series.map((s, i) => (
                            <linearGradient
                                key={s.key}
                                id={`grad-${s.key}`}
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={CHART_COLORS[i % CHART_COLORS.length]}
                                    stopOpacity={0.35}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={CHART_COLORS[i % CHART_COLORS.length]}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        ))}
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={GRID_COLOR}
                        vertical={false}
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} />
                    <Tooltip {...tooltipStyle} />
                    {series.map((s, i) => (
                        <Area
                            key={s.key}
                            type="monotone"
                            dataKey={s.key}
                            name={s.label ?? s.key}
                            stroke={CHART_COLORS[i % CHART_COLORS.length]}
                            fill={`url(#grad-${s.key})`}
                            strokeWidth={2}
                        />
                    ))}
                </ReAreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export function BarChart({
    data,
    xKey,
    series,
    height = 300,
    className,
}: BaseProps) {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height={height}>
                <ReBarChart
                    data={data}
                    margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={GRID_COLOR}
                        vertical={false}
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} />
                    <Tooltip {...tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
                    {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
                    {series.map((s, i) => (
                        <Bar
                            key={s.key}
                            dataKey={s.key}
                            name={s.label ?? s.key}
                            fill={CHART_COLORS[i % CHART_COLORS.length]}
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </ReBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export function LineChart({
    data,
    xKey,
    series,
    height = 300,
    className,
}: BaseProps) {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height={height}>
                <ReLineChart
                    data={data}
                    margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={GRID_COLOR}
                        vertical={false}
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} />
                    <Tooltip {...tooltipStyle} />
                    {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
                    {series.map((s, i) => (
                        <Line
                            key={s.key}
                            type="monotone"
                            dataKey={s.key}
                            name={s.label ?? s.key}
                            stroke={CHART_COLORS[i % CHART_COLORS.length]}
                            strokeWidth={2}
                            dot={false}
                        />
                    ))}
                </ReLineChart>
            </ResponsiveContainer>
        </div>
    );
}

interface PieProps {
    data: { name: string; value: number }[];
    height?: number;
    className?: string;
    /** Set > 0 for a donut chart. */
    innerRadius?: number;
}

export function PieChart({
    data,
    height = 300,
    className,
    innerRadius = 0,
}: PieProps) {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height={height}>
                <RePieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={innerRadius}
                        outerRadius="80%"
                        paddingAngle={2}
                        stroke="hsl(var(--background))"
                    >
                        {data.map((_, i) => (
                            <Cell
                                key={i}
                                fill={CHART_COLORS[i % CHART_COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip {...tooltipStyle} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                </RePieChart>
            </ResponsiveContainer>
        </div>
    );
}
