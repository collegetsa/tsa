import { NextResponse } from "next/server";
import * as jose from "jose";
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
import { jwtDecode } from "jwt-decode";

export async function middleware(request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  const path = request.nextUrl.pathname;
  const method = request.method;

  // try {
  //   const auth = await jose.jwtVerify(token, secretKey);
  //   const isAdmin = auth?.payload?.email === "collegetsainfo@gmail.com";

  //   if (path === "/api/college") {
  //     if (method === "POST" || method === "PUT" || method === "DELETE") {
  //       if (auth && isAdmin) {
  //         return NextResponse.next();
  //       } else {
  //         return NextResponse.json({ message: "Not a admin" }, { status: 401 });
  //       }
  //     } else if (method === "GET") {
  //         return NextResponse.next();
  //     }
  //   }
  // } catch (error) {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // }

  // Client
  const clientToken = request.cookies.get("jwtToken")?.value;
  const jwtToken = clientToken && jwtDecode(clientToken);
  if (jwtToken?.email !== "collegetsainfo@gmail.com") {
    if (path === "/admin/college/create") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (path?.includes("/admin/college/edit/")) {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (path === "/admin/free-counsling-list") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (path === "/admin/admission-list") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  // matcher: ["/api/college", "/api/admission"],
};