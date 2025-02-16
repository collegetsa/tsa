import { Database } from "@/backend/Database";
import Update from "@/backend/schema/Update";
import { currentDate } from "@/frontend/utility";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { title, description, content, pageUrl } = await request.json();

    if (!title || !description || !content || !pageUrl) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const isExist = await Update.findOne({ pageUrl });
    if (isExist) {
      return NextResponse.json({ message: "Already exist" }, { status: 404 });
    }

    await Update.create({
      title,
      pageUrl,
      description,
      content,
      updateDate: currentDate(),
    });

    return NextResponse.json(
      { message: "New Update Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    await Database();
      const data = await Update.aggregate([
        {
          $sort: { createdAt: -1 }, 
        },
        {
          $project: {
            _id: 0,
            title: 1,
            pageUrl: 1,
            description: 1,
            updateDate: 1,
          },
        },
      ]);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
