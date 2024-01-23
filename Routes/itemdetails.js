import express from "express";
const router = express.Router();
const { getItem, addItem, updateItem, deleteItem } = require('../Controllers/itemdetails');


// Get an item
router.get('/:id', getItem);

// Add a new item
router.post('/item', addItem);

// Update an item
router.patch('/updateItem/:id', updateItem);

// Delete an item
router.delete('/deleteItem/:id', deleteItem);

module.exports = router;
