import NextAuth from "next-auth";
// proxy.ts
import { auth } from "./auth"; // IMPORT FROM auth.ts

export default auth;

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
