import { Router } from "express";

import { obtenerDocentes, insertarDocente, actualizarDocente, eliminarDocente } from "../../Controllers/Catalogo/Docentes.Controller";

const router = Router();

const verificarToken = require('../../Authorization/AuthMiddleware');

router.get('/docentes/obtenerDocentes', verificarToken, obtenerDocentes);

router.post('/docentes/insertarDocente', verificarToken, insertarDocente);

router.put('/docentes/actualizarDocente', verificarToken, actualizarDocente);

router.delete('/docentes/eliminarDocente', verificarToken, eliminarDocente);

export default router;