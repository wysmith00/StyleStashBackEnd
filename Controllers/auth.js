import jwt from 'jsonwebtoken'

import User from '../Models/user.js'
import Profile  from '../Models/profile.js'
import Closet from '../Models/closet.js'


function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
//conditional that every profile created, creates one closet
/*
function signup(req, res) {
  console.log("Request Body:", req.body);
  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      throw new Error('Account already exists')
    } else if (!process.env.SECRET){
      throw new Error('no SECRET in .env file')
    } else {
      Profile.create(req.body)
      .then(newProfile => {
        req.body.profile = newProfile._id
        User.create(req.body)
        .then(user => {
          const token = createJWT(user)
          res.status(200).json({ token })
        })
        .catch(err => {
          Profile.findByIdAndDelete(newProfile._id)
          res.status(500).json({err: err.errmsg})
        })
      })
    }
  })
  .catch(err => {
    res.status(500).json({err: err.message})
  })
}
*/
function signup(req, res) {
  console.log("Request Body:", req.body);

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        throw new Error('Account already exists');
      } else if (!process.env.SECRET) {
        throw new Error('no SECRET in .env file');
      } else {
        return Closet.create(req.body); // Create the closet and return the promise
      }
    })
    .then(newCloset => {
      req.body.closet = newCloset._id; // Assign the new closet ID
      return Profile.create(req.body); // Create the profile and return the promise
    })
    .then(newProfile => {
      req.body.profile = newProfile._id;
      return User.create(req.body); // Create the user and return the promise
    })
    .then(user => {
      const token = createJWT(user);
      res.status(200).json({ token }); // Send the response
    })
    .catch(err => {
      // If an error occurs at any point in the chain, this block will handle it
      if (req.body.profile) {
        Profile.findByIdAndDelete(req.body.profile).catch(deleteErr => {
          console.error('Error deleting profile:', deleteErr);
        });
      }
      res.status(500).json({ err: err.message });
    });
}


function login(req, res) {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) return res.status(401).json({ err: 'User not found'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        res.status(401).json({ err: 'Incorrect password' })
      }
    })
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

export { signup, login }