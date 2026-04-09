import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};

export default connectDb; 