import express from "express";
const router = express.Router();
// import { getItem, addItem, updateItem, deleteItem } from '../Controllers/item.js';
import itemController from '../Controllers/item.js'
import { decodeUserFromToken, checkAuth } from "../Middleware/auth.js";

router.get('/', decodeUserFromToken, checkAuth, itemController.getAllItems); //NOT NEEDED

router.get('/:id', decodeUserFromToken, checkAuth, itemController.getItem); //NEED TO TEST - working jan 25, 7:36PM

router.post('/item', decodeUserFromToken, checkAuth, itemController.addItem); //NOT NEEDED


router.put('/updateItem/:id', decodeUserFromToken, checkAuth, itemController.updateItem); //NEED TO TEST - working jan 25, 7:38 PM

router.post('/item', decodeUserFromToken, checkAuth, itemController.addItem);

//check this route
router.delete('/deleteItem/:id', decodeUserFromToken, checkAuth, itemController.deleteItem)

export default router;


