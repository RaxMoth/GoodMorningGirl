import { create } from "zustand";

interface AppState {
    // State
    count: number;
    theme: "light" | "dark";
    isLoading: boolean;

    // Actions
    increment: () => void;
    decrement: () => void;
    resetCount: () => void;
    toggleTheme: () => void;
    setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    // Initial state
    count: 0,
    theme: "light",
    isLoading: false,

    // Actions
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
        })),
    setLoading: (loading) => set({ isLoading: loading }),
}));
