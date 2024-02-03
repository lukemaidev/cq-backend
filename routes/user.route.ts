const { getAllUsers, createUser } = require("../controllers/user.controller");

const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllUsers);
router.post("/", createUser);


module.exports = router;