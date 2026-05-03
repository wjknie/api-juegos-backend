import { Router } from "express";
import { login, register } from "../controllers/auth.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Acceso autorizado" });
});

export default router;