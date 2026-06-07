import { Router } from "express";
import { login, register } from "../controllers/auth.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", login);

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registrar usuario
 *     tags:
 *       - Autenticación
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error en los datos enviados
 */
router.post("/register", register);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Obtener perfil protegido
 *     tags:
 *       - Usuarios
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso autorizado
 *       401:
 *         description: Token inválido o inexistente
 */
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Acceso autorizado" });
});

export default router;