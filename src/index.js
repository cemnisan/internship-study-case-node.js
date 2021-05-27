  
import express from "express";
import path from 'path';
import cors from "cors";
import dotenv from "dotenv";
import roomRouter from "./routers/room";
import adminRouter from "./routers/admin";
import { swaggerDocument, swaggerUI } from "./utils/swagger";

// working with environment variables
dotenv.config();

// database func.
const db = require("./database/db")();

const PORT = process.env.PORT || 3001;

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use("/api/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/api", roomRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Listening to --> ${PORT}`);
});

module.exports = app;