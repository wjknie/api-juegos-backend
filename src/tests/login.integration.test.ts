import request from "supertest";
import app from "../app";
import test, { describe } from "node:test";

describe("Login API", () => {

  test("Debe responder", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        correo: "test@test.com",
        password: "123456"
      });

    expect(response.status).toBeDefined();

  });

});