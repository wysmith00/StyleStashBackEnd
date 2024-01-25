
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//make sure whatever is in my model is in my request body, in terms of model fields; consistency between those fields and the object from the request body that I am sending


const closetSchema = new mongoose.Schema({
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]


});

const Closet = mongoose.model('Closet', closetSchema);

export default Closet;


