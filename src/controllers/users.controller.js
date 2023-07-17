import { getConnection } from "../database/connection";

export const getUsers = async ( req, res ) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM USUARIO');
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result.recordset);
};

export const createUsers = async ( req, res ) => {

    let { correo, contrasena, estado } = req.body;
    console.log( correo, contrasena, estado);
    res.json('new user');
}