import React from "react";
import { ButtonProps } from "../../types";

/**
 * Reusable Button Component
 * Supports multiple variants and sizes
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            disabled = false,
            onClick,
            children,
        },
        ref,
    ) => {
        const baseClasses =
            "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variantClasses = {
            primary:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
            secondary:
                "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
            outline:
                "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
            ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        };

        const sizeClasses = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        };

        const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

        return (
            <button
                ref={ref}
                className={className}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
