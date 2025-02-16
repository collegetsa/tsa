import mongoose from "mongoose";

const Update = new mongoose.Schema(
  {
    title: { type: String, required: true },
    pageUrl: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    updateDate: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Update || mongoose.model("Update", Update);
