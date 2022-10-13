import supertest from "supertest";

import { app } from "../server";

const request = supertest(app);

describe("Test user endpoint autentication", () => {
  it("tests /", async () => {
    const response = await request.get("/users/");
    expect(response.status).toBe(401);
    console.log(response.status);
  });

  it("tests /", async () => {
    const response = await request.get("/users/show");
    expect(response.status).toBe(401);
    console.log(response.status);
  });

  it("tests /insert invaid input", async () => {
    const response = await request.post("/users/insert");
    expect(response.status).toBe(400);
    console.log(response.status);
  });
});
