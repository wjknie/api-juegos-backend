-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "grupo_edad" TEXT NOT NULL,
    "tipo_usuario" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Juego" (
    "id_juego" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Nivel" (
    "id_nivel" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "dificultad" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_juego" INTEGER NOT NULL,
    CONSTRAINT "Nivel_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego" ("id_juego") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partida" (
    "id_partida" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "estado" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_juego" INTEGER NOT NULL,
    "id_nivel" INTEGER NOT NULL,
    CONSTRAINT "Partida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Partida_id_juego_fkey" FOREIGN KEY ("id_juego") REFERENCES "Juego" ("id_juego") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Partida_id_nivel_fkey" FOREIGN KEY ("id_nivel") REFERENCES "Nivel" ("id_nivel") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id_resultado" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "puntaje" INTEGER NOT NULL,
    "tiempo" INTEGER NOT NULL,
    "aciertos" INTEGER NOT NULL,
    "id_partida" INTEGER NOT NULL,
    CONSTRAINT "Resultado_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "Partida" ("id_partida") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Resultado_id_partida_key" ON "Resultado"("id_partida");
