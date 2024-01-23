import express from "express";
const router = express.Router()

import { getCloset, createNewCloset, updateCloset, deleteCloset } from "../Controllers/closet"
//get all closet route
router.get('/all', getCloset)
//create new closet route
router.post('/signup', createNewCloset)
//create new closet route
router.put('/updateCloset/:id', updateCloset)
//delete closet route 

router.delete('/deleteCloset/:id', deleteCloset)



export default router