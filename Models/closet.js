
//UserID - references Wyatt 'User' collection linking each closet to a specific user
//closetSchema = storing object Ids to the 'Item' model.  Each array will represent a different closet category

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//make sure whatever is in my model is in my request body, in terms of model fields; consistency between those fields and the object from the request body that I am sending
const closetSchema = new mongoose.Schema({
    /*userID: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'Profile'
    },*/
    category: {
        type: String,
        required: true,
        enum: ['outerwear', 'footwear', 'clothing', 'accessories'],
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

const Closet = mongoose.model('Closet', closetSchema);

export default Closet


