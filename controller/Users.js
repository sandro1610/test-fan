import Users from "../models/UsersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json({users});
    } catch (error) {
        
    }
}

export const createUser = async (req, res) => {
    const nama = req.body.nama;
    const password = req.body.password;
    const email = req.body.email;
    const npp = req.body.npp;
    const npp_supervisor = req.body.npp_supervisor;
    try {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        await Users.create({
            nama : nama,
            email : email,
            npp : npp,
            npp_supervisor : npp_supervisor,
            password : hashPassword,
        });
        res.status(201).json({ massage: "User Created Successfuly" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const login = async(req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    try {
        const user = await Users.findOne({
            where: {email: email}
        })
        if (!user) res.status(404).json({ message:"User Not Found" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) res.status(403).json({ message:"Wrong Password" });
        const userId = user.id;
        const token = jwt.sign(userId, "1234567890qwerty")
        res.status(200).json({userId, token})
    } catch (error) {
        res.status(400).json({massage: error.message})
    }
}