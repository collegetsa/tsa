import mongoose from "mongoose";

const Admission = new mongoose.Schema({
  studentName: { type: String },
  email: { type: String },
  studentPhone: { type: Number },
  markSheet: { type: String },
  dateOfBirth: { type: String },
  appliedCourse: { type: String },
  appliedCollege: { type: String },
  fatherName: { type: String },
  parentPhone: { type: Number },
  religion: { type: String },
  community: { type: String },
  address: { type: String },
  message: { type: String },
  status: { type: String },
  appliedDate: { type: String },
});

export default mongoose.models.Admission ||
  mongoose.model("Admission", Admission);
