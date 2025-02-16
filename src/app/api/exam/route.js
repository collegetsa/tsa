import { Database } from "@/backend/Database";
import Exam from "@/backend/schema/Exam";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const data = await request.json();
    const requiredFields = [
      "name",
      "stream",
      "level",
      "mode",
      "eligibility",
      "exam_date",
      "last_date_to_apply",
      "official_website",
    ];

    if (requiredFields.some((field) => !data[field])) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await Exam.create(data);
    return NextResponse.json({ message: "Exam Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await Database();
    const getQueryParam = (param, defaultValue = "") => {
      const value = request?.nextUrl?.searchParams?.get(param) || defaultValue;
      return value;
    };
    const stream = getQueryParam("stream");

    let query = {};
    if (stream) {
      query["stream"] = { $regex: new RegExp(stream, "i") };
    }

    const data = await Exam.aggregate([
      {
        $match: query,
      },
    ]);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
