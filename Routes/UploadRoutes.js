import express from "express";
import upload from "../Middleware/Upload.js";
import { uploadImage } from "../Controllers/UploadController.js";

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);

export default router;