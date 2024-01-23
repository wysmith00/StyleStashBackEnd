import express from "express";
const router = express.Router()
const closet = require('../Controllers/closet');

// Update a closet - move change this in an item 
router.patch('/updateCloset/:id', updateCloset);

// Delete a closet - move changethis in an item 
router.delete('/deleteCloset/:id', deleteCloset)