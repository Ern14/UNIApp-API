import { getConnection, sql } from "../database/connection";

export const getUsuarios = async ( req, res ) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('[Seguridad].[FiltrarUsuarios]');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(result.recordset);
    } catch (error) {
        return res.status(400).json({ msg: "Bad request"});
    }
};

export const postUsuarios = async ( req, res ) => {

    let { FK_idRol, Correo, Contraseña, Activo } = req.body;

    if ( Correo == null || passwrd == null ){
        return res.status(400).json({ msg: "Bad request"});
    };

    const pool = await getConnection();
    const result = await pool.request()
    .input('FK_idRol' ,sql.Int, FK_idRol) 
    .input('Correo', sql.VarChar, Correo)
    .input('Contraseña' ,sql.VarChar, Contraseña)
    .input('Activo' ,sql.Bit, Activo)
    .query('INSERT INTO USUARIO ( FK_idRol, Correo, Contraseña, Activo ) VALUES ( @FK_idRol, @Correo, @Contraseña, @Activo )');

    console.log(result);
    res.json('new user');
};