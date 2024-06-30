import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLogin = request.cookies.get("twitterUsn")?.value;

  if (!isLogin) {
    if (pathname === "/twitter-menfess") {
      return NextResponse.redirect(
        new URL("/twitter-menfess/login", request.url)
      );
    }
  } else {
    if (
      pathname.startsWith("/twitter-menfess/login") ||
      pathname.startsWith("/twitter-menfess/register")
    ) {
      return NextResponse.redirect(new URL("/twitter-menfess", request.url));
    }
  }
}
