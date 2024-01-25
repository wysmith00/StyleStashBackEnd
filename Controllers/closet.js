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


const getCloset = async (req, res) => {
    try {
        const closet = await Closet.findById(req.params.id)
        res.status(200).json(closet);
    } catch (err) {
        // Handle potential errors
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

const getAllItems = async (req, res) => {
    try {
        const items = await item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addItem = async (req, res) => {
    try {
        const newItem = new item({
            ...req.body,
            closet: req.body.closetId 
        });

        await newItem.save();

        const closet = await Closet.findById(req.body.closetId);
        if (!closet) {
            return res.status(404).send('Closet not found');
        }
        closet.items.push(newItem._id);
        await closet.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getItemsByCategory = async (req, res) => {
    try {
        const closetId = req.params.closetId;
        const category = req.params.category;

        // Log the received parameters
        console.log("Received Closet ID:", closetId);
        console.log("Received Category:", category);

        // Validate the category
        const validCategories = ['outerwear', 'footwear', 'clothing', 'accessories'];
        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).send('Invalid category');
        }

        // Fetch the closet
        const closet = await Closet.findById(closetId).populate({
            path: 'items',
            match: { category: category }
        });

        // Log the fetched closet
        console.log("Fetched Closet:", closet);

        if (!closet) {
            return res.status(404).send('Closet not found');
        }

        if (!closet.items || closet.items.length === 0) {
            return res.status(404).send('No items found in this category in the closet');
        }

        res.status(200).json(closet.items);
    } catch (error) {
        console.log("Error:", error.message); // Log the error message
        res.status(500).send(error.message);
    }
};


export default { createCloset, getCloset, getClosetCategory, getAllItems, addItem, getItemsByCategory};
