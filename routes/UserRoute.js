import express from "express";
import { getAllUsers,
         createUser,
        login } from "../controller/Users.js";

const router = new express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.post('/login', login);


export default router;