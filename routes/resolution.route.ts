const { getAllResolutions, getResolutionById, createResolution, updateResolution, deleteResolution } = require("../controllers/resolution.controller");
const express = require("express")

const router = express.Router();

/* A bunch of routes here*/
router.get("/", getAllResolutions);
router.get("/:id", getResolutionById);
router.post("/", createResolution);
router.patch("/",updateResolution );
router.delete("/", deleteResolution);


module.exports = router;

export {};