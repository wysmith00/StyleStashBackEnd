const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: { type: String, required: true, enum: categories },
    color: { type: String, enum: colors },
    type: { type: String, enum: types },
    size: { type: String, enum: sizes },
    brand: { type: String, enum: brands },
    wearCount: String,
    notes: String
});

module.exports = mongoose.model('Item', itemSchema);
