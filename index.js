import "./Config/Env.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import connectDB from "./Database/Db.js";
import corsOptions from "./Config/Cors.js";

// Routes
import ContactRoutes from "./Routes/ContactRoutes.js";
import BookingRoutes from "./Routes/BookingRoutes.js";
import ServiceRoutes from "./Routes/ServiceRoutes.js";
import GalleryRoutes from "./Routes/GalleryRoutes.js";
import UploadRoutes from "./Routes/UploadRoutes.js";
import AuthRoutes from "./Routes/AuthRoutes.js";



const app = express();

// Behind a hosting proxy (Render, Railway, Nginx...) so rate limit sees the real IP
app.set("trust proxy", 1);

// Middleware
app.use(helmet());
app.use(cors(corsOptions)); // allowed URLs are in Config/Cors.js
app.use(express.json({ limit: "100kb" }));

// Express 5 leaves req.body undefined when no body is sent
app.use((req, res, next) => {
  req.body = req.body || {};
  next();
});

// Base Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/booking", BookingRoutes);
app.use("/api/service", ServiceRoutes);
app.use("/api/gallery", GalleryRoutes);
app.use("/api/upload", UploadRoutes);

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ ERROR HANDLER (IMPORTANT)
app.use((err, req, res, next) => {
  // Multer errors (file too large etc.) and bad JSON are client errors
  let status = err.status || err.statusCode || err.http_code || 500;

  if (err instanceof multer.MulterError) {
    status = 400;
  }

  if (status >= 500) {
    console.error("🔥 FULL ERROR:", err);
  }

  res.status(status).json({
    message: err.message || "Server Error",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start server only after DB is connected
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
