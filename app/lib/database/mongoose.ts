import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

export default async function mongooseConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    throw new Error("Error connecting to mongodb.");
  }
}
