import supertest from "supertest";

import { app } from "../server";

const request = supertest(app);


describe("Testing products endpoints", () => {
  it("tests /", async () => {
    const response = await request.get("/products/");
    expect(response.status).toBe(200);
    console.log(response.status);
  });

  it("tests show", async () => {
    const response = await request.get("/products/show/?id=1");
    expect(response.status).toBe(200);
    console.log(response.status);
  });

  it("tests /Create invaid input", async () => {
    const response = await request.post("/products/insert");
    expect(response.status).toBe(401);
    console.log(response.status);
  });
    
    
      it("Creates Product with no token", async () => {
    const response = await request.post("/products/insert?name=p1&price=199&category=tech");
    expect(response.status).toBe(401);
    console.log(response.status);
      });
    
    
    it("Filters products", async () => {
    const response = await request.get("/products/filter?category=tech");
    expect(response.status).toBe(200);
    console.log(response.status);
  });
});

