const jwt = require("jsonwebtoken");

exports.generateToken = () => {
  const payload = {
    email: "admin@ab.email",
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7days",
  });

  return token;
};
