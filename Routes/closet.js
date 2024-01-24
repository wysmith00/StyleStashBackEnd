import express from 'express';

import closetController from '../Controllers/closet.js';

const router = express.Router();

router.get('/:id', closetController.getCloset);
router.post('/addCloset', closetController.createCloset);
router.get('/category', closetController.getClosetCategory);

export default router;











