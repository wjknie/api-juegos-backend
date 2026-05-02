import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";

const SECRET = "supersecret";

export const register = async (req: Request, res: Response) => {
  try {
    const { nombre, grupo_edad, tipo_usuario, correo, contrasena } = req.body;

    // verificar si existe
    const exists = await prisma.usuario.findUnique({
      where: { correo }
    });

    if (exists) {
      return res.status(400).json({ error: "Usuario ya existe" });
    }

    // encriptar contraseña
    const hashed = await bcrypt.hash(contrasena, 10);

    // crear usuario
    const user = await prisma.usuario.create({
      data: {
        nombre,
        grupo_edad,
        tipo_usuario,
        correo,
        contrasena: hashed
      }
    });

    res.json({
      message: "Usuario creado",
      user: {
        id: user.id_usuario,
        nombre: user.nombre,
        correo: user.correo
      }
    });

  } catch (error) {
    res.status(500).json({ error: "Error en registro" });
  }

};
export const login = async (req: Request, res: Response) => {
  const { correo, contrasena } = req.body;

  const user = await prisma.usuario.findUnique({
    where: { correo }
  });

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const valid = await bcrypt.compare(contrasena, user.contrasena);

  if (!valid) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { userId: user.id_usuario },
    SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    user: {
      id: user.id_usuario,
      nombre: user.nombre,
      correo: user.correo
    }
  });
};