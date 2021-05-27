"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify-token"));

var _admin = require("../controller/admin");

var _room = require("../controller/room");

var _multer = _interopRequireDefault(require("../utils/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/register", _admin.signUp);
router.post("/login", _admin.signIn);
router.get("/rooms", _verifyToken.default, _room.getRooms);
router.post("/rooms", _verifyToken.default, _multer.default, _room.addRoom);
router.put("/rooms/:id", _verifyToken.default, _room.updateReservation);
router.delete('/rooms/:id', _verifyToken.default, _room.deleteRoom);
var _default = router;
exports.default = _default;