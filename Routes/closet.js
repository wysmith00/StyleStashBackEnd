import express from "express";
const router = express.Router()

import { getCloset, createNewCloset, updateCloset, deleteCloset } from "../Controllers/closet"
//get all closet route
router.get('/', getCloset)
//create new closet route
router.post('/createCloset', createNewCloset)
//create new closet route
router.put('/updateCloset/:id', updateCloset)
//delete closet route 

router.delete('/deleteCloset/:id', deleteCloset)

