import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: { type: String, required: true },
    color: String,
    type: String,
    size: String,
    brand: String,
    wearCount: String,
    notes: String
});

module.exports = mongoose.model('Item', itemSchema);
