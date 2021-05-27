"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default; // Create Room's Schema

const RoomSchema = new Schema({
  roomName: {
    type: String,
    required: true
  },
  maxPerson: {
    type: Number,
    min: 1,
    max: 8
  },
  roomFeatures: [String],
  bedOptions: [String],
  descriptions: String,
  roomImage: {
    type: String,
    default: null
  },
  isReserved: {
    type: Boolean,
    default: false
  },
  isAvailability: {
    type: Boolean,
    default: true
  },
  isAlteration: {
    type: Boolean,
    default: false
  },
  roomPrice: Number,
  form: [{
    startDate: {
      type: String,
      default: () => (0, _moment.default)().format("MMMM Do YYYY")
    },
    endDate: {
      type: String,
      default: () => (0, _moment.default)().format("MMMM Do YYYY")
    },
    numberOfPeople: {
      type: String,
      default: "1 Adult"
    },
    numberOfChildren: {
      type: String,
      default: "No Children"
    }
  }]
}); // Create Collection

const Room = _mongoose.default.model("Room", RoomSchema);

var _default = Room;
exports.default = _default;