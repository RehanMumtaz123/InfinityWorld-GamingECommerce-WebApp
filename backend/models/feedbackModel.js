import mongoose from "mongoose";

const feedSchema = new mongoose.Schema(
  {
    First_name: { type: String, required: true },
    Last_name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Message: { type: String, required: true },
   
  },
  { timestamps: true }
);

const feedModel = mongoose.model("Feedback", feedSchema);

export default feedModel;
