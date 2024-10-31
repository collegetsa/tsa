import mongoose from "mongoose";

const College = new mongoose.Schema({
  collegeData: { type: Object, required: true },
  pageUrl: { type: String, required: true, unique: true },
});

export default mongoose.models.College || mongoose.model("College", College);