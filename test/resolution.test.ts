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

describe("GET /api/v1/resolution", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/resolution");
    expect(res.status).toBe(200);
    expect(res.body.allResolutions).toBeInstanceOf(Array)
  });
});

describe("POST /api/v1/resolution", () => {
  it("should return 200 OK", async () => {
    const resolution = {
      title: "What the kekw is this?"
    }
    const res = await request(app).post("/api/v1/resolution").send(resolution);
    expect(res.status).toBe(201);
    expect(res.body.resolution).toHaveProperty("title", "What the kekw is this?");
    request(app).delete("/api/v1/resolution").send({id: res.body.resolution._id});
  });
});

describe("UPDATE /api/v1/resolution", () => {
  it("should return 200 OK", async () => {
    const resolution = {
      _id: "65a34e082ab16d604c391b39",
      title: "Cooler Resolution"
    }
    const res = await request(app).patch("/api/v1/resolution").send(resolution);
    expect(res.status).toBe(200);
  });
});

describe("DELETE /api/v1/resolution", () => {
  it("should return 200 OK", async () => {
    const resolution = {
      title: "Deleting this resolution"
    }
    const createdResolution = await request(app).post("/api/v1/resolution").send(resolution);
    const res = await request(app).delete("/api/v1/resolution").send({id: createdResolution.body.resolution._id});
    expect(res.status).toBe(200);
  });
});
