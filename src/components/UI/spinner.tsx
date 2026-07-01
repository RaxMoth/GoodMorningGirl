import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
}

/** Simple loading spinner. */
export function Spinner({ className, size = 20, ...props }: SpinnerProps) {
    return (
        <Loader2
            className={cn("animate-spin text-muted-foreground", className)}
            width={size}
            height={size}
            {...props}
        />
    );
}
