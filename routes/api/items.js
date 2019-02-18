const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
});

// @route POST api/items
// @desc Post an item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    });
    newItem
    .save()
    .then(item => res.json(item))
});

// @route UPDATE api/items
// @desc Update an item
// @access Public
router.put('/:id', (req, res) => {
    const updatedItem = {
        name: req.body.name,
        price: req.body.price
    }
    Item.findByIdAndUpdate(req.params.id, updatedItem, {new: true}, (err, item) => {
        if(err) console.log(err)
        res.json(item)
    })
    .catch(err => res.status(404).json({success: false}))
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;