import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = false;
  console.log("I am middleware");
  if (!user) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/donee/:path*", "/donor/:path*"],
};
