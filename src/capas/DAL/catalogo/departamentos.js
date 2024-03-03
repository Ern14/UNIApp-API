import { getConnection, sql } from "../../../database/connection";

export const obtenerDepartamentosDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarDepartamentos]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerDepartamentoxIdDAL = async (idDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDepartamento' ,sql.Int, idDepartamento)
        .execute('[Catalogo].[FiltrarDepartamentoxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarDepartamentoDAL = async (modDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre' ,sql.VarChar, modDepartamento.Nombre) 
        .input('Activo' ,sql.Bit, modDepartamento.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDepartamento.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modDepartamento.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDepartamento.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modDepartamento.UsuarioModificacion)
        .execute('[Catalogo].[InsertarDepartamento]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarDepartamentoDAL = async (modDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDepartamento' ,sql.Int, modDepartamento.idDepartamento) 
        .input('Nombre' ,sql.VarChar, modDepartamento.Nombre)
        .input('Activo', sql.Bit, modDepartamento.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDepartamento.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDepartamento.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modDepartamento.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modDepartamento.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarDepartamento]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
