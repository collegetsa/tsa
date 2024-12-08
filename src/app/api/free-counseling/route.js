import { Database } from "@/backend/Database";
import FreeCounseling from "@/backend/schema/FreeCounseling";
import { mailOptions, transporterOptions } from "@/frontend/utility";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  try {
    await Database();
    const { studentName, email, phone, interest, message, status } =
      await request.json();
    const date = new Date();
    const newDate =
      date.getDate() + "/" + [date.getMonth() + 1] + "/" + date.getFullYear();
    await FreeCounseling.create({
      studentName,
      email,
      phone,
      interest,
      message,
      status,
      appliedDate: newDate,
    });
    const transporter = nodemailer.createTransport(transporterOptions);
    await transporter.sendMail(
      mailOptions(email, "free-counseling", {
        studentName,
        email,
        phone,
        interest,
        message,
      })
    );
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
    const list = await FreeCounseling.find();
    return NextResponse.json(list, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
