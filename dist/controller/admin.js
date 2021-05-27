"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Admin = _interopRequireDefault(require("../model/Admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create Admin
const signUp = (req, res) => {
  _bcryptjs.default.genSalt(10, (err, salt) => {
    const {
      username,
      password
    } = req.body;

    _bcryptjs.default.hash(password, salt, async (err, hash) => {
      const newAdmin = new _Admin.default({
        username,
        password: hash
      });

      try {
        const result = await newAdmin.save();
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json({
          message: err
        });
      }
    });
  });
}; // Admin Login


exports.signUp = signUp;

const signIn = (req, res) => {
  const {
    username,
    password
  } = req.body;

  _Admin.default.findOne({
    username
  }, (err, user) => {
    if (!user) {
      res.status(404).json({
        message: "This username is not found."
      });
    } else {
      _bcryptjs.default.compare(password, user.password).then(result => {
        if (!result) {
          res.status(404).json({
            message: "This password is wrong"
          });
        } else {
          const payload = {
            username
          };

          const token = _jsonwebtoken.default.sign(payload, process.env.API_SECRET_KEY);

          res.status(200).json(token);
        }
      });
    }
  });
};

exports.signIn = signIn;