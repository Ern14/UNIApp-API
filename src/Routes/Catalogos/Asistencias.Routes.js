import { Router } from "express";

import { obtenerAsistencias, insertarAsistencia, actualizarAsistencia, eliminarAsistencia } from "../../Controllers/Catalogo/Asistencias.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/asistencias/obtenerAsistencias/:idDepartamento/:idAsignatura', verificarToken, obtenerAsistencias);

router.post('/asistencias/insertarAsistencia', verificarToken, insertarAsistencia);

router.put('/asistencias/actualizarAsistencia', verificarToken, actualizarAsistencia);

router.delete('/asistencias/eliminarAsistencia', verificarToken, eliminarAsistencia);

export default router;