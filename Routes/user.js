import express from "express";
const router = express.Router()

import { getUser, createNewUser, updateUser, deleteUser } from "../Controllers/user"
//get all user route
router.get('/all', getUser)
//create new user route
router.post('/signup', createNewUser)
//create new user route
router.put('/updateUser/:id', updateUser)
//delete user route 

router.delete('/deleteUser/:id', deleteUser)



export default router