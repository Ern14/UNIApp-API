import { Router } from "express";

import { obtenerDocenteGrupo, insertarDocenteGrupo, actualizarDocenteGrupo, eliminarDocenteGrupo } from "../../Controllers/Operaciones/DocenteGrupo.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/operaciones/obtenerDocenteGrupo', verificarToken, obtenerDocenteGrupo);

router.post('/operaciones/insertarDocenteGrupo', verificarToken, insertarDocenteGrupo);

router.put('/operaciones/actualizarDocenteGrupo', verificarToken, actualizarDocenteGrupo);

router.delete('/operaciones/eliminarDocenteGrupo', verificarToken, eliminarDocenteGrupo);


export default router;