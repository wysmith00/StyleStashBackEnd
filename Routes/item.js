import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/item.js';
import itemController from '../Controllers/item.js'

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);


router.post('/item', itemController.addItem);

//check this route
router.patch('/updateItem/:id', itemController.updateItem);

//check this route
router.delete('/deleteItem/:id', itemController.deleteItem)


export default router;
