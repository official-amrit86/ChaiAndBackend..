// require('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();
// Load environment variables from the .env file
dotenv.config({
  path: "./.env", // ✅ correct path: make sure your file is named ".env"
});

// Call the function to connect to the database
//async promise return karta hai hamesa
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      app.on("error", (error) => {
        console.log("Error occurred", error);
      });
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
/*
import mongoose from 'mongoose';
import {DB_NAME} from './constants.js';
import express from 'express';
const app=express();
(async()=>{ 
  try{
 await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`);
 app.on("error",(error)=>{
  console.log("my express not able to connected to the database");
  throw error;
 })
 app.listen(process.env.PORT,()=>{
  console.log(`server is running on port:${process.env.PORT}`);
 });
  }
 catch(error){
    console.error("error:",error)
    throw err
  }
  
})()
  */
