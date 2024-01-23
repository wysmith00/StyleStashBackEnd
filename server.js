import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import jwt from 'jsonwebtoken'; // Import JWT for the middleware

import './Config/database.js'; // Assuming this sets up your database


import closet from './Routes/closet.js'; // Import closet routes
import itemdetails from './Routes/itemdetails.js'; //Import itemDetails Routes

// Import your middleware
import { decodeUserFromToken } from './Middleware/auth.js' // Update with the correct path

const app = express();

// Apply CORS middleware for cross-origin requests
app.use(cors());

// Express JSON parser middleware (required for parsing JSON request bodies)
app.use(express.json());

// Your custom authentication middleware
// Make sure it's after body parsing middleware and before your routes
app.use(decodeUserFromToken);

// Routing
app.get("/", (req, res) => {
    res.json({ hello: "Ken" });
});

//Use imported routes
app.use('/closet', closet);
app.use('/items', itemdetails);

// Start Server
const port = process.env.PORT || 3000; // Default to 3000 if process.env.PORT is not defined
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
