import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.ATLAS_CONNECTION_STRING);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(json());

app.get('/', (req, res) => {
  res.send('Welcome to NBA Metrics! Check out our players data at /api/players');
})

app.use('/api', playerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
