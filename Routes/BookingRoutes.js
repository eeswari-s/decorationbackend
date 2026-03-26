import express from "express";
import {
  createBooking,
  getBookings,
} from "../Controllers/BookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);

export default router;