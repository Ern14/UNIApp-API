import { obtenerUsuariosDAL, insertarUsuariosDAL } from "../DAL/usuarios";

export const obtenerUsuariosBLL = async (req, res) => {
    try {
        const usuarios = await obtenerUsuariosDAL();
        res.send(usuarios);
    } catch (error) {
        return res.status(400).json({ msg: "Bad request", error: error.message });
    }
};


export const insertarUsuariosBLL = async (req, res) => {
    try {
        const userData = req.body;

        if (userData.Correo == null || userData.Contraseña == null) {
            return res.status(400).json({ msg: "Bad request: incomplete information" });
        };

        await insertarUsuariosDAL(userData);
        res.json('Exito');
    } catch (error) {
        return res.status(400).json({ msg: "Bad request: ", error: error.message });
    }
};