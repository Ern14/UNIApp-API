import { Router } from "express";

import { obtenerDepartamentos, insertarDepartamento, actualizarDepartamento, eliminarDepartamento } from "../../Controllers/Catalogo/Departamentos.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/departamentos/obtenerDepartamentos', verificarToken, obtenerDepartamentos);

router.post('/departamentos/insertarDepartamento', verificarToken, insertarDepartamento);

router.put('/departamentos/actualizarDepartamento', verificarToken, actualizarDepartamento);

router.delete('/departamentos/eliminarDepartamento', verificarToken, eliminarDepartamento);


export default router;