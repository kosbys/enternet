import express from "express";
import {} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/", Register);
authRouter.get("/:id", Login);

export default userRouter;
