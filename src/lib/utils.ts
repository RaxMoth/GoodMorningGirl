import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` — merge conditional class names and resolve Tailwind conflicts.
 *
 * @example
 * cn("px-2 py-1", isActive && "bg-primary", "px-4") // -> "py-1 bg-primary px-4"
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
