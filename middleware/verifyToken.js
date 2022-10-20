const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    // Token get from client side
    const token = req.headers?.authorization?.split(" ")?.[1];
    // Token missin handle
    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "Hitting the get api, collect the token and send as header",
      });
    }
    // Token decode
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};
