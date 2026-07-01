import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

/**
 * Guards the /app area. Redirects unauthenticated users to /login and
 * remembers where they were headed (via location state).
 *
 * The demo auth store is a mock — sign in once and it persists.
 * Swap `useAuthStore` for your real auth to make this production-ready.
 */
export function ProtectedRoute() {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
    return <Outlet />;
}
