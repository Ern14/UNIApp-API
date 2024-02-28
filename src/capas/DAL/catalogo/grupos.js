import { getConnection, sql } from "../../../database/connection";

export const obtenerGruposDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarGrupos]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerGrupoxIdDAL = async (idGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdGrupo' ,sql.Int, idGrupo)
        .execute('[Catalogo].[FiltrarGrupoxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarGrupoDAL = async (modGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modGrupo.Nombre) 
        .input('Activo' ,sql.Bit, modGrupo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modGrupo.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modGrupo.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modGrupo.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modGrupo.UsuarioModificacion)
        .execute('[Catalogo].[InsertarGrupo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarGrupoDAL = async (modGrupo) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('idGrupo' ,sql.Int, modGrupo.idGrupo) 
        .input('Nombre' ,sql.VarChar, modGrupo.Nombre) 
        .input('Activo', sql.Bit, modGrupo.Activo)
        .input('FechaCreacion' ,sql.DateTime, modGrupo.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modGrupo.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modGrupo.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modGrupo.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarGrupo]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
