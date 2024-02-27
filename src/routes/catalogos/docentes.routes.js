import { Router } from "express";

import { obtenerDocentes, insertarDocente, actualizarDocente, eliminarDocente } from "../../controllers/catalogo/docentes.controller";

const router = Router();

router.get('/docentes/obtenerDocentes', obtenerDocentes);

router.post('/docentes/insertarDocente', insertarDocente);

router.put('/docentes/actualizarDocente', actualizarDocente);

router.delete('/docentes/eliminarDocente', eliminarDocente);

export default router;