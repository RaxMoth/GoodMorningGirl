import { Link, NavLink } from "react-router-dom";
import { PanelLeftClose, PanelLeftOpen, Rocket } from "lucide-react";
import { dashboardNav, siteConfig } from "../../config/site";
import { useAppStore } from "../../stores/useAppStore";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface SidebarProps {
    /** When true, renders full-width labels regardless of collapse (mobile drawer). */
    forceExpanded?: boolean;
    onNavigate?: () => void;
}

export function Sidebar({ forceExpanded = false, onNavigate }: SidebarProps) {
    const collapsed = useAppStore((s) => s.sidebarCollapsed) && !forceExpanded;
    const toggle = useAppStore((s) => s.toggleSidebar);

    return (
        <div className="flex h-full flex-col">
            <div
                className={cn(
                    "flex h-16 items-center border-b border-border px-4",
                    collapsed ? "justify-center" : "justify-between",
                )}
            >
                <Link
                    to="/app"
                    onClick={onNavigate}
                    className="flex items-center gap-2 font-bold"
                >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Rocket className="size-5" />
                    </span>
                    {!collapsed && <span>{siteConfig.name}</span>}
                </Link>
                {!forceExpanded && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggle}
                        className={cn("hidden lg:inline-flex", collapsed && "hidden")}
                        aria-label="Collapse sidebar"
                    >
                        <PanelLeftClose className="size-4" />
                    </Button>
                )}
            </div>

            <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4 scrollbar-thin">
                {dashboardNav.map((section) => (
                    <div key={section.title} className="space-y-1">
                        {!collapsed && section.title && (
                            <p className="px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                {section.title}
                            </p>
                        )}
                        {section.items.map((item) => {
                            const Icon = item.icon!;
                            const link = (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    end={item.href === "/app"}
                                    onClick={onNavigate}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                            collapsed && "justify-center",
                                            isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-accent hover:text-foreground",
                                        )
                                    }
                                >
                                    <Icon className="size-4 shrink-0" />
                                    {!collapsed && item.label}
                                </NavLink>
                            );

                            return collapsed ? (
                                <Tooltip key={item.href}>
                                    <TooltipTrigger asChild>{link}</TooltipTrigger>
                                    <TooltipContent side="right">
                                        {item.label}
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                link
                            );
                        })}
                    </div>
                ))}
            </nav>

            {collapsed && !forceExpanded && (
                <div className="border-t border-border p-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggle}
                        className="w-full"
                        aria-label="Expand sidebar"
                    >
                        <PanelLeftOpen className="size-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
