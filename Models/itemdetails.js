import mongoose from 'mongoose'
const Schema = mongoose.Schema;
//enum was extracted from all the fields 
const itemDetailsSchema = new Schema({
    category: { type: String, required: true },
    color: { type: String },
    type: { type: String },
    size: { type: String},
    brand: { type: String },
    wearCount: {type: String},
    notes: {type: String}
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);
export default ItemDetails;

