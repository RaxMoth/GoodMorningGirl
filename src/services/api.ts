/**
 * API Client Service
 * Centralized API calls and error handling
 */

import { ApiResponse } from "../types";

const API_BASE_URL =
    (import.meta.env.VITE_API_URL as string) || "https://api.example.com";

interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
}

/**
 * Generic fetch wrapper with error handling
 */
export const apiClient = async <T>(
    endpoint: string,
    options: FetchOptions = {},
): Promise<ApiResponse<T>> => {
    try {
        const url = `${API_BASE_URL}${endpoint}`;
        const token = localStorage.getItem("authToken");

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            ...options.headers,
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: data.error || "An error occurred",
                data: undefined,
            };
        }

        return {
            success: true,
            data: data as T,
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Network error",
            data: undefined,
        };
    }
};

/**
 * GET request
 */
export const get = <T>(endpoint: string) => {
    return apiClient<T>(endpoint, { method: "GET" });
};

/**
 * POST request
 */
export const post = <T>(endpoint: string, data: any) => {
    return apiClient<T>(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
    });
};

/**
 * PUT request
 */
export const put = <T>(endpoint: string, data: any) => {
    return apiClient<T>(endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
    });
};

/**
 * DELETE request
 */
export const del = <T>(endpoint: string) => {
    return apiClient<T>(endpoint, { method: "DELETE" });
};

/**
 * PATCH request
 */
export const patch = <T>(endpoint: string, data: any) => {
    return apiClient<T>(endpoint, {
        method: "PATCH",
        body: JSON.stringify(data),
    });
};
