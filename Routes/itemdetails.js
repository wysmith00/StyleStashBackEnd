import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/itemdetails.js';
import itemDetailsController from '../Controllers/itemdetails.js'

router.get('/:id', itemDetailsController.getItem);
router.post('/item', itemDetailsController.addItem);
router.patch('/updateItem:id', itemDetailsController.updateItem);
router.delete('/deleteItem/:id', itemDetailsController.deleteItem)

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
