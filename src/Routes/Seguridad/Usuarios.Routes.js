import { Router } from "express";
import { 
    obtenerUsuarios, 
    insertarUsuarios, 
    filtrarUsuariosxCorreo, 
    validarUsuarioxCorreo, 
    eliminarUsuarios, 
    actualizarUsuarios,
    cambiarContraseña 
} from "../../Controllers/Seguridad/Usuarios.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/obtenerUsuarios', verificarToken, obtenerUsuarios);

router.post('/insertarUsuarios', verificarToken, insertarUsuarios);

router.get('/filtrarUsuarios/:Correo', verificarToken, filtrarUsuariosxCorreo);

router.post('/validarUsuario', validarUsuarioxCorreo);

router.put('/actualizarUsuarios', verificarToken, actualizarUsuarios);

router.put('/cambiarContrasena', verificarToken, cambiarContraseña);

router.delete('/eliminarUsuarios', verificarToken, eliminarUsuarios);

export default router;