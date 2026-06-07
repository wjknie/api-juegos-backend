import { describe, test, expect } from "@jest/globals";

describe("Autenticación", () => {

  test("Debe validar usuario", () => {

    const usuario = {
      correo: "admin@test.com",
      password: "123456"
    };

    expect(usuario.correo).toBe("admin@test.com");

  });

  test("Debe validar contraseña", () => {

    const password = "123456";

    expect(password.length).toBeGreaterThan(5);

  });

});