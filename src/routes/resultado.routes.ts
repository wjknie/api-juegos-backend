import { Router } from "express";
import { guardarResultado, obtenerRanking } from "../controllers/resultado.controller";

const router = Router();

/**
 * @swagger
 * /api/resultado:
 *   post:
 *     summary: Guardar resultado de una partida
 *     tags:
 *       - Resultados
 *     responses:
 *       200:
 *         description: Resultado guardado correctamente
 *       500:
 *         description: Error guardando resultado
 */
router.post("/resultado", guardarResultado);

/**
 * @swagger
 * /api/ranking:
 *   get:
 *     summary: Obtener ranking de jugadores
 *     tags:
 *       - Resultados
 *     responses:
 *       200:
 *         description: Ranking obtenido correctamente
 *       500:
 *         description: Error obteniendo ranking
 */
router.get("/ranking", obtenerRanking);

export default router;