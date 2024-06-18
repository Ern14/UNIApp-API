import { getConnection, sql } from "../../Database/Connection";

export const obtenerDocentesDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarDocentes]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerDocentexIdDAL = async (idDocente) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, idDocente)
        .execute('[Catalogo].[FiltrarDocentexId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarDocentesxBusquedaDAL = async (busqueda) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Busqueda', sql.VarChar, busqueda)
        .execute('[Catalogo].[FiltrarDocentesxBusqueda]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarDocenteDAL = async (modDocente) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modDocente.Nombre) 
        .input('Apellido', sql.VarChar, modDocente.Apellido)
        .input('Activo' ,sql.Bit, modDocente.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocente.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modDocente.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocente.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modDocente.UsuarioModificacion)
        .execute('[Catalogo].[InsertarDocente]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarDocenteDAL = async (modDocente) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, modDocente.idDocente) 
        .input('Nombre' ,sql.VarChar, modDocente.Nombre) 
        .input('Apellido', sql.VarChar, modDocente.Apellido)
        .input('Activo', sql.Bit, modDocente.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocente.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocente.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modDocente.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modDocente.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarDocente]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
