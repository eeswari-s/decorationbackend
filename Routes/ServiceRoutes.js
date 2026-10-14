import express from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
} from "../Controllers/ServiceController.js";
import { protect } from "../Middleware/Auth.js";

const router = express.Router();

router.get("/", getServices); // public
router.post("/", protect, createService); // admin
router.put("/:id", protect, updateService); // admin
router.delete("/:id", protect, deleteService); // admin

export default router;
