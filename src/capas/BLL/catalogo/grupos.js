import { obtenerGruposDAL, insertarGrupoDAL, actualizarGrupoDAL, obtenerGrupoxIdDAL } from "../../DAL/catalogo/grupos";

export const obtenerGruposBLL = async () => {
    try {
        const grupos = await obtenerGruposDAL();
        return grupos;
    } catch (error) {
        throw error;
    }
};

export const obtenerGrupoxIdBLL = async (idGrupo) => {
    try {
        const grupo = await obtenerGrupoxIdDAL(idGrupo);
        return grupo;
    } catch (error) {
        throw error;
    }
};

export const insertarGrupoBLL = async (modGrupo) => {
    try {
        const result = await insertarGrupoDAL(modGrupo);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarGrupoBLL = async (modGrupo) => {
    try {
        const roles = await actualizarGrupoDAL(modGrupo);
        return roles;
    } catch (error) {
        throw error;
    }
};