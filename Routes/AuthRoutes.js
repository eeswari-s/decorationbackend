import express from "express";
import { login, me } from "../Controllers/AuthController.js";
import { protect } from "../Middleware/Auth.js";
import { loginLimiter } from "../Middleware/RateLimit.js";

const router = express.Router();

router.post("/login", loginLimiter, login);
router.get("/me", protect, me);

export default router;
