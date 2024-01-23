
//UserID - references Wyatt 'User' collection linking each closet to a specific user
//closetSchema = storing object Ids to the 'Item' model.  Each array will represent a different closet category

const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const closetSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.Objectid,
        required: true, 
        ref: 'User'
    },
    outerwear: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    footwear: [{ type: Schema.Types.ObjecteId, ref: 'Item' }],
    clothing: [{ type: Schema.Types.ObjectedId, ref: 'Item' }],
    accessories: [{ type: Schema.Types.objeectedId, ref: 'Item' }]
});

module.exports = mongoose.model('Closet', closetSchema);


