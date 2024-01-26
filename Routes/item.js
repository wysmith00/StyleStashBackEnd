import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/item.js';
import itemController from '../Controllers/item.js'

router.get('/', itemController.getAllItems); //NOT NEEDED

router.get('/:id', itemController.getItem); //NEED TO TEST - working jan 25, 7:36PM

router.post('/item', itemController.addItem); //NOT NEEDED

router.put('/updateItem/:id', itemController.updateItem); //NEED TO TEST - working jan 25, 7:38 PM

router.delete('/deleteItem/:id', itemController.deleteItem) //NOT NEEDED

export default router;


