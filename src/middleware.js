import { NextResponse } from "next/server";
import * as jose from "jose";
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request) {
    // const authHeader = request.headers.get("Authorization");
    // const token = authHeader && authHeader.split(" ")[1];
    
    // try {
    //     const auth = await jose.jwtVerify(token, secretKey);
    //     const path = request.nextUrl.pathname;
    //     if (path === "/api/free-counsling") {
    //         if (auth) {
    //             return NextResponse.next();
    //         }
    //     }
    // } catch (error) {
    //     return NextResponse.json({ message: "invalid" }, { status: 401 });
    // }
}
export const config = {
//   matcher: "/api/free-counsling",
};
