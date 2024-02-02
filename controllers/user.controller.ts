import { Request, Response } from "express";

const User = require("../models/user.model");   

const getAllUsers = async (req : Request, res : Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};