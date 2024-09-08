import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/auth/register";
  //   const tokenValue = request.cookies.get("token")?.value || "";
  const tokenValue = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (isPublicPath && tokenValue) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !tokenValue) {
    return NextResponse.redirect(new URL("/auth/register", request.nextUrl));
  }
  return NextResponse.next(); // Continue to the requested route if no redirection is required
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/register", "/recipe/recipe-form"],
};
