import { Router } from "express";
import { obtenerPalabraRandom } from "../controllers/palabra.controller";

const router = Router();

/**
 * @swagger
 * /api/palabra-random:
 *   get:
 *     summary: Obtener una palabra aleatoria para el juego
 *     tags:
 *       - Juego de Palabras
 *     responses:
 *       200:
 *         description: Palabra obtenida correctamente
 *       500:
 *         description: Error obteniendo palabra
 */
router.get("/palabra-random", obtenerPalabraRandom);

export default router;