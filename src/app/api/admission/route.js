import { Database } from "@/backend/Database";
import Admission from "@/backend/schema/Admission";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const {
      studentName,
      email,
      studentPhone,
      markSheet,
      dateOfBirth,
      appliedCourse,
      appliedCollege,
      fatherName,
      parentPhone,
      religion,
      community,
      address,
      message,
      status,
    } = await request.json();
    const date = new Date();
    const newDate =
      date.getDate() + "/" + [date.getMonth() + 1] + "/" + date.getFullYear();

    await Admission.create({
      studentName,
      email,
      studentPhone,
      markSheet,
      dateOfBirth,
      appliedCourse,
      appliedCollege,
      fatherName,
      parentPhone,
      religion,
      community,
      address,
      message,
      status,
      appliedDate: newDate,
    });

    return NextResponse.json(
      { message: "Admission submitted successfully" },
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
    const list = await Admission.find();
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
