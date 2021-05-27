import Room from "../model/Room";
import fs from 'fs';

export const getRooms = async (_req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const addRoom = async (req, res) => {
  try {
    const newRoom = new Room({
      ...req.body,
      roomImage: req.file ? req.file.path : null
    });
    const results = await newRoom.save();
    res.status(201).json(results);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updateForm = await Room.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).json(updateForm);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findOne({ _id: id });

    const deleteImage = room.roomImage
    fs.unlinkSync(deleteImage);
  
    await Room.findByIdAndDelete(id);
    res.status(201).send({ message: "This room has been deleted." });

  } catch (err) {
    res.status(404).json({ message: err });
  }
};
