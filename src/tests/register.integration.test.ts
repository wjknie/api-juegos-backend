import request from "supertest";
import app from "../app";
import test, { describe } from "node:test";

describe("Register API", () => {

  test("Debe responder", async () => {

    const response = await request(app)
      .post("/api/register")
      .send({
        nombre: "Usuario Test",
        correo: "usuario@test.com",
        password: "123456"
      });

    expect(response.status).toBeDefined();

  });

});