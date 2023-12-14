const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.send('Hello NBA Metrics!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
