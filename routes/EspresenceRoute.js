import express from "express";
import { getAllEspresences,
         createEspresence } from "../controller/Espresences.js";
import {auth} from "../middleware/Auth.js";

const router = new express.Router();

router.get('/Espresences', auth, getAllEspresences);
router.post('/Espresences', auth, createEspresence);


export default router;