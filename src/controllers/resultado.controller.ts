import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const guardarResultado = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      id_usuario,
      id_juego,
      id_nivel,
      puntaje,
      tiempo,
      aciertos
    } = req.body;

    const partida = await prisma.partida.create({
      data: {
        fecha: new Date(),
        estado: "Finalizada",
        id_usuario,
        id_juego,
        id_nivel
      }
    });

    const resultado = await prisma.resultado.create({
      data: {
        puntaje,
        tiempo,
        aciertos,
        id_partida: partida.id_partida
      }
    });

    res.json({
      message: "Resultado guardado",
      resultado
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Error guardando resultado"
    });

  }
};

export const obtenerRanking = async (
  req: Request,
  res: Response
) => {
  try {

    const ranking = await prisma.resultado.findMany({
      orderBy: {
        puntaje: "desc"
      },
      take: 10,
      include: {
        partida: {
          include: {
            usuario: true
          }
        }
      }
    });

    res.json(ranking);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Error obteniendo ranking"
    });

  }
};