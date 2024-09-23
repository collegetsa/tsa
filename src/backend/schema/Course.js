import mongoose from "mongoose";

const Course = new mongoose.Schema({
  field: { type: String, required: true },
  courseData: { type: Object, required: true },
  // pageUrl: { type: String, required: true, unique: true },
});

export default mongoose.models.Course || mongoose.model("Course", Course);
