/**
 * useTheme Hook
 * Manages theme switching and persistent storage
 */

import { useState, useEffect } from "react";
import { ThemeMode } from "../types";

export const useTheme = (defaultTheme: ThemeMode = "light") => {
    const [theme, setTheme] = useState<ThemeMode>(() => {
        // Check localStorage first
        const stored = localStorage.getItem("app-theme");
        if (stored === "light" || stored === "dark") {
            return stored;
        }

        // Check system preference
        if (typeof window !== "undefined") {
            const isDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            return isDark ? "dark" : "light";
        }

        return defaultTheme;
    });

    useEffect(() => {
        // Update DOM
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // Persist to localStorage
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, setTheme, toggleTheme };
};
