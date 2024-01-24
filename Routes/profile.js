import express from "express";
import { getProfile, updateProfile } from "../Controllers/profile.js"

const router = express.Router()
//get all profile route
router.get('/profile', getProfile)
//create new profile route
//router.post('/newProfile', createNewProfile)
//edit profile route
router.put('/updateProfile/:id', updateProfile)
//delete profile route 

export default router