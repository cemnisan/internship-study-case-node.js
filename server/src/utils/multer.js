import multer from "multer";
import path from 'path';

// Create image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + '/../uploads'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date()
        .toISOString()
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-") +
        file.originalname
    );
  },
});

// save roomImage index only.
const uploadImage = multer({ storage: storage }).single('roomImage');

export default uploadImage;