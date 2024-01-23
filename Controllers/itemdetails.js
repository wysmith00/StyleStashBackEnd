//edit this to reflect item details 

// Update a user's closet 
exports.updateCloset = async (req,res) => {
    try {
        const item = await Closet.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Delete a user's closet
exports.deleteCloset = async (req, res) => {
    try {
        const closet = await Closet.findById(req.params.closetId);

        if (!closet) {
            return res.status(404).json({ message: "Closet not found" });
        }

        await closet.remove();
        res.json({ message: "Deleted Closet" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};