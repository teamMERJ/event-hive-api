import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL

export const dbConnection = () =>{
    mongoose.connect(mongoUrl).then(() =>{
        console.log('Database connected');
    })
};