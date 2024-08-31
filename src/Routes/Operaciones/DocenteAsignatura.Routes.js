import { Router } from "express";

import { 
    obtenerDocenteAsignatura,
    filtrarDocenteAsignaturaxId, 
    insertarDocenteAsignatura, 
    actualizarDocenteAsignatura, 
    eliminarDocenteAsignatura 
} from "../../Controllers/Operaciones/DocenteAsignatura.Controller";
    
const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/operaciones/obtenerDocenteAsignatura/:idAsignatura', verificarToken, obtenerDocenteAsignatura);

router.get('/operaciones/filtrarDocenteAsignaturaxId/:idDocenteAsignatura', verificarToken, filtrarDocenteAsignaturaxId);

router.post('/operaciones/insertarDocenteAsignatura', verificarToken, insertarDocenteAsignatura);

router.put('/operaciones/actualizarDocenteAsignatura', verificarToken, actualizarDocenteAsignatura);

router.delete('/operaciones/eliminarDocenteAsignatura', verificarToken, eliminarDocenteAsignatura);

export default router;