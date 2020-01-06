const User = require('../models/user');

exports.signup = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
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
      res.json(newUser);
    });
  });
};
