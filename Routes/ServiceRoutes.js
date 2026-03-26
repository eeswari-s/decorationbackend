import express from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
} from "../Controllers/ServiceController.js";

const router = express.Router();

router.post("/", createService);
router.get("/", getServices);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;