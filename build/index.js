"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _room = _interopRequireDefault(require("./routers/room"));

var _admin = _interopRequireDefault(require("./routers/admin"));

var _swagger = require("./utils/swagger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// working with environment variables
_dotenv.default.config(); // database func.


const db = require("./database/db")();

const PORT = process.env.PORT || 3001;
const app = (0, _express.default)(); // middlewares

app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use('/uploads', _express.default.static(_path.default.join(__dirname, 'uploads')));
app.use("/api/swagger", _swagger.swaggerUI.serve, _swagger.swaggerUI.setup(_swagger.swaggerDocument));
app.use("/api", _room.default);
app.use("/api/admin", _admin.default);
app.listen(PORT, () => {
  console.log(`Listening to --> ${PORT}`);
});
module.exports = app;