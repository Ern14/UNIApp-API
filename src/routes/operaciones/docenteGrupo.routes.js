import { Router } from "express";

import { obtenerDocenteGrupo, insertarDocenteGrupo, actualizarDocenteGrupo, eliminarDocenteGrupo } from "../../Controllers/operaciones/DocenteGrupo.Controller";

const router = Router();

router.get('/operaciones/obtenerDocenteGrupo', obtenerDocenteGrupo);

router.post('/operaciones/insertarDocenteGrupo', insertarDocenteGrupo);

router.put('/operaciones/actualizarDocenteGrupo', actualizarDocenteGrupo);

router.delete('/operaciones/eliminarDocenteGrupo', eliminarDocenteGrupo);


export default router;