import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const itemSchema = new Schema({

    closet: {
        type: Schema.Types.ObjectId,
        ref: 'Closet'
    },

    category: {
             type: String,
             required: true,
             enum: ['outerwear', 'footwear', 'clothing', 'accessories'],
        },
    color: { type: String },
    type: { type: String },
    size: { type: String},
    brand: { type: String },
    wearCount: {type: String,
                enum: ['often', 'rarely', 'special occasion']},
    notes: {type: String}
});

const Item = mongoose.model('Item', itemSchema);
export default Item;

