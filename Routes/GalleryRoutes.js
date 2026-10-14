import express from "express";
import {
  createGallery,
  getGallery,
  deleteGallery,
} from "../Controllers/GalleryController.js";
import { protect } from "../Middleware/Auth.js";

const router = express.Router();

router.get("/", getGallery); // public
router.post("/", protect, createGallery); // admin
router.delete("/:id", protect, deleteGallery); // admin

export default router;
