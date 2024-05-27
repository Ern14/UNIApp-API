import { Router } from "express";
import { 
    obtenerUsuarios, 
    insertarUsuarios,
    filtrarUsuariosxBusqueda, 
    filtrarUsuariosxId,
    filtrarUsuariosxCorreo, 
    eliminarUsuarios, 
    actualizarUsuarios,
    cambiarContraseña 
} from "../../Controllers/Seguridad/Usuarios.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/obtenerUsuarios', verificarToken, obtenerUsuarios);

router.post('/filtrarUsuariosxBusqueda', verificarToken, filtrarUsuariosxBusqueda);

router.post('/insertarUsuarios', verificarToken, insertarUsuarios);

router.get('/filtrarUsuarios/:idUsuario', verificarToken, filtrarUsuariosxId);

router.get('/filtrarUsuarios/:Correo', verificarToken, filtrarUsuariosxCorreo);

router.put('/actualizarUsuarios', verificarToken, actualizarUsuarios);

router.put('/cambiarContrasena', verificarToken, cambiarContraseña);

router.delete('/eliminarUsuarios', verificarToken, eliminarUsuarios);

export default router;