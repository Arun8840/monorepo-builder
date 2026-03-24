import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { env } from "@repo/env";

let _db: ReturnType<typeof drizzle> | null = null;

export const getDb = () => {
  if (!_db) {
    if (!env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    _db = drizzle(env.DATABASE_URL, { schema });
  }
  return _db;
};

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    return getDb()[prop as keyof ReturnType<typeof drizzle>];
  },
});

export { schema };
