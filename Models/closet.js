import mongoose from 'mongoose';

const Schema = mongoose.Schema

const closetSchema = new Schema({
    accessories: { type: String },
    clothes: { type: String },
    footwear: { type: String },
    outerwear: { type: String },
})

const Closet = mongoose.model('Closet', closetSchema)

export default Closet