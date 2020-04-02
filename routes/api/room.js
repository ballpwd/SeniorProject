const express = require('express');
const router = express.Router();
const Room = require('../../models/Room')

// @route  POST /api/room
// @desc   Create a room
router.post('/', async (req, res) => {
    
    try {
        const room = new Room({
            owner: req.body.userId,
            roomName: req.body.roomName
        });
        await room.save()
        res.status(201).end()
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    
});

// @route  GET /api/room
// @desc   Get all room
router.get('/', async (req, res) => {
    try {
        const room = await Room.find();
        res.json(room)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

module.exports = router;