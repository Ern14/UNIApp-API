import { Router } from "express";

import { obtenerDepartamentos, insertarDepartamento, actualizarDepartamento, eliminarDepartamento } from "../../controllers/catalogo/departamentos.controller";

const router = Router();

router.get('/departamentos/obtenerDepartamentos', obtenerDepartamentos);

router.post('/departamentos/insertarDepartamento', insertarDepartamento);

router.put('/departamentos/actualizarDepartamento', actualizarDepartamento);

router.delete('/departamentos/eliminarDepartamento', eliminarDepartamento);


export default router;