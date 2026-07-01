# Launchpad — React Starter Template

A production-ready **React 18 + TypeScript + Vite** template you can fork to
build almost anything: marketing sites, one-page overviews, dashboards, and
data-analytics apps. It ships with a full UI kit, charts, data tables,
validated forms, auth scaffolding, dark mode, and SEO — all wired together.

## ✨ What's inside

| Area | Stack |
| --- | --- |
| Framework | React 18, TypeScript, Vite 6 |
| Styling | Tailwind CSS + CSS-variable design tokens, dark mode |
| UI kit | 25+ accessible components on Radix UI + `class-variance-authority` |
| Icons / Motion | lucide-react, framer-motion |
| Routing | React Router 7 (nested layouts, lazy routes, protected routes) |
| Data | TanStack Query (fetching), TanStack Table (data grids) |
| Charts | Recharts (area / bar / line / pie, theme-aware) |
| Forms | react-hook-form + Zod |
| State | Zustand (with `persist`) |
| Feedback | sonner toasts |
| SEO | react-helmet-async + `<Seo />` component |
| Backend (optional) | Firebase (auth/firestore/storage), off by default |
| Testing | Vitest + Testing Library |

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build
npm run preview    # preview the build
npm run lint       # eslint
npm run typecheck  # tsc, no emit
npm run test       # vitest (run once)
npm run test:watch # vitest watch mode
```

## 🧭 Routes

| Path | Description |
| --- | --- |
| `/` `/about` `/features` `/pricing` `/contact` | Public marketing site (`MarketingLayout`) |
| `/login` `/signup` | Auth pages (mock auth by default) |
| `/app` | Dashboard (KPIs + charts) |
| `/app/analytics` | Analytics with tabs + charts |
| `/app/data` | Sortable/searchable/paginated data table |
| `/app/forms` | Validated form example |
| `/app/components` | UI kit showcase (kitchen sink) |
| `/app/settings` | Settings with theme switcher |

The `/app` area is wrapped in `ProtectedRoute`. Auth is a **mock** store that
persists to `localStorage` — sign in once from `/login` and you're in. Swap
`src/stores/useAuthStore.ts` (or wire up `src/config/firebase.ts`) for real auth.

## 📁 Project structure

```
src/
├── components/
│   ├── ui/           # The UI kit (button, card, dialog, table, …) + barrel
│   ├── layout/       # MarketingLayout + DashboardLayout (sidebar/topbar)
│   ├── charts/       # Recharts wrappers (theme-aware)
│   ├── data/         # DataTable (TanStack Table)
│   ├── dashboard/    # StatCard and dashboard widgets
│   └── *.tsx         # Seo, ThemeToggle, PageHeader, ErrorBoundary, …
├── pages/
│   ├── marketing/    # Landing, About, Features, Pricing, Contact
│   ├── app/          # Dashboard, Analytics, DataTablePage, Forms, Settings, …
│   ├── auth/         # Login, Signup
│   └── NotFound.tsx
├── providers/        # ThemeProvider, QueryProvider, AppProviders
├── stores/           # Zustand stores (UI + auth)
├── hooks/            # useMediaQuery, useDebounce, useToggle, …
├── lib/              # cn(), validations (Zod), mock-data
├── config/           # site.ts (branding/nav), firebase.ts (optional)
├── services/         # api.ts (fetch wrapper)
└── utils/            # helpers (format, validate, debounce, …)
```

## 🎨 Theming / re-branding

1. **Branding & navigation** → edit [`src/config/site.ts`](src/config/site.ts).
2. **Colors** → edit the CSS variables in [`src/index.css`](src/index.css).
   Every component reads from tokens like `--primary`, `--background`,
   `--muted`, so changing them re-skins the whole app (light + dark).
3. **Charts** recolor automatically via `--chart-1…5`.

Dark mode is handled by `ThemeProvider` (light / dark / system) and the
`<ThemeToggle />` in the header.

## 🧱 Using the UI kit

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui";

<Card>
  <CardHeader><CardTitle>Hello</CardTitle></CardHeader>
  <CardContent>
    <Button variant="primary" size="lg">Click me</Button>
    <Badge variant="success">New</Badge>
  </CardContent>
</Card>;
```

The `@/` alias points to `src/` (configured in `vite.config.ts` + `tsconfig`).

## 🔌 Firebase (optional)

Firebase is installed but **not** imported anywhere by default, so it adds no
weight to your bundle. To enable it, copy `.env.example` → `.env`, fill in the
`VITE_FIREBASE_*` values, and import from `src/config/firebase.ts`.

---

Fork it, edit `site.ts`, and start shipping. 🚀
