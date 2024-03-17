import { Router } from "express";

import { 
    obtenerDocenteAsignatura, 
    insertarDocenteAsignatura, 
    actualizarDocenteAsignatura, 
    eliminarDocenteAsignatura 
} from "../../Controllers/Operaciones/DocenteAsignatura.Controller";
    
const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/operaciones/obtenerDocenteAsignatura', verificarToken, obtenerDocenteAsignatura);

router.post('/operaciones/insertarDocenteAsignatura', verificarToken, insertarDocenteAsignatura);

router.put('/operaciones/actualizarDocenteAsignatura', verificarToken, actualizarDocenteAsignatura);

router.delete('/operaciones/eliminarDocenteAsignatura', verificarToken, eliminarDocenteAsignatura);

export default router;