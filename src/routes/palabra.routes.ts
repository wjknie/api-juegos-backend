import { Router } from "express";
import { obtenerPalabraRandom } from "../controllers/palabra.controller";

const router = Router();

router.get("/palabra-random", obtenerPalabraRandom);

export default router;