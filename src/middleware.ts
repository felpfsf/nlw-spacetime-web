import { NextRequest, NextResponse } from "next/server";

const SIGNINURL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

export function middleware(request: NextRequest) {
  const token = request.cookies.get("spacetimeToken")?.value;
  if (!token) {
    return NextResponse.redirect(SIGNINURL, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; max-age=20; HttpOnly;`,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/memory/:path*",
};
