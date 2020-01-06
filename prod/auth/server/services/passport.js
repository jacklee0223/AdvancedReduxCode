const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const passportJwt = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify username and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done
  User.findOne(
    {
      email
    },
    (error, user) => {
      if (error) return done;

      if (!user) {
        return done(null, false);
      }

      // compare passwords - is password equal to user.password?
      user.comparePassword(password, (error, isMatched) => {
        if (error) return done(error);
        if (!isMatched) return done(null, false);

        return done(null, user);
      });
    }
  );
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists in our DB
  // If it does, call done with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, (error, user) => {
    if (error) return done(error, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
