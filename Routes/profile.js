import express from "express";
import { getProfile, updateProfile } from "../Controllers/profile.js"
import { decodeUserFromToken, checkAuth } from "../Middleware/auth.js";

const router = express.Router()

router.get('/:id', decodeUserFromToken, checkAuth, getProfile)

router.put('/updateProfile/:id', decodeUserFromToken, checkAuth, updateProfile)
 
export default router