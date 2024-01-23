import express from "express";
const router = express.Router()
const closet = require('../Controllers/closet');

//Create a closet
router.post('/createCloset', createCloset); 

//Get a closet
router.get('/', getCloset);

//Get a closet by category 
router.get('/:category', getClosetCategory);

module.exports = router;

 //Add an item to a closet category 
//router.post('/closetId/items', closet.addItemToClosetCategory);

//Remove an item from a closet category 
//router.delete('/closetId/items/:itemId', closet.removeItemFromClosetCategory);






