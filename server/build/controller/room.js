"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoom = exports.updateReservation = exports.addRoom = exports.getRooms = void 0;

var _Room = _interopRequireDefault(require("../model/Room"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRooms = async (_req, res) => {
  try {
    const rooms = await _Room.default.find({});
    res.status(200).json(rooms);
  } catch (err) {
    res.status(404).json({
      message: err
    });
  }
};

exports.getRooms = getRooms;

const addRoom = async (req, res) => {
  try {
    const newRoom = new _Room.default({ ...req.body,
      roomImage: req.file ? req.file.path : null
    });
    const results = await newRoom.save();
    res.status(201).json(results);
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.addRoom = addRoom;

const updateReservation = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const updateForm = await _Room.default.findByIdAndUpdate(id, { ...req.body
    }, {
      new: true
    });
    res.status(200).json(updateForm);
  } catch (err) {
    res.status(404).json({
      message: err
    });
  }
};

exports.updateReservation = updateReservation;

const deleteRoom = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const room = await _Room.default.findOne({
      _id: id
    });
    const deleteImage = room.roomImage;

    _fs.default.unlinkSync(deleteImage);

    await _Room.default.findByIdAndDelete(id);
    res.status(201).send({
      message: "This room has been deleted."
    });
  } catch (err) {
    res.status(404).json({
      message: err
    });
  }
};

exports.deleteRoom = deleteRoom;
//# sourceMappingURL=room.js.map