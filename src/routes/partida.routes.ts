import { Router } from "express";
import { crearPartida } from "../controllers/partida.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/partidas:
 *   post:
 *     summary: Crear una nueva partida
 *     tags:
 *       - Partidas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Partida creada correctamente
 *       401:
 *         description: Usuario no autorizado
 *       500:
 *         description: Error al crear la partida
 */
router.post("/", authMiddleware, crearPartida);

export default router;