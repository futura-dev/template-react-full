import z from "zod";

const envSchema = z.object({
  VITE_APPLICATION_MODE: z.enum(["development", "production", "debug"])
});

const envServer = envSchema.safeParse(import.meta.env);

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const env = envServer.data;
