import Closet from '../Models/closet.js';

//Importing item details model
import item from '../Models/item.js';

//Jan23rd, 2024
//creating a new closet (assuming you have no items to begin with)
const createCloset = async (req, res) => {
//     //my models request body and controllers closet.js were not matching as my new closet object I am creating by the request.body were set as arrays when I just need a string within my content body for the category field.
        let category = req.body.category
        const closet = new Closet({
            profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
            // unneeded fields, only category matches the schemas
            // outerwear: "",
            // footwear: "",
            // clothing: "",
         category: category
  });

  try {
    const newCloset = await closet.save();
    res.status(201).json(newCloset);
} catch (err) {
    res.status(400).json({ message: err.message });
}
};

// Get a user's closet
 const getCloset = async (req, res) => {
    try {
        const closet = await Closet.findById(req.params.closetId)
            .populate('userID')
            .populate('outerwear')
            .populate('footwear')
            .populate('clothing')
            .populate('accessories');

        if (!closet) {
            return res.status(404).json({ message: "Closet not found" });
        }

        res.json(closet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//get a user's closet by category
const getClosetCategory = async (req, res) => {
    try {
        const category = req.params.category;
        
        const validCategories = ['accessories', 'outerwear', 'footwear', 'clothing'];
        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).send('Invalid category');
        }

        const items = await fetchItemsByCategory(category);

        if (!items || items.length === 0) {
            return res.status(404).send('No items found in this category');
        }
        res.json(items);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

//Functionality for items 
q
// const getAllItems = async (req, res) => {
//     try {
//         const items = await item.find({});
//         res.status(200).json(items);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };


export default { createCloset, getCloset, getClosetCategory };




// //Importing closet model
// import Closet from '../Models/closet.js';

// //Importing item details model
// import item from '../Models/item.js';

// //creating a new closet (assuming you have no items to begin with)
// exports.createCloset = async (req, res) => {
//     const closet = new Closet({
//         userID: req.body.userID,
//         outerwear: [],
//         footwear: [],
//         clothing: [],
//         accessories: []
//     });

//     try {
//         const newCloset = await closet.save();
//         res.status(201).json(newCloset);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Get a user's closet
// exports.getCloset = async (req, res) => {
//     try {
//         const closet = await Closet.findById(req.params.closetId)
//             .populate('userID')
//             .populate('outerwear')
//             .populate('footwear')
//             .populate('clothing')
//             .populate('accessories');

//         if (!closet) {
//             return res.status(404).json({ message: "Closet not found" });
//         }

//         res.json(closet);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// //get a user's closet by category
// exports.getClosetCategory = async (req, res) => {
//     try {
//         const category = req.params.category;
        
//         const validCategories = ['accessories', 'outerwear', 'footwear', 'clothing'];
//         if (!validCategories.includes(category.toLowerCase())) {
//             return res.status(400).send('Invalid category');
//         }

//         const items = await fetchItemsByCategory(category);

//         if (!items || items.length === 0) {
//             return res.status(404).send('No items found in this category');
//         }
//         res.json(items);
//     } catch (error) {
//         res.status(500).send('Server error');
//     }
// };


// module.exports = { getClosetCategory };


