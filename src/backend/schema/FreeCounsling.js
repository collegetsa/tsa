import mongoose from "mongoose";

const FreeCounsling = new mongoose.Schema({
  studentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  interest: { type: String },
  message: { type: String },
  status: { type: String },
  appliedDate: { type: Object },
});

export default mongoose.models.FreeCounsling ||
  mongoose.model("FreeCounsling", FreeCounsling);
 