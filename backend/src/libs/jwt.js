const jwt = require('jsonwebtoken');

const sign = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '10s',
      },
      (error, token) => {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
};
const refresh = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET_REFRESH,
      {
        expiresIn: '10s',
      },
      (error, token) => {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
};

module.exports = {
  sign,
  refresh,
};
