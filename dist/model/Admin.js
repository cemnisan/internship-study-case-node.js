"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 8
  },
  password: {
    type: String,
    min: 6
  }
});

const Admin = _mongoose.default.model('Admin', AdminSchema);

var _default = Admin;
exports.default = _default;