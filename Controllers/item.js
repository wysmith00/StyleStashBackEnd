import Item from "../Models/item.js";

// Get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get an itemdetails by ID
const getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
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
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update an item
const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.status(200).send('Item deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { getItem, addItem, updateItem, deleteItem, getAllItems }
