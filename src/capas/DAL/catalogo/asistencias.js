import { getConnection, sql } from "../../../database/connection";

export const obtenerAsistenciasDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarAsistencias]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerAsistenciaxIdDAL = async (idAsistencia) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdAsistencia' ,sql.Int, idAsistencia)
        .execute('[Catalogo].[FiltrarAsistenciaxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarAsistenciaDAL = async (modAsistencia) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDocente' ,sql.Int, modAsistencia.idDocente)
        .input('Asistencia' ,sql.Bit, modAsistencia.Asistencia)
        .input('Fecha' ,sql.Date, modAsistencia.Fecha)
        .input('Observaciones' ,sql.VarChar, modAsistencia.Observaciones) 
        .input('Activo' ,sql.Bit, modAsistencia.Activo)
        .execute('[Catalogo].[InsertarAsistencia]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarAsistenciaDAL = async (modAsistencia) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdAsistencia' ,sql.Int, modAsistencia.idAsistencia) 
        .input('IdDocente' ,sql.Int, modAsistencia.idDocente)
        .input('Asistencia' ,sql.Bit, modAsistencia.Asistencia)
        .input('Fecha' ,sql.Date, modAsistencia.Fecha)
        .input('Observaciones' ,sql.VarChar, modAsistencia.Observaciones) 
        .input('Activo' ,sql.Bit, modAsistencia.Activo)
        .execute('[Catalogo].[ActualizarAsistencia]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
