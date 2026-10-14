import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\+?[0-9\s-]{10,15}$/, "Please enter a valid phone number"],
    },
    functionType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    date: {
      type: Date,
      required: true,
    },
    mandapLocation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
    numberOfEvents: {
      type: Number,
      required: true,
      min: [1, "Number of events must be at least 1"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
