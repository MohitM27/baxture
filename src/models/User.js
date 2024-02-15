const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const userSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  username: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  hobbies: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
