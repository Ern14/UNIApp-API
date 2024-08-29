import { Router } from "express";

import { 
    obtenerDocenteDepartamento,
    filtrarDocenteDepartamentoxId, 
    insertarDocenteDepartamento, 
    actualizarDocenteDepartamento, 
    eliminarDocenteDepartamento 
} from "../../Controllers/Operaciones/DocenteDepartamento.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/operaciones/obtenerDocenteDepartamento/:idDocente', verificarToken, obtenerDocenteDepartamento);

router.post('/operaciones/insertarDocenteDepartamento', verificarToken, insertarDocenteDepartamento);

router.get('/operaciones/filtrarDocenteDepartamentoxId/:idDocenteDepartamento', verificarToken, filtrarDocenteDepartamentoxId);

router.put('/operaciones/actualizarDocenteDepartamento', verificarToken, actualizarDocenteDepartamento);

router.delete('/operaciones/eliminarDocenteDepartamento', verificarToken, eliminarDocenteDepartamento);

export default router;