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
// const updateItem = async (req, res) => {
//     try {
//         const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedItem) {
//             return res.status(404).send('Item not found');
//         }
//         res.status(200).json(updatedItem);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

const updateItem = async (req, res) => {
    try {
        const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        // Check for validation errors or other types of mongoose errors
        if (error.name === 'ValidationError') {
            return res.status(400).send(error.message);
        }

        // Handling CastError, for example if the ID format is not correct
        if (error.name === 'CastError') {
            return res.status(400).send('Invalid ID format');
        }

        // For other types of errors, send a generic server error message
        res.status(500).send('Internal Server Error');
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


export default { getItem, addItem, updateItem, deleteItem, getAllItems}