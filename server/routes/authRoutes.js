const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      scope: 'https://www.googleapis.com/auth/plus.login'
    })
  );

  app.get('/api/current_user', (req, res) => {
    console.log('the req.user is ', req.user);
    res.send(req.user);
  });
};
