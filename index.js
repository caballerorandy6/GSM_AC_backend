import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userReviewRoutes from "./routes/userReviewRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

//Database connection
connectDB();

//CORS Config
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      //Can request Api
      callback(null, true);
    } else {
      //Not allowed
      callback(new Error("Cors error"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/", userReviewRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
