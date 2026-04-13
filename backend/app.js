require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const vulnerabilityRoutes = require("./routes/vulnerabilityRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API Running");
});
app.use("/api/vulnerabilities", vulnerabilityRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});