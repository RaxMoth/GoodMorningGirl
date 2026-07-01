import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { QueryProvider } from "./QueryProvider";
import { TooltipProvider } from "../components/ui/tooltip";

/** Toaster that follows the active theme. */
function ThemedToaster() {
    const { resolvedTheme } = useTheme();
    return (
        <Toaster
            theme={resolvedTheme}
            position="bottom-right"
            richColors
            closeButton
        />
    );
}

/**
 * Composes every app-wide provider in one place:
 * SEO (Helmet) → data (React Query) → theme → tooltips → toasts.
 * Wrap the router with this once in `main.tsx`.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <HelmetProvider>
            <QueryProvider>
                <ThemeProvider defaultTheme="system">
                    <TooltipProvider delayDuration={200}>
                        {children}
                        <ThemedToaster />
                    </TooltipProvider>
                </ThemeProvider>
            </QueryProvider>
        </HelmetProvider>
    );
}
