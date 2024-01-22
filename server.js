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
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(cors());

//server port listening on
app.listen(PORT, function() {
    console.log(`You are listening on http://localhost:${PORT}`)
});

 app.get("/", (req, res) => {
     res.json({ hello: "Joe "});
 });