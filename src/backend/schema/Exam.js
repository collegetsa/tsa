import mongoose from "mongoose";

const Exam = new mongoose.Schema({
  name: { type: String, required: true },
  stream: { type: String, required: true },
  level: { type: String, required: true },
  mode: { type: String, required: true },
  eligibility: { type: String, required: true },
  exam_date: { type: Object, required: true },
  last_date_to_apply: { type: Object, required: true },
  official_website: { type: String, required: true },
});

export default mongoose.models.Exam || mongoose.model("Exam", Exam);
