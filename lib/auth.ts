import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
// Force Next.js to bundle these for better-auth's dynamic imports
import "pg";
import "kysely";

export const auth = betterAuth({
  database: {
    type: "postgres",
    url: process.env.DATABASE_URL!,
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
