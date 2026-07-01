import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/layout/MarketingLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ScrollToTop } from "./components/ScrollToTop";
import { Spinner } from "./components/ui/spinner";

// Route-level code splitting — each page is its own chunk.
const Landing = lazy(() => import("./pages/marketing/Landing"));
const About = lazy(() => import("./pages/marketing/About"));
const Features = lazy(() => import("./pages/marketing/Features"));
const Pricing = lazy(() => import("./pages/marketing/Pricing"));
const Contact = lazy(() => import("./pages/marketing/Contact"));

const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));

const Dashboard = lazy(() => import("./pages/app/Dashboard"));
const Analytics = lazy(() => import("./pages/app/Analytics"));
const DataTablePage = lazy(() => import("./pages/app/DataTablePage"));
const FormsPage = lazy(() => import("./pages/app/FormsPage"));
const ComponentsShowcase = lazy(() => import("./pages/app/ComponentsShowcase"));
const Settings = lazy(() => import("./pages/app/Settings"));

const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <Spinner size={28} />
        </div>
    );
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Public marketing site */}
                    <Route element={<MarketingLayout />}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>

                    {/* Auth (no chrome) */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Authenticated app */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/app" element={<DashboardLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="analytics" element={<Analytics />} />
                            <Route path="data" element={<DataTablePage />} />
                            <Route path="forms" element={<FormsPage />} />
                            <Route
                                path="components"
                                element={<ComponentsShowcase />}
                            />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
}
