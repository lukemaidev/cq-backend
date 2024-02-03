const { getAllUsers, createUser, updateUser, deleteUser, getUserByEmail, getUserById } = require("../controllers/user.controller");

const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllUsers);
router.post("/", createUser);
router.patch("/",updateUser );
router.delete("/", deleteUser);
router.get("/id/:id", getUserById);
router.get("/email/:email", getUserByEmail);

module.exports = router;

export {};