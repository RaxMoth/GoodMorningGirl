import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "admin" | "member";
}

interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

/**
 * MOCK auth store — persists a fake user to localStorage so the dashboard
 * feels real out of the box. Swap the `login`/`signup` bodies with real
 * calls to your backend or Firebase (`src/config/firebase.ts`).
 */
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email) => {
                set({ isLoading: true, error: null });
                await new Promise((r) => setTimeout(r, 600)); // simulate network
                set({
                    user: {
                        id: "u_1",
                        name: email.split("@")[0] || "Demo User",
                        email,
                        role: "admin",
                    },
                    isAuthenticated: true,
                    isLoading: false,
                });
            },

            signup: async (name, email) => {
                set({ isLoading: true, error: null });
                await new Promise((r) => setTimeout(r, 600));
                set({
                    user: { id: "u_1", name, email, role: "member" },
                    isAuthenticated: true,
                    isLoading: false,
                });
            },

            logout: () => set({ user: null, isAuthenticated: false }),
            clearError: () => set({ error: null }),
        }),
        { name: "auth" },
    ),
);
