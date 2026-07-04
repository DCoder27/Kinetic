import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongo_URI = process.env.MONGO_URI;
    if (!mongo_URI) {
      throw new Error("Mongo URI not found");
    }
    const conn = await mongoose.connect(mongo_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("Error in connecting to MongoDB: ", err.message);
    process.exit(1);
  }
};
