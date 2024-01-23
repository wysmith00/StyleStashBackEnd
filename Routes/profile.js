import express from "express";
const router = express.Router()

import { getProfile, createNewProfile, updateProfile, deleteProfile } from "../Controllers/profile"
//get all profile route
router.get('/all', getProfile)
//create new profile route
router.post('/signup', createNewProfile)
//edit profile route
router.put('/updateProfile/:id', updateProfile)
//delete profile route 

router.delete('/deleteProfile/:id', deleteProfile)



export default router