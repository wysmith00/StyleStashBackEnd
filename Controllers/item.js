import item from "../Models/item.js";

// Get all items

const getAllItems = async (req, res) => {
    try {
        const items = await item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get an item by ID
const getItem = async (req, res) => {
    try {
        const item = await item.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add a new item
const addItem = async (req, res) => {
    try {
        const newItem = new item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update an item
const updateItem = async (req, res) => {
    try {
        const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete an item
const deleteItem = async (req, res) => {
    try {
        const item = await item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.status(200).send('Item deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getItemsByCategory = async (req, res) => {
    try {
        const category = req.params.category;

        // Validate if the category is one of the allowed values
        const validCategories = ['outerwear', 'footwear', 'clothing', 'accessories'];
        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).send('Invalid category');
        }

        const items = await item.find({ category: category });

        if (items.length === 0) {
            return res.status(404).send('No items found in this category');
        }

        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { getItem, addItem, updateItem, deleteItem, getAllItems}