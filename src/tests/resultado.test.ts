import { describe, test, expect } from "@jest/globals";

describe("Resultados", () => {

  test("Debe calcular puntaje", () => {

    const puntaje = 50 + 50;

    expect(puntaje).toBe(100);

  });

});