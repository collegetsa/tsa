import { Database } from "@/backend/Database";
import Admission from "@/backend/schema/Admission";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    await Database();
    const id = params.id;
    const { status } = await request.json();
    const data = await Admission.findById(id);
    if (data) {
      const updatedData = { ...data?._doc, ["status"]: status };
      await Admission.findByIdAndUpdate(id, updatedData);
      return NextResponse.json(
        { message: "Student data updated" },
        { status: 201 }
      );
    }
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
    const data = await Admission.findById(id);
    if (data) {
      await Admission.findByIdAndDelete(id);
      return NextResponse.json(
        { message: "Student data deleted" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
