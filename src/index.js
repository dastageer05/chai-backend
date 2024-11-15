// const app = require("./app");
// const connectDB = require("./db/index.js");
// require("dotenv").config();

import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/* 
import express from "express";
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on( "error", (error) => {
            console.log("ERROR :", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        } )

    } catch (error) {
        console.error("ERROR : ", error)
        throw err
    }
})()
*/
