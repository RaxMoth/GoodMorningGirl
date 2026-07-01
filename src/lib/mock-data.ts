/**
 * Mock data used by the demo dashboard, analytics and data-table pages.
 * Replace these with real API calls (see `src/services/api.ts` and
 * TanStack Query) when you build out your app.
 */

export const revenueSeries = [
    { month: "Jan", revenue: 4200, expenses: 2400 },
    { month: "Feb", revenue: 3800, expenses: 2210 },
    { month: "Mar", revenue: 5100, expenses: 2900 },
    { month: "Apr", revenue: 4700, expenses: 2600 },
    { month: "May", revenue: 6200, expenses: 3100 },
    { month: "Jun", revenue: 7400, expenses: 3400 },
    { month: "Jul", revenue: 6900, expenses: 3200 },
    { month: "Aug", revenue: 8100, expenses: 3600 },
    { month: "Sep", revenue: 7700, expenses: 3500 },
    { month: "Oct", revenue: 9200, expenses: 4100 },
    { month: "Nov", revenue: 10400, expenses: 4300 },
    { month: "Dec", revenue: 11800, expenses: 4800 },
];

export const trafficSources = [
    { name: "Organic", value: 4200 },
    { name: "Direct", value: 3100 },
    { name: "Referral", value: 1800 },
    { name: "Social", value: 2400 },
    { name: "Email", value: 1200 },
];

export const weeklyActivity = [
    { day: "Mon", sessions: 320, signups: 24 },
    { day: "Tue", sessions: 410, signups: 31 },
    { day: "Wed", sessions: 380, signups: 28 },
    { day: "Thu", sessions: 520, signups: 44 },
    { day: "Fri", sessions: 610, signups: 52 },
    { day: "Sat", sessions: 290, signups: 19 },
    { day: "Sun", sessions: 240, signups: 15 },
];

export type UserStatus = "active" | "invited" | "suspended";

export interface UserRecord {
    id: string;
    name: string;
    email: string;
    role: "Admin" | "Editor" | "Viewer";
    status: UserStatus;
    revenue: number;
    lastActive: string; // ISO date
}

export const users: UserRecord[] = [
    { id: "1", name: "Ava Thompson", email: "ava@acme.io", role: "Admin", status: "active", revenue: 8420, lastActive: "2026-06-28" },
    { id: "2", name: "Liam Chen", email: "liam@acme.io", role: "Editor", status: "active", revenue: 5210, lastActive: "2026-06-30" },
    { id: "3", name: "Sofia Rossi", email: "sofia@acme.io", role: "Viewer", status: "invited", revenue: 0, lastActive: "2026-06-15" },
    { id: "4", name: "Noah Patel", email: "noah@acme.io", role: "Editor", status: "active", revenue: 3120, lastActive: "2026-06-29" },
    { id: "5", name: "Emma Müller", email: "emma@acme.io", role: "Viewer", status: "suspended", revenue: 1450, lastActive: "2026-05-02" },
    { id: "6", name: "Oliver Kim", email: "oliver@acme.io", role: "Admin", status: "active", revenue: 9910, lastActive: "2026-06-30" },
    { id: "7", name: "Mia Johnson", email: "mia@acme.io", role: "Editor", status: "invited", revenue: 0, lastActive: "2026-06-20" },
    { id: "8", name: "Lucas Silva", email: "lucas@acme.io", role: "Viewer", status: "active", revenue: 2760, lastActive: "2026-06-27" },
    { id: "9", name: "Charlotte Dubois", email: "charlotte@acme.io", role: "Editor", status: "active", revenue: 6340, lastActive: "2026-06-26" },
    { id: "10", name: "Ethan Wright", email: "ethan@acme.io", role: "Viewer", status: "suspended", revenue: 890, lastActive: "2026-04-18" },
    { id: "11", name: "Amelia Novak", email: "amelia@acme.io", role: "Admin", status: "active", revenue: 7180, lastActive: "2026-06-30" },
    { id: "12", name: "James Okafor", email: "james@acme.io", role: "Editor", status: "active", revenue: 4020, lastActive: "2026-06-25" },
    { id: "13", name: "Isabella Costa", email: "isabella@acme.io", role: "Viewer", status: "invited", revenue: 0, lastActive: "2026-06-12" },
    { id: "14", name: "Benjamin Lee", email: "ben@acme.io", role: "Editor", status: "active", revenue: 5590, lastActive: "2026-06-28" },
    { id: "15", name: "Zoe Andersson", email: "zoe@acme.io", role: "Viewer", status: "active", revenue: 3300, lastActive: "2026-06-24" },
];
