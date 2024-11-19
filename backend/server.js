import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import UPost from './models/upost_model.js';
import Postroutes from "./routes/posts.route.js";
import path from "path";
import cors from 'cors'; // Add this import

dotenv.config();
const __dirname = path.resolve();
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json());

// API Routes
app.use("/api/userposts", Postroutes);

// Serve frontend in production
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:'+ PORT);
});


// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";

// dotenv.config();

// const __dirname = path.resolve();
// // PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
// const PORT = process.env.PORT || 5000;

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// server.listen(PORT, () => {
// 	connectToMongoDB();
// 	console.log(`Server Running on port ${PORT}`);
// });
