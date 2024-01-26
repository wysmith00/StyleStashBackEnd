import express from "express";
import * as authCtrl from '../Controllers/auth.js'
import { getUser, deleteUser } from "../Controllers/user.js"
import { decodeUserFromToken, checkAuth } from "../Middleware/auth.js";

const router = express.Router()
//create new user route
router.post('/signup', authCtrl.signup)

router.post('/login', authCtrl.login)
//create new user route
router.get('/getUser/:id', decodeUserFromToken, checkAuth, getUser)

//router.put('/updateUser/:id', updateUser)
//delete user route 

router.delete('/deleteUser/:id', decodeUserFromToken, checkAuth, deleteUser) 

export default router