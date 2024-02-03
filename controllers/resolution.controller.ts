import { Request, Response } from "express";

const Resolution = require("../models/resolution.model");

const getAllResolutions = async (req: Request, res: Response) => {
  try {
    const allResolutions = await Resolution.find({});
    res.status(200).json({ allResolutions });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getResolutionById = async (req: Request, res: Response) => {
  try {
    const resolution = await Resolution.findById(req.params.id);
    res.status(200).json({ resolution });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

const createResolution = async (req: Request, res: Response) => {
  try {
    const resolution = new Resolution(req.body);
    await resolution.save();
    res.status(201).json({ resolution });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateResolution = async (req: Request, res: Response) => {
  try {
    const updatedResolution = await Resolution.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json({ updatedResolution });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteResolution = async (req: Request, res: Response) => {
  try {
    const deletedResolution = await Resolution.findByIdAndDelete(req.body.id);
    res.status(200).json({ deletedResolution });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllResolutions = getAllResolutions;
exports.getResolutionById = getResolutionById;
exports.createResolution = createResolution;
exports.updateResolution = updateResolution;
exports.deleteResolution = deleteResolution;
