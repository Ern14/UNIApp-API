import { getConnection, sql } from "../../database/connection";

export const obtenerUsuariosDAL = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Seguridad].[FiltrarUsuarios]');
        return result.recordset;
    } catch (error) {
        return res.status(400).json({ msg: "Bad request: ", error: error.message });
    }

};

export const insertarUsuariosDAL = async (userData) => {
    try {
        const {
            FK_idRol,
            Correo,
            Contraseña,
            Activo,
            FechaCreacion,
            UsuarioCreacion,
            FechaModificacion,
            UsuarioModificacion
        } = userData;
    
    
        const pool = await getConnection();
        const result = await pool.request()
        .input('FK_idRol' ,sql.Int, FK_idRol) 
        .input('Correo', sql.VarChar, Correo)
        .input('Contraseña' ,sql.VarChar, Contraseña)
        .input('Activo' ,sql.Bit, Activo)
        .input('FechaCreacion' ,sql.DateTime, FechaCreacion)
        .input('UsuarioCreacion' ,sql.Int, UsuarioCreacion)
        .input('FechaModificacion' ,sql.DateTime, FechaModificacion)
        .input('UsuarioModificacion' ,sql.Int, UsuarioModificacion)
        .execute('[Seguridad].[InsertarUsuarios]');
    
        return result;
    } catch (error) {
        return res.status(400).json({ msg: "Bad request: ", error: error.message });
    }

};