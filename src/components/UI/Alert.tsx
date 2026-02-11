import React from "react";
import { AlertCircle, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface AlertProps {
    type?: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
    onClose?: () => void;
}

/**
 * Alert Component with icon support
 */
const Alert: React.FC<AlertProps> = ({
    type = "info",
    title,
    message,
    onClose,
}) => {
    const config = {
        success: {
            bg: "bg-green-50",
            border: "border-green-200",
            text: "text-green-800",
            icon: CheckCircle,
        },
        error: {
            bg: "bg-red-50",
            border: "border-red-200",
            text: "text-red-800",
            icon: AlertCircle,
        },
        warning: {
            bg: "bg-yellow-50",
            border: "border-yellow-200",
            text: "text-yellow-800",
            icon: AlertTriangle,
        },
        info: {
            bg: "bg-blue-50",
            border: "border-blue-200",
            text: "text-blue-800",
            icon: Info,
        },
    };

    const { bg, border, text, icon: IconComponent } = config[type];

    return (
        <div
            className={`${bg} ${border} ${text} border rounded-lg p-4 flex items-start gap-3`}
        >
            <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
                {title && <h3 className="font-semibold">{title}</h3>}
                <p className="text-sm">{message}</p>
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default Alert;
