const { getAllCharities,createCharity, deleteCharity, updateCharity } = require("../controllers/charity.controller");

const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllCharities);
router.post("/", createCharity);
router.patch("/",updateCharity );
router.delete("/", deleteCharity);


module.exports = router;

export {};