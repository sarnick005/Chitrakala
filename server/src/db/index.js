import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\nMongoDb Connected !!`);
    console.log(`${process.env.MONGO_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("MONGODB Connection Error: ", error);
  }
}

export default connectDB;
