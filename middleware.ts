import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const isAdminDomain =
    hostname.startsWith("office.askzambia.com") ||
    hostname.startsWith("office.");

  // Rewrite office.askzambia.com/* to /admin/*
  if (isAdminDomain) {
    const pathname = request.nextUrl.pathname;

    // Don't rewrite auth, API routes, or static assets
    if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/auth") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname === "/favicon.ico" ||
      pathname === "/icon.svg"
    ) {
      // For admin pages, check auth
      if (pathname.startsWith("/admin")) {
        const sessionCookie = request.cookies.get(
          "better-auth.session_token"
        );
        if (!sessionCookie?.value) {
          return NextResponse.redirect(new URL("/auth", request.url));
        }
      }
      return NextResponse.next();
    }

    // Rewrite root and other paths to /admin prefix
    const url = request.nextUrl.clone();
    url.pathname = `/admin${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Regular site: protect /chat
  if (request.nextUrl.pathname === "/chat") {
    const sessionCookie = request.cookies.get("better-auth.session_token");
    if (!sessionCookie?.value) {
      const loginUrl = new URL("/auth", request.url);
      loginUrl.searchParams.set(
        "redirect",
        request.nextUrl.pathname + request.nextUrl.search
      );
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
