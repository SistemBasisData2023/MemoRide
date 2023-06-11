import { pool } from "../index.js";
import Booking from "../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
  const { tour_name, user_email, full_name, group_size, phone, book_at } =
    req.body;
  const user_id = req.user.id;

  if (
    !tour_name ||
    !user_email ||
    !full_name ||
    !group_size ||
    !phone ||
    !book_at ||
    !user_id
  ) {
    console.log(tour_name);
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const query =
      "INSERT INTO bookings (tour_name, user_email, full_name, group_size, phone, book_at, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      tour_name,
      user_email,
      full_name,
      group_size,
      phone,
      book_at,
      user_id,
    ];
    const result = await pool.query(query, values);
    const savedBooking = result.rows[0];

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const { id } = req.params;

  const query = `
      SELECT * FROM bookings WHERE id = $1
    `;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    const booking = result.rows[0];

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successful to fetch booking",
      data: booking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    const bookings = result.rows;

    res.status(200).json({
      success: true,
      message: "Successful to fetch bookings",
      data: bookings,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// get user bookings
export const getUserBookings = async (req, res) => {
  const { userId } = req.params;

  const query = `
    SELECT * FROM bookings WHERE user_id = $1
  `;
  const values = [userId];

  try {
    const result = await pool.query(query, values);
    const bookings = result.rows;

    res.status(200).json({
      success: true,
      message: "Successful to fetch user bookings",
      data: bookings,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
