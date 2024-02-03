//This line is for cannot redeclare block scoped variable error
export {};

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("GET /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/user");
    expect(res.status).toBe(200);
    expect(res.body.allUsers).toBeInstanceOf(Array)
  });
});

describe("POST /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const user = {
      name: "test",
      email: "something@gmail.com",
      password: "password123",
    }
    const res = await request(app).post("/api/v1/user").send(user);
    expect(res.status).toBe(201);
    console.log(res.body.user)
    expect(res.body.user).toHaveProperty("name", "test");
  });
});
/*
describe("UPDATE /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).update("/");
    expect(res.status).toBe(200);
  });
});

describe("DELETE /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).delete("/");
    expect(res.status).toBe(200);
  });
});*/
