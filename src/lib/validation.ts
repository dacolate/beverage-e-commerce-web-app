import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  name: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed"
  ),
  phone: requiredString.regex(/^\+?[1-9]\d{1,14}$/, {
    message:
      "Invalid phone number. It must be in international format (+123456789).",
  }),
  password: z.string(),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  phone: requiredString.regex(/^\+?[1-9]\d{1,14}$/, {
    message:
      "Invalid phone number. It must be in international format (+123456789).",
  }),
  password: z.string(),
});

export type LoginValues = z.infer<typeof loginSchema>;
