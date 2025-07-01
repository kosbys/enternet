import * as UserModel from "../models/userModel.js";

export const getUsers = async (_, res) => {
  UserModel.getAllUsers()
    .then((users) => res.status(200).res.json(users))
    .catch((err) => {
      res.status(500).json({ message: `Server error: ${err}` });
    });
};

export const getUser = (req, res) => {
  UserModel.getUserById(req.params.id)
    .then((user) => {
      if (!user) return res.status(404).json({ error: "User not found" });
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: `Server error: ${err}` });
    });
};
