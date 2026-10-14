import express from "express";
import {
  createContact,
  getContacts,
  deleteContact,
} from "../Controllers/ContactController.js";
import { protect } from "../Middleware/Auth.js";
import { formLimiter } from "../Middleware/RateLimit.js";

const router = express.Router();

router.post("/", formLimiter, createContact); // public
router.get("/", protect, getContacts); // admin
router.delete("/:id", protect, deleteContact); // admin

export default router;
