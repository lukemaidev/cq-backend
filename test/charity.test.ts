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

describe("GET /api/v1/charity", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/charity");
    expect(res.status).toBe(200);
    expect(res.body.allCharities).toBeInstanceOf(Array)
  });
});

describe("POST /api/v1/charity", () => {
  it("should return 200 OK", async () => {
    const charity = {
      name: "Cool Charity",
    }
    const res = await request(app).post("/api/v1/charity").send(charity);
    expect(res.status).toBe(201);
    expect(res.body.charity).toHaveProperty("name", "Cool Charity");
    request(app).delete("/api/v1/charity").send({id: res.body.charity._id});
  });
});

describe("UPDATE /api/v1/charity", () => {
  it("should return 200 OK", async () => {
    const charity = {
      _id: "65be17e2882d4755add1ba28",
      name: "test",
      email: "updated@gmail.com"
    }
    const res = await request(app).patch("/api/v1/charity").send(charity);
    expect(res.status).toBe(200);
  });
});

describe("DELETE /api/v1/charity", () => {
  it("should return 200 OK", async () => {
    const charity = {
      name: "test",
      email: "something@gmail.com",
      password: "password123",
    }
    const createdCharity = await request(app).post("/api/v1/charity").send(charity);
    const res = await request(app).delete("/api/v1/charity").send({id: createdCharity.body.charity._id});
    expect(res.status).toBe(200);
  });
});
