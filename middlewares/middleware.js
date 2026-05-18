import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("admin_token") || request.headers.get("authorization");
    const { pathname } = request.nextUrl;

    // Auth pages - redirect to dashboard if already logged in
    if (pathname === "/login") {
        if (token) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
        return NextResponse.next();
    }

    // Dashboard routes protection
    if (
        pathname.startsWith("/dashboard") ||
        // pathname.startsWith("/page-meta") ||
        // pathname.startsWith("/contacts") ||
        pathname.startsWith("/users")
    ) {
        if (!token) {
            const url = new URL("/login", request.url);
            url.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/(auth)/login",
        "/dashboard/:path*",
        // "/page-meta/:path*",
        // "/contacts/:path*",
        "/users/:path*",
    ],
};
