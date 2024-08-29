import { getConnection, sql } from "../../Database/Connection";

export const obtenerDocenteDepartamentoDAL = async (idDocente) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, idDocente)
        .execute('[Operaciones].[FiltrarDocenteDepartamento]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerDocenteDepartamentoxIdDAL = async (idDocenteDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteDepartamento' ,sql.Int, idDocenteDepartamento)
        .execute('[Operaciones].[FiltrarDocenteDepartamentoxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarDocenteDepartamentoDAL = async (modDocenteDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, modDocenteDepartamento.idDocente)
        .input('IdDepartamento' ,sql.Int, modDocenteDepartamento.idDepartamento) 
        .input('Activo' ,sql.Bit, modDocenteDepartamento.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteDepartamento.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteDepartamento.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteDepartamento.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteDepartamento.UsuarioModificacion)
        .execute('[Operaciones].[InsertarDocenteDepartamento]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarDocenteDepartamentoDAL = async (modDocenteDepartamento) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocenteDepartamento' ,sql.Int, modDocenteDepartamento.idDocenteDepartamento) 
        .input('IdDocente' ,sql.Int, modDocenteDepartamento.idDocente)
        .input('IdDepartamento' ,sql.Int, modDocenteDepartamento.idDepartamento)
        .input('Activo', sql.Bit, modDocenteDepartamento.Activo)
        .input('FechaCreacion' ,sql.DateTime, modDocenteDepartamento.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modDocenteDepartamento.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modDocenteDepartamento.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modDocenteDepartamento.UsuarioModificacion)
        .execute('[Operaciones].[ActualizarDocenteDepartamento]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
