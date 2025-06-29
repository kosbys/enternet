import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import userRouter from "./routes/authRouter.js";
import authRouter from "./routes/authRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello from server");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
