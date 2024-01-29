import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
    closet: {type: mongoose.Schema.Types.ObjectId, ref: 'Closet'},
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.password
      return ret
    },
  })

  userSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) return next()
    bcrypt.hash(user.password, SALT_ROUNDS)
    .then(hash => {
      user.password = hash
      next()
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
  })

  userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb )
  }
  const User = mongoose.model('User', userSchema)
  export default User 

