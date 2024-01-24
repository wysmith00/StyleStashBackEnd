
// //closetSchema = storing object Ids to the 'Item' model.  Each array will represent a different closet category

// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
// //make sure whatever is in my model is in my request body, in terms of model fields; consistency between those fields and the object from the request body that I am sending
// const closetSchema = new mongoose.Schema({
//     profileId: {
//         type: Schema.Types.ObjectId,
//         //required: true, 
//         ref: 'profile'
//     },
//     category: {
//         type: String,
//         //required: true,
//         //enum: ['outerwear', 'footwear', 'clothing', 'accessories'],
//     },
//     items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
//     profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
// });

// const Closet = mongoose.model('Closet', closetSchema);

// export default Closet

// Closet.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const closetSchema = new Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile', // Ensure this matches the model name used in mongoose.model for Profile
        //required: true, // Making it required if every Closet must be linked to a Profile
    },
    category: {
        type: String,
        //required: true,
        //enum: ['outerwear', 'footwear', 'clothing', 'accessories'],
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }] // Assuming 'Item' is another model you have
});

const Closet = mongoose.model('Closet', closetSchema);

export default Closet;

