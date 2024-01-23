import mongoose from 'mongoose';

const Schema = mongoose.Schema

const itemDetailsSchema = new Schema({
    color: { type: String },
    type: { type: String },
    wearcount: { type: Number },
    size: { type: String },
    brand: { type: String },
    notes: { type: String },
})

const itemDetails = mongoose.model('Item Details', itemDetailsSchema)

export default itemDetails