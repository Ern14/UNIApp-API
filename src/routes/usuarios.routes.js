import { Router } from "express";
import { obtenerUsuarios, insertarUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.get('/obtenerUsuarios', obtenerUsuarios);

router.post('/insertarUsuarios', insertarUsuarios);

router.put('/actualizarUsuarios',);

router.delete('/home',);

export default router;