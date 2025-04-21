import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
connectToDb();

// app.use(cors());
app.use(
	cors({
		origin: ['http://localhost:5174',
			 'http://localhost:5173',
             'https://web-frontend-cmmjljtdq-asia-parveens-projects.vercel.app',
			
			
			],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get("/", (req, res) => {
    res.send("✅ Backend is live and working!");
  });

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server is live on port ${port}`);
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const port = 5000
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   });