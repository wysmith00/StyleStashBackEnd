/*import express from "express";
const router = express.Router()
const closet = require('../Controllers/closet');

//Get a closet
router.get('/', getCloset);

//add a closet
router.post('/addCloset', addCloset); 

//Get a closet by category
router.get('/category', getClosetCategory);

export default router;*/

import express from 'express';
// import { createCloset, getCloset, getClosetCategory } from '../Controllers/closet.js';
; // Adjust this import as needed
import closetController from '../Controllers/closet.js';

const router = express.Router();

router.get('/', closetController.getCloset);
router.post('/addCloset', closetController.createCloset);
router.get('/category', closetController.getClosetCategory);


// Use the methods from the imported controller
// router.get('/', closetController.getCloset); // Assuming closetController has a method named getCloset
// router.post('/addCloset', closetController.addCloset); // Assuming closetController has a method named addCloset
// router.get('/category', closetController.getClosetCategory); // Assuming closetController has a method named getClosetCategory

export default router;











