import { obtenerUsuariosDAL, insertarUsuariosDAL, filtrarUsuariosxCorreoDAL, validarUsuarioxCorreoDAL, actualizarUsuariosDAL, filtrarUsuariosxIdDAL } from "../../DAL/Seguridad/Usuarios";


export const obtenerUsuariosBLL = async () => {
    try {
        const usuarios = await obtenerUsuariosDAL();
        return usuarios;
    } catch (error) {
        throw error;
    }
};

export const filtrarUsuariosxCorreoBLL = async (Correo) => {
    try {
        const usuarios = await filtrarUsuariosxCorreoDAL(Correo);
        return usuarios;
    } catch (error) {
        throw error;
    }
};

export const filtrarUsuariosxIdBLL = async (idUsuario) => {
    try {
        const usuario = await filtrarUsuariosxIdDAL(idUsuario);
        return usuario;
    } catch (error) {
        throw error;
    }
};

export const validarUsuarioxCorreoBLL = async (Correo) => {
    try {
        const usuario = await validarUsuarioxCorreoDAL(Correo);
        return usuario;
    } catch (error) {
        throw error;
    }
};


export const insertarUsuariosBLL = async (modUsuarios) => {
    try {
        const result = await insertarUsuariosDAL(modUsuarios);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarUsuariosBLL = async (modUsuarios) => {
    try {
        const result = await actualizarUsuariosDAL(modUsuarios);
        return result;
    } catch (error) {
        throw error;
    }
};