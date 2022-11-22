import Espresences from "../models/EspresenceModel.js";
import jwt_decode from "jwt-decode";
import Users from "../models/UsersModel.js";

export const getAllEspresences = async (req, res) => {
    try {
        const espresences = await Espresences.findAll({
            attributes: ['id_user', 'User.nama', 'waktu', 'is_approve'],
            include: [{model: Users, attributes: ['nama']}]
        });
        res.status(200).json({espresences});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createEspresence = async (req, res) => {
    const type = req.body.type;
    const waktu = req.body.waktu;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const id_user = jwt_decode(token);
    try {
        await Espresences.create({
            type : type,
            waktu : waktu,
            id_user: id_user
        });
        res.status(201).json({ massage: "Espresences Created Successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}