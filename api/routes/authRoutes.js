import express from "express";
import { login, signup, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

router.get("/me", protecteRoute, () => {});

export default router;
