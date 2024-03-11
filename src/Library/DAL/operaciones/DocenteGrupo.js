import { getConnection, sql } from "../../Database/Connection";

export const obtenerDocenteGrupoDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Operaciones].[FiltrarDocenteGrupo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerDocenteGrupoxIdDAL = async (idDocenteGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteGrupo' ,sql.Int, idDocenteGrupo)
        .execute('[Operaciones].[FiltrarDocenteGrupoxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarDocenteGrupoDAL = async (modDocenteGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, modDocenteGrupo.idDocente)
        .input('IdGrupo' ,sql.Int, modDocenteGrupo.idGrupo) 
        .input('Activo' ,sql.Bit, modDocenteGrupo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteGrupo.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteGrupo.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteGrupo.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteGrupo.UsuarioModificacion)
        .execute('[Operaciones].[InsertarDocenteGrupo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarDocenteGrupoDAL = async (modDocenteGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteGrupo' ,sql.Int, modDocenteGrupo.idDocenteGrupo) 
        .input('IdDocente' ,sql.Int, modDocenteGrupo.idDocente)
        .input('IdGrupo' ,sql.Int, modDocenteGrupo.idGrupo)
        .input('Activo', sql.Bit, modDocenteGrupo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteGrupo.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteGrupo.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteGrupo.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteGrupo.UsuarioModificacion)
        .execute('[Operaciones].[ActualizarDocenteGrupo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
