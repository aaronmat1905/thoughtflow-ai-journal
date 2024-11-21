import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import Postroutes from "./routes/posts.route.js";
import authRoutes from "./routes/auth.routes.js";
import chatbotRoutes from "./routes/chat.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/userposts", Postroutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatbotRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve(); // Determine __dirname in ES modules
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static files
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html")); // Serve index.html for unknown routes
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

// Connect to database and start server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit with failure
  });
