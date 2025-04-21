import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
// const port = 3000
dotenv.config();

const app = express();
connectToDb();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })