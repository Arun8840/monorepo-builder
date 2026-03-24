import { betterAuth, type Auth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { getDb } from "@repo/db";
import { env } from "@repo/env";

let _auth: Auth | null = null;

export const getAuth = () => {
  if (!_auth) {
    if (!env.BETTER_AUTH_SECRET) {
      throw new Error("BETTER_AUTH_SECRET is not set");
    }
    _auth = betterAuth({
      secret: env.BETTER_AUTH_SECRET,
      database: drizzleAdapter(getDb(), {
        provider: "pg",
      }),
      emailAndPassword: {
        enabled: true,
      },
      session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24 * 7,
      },
      plugins: [nextCookies()],
      trustedOrigins: ["http://localhost:3001"],
    }) as unknown as Auth;
  }
  return _auth;
};

export const auth = new Proxy({} as Auth, {
  get(_target, prop) {
    return (getAuth() as any)[prop];
  },
});
