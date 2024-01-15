import { Router } from "express";
import { obtenerUsuarios, insertarUsuarios, filtrarUsuariosxCorreo, validarUsuarioxCorreo } from "../controllers/usuarios.controller";

const router = Router();

router.get('/obtenerUsuarios', obtenerUsuarios);

router.post('/insertarUsuarios', insertarUsuarios);

router.get('/filtrarUsuarios/:Correo', filtrarUsuariosxCorreo);

router.post('/validarUsuario', validarUsuarioxCorreo);

router.put('/actualizarUsuarios',);

router.delete('/home',);

export default router;