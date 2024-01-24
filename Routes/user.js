import express from "express";
import * as authCtrl from '../Controllers/auth.js'
import { getUser, deleteUser } from "../Controllers/user.js"

const router = express.Router()
//create new user route
router.post('/signup', authCtrl.signup)

router.post('/login', authCtrl.login)
//create new user route
router.get('/getUser/:id', getUser)

//router.put('/updateUser/:id', updateUser)
//delete user route 

router.delete('/deleteUser/:id', deleteUser)

export default router