import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  appName: "Builder",
  database: {
    provider: "postgresql",
    url: "",
  },
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24 * 7,
  },
  plugins: [nextCookies()],
  trustedOrigins: ["http://localhost:3000"],
});

export type { Session, User } from "better-auth";
