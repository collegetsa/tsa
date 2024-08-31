import { Database } from "@/backend/Database";
import FreeCounsling from "@/backend/schema/FreeCounsling";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { studentName, email, phone, interest, message, status } =
      await request.json();
    const date = new Date();
    const newDate =
      date.getDate() + "/" + [date.getMonth() + 1] + "/" + date.getFullYear();
    await FreeCounsling.create({
      studentName,
      email,
      phone,
      interest,
      message,
      status,
      appliedDate: newDate,
    });
    return NextResponse.json(
      { message: "User added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    await Database();
    const list = await FreeCounsling.find();
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
