import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(4, {
    message: "Your name must be at least 4 characters",
  }),
  emailAddress: z.email({ message: "Your e-mail is invalid" }),
  message: z
    .string()
    .max(255, { message: "Your message must not be 255 characters" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
