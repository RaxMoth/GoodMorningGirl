import React from "react";

interface BadgeProps {
    variant?: "default" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

/**
 * Badge Component for labels and tags
 */
const Badge: React.FC<BadgeProps> = ({
    variant = "default",
    size = "md",
    children,
}) => {
    const variantClasses = {
        default: "bg-gray-200 text-gray-800",
        success: "bg-green-200 text-green-800",
        warning: "bg-yellow-200 text-yellow-800",
        error: "bg-red-200 text-red-800",
        info: "bg-blue-200 text-blue-800",
    };

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
        >
            {children}
        </span>
    );
};

export default Badge;
