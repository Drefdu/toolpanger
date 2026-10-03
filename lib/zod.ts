import { Password } from "@hugeicons/core-free-icons";
import { z } from "zod";

const slugSchema = z.string()
  .min(5, "Slug needs at least 5 charecters")
  .max(50, "Slug must not have more thant 50 characters")
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .toLowerCase()
  .trim()
  .normalize()

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

export const ProjectSchema = z.object({
  title: z
    .string()
    .min(5, "Title must have at least 5 charecters")
    .max(50, "Title must not have more thant 50 characters"),
  slug: slugSchema,
  description: z
    .string()
    .max(200, "Description must not have more than 200 characters"),
  created_at: z.string(),
  updated_at: z.string(),
  user_id: z.uuid(),
  id: z.uuid()
})

export type Project = z.infer<typeof ProjectSchema>
export type Login = z.infer<typeof LoginSchema>
export type User = z.infer<typeof UserSchema>
