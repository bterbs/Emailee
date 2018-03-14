const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Yo Miles tho :) I still work?' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
