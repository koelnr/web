import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Redirect to coming soon page
  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/"],
};
