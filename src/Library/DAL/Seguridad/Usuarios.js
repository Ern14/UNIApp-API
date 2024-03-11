import { getConnection, sql } from "../../Database/Connection";

export const obtenerUsuariosDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Seguridad].[FiltrarUsuarios]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarUsuariosxCorreoDAL = async (Correo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Correo', sql.VarChar, Correo)
        .execute('[Seguridad].[FiltrarUsuariosxCorreo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarUsuariosxIdDAL = async (idUsuario) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdUsuario', sql.Int, idUsuario)
        .execute('[Seguridad].[FiltrarUsuariosxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const validarUsuarioxCorreoDAL = async (Correo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Correo', sql.VarChar, Correo)
        .execute('[Seguridad].[ValidarUsuarioxCorreo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarUsuariosDAL = async (modUsuarios) => {
    try {    
        const pool = await getConnection();
        const result = await pool.request()
        .input('FK_idRol' ,sql.Int, modUsuarios.FK_idRol) 
        .input('Correo', sql.VarChar, modUsuarios.Correo)
        .input('Contraseña' ,sql.VarChar, modUsuarios.Contraseña)
        .input('Activo' ,sql.Bit, modUsuarios.Activo)
        .input('FechaCreacion' ,sql.DateTime, modUsuarios.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modUsuarios.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modUsuarios.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modUsuarios.UsuarioModificacion)
        .execute('[Seguridad].[InsertarUsuarios]');

        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarUsuariosDAL = async (modUsuarios) => {
    try {    
        const pool = await getConnection();
        const result = await pool.request()
        .input('idUsuario' ,sql.Int, modUsuarios.idUsuario)
        .input('FK_idRol' ,sql.Int, modUsuarios.FK_idRol) 
        .input('Correo', sql.VarChar, modUsuarios.Correo)
        .input('Activo' ,sql.Bit, modUsuarios.Activo)
        .input('FechaCreacion' ,sql.DateTime, modUsuarios.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modUsuarios.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modUsuarios.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modUsuarios.UsuarioModificacion)
        .execute('[Seguridad].[ActualizarUsuarios]');

        return result.recordset;
    } catch (error) {
        throw error;
    }

};