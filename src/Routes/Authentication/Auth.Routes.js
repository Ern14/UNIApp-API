import { Router } from "express";

import { validarUsuario, cerrarSesion, verificarToken } from "../../Controllers/Authentication/Auth.Controller";

const router = Router();

router.post('/auth/login', validarUsuario);

router.post('/auth/logout', cerrarSesion);

router.get('/auth/verificarToken', verificarToken);

export default router;