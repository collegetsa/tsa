import { Database } from "@/backend/Database";
import College from "@/backend/schema/College";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { ...newData } = await request.json();
    const isExist = await College.findOne({ pageUrl: newData?.pageUrl });
    if (isExist) {
      return NextResponse.json(
        { message: "Already exist" },
        { status: 404 }
      );
    }
    await College.create(newData);
    return NextResponse.json(
      { message: "New college created" },
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
    const data = await College.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
