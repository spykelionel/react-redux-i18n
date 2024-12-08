import * as z from "zod";

const nameRegex = /^[A-Za-z]+$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .regex(nameRegex, "First name must contain only alphabetic characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .regex(nameRegex, "Last name must contain only alphabetic characters"),
    email: z
      .string()
      .email("Invalid email address")
      .regex(emailRegex, "Email must be a valid email address"),
    country: z.string().min(1, "Country is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        strongPasswordRegex,
        "Password must be stronger (include uppercase, lowercase, digit, and special character)",
      ),
    confirmPassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .regex(emailRegex, "Email must be a valid email address"),
  password: z.string(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .regex(emailRegex, "Email must be a valid email address"),
});

export type ForgotPasswordFormData = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      strongPasswordRegex,
      "Password must be stronger (include uppercase, lowercase, digit, and special character)",
    ),
  confirmPassword: z.string().min(8, "Confirm password is required"),
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export interface Country {
  name: string;
  code: string;
}
