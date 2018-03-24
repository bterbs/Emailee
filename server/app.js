const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./services/passport');
require('./models/user');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Server is running on port 5000');
