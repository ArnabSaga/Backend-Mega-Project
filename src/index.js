// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`);
        })
        app.on("Error", (err) => {
            console.log("Error: ", err);
            throw err;
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection Failed !!!  ", err);
    })











/* 1st approach
import express from "express";
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${ process.env.MONGODB_URI } / ${ DB_NAME }`);
        app.on("ERROR", (error) => {
            console.error("Error:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => { 
            console.log(`App is listening on ${ process.env.PORT }`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
    }
})()
*/