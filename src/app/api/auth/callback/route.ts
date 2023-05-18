import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const registerResponse = await api.post("/api/auth/register", {
    code,
  });

  const { spacetimeToken } = registerResponse.data;

  console.log(spacetimeToken);

  const redirectURL = new URL("/", request.url);

  const expiresInSeconds = 60 * 60 * 24 * 30;

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `spacetimeToken=${spacetimeToken}; Path=/; max-age=${expiresInSeconds}`,
    },
  });
}
