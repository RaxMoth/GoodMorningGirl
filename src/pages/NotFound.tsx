import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Button } from "../components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
            <Seo title="Page not found" path="/404" />

            <div className="w-full max-w-md space-y-6 text-center">
                <p className="text-7xl font-bold tracking-tight text-primary">
                    404
                </p>
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Page not found
                    </h1>
                    <p className="text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Button asChild>
                        <Link to="/">Back home</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link to="/app">Dashboard</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
