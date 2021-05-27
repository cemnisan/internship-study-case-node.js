"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _room = require("../controller/room");

var _multer = _interopRequireDefault(require("../utils/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/v1/rooms", _room.getRooms);
router.post("/v1/rooms", _multer.default, _room.addRoom);
router.put("/v1/rooms/:id", _room.updateReservation);
var _default = router;
exports.default = _default;