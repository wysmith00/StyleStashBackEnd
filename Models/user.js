import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    passwordConfirm: { type: String, required: true },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
})

const User = mongoose.model('User', userSchema)

export default User