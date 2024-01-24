import mongoose from 'mongoose';
import User from '../Models/user.js'


//GET USER
const getUser = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('No user with that id');
    }
    try { 
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
}





//SIGNUP AND LOGIN COMPLETED IN AUTH



//user delete
const deleteUser = async (req, res) => {
    const { id: _id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('No user with that id');
    }
    try {
        const user = await User.findByIdAndDelete(_id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};



// //PUT update
// //const updateUser = async (req, res) => {
//     const { id: _id } = req.params;
//     const updates = req.body;
//     if (!mongoose.Types.ObjectId.isValid(_id));
//         return res.status(400).send('No user with that id');
//     }

//     try {
//         const user = await User.findByIdAndUpdate(_id, updates, { new: true });
//         if (!user) {
//             return res.status(400).send('User not found');
//         }
//         res.json(user);
//     } catch (error) {
//         res.status(500).send('Server error');
// };




//const user = require('../Controllers/profile');//

export {
    getUser,
    //updateUser,
    deleteUser,
}