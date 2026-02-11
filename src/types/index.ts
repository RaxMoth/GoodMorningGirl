/**
 * Core TypeScript Type Definitions for GoodMorningGirl
 * Comprehensive types for the entire application
 */

// ============================================================================
// THEME & UI TYPES
// ============================================================================

export type ThemeMode = "light" | "dark";

export interface Theme {
    mode: ThemeMode;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
    };
}

// ============================================================================
// USER & AUTHENTICATION TYPES
// ============================================================================

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    joinedDate: Date;
    preferences?: UserPreferences;
}

export interface UserPreferences {
    theme: ThemeMode;
    notifications: boolean;
    language: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupFormData {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

// ============================================================================
// PAGE & NAVIGATION TYPES
// ============================================================================

export interface Page {
    id: string;
    title: string;
    slug: string;
    description: string;
    order: number;
}

export interface NavigationItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    children?: NavigationItem[];
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

export interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

export interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// ============================================================================
// CONTENT & DATA TYPES
// ============================================================================

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    featured: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// ============================================================================
// STORE TYPES
// ============================================================================

export interface AppStoreState {
    theme: ThemeMode;
    sidebarOpen: boolean;

    // Actions
    setTheme: (theme: ThemeMode) => void;
    toggleSidebar: () => void;
}

export interface AuthStoreState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (email: string, password: string) => Promise<void>;
    signup: (data: SignupFormData) => Promise<void>;
    logout: () => void;
    checkAuth: () => void;
    clearError: () => void;
}

// ============================================================================
// SEO & META TYPES
// ============================================================================

export interface MetaTags {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

export interface StructuredData {
    "@context": string;
    "@type": string;
    [key: string]: any;
}

// ============================================================================
// FORM & VALIDATION TYPES
// ============================================================================

export interface FormError {
    field: string;
    message: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: FormError[];
}

export interface FormState<T> {
    data: T;
    errors: Partial<Record<keyof T, string>>;
    isSubmitting: boolean;
    isValid: boolean;
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    duration?: number;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Async<T> = Promise<T>;
export type AsyncVoid = Promise<void>;

export interface PaginationParams {
    page: number;
    limit: number;
    sort?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}
