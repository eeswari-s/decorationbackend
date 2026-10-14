import express from "express";
import upload from "../Middleware/Upload.js";
import { uploadImage } from "../Controllers/UploadController.js";
import { protect } from "../Middleware/Auth.js";

const router = express.Router();

// protect runs first so files from non-admins never reach Cloudinary
router.post("/", protect, upload.single("image"), uploadImage); // admin

export default router;
