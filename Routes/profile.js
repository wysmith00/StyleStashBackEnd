import express from "express";
import { getProfile, updateProfile } from "../Controllers/profile.js"
import { decodeUserFromToken, checkAuth } from "../Middleware/auth.js";

const router = express.Router()
//get all profile route
router.get('/:id', decodeUserFromToken, checkAuth, getProfile)
//create new profile route
//router.post('/newProfile', createNewProfile)
//edit profile route
router.put('/updateProfile/:id', decodeUserFromToken, checkAuth, updateProfile)
//delete profile route 

export default router