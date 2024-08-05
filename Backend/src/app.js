import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoute.js';
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()
connectDB();

const PORT = 5000;
const app = express() // creating one instance

const whitelist = ["http://localhost:4201"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// router object - reused - mounted explicity using app.use()
app.use("/api/users", userRoutes) // nesting route - userRoutes.js file - create, login, getProfile, updateProfile, logout.

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server running on port ${PORT}`))