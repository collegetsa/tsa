import { NextResponse } from "next/server";
import * as jose from "jose";
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
import { jwtDecode } from "jwt-decode";

export async function middleware(request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  const clientToken = request.cookies.get("jwtToken")?.value;
  const path = request.nextUrl.pathname;
  const method = request.method;
  // Decode and verify server token once
  let serverAuth = null;
  if (token) {
    try {
      serverAuth = await jose.jwtVerify(token, secretKey);
    } catch (error) {}
  }

  const jwtToken = clientToken && jwtDecode(clientToken);

  const isAdmin =
    serverAuth?.payload?.email === "collegetsainfo@gmail.com" ||
    jwtToken?.email === "collegetsainfo@gmail.com";

  if (
    (path.includes("/api/college") &&
      ["POST", "PUT", "DELETE"].includes(method)) ||
    (path.includes("/api/course") && ["POST", "PUT", "DELETE"].includes(method))
  ) {
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  if (
    (path.includes("/api/free-counseling") &&
      ["GET", "PUT", "DELETE"].includes(method)) ||
    (path.includes("/api/admission") &&
      ["GET", "PUT", "DELETE"].includes(method))
  ) {
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  // client-side
  if (!isAdmin) {
    const restrictedAdminPaths = [
      "/admin/free-counseling-list",
      "/admin/admission-list",
      "/admin/college/create",
      "/admin/course/create",
    ];

    if (
      restrictedAdminPaths.includes(path) ||
      path.startsWith("/admin/college/edit/") ||
      path.startsWith("/admin/course/edit/")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}