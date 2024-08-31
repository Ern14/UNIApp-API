import { Router } from "express";

import { 
    obtenerCarreraAsignatura,
    filtrarCarreraAsignaturaxId, 
    insertarCarreraAsignatura, 
    actualizarCarreraAsignatura, 
    eliminarCarreraAsignatura 
} from "../../Controllers/Operaciones/CarreraAsignatura.Controller";
    
const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/operaciones/obtenerCarreraAsignatura/:idCarrera', verificarToken, obtenerCarreraAsignatura);

router.post('/operaciones/insertarCarreraAsignatura', verificarToken, insertarCarreraAsignatura);

router.get('/operaciones/filtrarCarreraAsignaturaxId/:idCarreraAsignatura', verificarToken, filtrarCarreraAsignaturaxId);

router.put('/operaciones/actualizarCarreraAsignatura', verificarToken, actualizarCarreraAsignatura);

router.delete('/operaciones/eliminarCarreraAsignatura', verificarToken, eliminarCarreraAsignatura);

export default router;