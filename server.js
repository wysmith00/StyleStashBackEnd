//import npm packages
import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'

//connect to MongoDB with mongoose
import './Config/database.js'

//import routes
import userRouter from './Routes/user.js'
import profileRouter from './Routes/profile.js'

//create the express app
const app = express();


//basic middleware
app.use(cors())
app.use(express.json())

//Routing
app.get("/", (req, res) => {
    res.json({ hello: "Joe "});
});

//mount imported routes
app.use('/StyleStash/user', userRouter)
app.use('/StyleStash/profile', profileRouter)

// Start Server
app.listen(process.env.PORT ) 