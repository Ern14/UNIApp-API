import { getConnection, sql } from "../../Database/Connection";

export const obtenerCarrerasDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Catalogo].[FiltrarCarreras]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const filtrarCarrerasxBusquedaDAL = async (busqueda) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('Busqueda', sql.VarChar, busqueda)
        .execute('[Catalogo].[FiltrarCarrerasxBusqueda]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const obtenerCarreraxIdDAL = async (idCarrera) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarrera' ,sql.Int, idCarrera)
        .execute('[Catalogo].[FiltrarCarrerasxId]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarCarreraDAL = async (modCarrera) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdDepartamento' ,sql.Int, modCarrera.idDepartamento)
        .input('Abreviatura' ,sql.VarChar, modCarrera.Abreviatura)
        .input('Nombre' ,sql.VarChar, modCarrera.Nombre)
        .input('Descripcion' ,sql.VarChar, modCarrera.Descripcion) 
        .input('Activo' ,sql.Bit, modCarrera.Activo)
        .input('FechaCreacion' ,sql.DateTime, modCarrera.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modCarrera.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modCarrera.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modCarrera.UsuarioModificacion)
        .execute('[Catalogo].[InsertarCarrera]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const actualizarCarreraDAL = async (modCarrera) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdCarrera' ,sql.Int, modCarrera.idCarrera) 
        .input('IdDepartamento' ,sql.Int, modCarrera.idDepartamento)
        .input('Abreviatura' ,sql.VarChar, modCarrera.Abreviatura)
        .input('Nombre' ,sql.VarChar, modCarrera.Nombre)
        .input('Descripcion' ,sql.VarChar, modCarrera.Descripcion)
        .input('Activo', sql.Bit, modCarrera.Activo)
        .input('FechaCreacion' ,sql.DateTime, modCarrera.FechaCreacion)
        .input('FechaModificacion' ,sql.DateTime, modCarrera.FechaModificacion)
        .input('UsuarioCreacion' ,sql.Int, modCarrera.UsuarioCreacion)
        .input('UsuarioModificacion' ,sql.Int, modCarrera.UsuarioModificacion)
        .execute('[Catalogo].[ActualizarCarrera]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};
