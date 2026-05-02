import { Router } from "express";
import { crearPartida } from "../controllers/partida.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, crearPartida);

export default router;