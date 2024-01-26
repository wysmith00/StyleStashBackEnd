import express from 'express';

import closetController from '../Controllers/closet.js';

const router = express.Router();

//Create a new closet NOT NEEDED
router.post('/', closetController.createCloset);

//Get a specific closet NEED TO TEST
router.get('/:closetId', closetController.getCloset);

//Get a specific closet by category NOT NEEDED
router.get('/category', closetController.getClosetCategory);

//Get all items by category within a specific closet WORKING 
router.get('/category/:category', closetController.getItemsByCategory);

//Get all items in a closet NOT NEEDED
router.get('/allItems', closetController.getAllItems);

//Add item within Closet WORKING
router.post('/addItem', closetController.addItem);

//Delete item from Closet NEEDS TO TEST - working, jan 25, 7:51PM changed delete function in controllers/closet.js
router.delete('/item/:itemId', closetController.deleteItem)

export default router;











