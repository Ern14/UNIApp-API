import { getConnection, sql } from "../database/connection";
import { obtenerUsuariosBLL, insertarUsuariosBLL } from '../capas/BLL/usuarios';

export const obtenerUsuarios = async ( req, res ) => {
    try {
        await obtenerUsuariosBLL(req, res);
    } catch (error) {
        return res.status(400).json({ msg: "Bad request", error: error.message });
    }

};

export const insertarUsuarios = async ( req, res ) => {
    try {
        await insertarUsuariosBLL(req, res);
    } catch (error) {
        return res.status(400).json({ msg: "Bad request", error: error.message });
    }   
};