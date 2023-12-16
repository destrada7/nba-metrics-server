import { Router } from 'express';
const router = Router();
import Player from '../models/playerModel.js';

// Get all players

router.get('/players', async (req, res) => {
    console.log('fetching all players...');
    try {
        //Find all players
        const players = await Player.find();
        console.log(`Found ${players.length} players:`, players);
        res.json(players);  
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

export default router;