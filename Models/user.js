import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
    closet: {type: Schema.Types.ObjectId, ref: 'Closet'}
})

// set the user schema options to include the virtual field for the profile
userSchema.set('toJSON', {
    transform: function (doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password
      return ret
    },
  })
  // this function will run before a user document is created
  userSchema.pre('save', function (next) {
    // this will be set to the current document
    const user = this
    if (!user.isModified('password')) return next()
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS)
    .then(hash => {
      // replace the user provided password with the hash
      user.password = hash
      next()
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
  })
  // this function will be used to compare a user provided password with the hashed password stored in the database
  userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb )
  }
  // create the User model from the schema
  const User = mongoose.model('User', userSchema)
  export default User 

