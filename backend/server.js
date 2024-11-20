import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from "path";
import cors from 'cors';
import cookieParser from "cookie-parser";
import Postroutes from "./routes/posts.route.js";
import authRoutes from "./routes/auth.routes.js";
import chatbotRoutes from './routes/chat.routes.js';

dotenv.config();
const __dirname = path.resolve();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/userposts", Postroutes);
app.use("/api/auth", authRoutes);
app.use('/api/chat', chatbotRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
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
    console.log('Server started at http://localhost:' + PORT);
});
