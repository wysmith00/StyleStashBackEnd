import Closet from '../Models/closet.js';
import Item from '../Models/item.js'; // Capitalized 'Item'

// Jan 23rd, 2024
// Creating a new closet (assuming you have no items to begin with)
const createCloset = async (req, res) => {
    let category = req.body.category;
    const closet = new Closet({
        profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
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
        const closet = await Closet.findById(req.body.id);
        res.status(200).json(closet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/*
const getCloset = async (req, res) => {
    try {
        // Accessing the closet ID from URL parameters
        const closetId = req.params.closetId;
        const closet = await Closet.findById(closetId);

        // Check if closet is found
        if (!closet) {
            return res.status(404).json({ message: "Closet not found" });
        }

        res.status(200).json(closet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
*/

// Get a user's closet by category
const getClosetCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const validCategories = ['accessories', 'outerwear', 'footwear', 'clothing'];
        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).send('Invalid category');
        }

        const items = await Item.find({ category: category }); 

        if (!items || items.length === 0) {
            return res.status(404).send('No items found in this category');
        }
        res.json(items);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Get an item from closet by category
const getItemsByCategory = async (req, res) => {
    try {
        const closetId = req.body.closetId;
        const category = req.params.category;

        const validCategories = ['outerwear', 'footwear', 'clothing', 'accessories'];
        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).send('Invalid category');
        }

        const closet = await Closet.findById(closetId).populate({
            path: 'items',
            match: { category: category }
        });

        if (!closet || !closet.items || closet.items.length === 0) {
            return res.status(404).send('No items found in this category in the closet');
        }

        res.status(200).json(closet.items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Functionality for items 

// Get all items from closet
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({}); 
        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add item to closet
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

// Delete item from closet
const deleteItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;

        const itemToDelete = await Item.findById(itemId); 
        if (!itemToDelete) {
            return res.status(404).send('Item not found');
        }

        await itemToDelete.remove();

        const closet = await Closet.findById(itemToDelete.closet);
        if (closet) {
            closet.items = closet.items.filter(id => id.toString() !== itemId);
            await closet.save();
        }

        res.status(200).send(`Item with ID ${itemId} deleted successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { createCloset, getCloset, getClosetCategory, getItemsByCategory, getAllItems, addItem, deleteItem };
