//Load env
require("dotenv").config();

//Import dependencies 
const express = require("express")

//Express 
const app = express();

//Routing
app.get("/", (req, res) => {
    res.json({ hello: "Joe "});
});

// Start Server
app.listen(process.env.PORT ) 