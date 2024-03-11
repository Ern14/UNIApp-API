import { Router } from "express";

import { obtenerAsignaturas, insertarAsignatura, actualizarAsignatura, eliminarAsignatura } from "../../Controllers/Catalogo/Asignaturas.Controller";


const router = Router();

router.get('/asignaturas/obtenerAsignaturas', obtenerAsignaturas);

router.post('/asignaturas/insertarAsignatura', insertarAsignatura);

router.put('/asignaturas/actualizarAsignatura', actualizarAsignatura);

router.delete('/asignaturas/eliminarAsignatura', eliminarAsignatura);

export default router;