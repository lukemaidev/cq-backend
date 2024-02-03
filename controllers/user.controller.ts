import { Request, Response } from "express";

const User = require("../models/user.model");   

const getAllUsers = async (req : Request, res : Response) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({allUsers})
        
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        
    }
};

const createUser = async (req : Request, res : Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ user });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;