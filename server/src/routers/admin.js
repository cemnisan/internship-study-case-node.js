import express from "express";
import verifyToken from "../middlewares/verify-token";
import { signUp, signIn } from "../controller/admin";
import { addRoom, deleteRoom, getRooms, updateReservation } from "../controller/room";
import uploadImage from "../utils/multer";

const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);

router.get("/rooms", verifyToken, getRooms);
router.post("/rooms", verifyToken, uploadImage, addRoom);
router.put("/rooms/:id", verifyToken, updateReservation);
router.delete('/rooms/:id',verifyToken,deleteRoom);

export default router;
