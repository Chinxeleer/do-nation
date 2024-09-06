import { NextRequest, NextResponse } from "next/server";
import auth from "./lib/auth";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = await auth.getUser();
  console.log("I am middleware", user);
  if (!user) {
    request.cookies.delete("session");
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/donee/:path*", "/donor/:path*"],
};
