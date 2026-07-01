import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        // Honour a PORT env var (used by preview tooling / some hosts).
        port: process.env.PORT ? Number(process.env.PORT) : 5173,
    },
});
