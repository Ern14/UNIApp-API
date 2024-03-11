import { Router } from "express";

import { obtenerDocenteAsignatura, insertarDocenteAsignatura, actualizarDocenteAsignatura, eliminarDocenteAsignatura } from "../../controllers/operaciones/DocenteAsignatura.Controller";

const router = Router();

router.get('/operaciones/obtenerDocenteAsignatura', obtenerDocenteAsignatura);

router.post('/operaciones/insertarDocenteAsignatura', insertarDocenteAsignatura);

router.put('/operaciones/actualizarDocenteAsignatura', actualizarDocenteAsignatura);

router.delete('/operaciones/eliminarDocenteAsignatura', eliminarDocenteAsignatura);

export default router;