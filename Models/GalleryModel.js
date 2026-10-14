import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    image: {
      type: String, // Cloudinary URL
      required: true,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);