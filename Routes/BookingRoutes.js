import express from "express";
import {
  createBooking,
  getBookings,
  deleteBooking,
} from "../Controllers/BookingController.js";
import { protect } from "../Middleware/Auth.js";
import { formLimiter } from "../Middleware/RateLimit.js";

const router = express.Router();

router.post("/", formLimiter, createBooking); // public
router.get("/", protect, getBookings); // admin
router.delete("/:id", protect, deleteBooking); // admin

export default router;
