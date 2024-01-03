import { obtenerUsuariosDAL, insertarUsuariosDAL } from "../DAL/usuarios";

const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const obtenerUsuariosBLL = async (req, res) => {
    try {
        const usuarios = await obtenerUsuariosDAL();
        return usuarios;
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

        const hashedPassword = await encryptPassword(userData.Contraseña);
        userData.Contraseña = hashedPassword;

        await insertarUsuariosDAL(userData);
        res.json('Exito');
    } catch (error) {
        return res.status(400).json({ msg: "Bad request: ", error: error.message });
    }
};