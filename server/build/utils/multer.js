"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create image
const storage = _multer.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path.default.join(__dirname + '/../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-") + file.originalname);
  }
}); // save roomImage index only.


const uploadImage = (0, _multer.default)({
  storage: storage
}).single('roomImage');
var _default = uploadImage;
exports.default = _default;
//# sourceMappingURL=multer.js.map