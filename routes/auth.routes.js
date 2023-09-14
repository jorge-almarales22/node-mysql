import { Router } from "express";
import { loginWithGoogle } from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/google-sign-in.middleware.js";

export const authRoutes = Router();

authRoutes.post("/login", validateToken, loginWithGoogle)

