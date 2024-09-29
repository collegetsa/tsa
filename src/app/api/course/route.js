import { Database } from "@/backend/Database";
import Course from "@/backend/schema/Course";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { ...newData } = await request.json();
    await Course.create(newData);
    return NextResponse.json(
      { message: "New Course created" },
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
    const getQueryParam = (param, defaultValue = "") => {
      const value = request?.nextUrl?.searchParams?.get(param);
      return value ? value : defaultValue;
    };

    let data;
    const type = getQueryParam("type");
    if (type === "course-count") {
      data = await Course.aggregate([
        {
          $group: {
            _id: {
              field: "$field",
              courseName: "$courseData.courseName",
            },
          },
        },
      ]);
    } else {
      data = await Course.find();
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
