import { getConnection, sql } from "../../Database/Connection";

export const obtenerRolesDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Seguridad].[FiltrarRoles]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerRolxIdDAL = async (idRol) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdRol' ,sql.Int, idRol)
        .execute('[Seguridad].[FiltrarRolxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarRolesxBusquedaDAL = async (busqueda) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Busqueda', sql.VarChar, busqueda)
        .execute('[Seguridad].[FiltrarRolesxBusqueda]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarRolesDAL = async (modRoles) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modRoles.Nombre) 
        .input('Descripcion', sql.VarChar, modRoles.Descripcion)
        .input('Activo' ,sql.Bit, modRoles.Activo)
        .input('FechaCreacion' ,sql.DateTime, modRoles.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modRoles.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modRoles.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modRoles.UsuarioModificacion)
        .execute('[Seguridad].[InsertarRoles]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarRolesDAL = async (modRoles) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('idRol' ,sql.Int, modRoles.idRol) 
        .input('Nombre' ,sql.VarChar, modRoles.Nombre) 
        .input('Descripcion', sql.VarChar, modRoles.Descripcion)
        .input('Activo', sql.Bit, modRoles.Activo)
        .input('FechaCreacion' ,sql.DateTime, modRoles.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modRoles.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modRoles.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modRoles.UsuarioModificacion)
        .execute('[Seguridad].[ActualizarRol]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
