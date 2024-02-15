const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  validateUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// GET all users
router.get("/", getAllUsers);

// GET a specific user
router.get("/:userId", getUserById);

// POST a new user
router.post("/", validateUser, createUser);

// PUT update a user
router.put("/:userId", updateUser);

// DELETE a user
router.delete("/:userId", deleteUser);

module.exports = router;
