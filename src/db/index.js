import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import cookieParser from "cookie-parser";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB_URI connection Failed", error);
    process.exit(1);
  }
};
export default connectDB;