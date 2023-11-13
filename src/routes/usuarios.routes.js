import { Router } from "express";
import { getUsuarios, postUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.get('/usuarios', getUsuarios);

router.post('/usuarios', postUsuarios);

router.get('/home',);

router.delete('/home',);

router.put('/home',);

export default router;