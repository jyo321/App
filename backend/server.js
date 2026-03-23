const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",   // allow CloudFront to call backend
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running in ECS 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from ECS Backend (Node.js)!" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});