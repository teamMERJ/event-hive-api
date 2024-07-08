import express from "express";
import { dbConnection } from "./config/db.js";

// connect to database
dbConnection();

const eventApp = express();




const port = process.env.PORT || 4000;
eventApp.listen(port, () =>{
    console.log(`App running on ${port}`)
});
