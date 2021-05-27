import mongoose from "mongoose";
import moment from "moment";

const { Schema } = mongoose;

// Create Room's Schema
const RoomSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  maxPerson: {
    type: Number,
    min: 1,
    max: 8,
  },
  roomFeatures: [String],
  bedOptions: [String],
  descriptions: String,
  roomImage: {
    type:String,
    default:null
  },
  isReserved: {
    type: Boolean,
    default: false,
  },
  isAvailability: {
    type: Boolean,
    default: true,
  },
  isAlteration: {
    type: Boolean,
    default: false,
  },
  roomPrice: Number,
  form: [
    {
      startDate: {
        type: String,
        default: () => moment().format("MMMM Do YYYY"),
      },
      endDate: {
        type: String,
        default: () => moment().format("MMMM Do YYYY"),
      },
      numberOfPeople: {
        type: String,
        default: "1 Adult",
      },
      numberOfChildren: {
        type: String,
        default: "No Children",
      },
    },
  ],
});

// Create Collection
const Room = mongoose.model("Room", RoomSchema);

export default Room;
