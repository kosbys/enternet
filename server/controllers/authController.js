import * as AuthModel from "../models/authModel.js";
import { generateToken } from "../utils/jwt.js";
import { comparePasswords } from "../utils/password.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  AuthModel.findUserRegister(name, email)
    .then((user) => {
      if (user) {
        return res.status(403).json({ message: "User already registered" });
      }

      return AuthModel.createUser(name, email, password);
    })
    .then(() => {
      res.status(201).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: `Server error: ${err}` });
    });
};

export const login = async (req, res) => {
  const { nameOrEmail, password } = req.body;

  AuthModel.findUserLogin(nameOrEmail)
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      const correctPassword = comparePasswords(password, user.password);

      if (!correctPassword) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const token = generateToken({ id: user.id, email: user.email });

      return res.json({ message: "Login success", token });
    })
    .catch((err) => {
      return res.status(500).json({ message: `Server error: ${err}` });
    });
};
