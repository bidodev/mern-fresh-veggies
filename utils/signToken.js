/* Json Web Token Sign function*/
const jwt = require("jsonwebtoken");

module.exports = (id) => {
  const { JWT_SECRET, JWT_EXPIRES_TIME } = process.env;

  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_TIME,
  });
};
