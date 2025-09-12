import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const uri: string = process.env.MONGO_URI as string;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}


export default connectDB;