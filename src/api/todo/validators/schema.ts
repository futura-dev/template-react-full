import { z } from "zod";

export const todoResponseSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export const todoResponseSchemaArray = z.array(todoResponseSchema);
