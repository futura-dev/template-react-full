import { z } from "zod";

export const signInResponseSchema = z.object({
  outcome: z.boolean()
});

export const meResponseSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string()
});
