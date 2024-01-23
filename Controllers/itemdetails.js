import ItemDetails from "../Models/itemdetails.js";

// Get an item by ID
const getItem = async (req, res) => {
    try {
        const item = await ItemDetails.findById(req.params.id);
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
        const newItem = new ItemDetails(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update an item
const updateItem = async (req, res) => {
    try {
        const updatedItem = await ItemDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        const item = await ItemDetails.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.status(200).send('Item deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { getItem, addItem, updateItem, deleteItem}