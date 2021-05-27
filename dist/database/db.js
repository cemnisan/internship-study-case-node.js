"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = () => {
  _mongoose.default.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.7yqtv.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  _mongoose.default.connection.on('open', () => {
    console.log('MongoDB: Connection successfull');
  });

  _mongoose.default.connection.on('error', () => {
    console.log('MongoDB: Connection failed.');
  });
};