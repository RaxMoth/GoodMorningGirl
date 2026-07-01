import * as React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

/**
 * A single shared QueryClient with sensible defaults.
 * Tune `staleTime` / `retry` here for the whole app.
 */
function makeClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000, // 1 minute
                retry: 1,
                refetchOnWindowFocus: false,
            },
        },
    });
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
    // Keep the client stable across re-renders.
    const [client] = React.useState(makeClient);
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
}
