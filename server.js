//import npm packages
import 'dotenv/config.js'
import cors from 'cors'
import express from 'express';

//import routes

import closetRouter from './Routes/closet.js'; 
import itemRouter from './Routes/item.js'; 
import userRouter from './Routes/user.js'
import profileRouter from './Routes/profile.js'


//connect to MongoDB with mongoose
import './Config/database.js'

//create the express app
const app = express();

//basic middleware
app.use(cors())
app.use(express.json())

// Your custom authentication middleware
// Make sure it's after body parsing middleware and before your routes
//app.use(decodeUserFromToken);

//Use imported routes
app.use('/StyleStash/closet', closetRouter);
app.use('/StyleStash/items', itemRouter);
app.use('/StyleStash/user', userRouter)
app.use('/StyleStash/profile', profileRouter)

// Routing
app.get("/", (req, res) => {
    res.json({ hello: "Ken" });
});

// Start Server
const port = process.env.PORT || 3000; // Default to 3000 if process.env.PORT is not defined
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
