import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getComingSoonRedirect } from "./lib/remote-config";

export async function proxy(request: NextRequest) {
  // Check if we should redirect to coming soon page
  const shouldRedirect = await getComingSoonRedirect();

  if (shouldRedirect) {
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
