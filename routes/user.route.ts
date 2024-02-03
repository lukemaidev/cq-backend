const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");

const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllUsers);
router.post("/", createUser);
router.patch("/",updateUser );
router.delete("/", deleteUser);


module.exports = router;

export {};