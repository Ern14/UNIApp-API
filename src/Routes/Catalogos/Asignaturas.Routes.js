import { Router } from "express";

import { obtenerAsignaturas, insertarAsignatura, actualizarAsignatura, eliminarAsignatura } from "../../Controllers/Catalogo/Asignaturas.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware'); 

const router = Router();

router.get('/asignaturas/obtenerAsignaturas', verificarToken, obtenerAsignaturas);

router.post('/asignaturas/insertarAsignatura', verificarToken, insertarAsignatura);

router.put('/asignaturas/actualizarAsignatura', verificarToken, actualizarAsignatura);

router.delete('/asignaturas/eliminarAsignatura', verificarToken, eliminarAsignatura);

export default router;