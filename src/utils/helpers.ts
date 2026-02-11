/**
 * Utility Functions
 * Collection of helper functions used throughout the app
 */

/**
 * Formats date to readable string
 */
export const formatDate = (
    date: Date | string,
    format: string = "MMM DD, YYYY",
): string => {
    const d = typeof date === "string" ? new Date(date) : date;
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();

    return format
        .replace("YYYY", String(year))
        .replace("MMM", month)
        .replace("DD", String(day).padStart(2, "0"));
};

/**
 * Truncates text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates password strength
 */
export const validatePassword = (
    password: string,
): { isValid: boolean; score: number } => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return {
        isValid: score >= 3,
        score,
    };
};

/**
 * Generates unique ID
 */
export const generateId = (): string => {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Debounces a function
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number,
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

/**
 * Formats number as currency
 */
export const formatCurrency = (
    amount: number,
    currency: string = "USD",
): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
};

/**
 * Classname utility helper
 */
export const classNames = (
    ...classes: (string | false | undefined | null)[]
): string => {
    return classes.filter(Boolean).join(" ");
};
