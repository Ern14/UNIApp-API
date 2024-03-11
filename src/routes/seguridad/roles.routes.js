import { Router } from "express";
import { obtenerRoles, insertarRoles, actualizarRoles, eliminarRoles } from "../../Controllers/roles.controller";

const router = Router();

router.get('/roles/obtenerRoles', obtenerRoles);

router.post('/roles/insertarRoles', insertarRoles);

router.put('/roles/actualizarRoles', actualizarRoles);

router.delete('/roles/eliminarRoles', eliminarRoles);

export default router;