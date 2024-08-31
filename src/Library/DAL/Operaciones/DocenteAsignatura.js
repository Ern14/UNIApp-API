import { getConnection, sql } from "../../Database/Connection";

export const obtenerDocenteAsignaturaDAL = async (idAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdAsignatura' ,sql.Int, idAsignatura)
        .execute('[Operaciones].[FiltrarDocenteAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerDocenteAsignaturaxIdDAL = async (idDocenteAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteAsignatura' ,sql.Int, idDocenteAsignatura)
        .execute('[Operaciones].[FiltrarDocenteAsignaturaxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarDocenteAsignaturaDAL = async (modDocenteAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, modDocenteAsignatura.idDocente)
        .input('IdAsignatura' ,sql.Int, modDocenteAsignatura.idAsignatura) 
        .input('Activo' ,sql.Bit, modDocenteAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteAsignatura.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteAsignatura.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteAsignatura.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteAsignatura.UsuarioModificacion)
        .execute('[Operaciones].[InsertarDocenteAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarDocenteAsignaturaDAL = async (modDocenteAsignatura) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteAsignatura' ,sql.Int, modDocenteAsignatura.idDocenteAsignatura) 
        .input('IdDocente' ,sql.Int, modDocenteAsignatura.idDocente)
        .input('IdAsignatura' ,sql.Int, modDocenteAsignatura.idAsignatura)
        .input('Activo', sql.Bit, modDocenteAsignatura.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteAsignatura.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteAsignatura.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteAsignatura.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteAsignatura.UsuarioModificacion)
        .execute('[Operaciones].[ActualizarDocenteAsignatura]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
