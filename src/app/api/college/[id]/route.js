import { Database } from "@/backend/Database";
import College from "@/backend/schema/College";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    await Database();
    const id = params.id;
    const { ...updateData } = await request.json();
    const output = await College.updateOne(
      { pageUrl: id },
      { $set: updateData }
    );
    if (output.matchedCount === 0) {
      return NextResponse.json(output, { status: 404 });
    }
    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await Database();
    const id = params.id;
    const output = await College.deleteOne({ pageUrl: id });
    if (output.deletedCount === 0) {
      return NextResponse.json(output, { status: 404 });
    }
    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

// export const GET = async (request, { params }) => {
//   try {
//     await Database();
//     const id = params.id;
//     const output = await College.findOne({ pageUrl: id });
//     return NextResponse.json(output, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }