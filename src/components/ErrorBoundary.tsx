import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Catches render errors in the subtree and shows a friendly fallback
 * instead of a blank white screen. Wrap the router (or risky subtrees).
 */
export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Hook up your error reporting service here (Sentry, etc.).
        console.error("ErrorBoundary caught:", error, info);
    }

    reset = () => this.setState({ hasError: false, error: undefined });

    render() {
        if (!this.state.hasError) return this.props.children;
        if (this.props.fallback) return this.props.fallback;

        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <AlertTriangle className="size-7" />
                </span>
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold">
                        Something went wrong
                    </h2>
                    <p className="max-w-md text-sm text-muted-foreground">
                        {this.state.error?.message ??
                            "An unexpected error occurred."}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={this.reset}>Try again</Button>
                    <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                    >
                        Reload page
                    </Button>
                </div>
            </div>
        );
    }
}
