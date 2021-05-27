"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create token middleware
module.exports = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'] || req.query.token || req.body.token;

    const decoded = _jsonwebtoken.default.verify(token, process.env.API_SECRET_KEY);

    req.decode = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      message: "You can't view page 'cause you aren't logged in."
    });
  }
};
//# sourceMappingURL=verify-token.js.map