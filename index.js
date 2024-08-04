import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
// const DB_URL = process.env.DB_URL || "example.com";

const corsOptions = {
  origin: true,
};

// ==== middlewares ====
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// ==== routes ====
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the ProLab API!" });
});

app.listen(PORT, () => {
  // dbConnection();
  console.log(`🎯 Server is listening on port: ${PORT}`);
});
