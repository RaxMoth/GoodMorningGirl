import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
    /** Desktop sidebar collapsed to icon rail. */
    sidebarCollapsed: boolean;
    /** Mobile off-canvas sidebar open. */
    mobileNavOpen: boolean;
    /** Command palette (⌘K) open. */
    commandOpen: boolean;

    toggleSidebar: () => void;
    setSidebarCollapsed: (v: boolean) => void;
    setMobileNavOpen: (v: boolean) => void;
    setCommandOpen: (v: boolean) => void;
}

/**
 * App-wide UI state (layout chrome). Only `sidebarCollapsed` is persisted;
 * transient flags like open menus reset on reload.
 */
export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            sidebarCollapsed: false,
            mobileNavOpen: false,
            commandOpen: false,

            toggleSidebar: () =>
                set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
            setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
            setMobileNavOpen: (v) => set({ mobileNavOpen: v }),
            setCommandOpen: (v) => set({ commandOpen: v }),
        }),
        {
            name: "app-ui",
            partialize: (s) => ({ sidebarCollapsed: s.sidebarCollapsed }),
        },
    ),
);
