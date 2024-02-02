
//This line is for cannot redeclare block scoped variable error
export {};

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");


describe("GET /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});