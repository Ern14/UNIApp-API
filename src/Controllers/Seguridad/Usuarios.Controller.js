import bcryptjs from 'bcryptjs';
import { 
    obtenerUsuariosBLL, 
    insertarUsuariosBLL, 
    filtrarUsuariosxCorreoBLL,
    filtrarUsuariosxBusquedaBLL,
    actualizarUsuariosBLL, 
    filtrarUsuariosxIdBLL 
} from '../../Library/BLL/Seguridad/Usuarios';
import { Usuarios } from "../../Library/Models/Seguridad/Usuarios";

const jwt = require('jsonwebtoken');

const encryptPassword = async (password) => {
    const saltRounds = 8;
    const salt = await bcryptjs.genSalt(saltRounds);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
};

export const obtenerUsuarios = async ( req, res ) => {
    try {
        const data = await obtenerUsuariosBLL();
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarUsuariosxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarUsuariosxBusquedaBLL(busqueda);

        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarUsuariosxId = async ( req, res ) => {
    try {
        const IdUsuario = req.params.idUsuario;
        const data = await filtrarUsuariosxIdBLL(IdUsuario);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarUsuariosxCorreo = async ( req, res ) => {
    try {
        const Correo = req.params.Correo;
        const data = await filtrarUsuariosxCorreoBLL(Correo);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarUsuarios = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const userData = req.body;
        const modUsuarios = new Usuarios(userData);
        if (modUsuarios.Correo == null || modUsuarios.Contraseña == null || modUsuarios.FK_idRol == null ) {
            const response = {
                status: 'Error',
                statusCode: 400,
                datos: {
                    mensaje: "Información incompleta"
                }
            };
            res.status(response.statusCode).send(response);
            return;
        };

        if (modUsuarios.Correo.length < 5 ) {
            const response = {
                status: 'Error',
                statusCode: 400,
                datos: {
                    mensaje: "El usuario debe tener almenos 5 caracteres"
                }
            };
            res.status(response.statusCode).send(response);
            return;
        };

        if (modUsuarios.Contraseña.length < 6 || !/[A-Z]/.test(modUsuarios.Contraseña) || !/[\W_]/.test(modUsuarios.Contraseña)) {
            const response = {
                status: 'Error',
                statusCode: 400,
                datos: {
                    mensaje: "La contraseña debe tener almenos 6 carateres, una mayúscula y un caracter especial."
                }
            };
            res.status(response.statusCode).send(response);
            return;
        };

        const hashedPassword = await encryptPassword(modUsuarios.Contraseña);
        modUsuarios.Contraseña = hashedPassword;

        const fechaHoraActual = new Date();
        modUsuarios.Activo = 1;
        modUsuarios.FechaCreacion = fechaHoraActual;
        modUsuarios.FechaModificacion = fechaHoraActual;
        modUsuarios.UsuarioCreacion = usuarioLog.idUsuario;
        modUsuarios.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarUsuariosBLL(modUsuarios);

        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Usuario creado con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }   
};

export const actualizarUsuarios = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const idUsuario = req.body.IdUsuario;
        const nuevoCorreo = req.body.Correo;
        const nuevoRol = req.body.FK_idRol;

        if (nuevoRol == null) {
            throw new Error("Bad request: incomplete information");
        };

        const usuarioFiltrado = await filtrarUsuariosxIdBLL(idUsuario);
        const modUsuarios = new Usuarios(usuarioFiltrado[0]);
        const fechaHoraActual = new Date();

        modUsuarios.Correo = nuevoCorreo;
        modUsuarios.FK_idRol = nuevoRol;
        modUsuarios.FechaModificacion = fechaHoraActual;
        modUsuarios.UsuarioModificacion = usuarioLog.idUsuario;

        await actualizarUsuariosBLL(modUsuarios);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Usuario actualizado con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }   
};

export const cambiarContraseña = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const idUsuario = req.body.idUsuario;
        const nuevaContraseña = req.body.Contraseña;

        if (nuevaContraseña == null) {
            throw new Error("Bad request: incomplete information");
        };

        const usuarioFiltrado = await filtrarUsuariosxIdBLL(idUsuario);
        const modUsuarios = new Usuarios(usuarioFiltrado[0]);
        const fechaHoraActual = new Date();

        const hashedPassword = await encryptPassword(nuevaContraseña);
        modUsuarios.Contraseña = hashedPassword;

        modUsuarios.FechaModificacion = fechaHoraActual;
        modUsuarios.UsuarioModificacion = usuarioLog.idUsuario;

        await actualizarUsuariosBLL(modUsuarios);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Contraseña cambiada con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }   
};

export const eliminarUsuarios = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;
        
        const idUsuario = req.body.IdUsuario;
        const usuarioFiltrado = await filtrarUsuariosxIdBLL(idUsuario);
        const modUsuarios = new Usuarios(usuarioFiltrado[0]);
        const fechaHoraActual = new Date();

        modUsuarios.Activo = 0;
        modUsuarios.FechaModificacion = fechaHoraActual;
        modUsuarios.UsuarioModificacion = usuarioLog.idUsuario;

        await actualizarUsuariosBLL(modUsuarios);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Usuario eliminado con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }   
};