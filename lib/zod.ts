import { Password } from "@hugeicons/core-free-icons";
import { z } from "zod";

export const UserSchema = z.object({
  given_name: z
    .string()
    .min(3, "Given name must have at least 3 letters.")
    .max(20, "Given name must haven't more than 20 letters"),
  last_name: z
    .string()
    .min(3, "Last name must have at least 3 letters.")
    .max(20, "Last name must haven't more than 20 letters"),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(20, "Password must haven't more than 50 characters"),
  confirm: z.string()
}).refine((data) => data.password === data.confirm, {
  error: "Passwords don't match",
  path: ["confirm"]
});

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must have at least 8 characters')
});

export type Login = z.infer<typeof LoginSchema>
export type User = z.infer<typeof UserSchema>
