import { z } from "zod";

// DTO for creating a new user - only fields the client should provide
export const createUserDTO = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    isVerified: z.boolean().default(false),
    isActive: z.boolean().default(true),

});

// DTO for updating a user - all fields are optional
export const updateUserDTO = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(6, "Password must be at least 6 characters long").optional(),
    isVerified: z.boolean().optional(),
    isActive: z.boolean().optional(),
});