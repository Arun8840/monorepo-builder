import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const server = {
  DATABASE_URL: z.string().url().optional(),
  BETTER_AUTH_SECRET: z.string().min(32).optional(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
};

const client = {
  NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url().optional(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
};

export const env = createEnv({
  server,
  client,
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION || process.env.NODE_ENV === "production",
  emptyStringAsUndefined: true,
});
