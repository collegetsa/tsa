import { Database } from "@/backend/Database";
import Course from "@/backend/schema/Course";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await Database();
    const id = params.id;
    const output = await Course.findOne({ _id: id });
    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
