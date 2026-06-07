import { Request, Response } from "express";
import palabras from "../data/palabras.json";

export const obtenerPalabraRandom = (
  req: Request,
  res: Response
) => {
  try {

    const random =
      palabras[
        Math.floor(
          Math.random() * palabras.length
        )
      ];

    res.json(random);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error obteniendo palabra"
    });
  }
};