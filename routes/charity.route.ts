const { getAllCharities,createCharity, deleteCharity, updateCharity, getCharityById } = require("../controllers/charity.controller");

const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllCharities);
router.get("/:id", getCharityById);
router.post("/", createCharity);
router.patch("/",updateCharity );
router.delete("/", deleteCharity);


module.exports = router;

export {};