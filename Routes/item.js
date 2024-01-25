import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/item.js';
import itemController from '../Controllers/item.js'

router.get('/', itemController.getAllItems); //NOT NEEDED
router.get('/:id', itemController.getItem); //NEED TO TEST
router.post('/item', itemController.addItem); //NOT NEEDED
router.put('/updateItem/:id', itemController.updateItem); //NEED TO TEST
router.delete('/deleteItem/:id', itemController.deleteItem) //NOT NEEDED

export default router;

// Get an item
// router.get('/:id', getItem);

// // Add a new item
// router.post('/item', addItem);

// // Update an item
// router.patch('/updateItem/:id', updateItem);

// // Delete an item
// router.delete('/deleteItem/:id', deleteItem);

// export default router;
