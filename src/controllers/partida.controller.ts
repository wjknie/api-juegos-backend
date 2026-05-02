import { Response } from "express";
import { prisma } from "../config/prisma";

export const crearPartida = async (req: any, res: Response) => {
  try {
    const { id_juego, id_nivel } = req.body;

    const partida = await prisma.partida.create({
      data: {
        fecha: new Date(),
        estado: "en progreso",
        id_usuario: req.user.userId,
        id_juego,
        id_nivel
      }
    });

    res.json(partida);

  } catch (error) {
    res.status(500).json({ error: "Error creando partida" });
  }
};