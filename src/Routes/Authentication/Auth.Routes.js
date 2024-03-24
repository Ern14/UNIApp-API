import { Router } from "express";

import { validarUsuario, cerrarSesion } from "../../Controllers/Authentication/Auth.Controller";

const router = Router();

router.post('/auth/login', validarUsuario);

router.post('/auth/logout', cerrarSesion);

export default router;