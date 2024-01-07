import { obtenerUsuariosDAL, insertarUsuariosDAL } from "../DAL/usuarios";


const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const obtenerUsuariosBLL = async () => {
    try {
        const usuarios = await obtenerUsuariosDAL();
        return usuarios;
    } catch (error) {
        throw error;
    }
};


export const insertarUsuariosBLL = async (modUsuarios) => {
    try {
        if (modUsuarios.Correo == null || modUsuarios.Contraseña == null) {
            throw new Error("Bad request: incomplete information");
        };

        const hashedPassword = await encryptPassword(modUsuarios.Contraseña);
        modUsuarios.Contraseña = hashedPassword;

        const result = await insertarUsuariosDAL(modUsuarios);
        return result;
    } catch (error) {
        throw error;
    }
};