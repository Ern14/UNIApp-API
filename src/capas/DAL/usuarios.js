import { getConnection, sql } from "../../database/connection";

export const obtenerUsuariosDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Seguridad].[FiltrarUsuarios]');
        return result.recordset;
    } catch (error) {
        throw error;
    }

};

export const insertarUsuariosDAL = async (modUsuarios) => {
    try {    
        const pool = await getConnection();
        const result = await pool.request()
        .input('FK_idRol' ,sql.Int, modUsuarios.FK_idRol) 
        .input('Correo', sql.VarChar, modUsuarios.Correo)
        .input('Contraseña' ,sql.VarChar, modUsuarios.Contraseña)
        .input('Activo' ,sql.Bit, modUsuarios.Activo)
        .input('FechaCreacion' ,sql.DateTime, modUsuarios.FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, modUsuarios.UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, modUsuarios.FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, modUsuarios.UsuarioModificacion)
        .execute('[Seguridad].[InsertarUsuarios]');

        return result.recordset;
    } catch (error) {
        throw error;
    }

};