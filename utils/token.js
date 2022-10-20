const jwt = require("jsonwebtoken");

exports.generateToken = () => {
  // Payload will be dynamic by user login
  const payload = {
    email: "admin@ab.email",
  };

  // Create token
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7days",
  });

  return token;
};
