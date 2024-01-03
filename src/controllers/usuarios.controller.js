import { obtenerUsuariosBLL, insertarUsuariosBLL } from '../capas/BLL/usuarios';

export const obtenerUsuarios = async ( req, res ) => {
    try {
        const data = await obtenerUsuariosBLL(req, res);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

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