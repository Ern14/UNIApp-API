import { Router } from "express";

import { obtenerPeriodos, insertarPeriodo, actualizarPeriodo, eliminarPeriodo } from "../../Controllers/Catalogo/Periodos.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/periodos/obtenerPeriodos', verificarToken, obtenerPeriodos);

router.post('/periodos/insertarPeriodo', verificarToken, insertarPeriodo);

router.put('/periodos/actualizarPeriodo', verificarToken, actualizarPeriodo);

router.delete('/periodos/eliminarPeriodo', verificarToken, eliminarPeriodo);

export default router;