import jwt from 'jsonwebtoken'

import User from '../Models/user.js'
import Profile  from '../Models/profile.js'
import Closet from '../Models/closet.js';


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
        Profile.create(req.body)
          .then(newProfile => {
            req.body.profile = newProfile._id;
            User.create(req.body)
              .then(user => {
                // Create a closet for the new user. Closet is created after the profile is created, OR closet route 
                const closet  = new Closet({
                  // Assuming the userID is required to associate the closet with the user
                  userID: user._id,
                  category: ""  // Initialize with an empty category or any default value
                });
                console.log(closet)

                closet.save()
                  .then(newCloset => {
                    // Closet created successfully, now create JWT and send response
                    const token = createJWT(user);
                    res.status(200).json({ token, closet: newCloset });
                  })
                  .catch(closetError => {
                    // Handle error in closet creation
                    res.status(500).json({ err: closetError.message });
                  });
              })
              .catch(err => {
                Profile.findByIdAndDelete(newProfile._id);
                res.status(500).json({ err: err.errmsg });
              });
          });
      }
    })
    .catch(err => {
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
