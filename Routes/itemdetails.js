import express from "express";
const router = express.Router();

import itemDetailsController from '../Controllers/itemdetails.js'

router.get('/', itemDetailsController.getAllItems);
router.get('/:id', itemDetailsController.getItem);
router.post('/item', itemDetailsController.addItem);
router.patch('/updateItem/:id', itemDetailsController.updateItem);
router.delete('/deleteItem/:id', itemDetailsController.deleteItem)

export default router;


