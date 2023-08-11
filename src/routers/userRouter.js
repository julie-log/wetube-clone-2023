import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/:id(\\d+)", see);
userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);

export default userRouter;
