import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const teleUSN = request.cookies.get("teleUsn")?.value;

  if (!teleUSN) {
    if (pathname === "/twitter-menfess") {
      return NextResponse.redirect(
        new URL("/twitter-menfess/login", request.url)
      );
    }
  } else {
    if (pathname.startsWith("/twitter-menfess/login")) {
      return NextResponse.redirect(new URL("/twitter-menfess", request.url));
    }
  }
}
