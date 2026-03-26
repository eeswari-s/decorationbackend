import express from "express";
import {
  createGallery,
  getGallery,
  deleteGallery,
} from "../Controllers/GalleryController.js";

const router = express.Router();

router.post("/", createGallery);
router.get("/", getGallery);
router.delete("/:id", deleteGallery);

export default router;