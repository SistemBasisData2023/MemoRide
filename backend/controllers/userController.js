import { pool } from "../index.js";
import bcrypt from "bcryptjs";

// register new user
export const createUser = async (req, res) => {
  const { username, email, password, photo, role } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const query = {
      text: "INSERT INTO users (username, email, password, photo, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      values: [username, email, hash, photo, role],
    };

    const result = await pool.query(query);
    const savedUser = result.rows[0];

    console.log(savedUser);

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, email, password, photo, role } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const query = {
      text: "UPDATE users SET username = $1, email = $2, password = $3, photo = $4, role = $5 WHERE id = $6 RETURNING *",
      values: [username, email, hash, photo, role, id],
    };

    const result = await pool.query(query);
    const updatedUser = result.rows[0];

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const query = {
      text: "DELETE FROM users WHERE id = $1",
      values: [id],
    };

    await pool.query(query);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };

    const result = await pool.query(query);
    const user = result.rows[0];

    if (!user) {
      res.status(404).json({ success: false, message: "Not Found" });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully get single user",
        data: user,
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve user" });
  }
};

// get all users
export const getAllUser = async (req, res) => {
  try {
    const query = {
      text: "SELECT * FROM users",
    };

    const result = await pool.query(query);
    const users = result.rows;

    res.status(200).json({
      success: true,
      count: users.length,
      message: "Successfully get all users",
      data: users,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve users" });
  }
};
