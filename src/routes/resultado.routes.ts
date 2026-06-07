import { Router } from "express";
import {guardarResultado, obtenerRanking} from "../controllers/resultado.controller";

const router = Router();

router.post("/resultado", guardarResultado);
router.get("/ranking", obtenerRanking);

export default router;