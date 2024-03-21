const express = require('express');
const Player = require('../models/playerModel');
const router = express.Router();

router.get('/players', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;

  try {
    const skip = (page - 1) * limit;

    const players = await Player.find().skip(skip).limit(limit);

    // Send response
    res.json({
      page: page,
      limit: limit,
      totalPlayers: await Player.countDocuments(),
      totalPages: Math.ceil((await Player.countDocuments()) / limit),
      players: players,
    });
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get player by ID
router.get('/players/:id', async (req, res) => {
  const playerId = req.params.id;

  try {
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    console.error('Error fetching player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
