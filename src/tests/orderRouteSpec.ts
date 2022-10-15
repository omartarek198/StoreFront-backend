import supertest from "supertest";

import { app } from "../server";

const request = supertest(app);






  it("tests orders endpoint", async () => {
    const response = await request.get(
"/orders/:1/showcurrent");
    expect(response.status).toBe(401);
    console.log(response.status);
  });