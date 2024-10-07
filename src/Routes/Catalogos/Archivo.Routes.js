import { Router } from "express";

const verificarToken = require('../../Authorization/AuthMiddleware'); 

import { obtenerManualUsuario } from "../../Controllers/Catalogo/Archivo.Controller";

const router = Router();

router.get('/archivos/obtenerManualUsuario', verificarToken, obtenerManualUsuario);


export default router;