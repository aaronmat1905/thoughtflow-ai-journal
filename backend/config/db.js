import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = "mongodb+srv://aaronmat1905:pachusingh@cluster0.hm0gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in .env");
        }

        const conn = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
