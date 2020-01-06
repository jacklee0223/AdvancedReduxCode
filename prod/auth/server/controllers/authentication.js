const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  // User has already had their email and pw authd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email }, (error, existingUser) => {
    if (error) return next(error);

    // If a user with email exists, return error
    if (existingUser) {
      return res.status(422).send({ error: `Email: ${email} is in use` });
    }

    // If not, create and save user record
    const newUser = new User({
      email,
      password
    });

    newUser.save(error => {
      if (error) return next(error);

      // Respond to request indicating user was created
      res.json({ success: true, token: tokenForUser(newUser) });
    });
  });
};
