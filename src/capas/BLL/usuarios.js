import bcryptjs from 'bcryptjs';
import { obtenerUsuariosDAL, insertarUsuariosDAL, filtrarUsuariosxCorreoDAL, validarUsuarioxCorreoDAL } from "../DAL/usuarios";


const encryptPassword = async (password) => {
    const saltRounds = 8;
    const salt = await bcryptjs.genSalt(saltRounds);
    const hash = await bcryptjs.hash(password, salt);
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

export const filtrarUsuariosxCorreoBLL = async (Correo) => {
    try {
        const usuarios = await filtrarUsuariosxCorreoDAL(Correo);
        return usuarios;
    } catch (error) {
        throw error;
    }
};

export const validarUsuarioxCorreoBLL = async (Correo, Contraseña) => {
    try {
        if (Correo == null || Contraseña == null) {
            throw new Error("Bad request: incomplete information");
        };

        const usuario = await validarUsuarioxCorreoDAL(Correo);
        let resp;
        if (!usuario[0]){
            const error = new Error("El correo no está registrado");
            error.status = 400;
            throw error;
        }else{
            const resultado = await bcryptjs.compare(Contraseña,usuario[0].Contraseña);
            if (resultado){
                resp = "Autenticación con éxito";
            }else{
                resp = "Usuario o contraseña incorrectos";
            }
        }
        return resp;
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