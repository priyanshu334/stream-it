import z from "zod";

export const RegisterSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
  name: z.string()
})

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})
