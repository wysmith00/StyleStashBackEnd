import express from 'express';

import closetController from '../Controllers/closet.js';
import { decodeUserFromToken, checkAuth } from '../Middleware/auth.js';

const router = express.Router();

router.post('/', decodeUserFromToken, checkAuth, closetController.createCloset);

router.get('/:closetId', decodeUserFromToken, checkAuth, closetController.getCloset);

router.get('/category', decodeUserFromToken, checkAuth, closetController.getClosetCategory);

router.get('/:closetId/:category', decodeUserFromToken, checkAuth, closetController.getItemsByCategory);

router.get('/allItems', decodeUserFromToken, checkAuth, closetController.getAllItems);

router.post('/addItem', decodeUserFromToken, checkAuth, closetController.addItem);

router.delete('/deleteItem/:itemId', decodeUserFromToken, checkAuth, closetController.deleteItem)

export default router;











