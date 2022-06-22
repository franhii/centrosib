const fs = require('fs');
const passport = require('passport');
const path = require('path');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'api', 'auth', 'id_rsa_pub_pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};
const strategy = new JwtStrategy(options, (payload, done) => {});

module.exports = (passport) => {
  passport.use(strategy);
};
