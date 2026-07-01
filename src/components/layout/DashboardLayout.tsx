import { Outlet } from "react-router-dom";
import { useAppStore } from "../../stores/useAppStore";
import { cn } from "../../lib/utils";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

/**
 * App shell: fixed collapsible sidebar (desktop), slide-in drawer (mobile),
 * sticky topbar, and a scrollable content area for routed pages.
 */
export function DashboardLayout() {
    const collapsed = useAppStore((s) => s.sidebarCollapsed);
    const mobileOpen = useAppStore((s) => s.mobileNavOpen);
    const setMobileNavOpen = useAppStore((s) => s.setMobileNavOpen);

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Desktop sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-30 hidden border-r border-border bg-background transition-[width] duration-200 lg:block",
                    collapsed ? "w-[72px]" : "w-64",
                )}
            >
                <Sidebar />
            </aside>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
                        onClick={() => setMobileNavOpen(false)}
                    />
                    <div className="absolute inset-y-0 left-0 w-64 border-r border-border bg-background shadow-xl animate-slide-up">
                        <Sidebar
                            forceExpanded
                            onNavigate={() => setMobileNavOpen(false)}
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div
                className={cn(
                    "flex min-h-screen flex-col transition-[padding] duration-200",
                    collapsed ? "lg:pl-[72px]" : "lg:pl-64",
                )}
            >
                <Topbar />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
