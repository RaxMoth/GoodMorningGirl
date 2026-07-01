import { z } from "zod";

/** Shared Zod schemas. Reuse these with react-hook-form's zodResolver. */

export const loginSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    remember: z.boolean().optional(),
});
export type LoginValues = z.infer<typeof loginSchema>;

export const signupSchema = z
    .object({
        name: z.string().min(2, "Please enter your name"),
        email: z.string().email("Enter a valid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string(),
        terms: z.boolean().refine((v) => v === true, {
            message: "You must accept the terms",
        }),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
export type SignupValues = z.infer<typeof signupSchema>;

export const contactSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    topic: z.string().min(1, "Please choose a topic"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long"),
});
export type ContactValues = z.infer<typeof contactSchema>;

export const profileSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    bio: z.string().max(160, "Bio must be 160 characters or fewer").optional(),
    website: z
        .string()
        .url("Enter a valid URL")
        .optional()
        .or(z.literal("")),
});
export type ProfileValues = z.infer<typeof profileSchema>;
