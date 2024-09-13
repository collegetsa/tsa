import { NextResponse } from "next/server";
import { Database } from "@/backend/Database";
import User from "@/backend/schema/User";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import * as jose from "jose";

const secretKey = process.env.JWT_SECRET_KEY || "collegetsainfo";

export const POST = async (request) => {
    try {
    await Database()
    const {email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user._id, userName:user.userName, email: user.email }, secretKey, {
      expiresIn: "1h",
    });
     return NextResponse.json(
       { message: "Login successful", token },
       { status: 200 }
     );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
};
