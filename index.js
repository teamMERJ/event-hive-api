import express from "express";

const eventApp = express();




const port = PORT || 4000;
eventApp.listen(port, () =>{
    console.log(`App running on ${port}`)
});
