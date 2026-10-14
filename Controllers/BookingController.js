import Booking from "../Models/BookingModel.js";
import { handleError } from "../Utils/HandleError.js";

// POST /api/booking
export const createBooking = async (req, res) => {
  try {
    const {
      name,
      phone,
      functionType,
      date,
      mandapLocation,
      serviceId,
      numberOfEvents,
    } = req.body;

    const booking = await Booking.create({
      name,
      phone,
      functionType,
      date,
      mandapLocation,
      serviceId: serviceId || undefined,
      numberOfEvents,
    });

    res.status(201).json(booking);
  } catch (error) {
    handleError(res, error);
  }
};

// GET /api/booking
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("serviceId")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE /api/booking/:id
export const deleteBooking = async (req, res) => {
  try {
    const item = await Booking.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
