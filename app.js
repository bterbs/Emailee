const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');


require('./server/models/user');
require('./server/services/passport');

// connect to the mongo db then instantiate express
mongoose.connect(keys.mongoURI);
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Enable cookies inside of our application
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// tell passport to use cookies to handle authenication
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Backend server is running on port 5000');
