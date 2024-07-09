import express from "express";
import { dbConnection } from "./config/db.js";
import collegeRouter from "./routes/college.js";

// connect to database
dbConnection();

const eventApp = express();

// use routes
eventApp.use(collegeRouter);


const port = process.env.PORT || 4000;
eventApp.listen(port, () =>{
    console.log(`App running on ${port}`)
});
