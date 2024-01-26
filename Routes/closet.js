import express from 'express';

import closetController from '../Controllers/closet.js';
import { decodeUserFromToken, checkAuth } from '../Middleware/auth.js';

const router = express.Router();

//Create a new closet NOT NEEDED
router.post('/', decodeUserFromToken, checkAuth, closetController.createCloset);

//Get a specific closet NEED TO TEST - working, jan 25, 9:46PM 
router.get('/:closetId', decodeUserFromToken, checkAuth, closetController.getCloset);

//Get a specific closet by category NOT NEEDED
router.get('/category', decodeUserFromToken, checkAuth, closetController.getClosetCategory);

//Get all items by category within a specific closet WORKING 
router.get('/:closetId/:category', decodeUserFromToken, checkAuth, closetController.getItemsByCategory);

//Get all items in a closet NOT NEEDED
router.get('/allItems', decodeUserFromToken, checkAuth, closetController.getAllItems);

//Add item within Closet WORKING
router.post('/addItem', decodeUserFromToken, checkAuth, closetController.addItem);

//Delete item from Closet NEEDS TO TEST - working, jan 25, 7:51PM changed delete function in controllers/closet.js
router.delete('/deleteItem/:itemId', decodeUserFromToken, checkAuth, closetController.deleteItem)

export default router;











