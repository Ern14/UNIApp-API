import { getConnection, sql } from "../../Database/Connection";

export const obtenerPeriodosDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarPeriodos]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerPeriodoxIdDAL = async (idPeriodo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdPeriodo' ,sql.Int, idPeriodo)
        .execute('[Catalogo].[FiltrarPeriodoxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarPeriodosxBusquedaDAL = async (busqueda) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Busqueda', sql.VarChar, busqueda)
        .execute('[Catalogo].[FiltrarPeriodosxBusqueda]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarPeriodoDAL = async (modPeriodo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modPeriodo.Nombre) 
        .input('Activo' ,sql.Bit, modPeriodo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modPeriodo.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modPeriodo.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modPeriodo.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modPeriodo.UsuarioModificacion)
        .execute('[Catalogo].[InsertarPeriodo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarPeriodoDAL = async (modPeriodo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdPeriodo' ,sql.Int, modPeriodo.idPeriodo)
        .input('Nombre' ,sql.VarChar, modPeriodo.Nombre)
        .input('Activo', sql.Bit, modPeriodo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modPeriodo.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modPeriodo.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modPeriodo.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modPeriodo.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarPeriodo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
