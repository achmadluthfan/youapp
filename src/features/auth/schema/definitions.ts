import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username or email is required" })
    .trim()
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^[a-zA-Z0-9._-]+$/.test(value),
      { message: "Must be a valid email or username" }
    ),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .trim(),
});
