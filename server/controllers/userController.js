import * as UserModel from "../models/userModel.js";

export const getUsers = async (req, res, next) => {
  UserModel.getAllUsers()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

export const getUser = (req, res, next) => {
  UserModel.getUserById(req.params.id)
    .then((user) => {
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    })
    .catch((err) => next(err));
};

export const createUser = (req, res, next) => {
  UserModel.createUser(req.body)
    .then((newUser) => res.status(201).json(newUser))
    .catch((err) => next(err));
};
