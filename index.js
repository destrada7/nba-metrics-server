const dotenv = require('dotenv');
const express = require('express');
const { json } = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.ATLAS_CONNECTION_STRING)
  .then((success) => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.use(json());

app.get('/', (req, res) => {
  res.send(
    'Welcome to NBA Metrics! Check out our players data at /api/players'
  );
});

app.use('/api', playerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
