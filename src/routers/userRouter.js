import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");
const handleDelete = (req, res) => res.send("Delete User");

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDelete);

export default userRouter;
