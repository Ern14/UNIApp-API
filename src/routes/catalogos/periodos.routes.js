import { Router } from "express";

import { obtenerPeriodos, insertarPeriodo, actualizarPeriodo, eliminarPeriodo } from "../../controllers/catalogo/periodos.controller";

const router = Router();

router.get('/periodos/obtenerPeriodos', obtenerPeriodos);

router.post('/periodos/insertarPeriodo', insertarPeriodo);

router.put('/periodos/actualizarPeriodo', actualizarPeriodo);

router.delete('/periodos/eliminarPeriodo', eliminarPeriodo);

export default router;