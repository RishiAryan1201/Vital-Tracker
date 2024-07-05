import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_img: {
      type: String,
      default: "../utils/avatar-img",
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);


export default mongoose.model("User", userSchema);