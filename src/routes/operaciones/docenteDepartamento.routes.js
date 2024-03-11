import { Router } from "express";

import { obtenerDocenteDepartamento, insertarDocenteDepartamento, actualizarDocenteDepartamento, eliminarDocenteDepartamento } from "../../Controllers/operaciones/DocenteDepartamento.Controller";

const router = Router();

router.get('/operaciones/obtenerDocenteDepartamento', obtenerDocenteDepartamento);

router.post('/operaciones/insertarDocenteDepartamento', insertarDocenteDepartamento);

router.put('/operaciones/actualizarDocenteDepartamento', actualizarDocenteDepartamento);

router.delete('/operaciones/eliminarDocenteDepartamento', eliminarDocenteDepartamento);

export default router;