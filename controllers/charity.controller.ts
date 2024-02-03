import { Request, Response } from "express";

const Charity = require("../models/charity.model");

const getAllCharities = async (req: Request, res: Response) => {
  try {
    const allCharities = await Charity.find({});
    res.status(200).json({ allCharities });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getCharityById = async (req: Request, res: Response) => {
  try {
    const charity = await Charity.findById(req.params.id);
    res.status(200).json({ charity });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

const createCharity = async (req: Request, res: Response) => {
  try {
    const charity = new Charity(req.body);
    await charity.save();
    res.status(201).json({ charity });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateCharity = async (req: Request, res: Response) => {
  try {
    const updatedCharity = await Charity.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json({ updatedCharity });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCharity = async (req: Request, res: Response) => {
  try {
    const deletedCharity = await Charity.findByIdAndDelete(req.body.id);
    res.status(200).json({ deletedCharity });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCharities = getAllCharities;
exports.getCharityById = getCharityById;
exports.createCharity = createCharity;
exports.updateCharity = updateCharity;
exports.deleteCharity = deleteCharity;
