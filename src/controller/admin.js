import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../model/Admin";

// Create Admin
export const signUp = (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    const { username, password } = req.body;
    bcrypt.hash(password, salt, async (err, hash) => {
      const newAdmin = new Admin({
        username,
        password: hash,
      });
      try {
        const result = await newAdmin.save();
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json({ message: err });
      }
    });
  });
};

// Admin Login
export const signIn = (req, res) => {
  const { username, password } = req.body;
  Admin.findOne({ username }, (err, user) => {
    if (!user) {
      res.status(404).json({ message: "This username is not found." });
    } else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          res.status(404).json({ message: "This password is wrong" });
        } else {
          const payload = {
            username,
          };
          const token = jwt.sign(payload, process.env.API_SECRET_KEY);
          res.status(200).json(token);
        }
      });
    }
  });
};
