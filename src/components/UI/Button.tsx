import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-8 px-3 text-xs",
                md: "h-10 px-4 py-2",
                lg: "h-11 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    /** Render as a child element (e.g. wrap an <a> or <Link>). */
    asChild?: boolean;
    /** Show a spinner and disable the button. */
    isLoading?: boolean;
}

/**
 * The primary interactive element. Variants and sizes are driven by `cva`.
 *
 * Use `asChild` to compose with routing links:
 * `<Button asChild><Link to="/x">Go</Link></Button>`
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            isLoading = false,
            disabled,
            children,
            ...props
        },
        ref,
    ) => {
        const classes = cn(buttonVariants({ variant, size }), className);

        // Lightweight `asChild` without pulling in @radix-ui/react-slot:
        // clone the single child and merge the computed classes.
        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children as React.ReactElement, {
                className: cn(
                    classes,
                    (children as React.ReactElement).props.className,
                ),
            });
        }

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="animate-spin" />}
                {children}
            </button>
        );
    },
);
Button.displayName = "Button";

export { Button };
