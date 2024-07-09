import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
dotenv.config()
connectDB();

const PORT = 5000;

const app = express() // creating one instance

// get method
app.get("/", (req, res) => {
    res.send("okay");

})



app.listen(PORT, console.log(`server running on port ${PORT}`))