import express from "express";
import { getRooms, addRoom, updateReservation, searchRooom } from "../controller/room";
import uploadImage  from "../utils/multer";

const router = express.Router();

router.get("/v1/rooms", getRooms);
router.get('/v1/rooms/search',searchRooom);
router.post("/v1/rooms", uploadImage, addRoom);
router.put("/v1/rooms/:id",updateReservation);

export default router;
