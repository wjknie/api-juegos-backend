import request from "supertest";
import app from "../app";
import test, { describe } from "node:test";

describe("Ranking API", () => {

  test("Debe obtener ranking", async () => {

    const response = await request(app)
      .get("/api/ranking");

    expect(response.status).toBe(200);

  });

});