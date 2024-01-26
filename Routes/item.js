import express from "express";
const router = express.Router();
import itemController from '../Controllers/item.js'
import { decodeUserFromToken, checkAuth } from "../Middleware/auth.js";

router.get('/', decodeUserFromToken, checkAuth, itemController.getAllItems); 

router.get('/:id', decodeUserFromToken, checkAuth, itemController.getItem); 

router.post('/item', decodeUserFromToken, checkAuth, itemController.addItem); 


router.put('/updateItem/:id', decodeUserFromToken, checkAuth, itemController.updateItem);

router.post('/item', decodeUserFromToken, checkAuth, itemController.addItem);

router.delete('/deleteItem/:id', decodeUserFromToken, checkAuth, itemController.deleteItem)

export default router;


