import * as React from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeProviderState {
    /** The user's choice: "light" | "dark" | "system". */
    theme: Theme;
    /** The actually-applied theme after resolving "system". */
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeProviderContext = React.createContext<ThemeProviderState | null>(
    null,
);

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
}: ThemeProviderProps) {
    const [theme, setThemeState] = React.useState<Theme>(() => {
        if (typeof window === "undefined") return defaultTheme;
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });

    const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
        () => (theme === "system" ? getSystemTheme() : theme),
    );

    React.useEffect(() => {
        const root = window.document.documentElement;
        const applied = theme === "system" ? getSystemTheme() : theme;

        root.classList.remove("light", "dark");
        root.classList.add(applied);
        setResolvedTheme(applied);
    }, [theme]);

    // Follow the OS when in "system" mode.
    React.useEffect(() => {
        if (theme !== "system") return;
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => {
            const applied = getSystemTheme();
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(applied);
            setResolvedTheme(applied);
        };
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, [theme]);

    const setTheme = React.useCallback(
        (next: Theme) => {
            localStorage.setItem(storageKey, next);
            setThemeState(next);
        },
        [storageKey],
    );

    const toggleTheme = React.useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    const value = React.useMemo(
        () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
        [theme, resolvedTheme, setTheme, toggleTheme],
    );

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export function useTheme() {
    const context = React.useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
