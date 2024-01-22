import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { type: String, required: true },
    location: { type: String },
    currentStyle: { type: String },
    influences: { type: String },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Closet' },
})

const Profile = mongoose.model('Profile', profileSchema)

export default Profile