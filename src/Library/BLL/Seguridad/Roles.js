import { obtenerRolesDAL, insertarRolesDAL, actualizarRolesDAL, obtenerRolxIdDAL } from "../../DAL/Seguridad/Roles";

export const obtenerRolesBLL = async () => {
    try {
        const roles = await obtenerRolesDAL();
        return roles;
    } catch (error) {
        throw error;
    }
};

export const obtenerRolxIdBLL = async (idRol) => {
    try {
        const rol = await obtenerRolxIdDAL(idRol);
        return rol;
    } catch (error) {
        throw error;
    }
};

export const insertarRolesBLL = async (modRoles) => {
    try {
        const result = await insertarRolesDAL(modRoles);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarRolesBLL = async (modRoles) => {
    try {
        const roles = await actualizarRolesDAL(modRoles);
        return roles;
    } catch (error) {
        throw error;
    }
};