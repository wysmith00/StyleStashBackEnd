
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const closetSchema = new mongoose.Schema({
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

const Closet = mongoose.model('Closet', closetSchema);

export default Closet;


