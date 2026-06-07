import { describe, test, expect } from "@jest/globals";

describe("Ranking", () => {

  test("Debe ordenar puntajes", () => {

    const ranking = [
      { nombre: "Juan", puntaje: 100 },
      { nombre: "Pedro", puntaje: 300 },
      { nombre: "Ana", puntaje: 200 }
    ];

    ranking.sort((a, b) => b.puntaje - a.puntaje);

    expect(ranking[0].puntaje).toBe(300);

  });

});