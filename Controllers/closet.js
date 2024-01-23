//Importing closet model
import Closet from '../Models/closet';

//Importing item details model
import Item from '../Models/itemdetails';

//creating a new closet (assuming you have no items to begin with)
exports.createCloset = async (req, res) => {
    const closet = new Closet({
        userID: req.body.userID,
        outerwear: [],
        footwear: [],
        clothing: [],
        accessories: []
    });

    try {
        const newCloset = await closet.save();
        res.status(201).json(newCloset);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a user's closet
exports.getCloset = async (req, res) => {
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
exports.getClosetCategory = async (req, res) => {
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


module.exports = { getClosetCategory };




/*
//Add an item to any closet category.  Note: with Item details, these function might now involve creating a new Item or retrieving an existing one before adding the ID to the closet.
exports.addItemToClosetCategory = async (req, res) => {
    try {
        const { category, itemId } = req.body;
        const closet = await Closet.findById(req.params.closetId);

        if (!closet) {
            return res.status(404).json({ message: "Closet not found" });
        }

        if (!closet[category]) {
            return res.status(400).json({ message: "Invalid category" });
        }
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        closet[category].push(item._id);
        await closet.save();
        res.status(200).json(closet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove an item from a closet category
exports.removeItemFromClosetCategory = async (req, res) => {
    try {
        const { category, itemId } = req.body;
        const closet = await Closet.findById(req.params.closetId);

        if (!closet) {
            return res.status(404).json({ message: "Closet not found" });
        }

        if (!closet[category]) {
            return res.status(400).json({ message: "Invalid category" });
        }

        closet[category] = closet[category].filter(id => id.toString() !== itemId);
        await closet.save();
        res.status(200).json(closet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
*/


