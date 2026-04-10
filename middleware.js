import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token");

    const { pathname } = request.nextUrl;

    const isPublic = pathname === "/login" || pathname === "/register";

    if (!token && !isPublic) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token && isPublic) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile/:path*", "/create", "/post/:path*"],
};