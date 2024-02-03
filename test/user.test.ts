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

describe("GET /api/v1/user/id/:id", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/user/id/65be17e2882d4755add1ba28");
    expect(res.status).toBe(200);
    expect(res.body.user).toHaveProperty("name", "test");
  });
});

describe("GET /api/v1/user/email/:email", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/user/email/something@gmail.com");
    expect(res.status).toBe(200);
    expect(res.body.user).toHaveProperty("name", "test");
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
    expect(res.body.user).toHaveProperty("name", "test");
    request(app).delete("/api/v1/user").send({id: res.body.user._id});
  });
});

describe("UPDATE /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const user = {
      _id: "65be17e2882d4755add1ba28",
      name: "test",
      email: "updated@gmail.com"
    }
    const res = await request(app).patch("/api/v1/user").send(user);
    expect(res.status).toBe(200);
  });
});

describe("DELETE /api/v1/user", () => {
  it("should return 200 OK", async () => {
    const user = {
      name: "test",
      email: "something@gmail.com",
      password: "password123",
    }
    const createdUser = await request(app).post("/api/v1/user").send(user);
    const res = await request(app).delete("/api/v1/user").send({id: createdUser.body.user._id});
    expect(res.status).toBe(200);
  });
});
