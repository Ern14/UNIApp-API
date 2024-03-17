import { Router } from "express";
import { obtenerRoles, insertarRoles, actualizarRoles, eliminarRoles } from "../../Controllers/Seguridad/Roles.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware'); 

const router = Router();

router.get('/roles/obtenerRoles',verificarToken,obtenerRoles);

router.post('/roles/insertarRoles',verificarToken,insertarRoles);

router.put('/roles/actualizarRoles',verificarToken,actualizarRoles);

router.delete('/roles/eliminarRoles',verificarToken,eliminarRoles);

export default router;