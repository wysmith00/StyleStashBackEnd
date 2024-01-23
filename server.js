// import express from 'express'
// import cors from 'cors'
// //import './Config/database.js'

// //import { router as closetRouter } from './Routes/closet.js'
// //import { router as profilesRouter } from './Routes/profile.js'
// //import { router as closetRouter } from './Routes/closet.js'



// //Load env
// require("dotenv").config();

// //Import dependencies 
// const express = require("express")

// //Express 
// const app = express();

// //Routing
// app.get("/", (req, res) => {
//     res.json({ hello: "Joe "});
// });

// // Start Server
// app.listen(process.env.PORT ) 

//import database
import 'dotenv/config.js'
import './Config/database.js'
import cors from 'cors'
import express from 'express'

const app = express();

//Routing
app.get("/", (req, res) => {
    res.json({ hello: "Joe "});
});

// Start Server
app.listen(process.env.PORT ) 