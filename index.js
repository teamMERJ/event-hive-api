import express from "express";

const eventApp = express();




const port = process.env.PORT || 4000;
eventApp.listen(port, () =>{
    console.log(`App running on ${port}`)
});
