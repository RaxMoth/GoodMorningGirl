import { Outlet } from "react-router-dom";
import { MarketingHeader } from "./MarketingHeader";
import { MarketingFooter } from "./MarketingFooter";

/** Public site chrome: sticky header + footer around routed pages. */
export function MarketingLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <MarketingHeader />
            <main className="flex-1">
                <Outlet />
            </main>
            <MarketingFooter />
        </div>
    );
}
