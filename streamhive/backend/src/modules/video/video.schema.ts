import z from "zod";

export const CreateVideoSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  visiblity: z.enum(["public", "private", "unlisted"]).optional(),
})
