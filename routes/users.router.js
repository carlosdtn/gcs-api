import express from "express";
import { UserService } from "./../services/user.service.js";

const router = express.Router();
const service = new UserService();

router.get("/", (req, res) => {
  res.send("Usuarios");
});

export default router;
