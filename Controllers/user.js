import mongoose from 'mongoose';
import User from '../Models/user.js'

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

export {
    getUser,
    deleteUser,
}