import { getConnection, sql } from "../../Database/Connection";

export const obtenerAsignaturasDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarAsignaturas]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerAsignaturaxIdDAL = async (idAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdAsignatura' ,sql.Int, idAsignatura)
        .execute('[Catalogo].[FiltrarAsignaturaxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarAsignaturasxBusquedaDAL = async (busqueda) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Busqueda', sql.VarChar, busqueda)
        .execute('[Catalogo].[FiltrarAsignaturasxBusqueda]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarAsignaturaDAL = async (modAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modAsignatura.Nombre) 
        .input('Descripcion' ,sql.VarChar, modAsignatura.Descripcion)
        .input('Activo' ,sql.Bit, modAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modAsignatura.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modAsignatura.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modAsignatura.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modAsignatura.UsuarioModificacion)
        .execute('[Catalogo].[InsertarAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarAsignaturaDAL = async (modAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdAsignatura' ,sql.Int, modAsignatura.idAsignatura) 
        .input('Nombre' ,sql.VarChar, modAsignatura.Nombre)
        .input('Descripcion' ,sql.VarChar, modAsignatura.Descripcion)
        .input('Activo', sql.Bit, modAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modAsignatura.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modAsignatura.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modAsignatura.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modAsignatura.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
