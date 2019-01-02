const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// const passportConfig = require('./services/passport');
require('./models/User');
require('./models/Survey');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');
// CommonJS

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json()); //
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

/**
 *  + Valid JS
 *  require('./routes/authRoutes')(app);
 */
// authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// ➜  server git:(master) heroku create
// Creating app... done, ⬢ sheltered-oasis-11786
// https://sheltered-oasis-11786.herokuapp.com/ | https://git.heroku.com/sheltered-oasis-11786.git
//
// git push heroku master
// heroku open
// heroku logs
//
/**
 *  Intro to Google OAuth
 *  The OAuth Flow
 *  Overview of PassportJS
 *  Passport Setup
 *  Enabling Google OAuth API
 *  Securing API Keys
 *  Google Strategy Options
 *  Testing OAuth
 *  Authorized Redirect URI's
 *  OAuth Callbacks
 *  Access and Refresh Tokens
 *  Nodemon Setup
 */

/**
  * npm install --save express eslint passport passport-google-oauth20 nodemon
  * + Added dev to the scripts section
  * npm run dev
  */
