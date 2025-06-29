import express from "express";
import { getUsers, getUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);

export default userRouter;
