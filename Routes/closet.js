import express from "express";
const router = express.Router()
const closet = require('../Controllers/closet');

//Get a closet
router.get('/', getCloset);

//add a closet
router.post('/addCloset', addCloset); 

//Get a closet by category 
router.get('/category', getClosetCategory);

module.exports = router;








