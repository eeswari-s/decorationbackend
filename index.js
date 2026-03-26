import "./Config/Env.js";
import express from "express";
import cors from "cors";
import connectDB from "./Database/Db.js";

// Routes
import ContactRoutes from "./Routes/ContactRoutes.js";
import BookingRoutes from "./Routes/BookingRoutes.js";
import ServiceRoutes from "./Routes/ServiceRoutes.js";
import GalleryRoutes from "./Routes/GalleryRoutes.js";
import UploadRoutes from "./Routes/UploadRoutes.js";



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Base Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api/contact", ContactRoutes);
app.use("/api/booking", BookingRoutes);
app.use("/api/service", ServiceRoutes);
app.use("/api/gallery", GalleryRoutes);
app.use("/api/upload", UploadRoutes);

// ✅ ERROR HANDLER (IMPORTANT)
app.use((err, req, res, next) => {
  console.error("🔥 FULL ERROR:", JSON.stringify(err, null, 2));

  res.status(500).json({
    message: err.message || "Server Error",
  });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});