const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/uploads", express.static("uploads"));

app.use("/api/posts", require("./routes/postRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});