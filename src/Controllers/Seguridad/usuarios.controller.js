import { obtenerUsuariosBLL, insertarUsuariosBLL, filtrarUsuariosxCorreoBLL, validarUsuarioxCorreoBLL, actualizarUsuariosBLL, filtrarUsuariosxIdBLL } from '../../Library/BLL/Seguridad/usuarios';
import { Usuarios } from "../../Library/Models/Seguridad/Usuarios";

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

export const validarUsuarioxCorreo = async ( req, res ) => {
    try {
        const Correo = req.body.Correo;
        const Contraseña = req.body.Contraseña;
        const data = await validarUsuarioxCorreoBLL(Correo, Contraseña);
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
        const userData = req.body;
        const modUsuarios = new Usuarios(userData);
        const data = await insertarUsuariosBLL(modUsuarios);
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

export const actualizarUsuarios = async ( req, res ) => {
    try {
        const idUsuario = req.body.idUsuario;
        const usuarioFiltrado = await filtrarUsuariosxIdBLL(idUsuario);
        const modUsuarios = new Usuarios(usuarioFiltrado[0]);
        const data = await actualizarUsuariosBLL(modUsuarios);
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