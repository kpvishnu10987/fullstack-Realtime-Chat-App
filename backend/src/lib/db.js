import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error",error);
    }
};