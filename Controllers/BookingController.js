import Booking from "../Models/BookingModel.js";

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
      serviceId,
      numberOfEvents,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};