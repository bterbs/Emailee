const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

// connect to the mongo db then instantiate express
mongoose.connect(keys.mongoURI);
const app = express();

// tell express to use cookie-session and pass private key and maxAge to cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000;
    keys: [keys.cookieKey];
  })
);

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Server is running on port 5000');
