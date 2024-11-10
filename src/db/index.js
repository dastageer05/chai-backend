import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// const mongoose = require("mongoose");
// const DB_NAME = require("../constants.js");

const DB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAIL ", error);
    process.exit(1);
  }
};

export default connectDB;
// module.exports = connectDB;
