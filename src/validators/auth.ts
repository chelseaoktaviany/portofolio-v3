import { z } from "zod";

export const loginSchema = z.object({
  emailAddress: z
    .email({ message: "Your e-mail address is invalid" })
    .toLowerCase(),
  password: z
    .string({ message: "Please fill your password" })
    .min(6, { message: "Your password must be at least 6 characters" }),
});

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(4, { message: "Your first name must be at least 4 characters" })
    .max(255, {
      message: "Your first name must not be above 255 characters",
    }),
  lastName: z
    .string()
    .min(4, { message: "Your last name must be at least 4 characters" })
    .max(255, {
      message: "Your last name must not be above 255 characters",
    }),
  emailAddress: z
    .email({ message: "Your e-mail address is invalid" })
    .toLowerCase(),
  password: z
    .string({ message: "Please fill your password" })
    .min(6, { message: "Your password must be at least 6 characters" }),
  passwordConfirm: z
    .string({ message: "Please fill your confirm password" })
    .min(6, { message: "Your confirm password must be at least 6 characters" }),
});
