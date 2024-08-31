import { getConnection, sql } from "../../Database/Connection";

export const obtenerCarreraAsignaturaDAL = async (idCarrera) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarrera' ,sql.Int, idCarrera)
        .execute('[Operaciones].[FiltrarCarreraAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerCarreraAsignaturaxIdDAL = async (idDocenteAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarreraAsignatura' ,sql.Int, idDocenteAsignatura)
        .execute('[Operaciones].[FiltrarCarreraAsignaturaxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarCarreraAsignaturaDAL = async (modCarreraAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarrera' ,sql.Int, modCarreraAsignatura.idCarrera)
        .input('IdAsignatura' ,sql.Int, modCarreraAsignatura.idAsignatura) 
        .input('Activo' ,sql.Bit, modCarreraAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modCarreraAsignatura.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modCarreraAsignatura.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modCarreraAsignatura.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modCarreraAsignatura.UsuarioModificacion)
        .execute('[Operaciones].[InsertarCarreraAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarCarreraAsignaturaDAL = async (modCarreraAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarreraAsignatura' ,sql.Int, modCarreraAsignatura.idCarreraAsignatura) 
        .input('IdCarrera' ,sql.Int, modCarreraAsignatura.idCarrera)
        .input('IdAsignatura' ,sql.Int, modCarreraAsignatura.idAsignatura)
        .input('Activo', sql.Bit, modCarreraAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modCarreraAsignatura.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modCarreraAsignatura.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modCarreraAsignatura.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modCarreraAsignatura.UsuarioModificacion)
        .execute('[Operaciones].[ActualizarCarreraAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
