import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/item.js';
import itemController from '../Controllers/item.js'

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.post('/item', itemController.addItem);
router.patch('/updateItem/:id', itemController.updateItem);
router.delete('/deleteItem/:id', itemController.deleteItem)

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
