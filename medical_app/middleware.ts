import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { tokenDecoder } from "./helpers/tokenDecoder";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  // Decode the token
  let decodedToken;
  try {
    decodedToken = tokenDecoder(token);
  } catch (error) {
    console.error("Token decoding failed:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const protectedRoutes = [
    "/appointement",
    "/dashboard",
    "/admin/dashboard",
    "/admin/dashboard/users",
    "/admin/dashboard/appointments",
  ];

  // Check if the current path is protected
  if (protectedRoutes.includes(path)) {
    if (!token || !decodedToken) {
      console.log("Redirecting to login page due to missing or invalid token");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Example role-based check
    const userRole = decodedToken.role;
    // Implement your role-based authorization logic here
    // For instance, only allow admins to access certain routes
    if (path.startsWith("/admin") && userRole !== "ADMIN") {
      console.log(
        "Redirecting to unauthorized page due to insufficient permissions"
      );
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/appointement","/dashboard", "/admin/:path*"],
};
