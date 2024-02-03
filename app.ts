import { Response, Request } from "express";

const express = require("express");

const UserRoutes = require("./routes/user.route");
const CharityRoutes = require("./routes/charity.route");
const ResolutionRoutes = require("./routes/resolution.route");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the ProductRoutes file. */
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/charity", CharityRoutes);
app.use("/api/v1/resolution", ResolutionRoutes);
module.exports = app; 