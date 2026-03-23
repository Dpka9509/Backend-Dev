import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log(" Database connected");
  } catch (error) {
    console.log(" DB connection failed:", error);
    process.exit(1);
  }
};

export default connectDb;