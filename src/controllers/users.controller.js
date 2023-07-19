import { getConnection, sql } from "../database/connection";

export const getUsers = async ( req, res ) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM USUARIO');
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result.recordset);
};

export const createUsers = async ( req, res ) => {

    let { correo, passwrd, userStatus, FK_idRol } = req.body;

    if ( correo == null || passwrd == null || userStatus == null){
        return res.status(400).json({ msg: "Bad request"});
    };

    const pool = await getConnection();
    const result = await pool.request()
    .input('correo', sql.VarChar, correo)
    .input('passwrd' ,sql.VarChar, passwrd)
    .input('userStatus' ,sql.Bit, userStatus)
    .input('FK_idRol' ,sql.Int, FK_idRol) 
    .query('INSERT INTO USUARIO ( correo, passwrd, userStatus, FK_idRol ) VALUES ( @correo, @passwrd, @userStatus, @FK_idRol )');

    console.log(result);
    res.json('new user');
};