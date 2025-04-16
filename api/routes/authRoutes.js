import express from "express";
import { login, signup, logout } from "../controllers/authController.js";
import { protectRoute } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

router.get("/me", protectRoute, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

export default router;
