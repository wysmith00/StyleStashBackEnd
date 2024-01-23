const expresss = require('express')
const router = express.Router();
const closet = require('../Controllers/closet');

//Create a closet
router.post('/', closet.createCloset); 

//Add an item to a closet category 
router.post('/closetId/items', closet.addItemToClosetCategory);

//Remove an item from a closet category 
router.delete('/closetId/items/:itemId', closet.removeItemFromClosetCategory);

//Get a closet
router.get('/closetId', closet.getCloset);

// Update a closet
router.patch('/closetId', closet.updateCloset);

// Delete a closet
router.delete('/closetId', closet.deleteCloset);

module.exports = router;