import { createAuthClient } from "better-auth/react"
import { env } from "@repo/env"
export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
  plugins: [],
})

export const { signIn, signUp, signOut, useSession } = authClient
