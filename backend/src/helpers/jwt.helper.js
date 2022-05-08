const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const generateJWT = (payload) => {
    
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.private_jwt,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
