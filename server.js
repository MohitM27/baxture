const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
const connectDB = require("./src/config/db");

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
}
app.use(errorHandler);

//DB Connect
connectDB();
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
