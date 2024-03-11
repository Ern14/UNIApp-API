import { obtenerDocentesDAL, insertarDocenteDAL, actualizarDocenteDAL, obtenerDocentexIdDAL } from "../../DAL/catalogo/docentes";

export const obtenerDocentesBLL = async () => {
    try {
        const docentes = await obtenerDocentesDAL();
        return docentes;
    } catch (error) {
        throw error;
    }
};

export const obtenerDocentexIdBLL = async (idDocente) => {
    try {
        const docente = await obtenerDocentexIdDAL(idDocente);
        return docente;
    } catch (error) {
        throw error;
    }
};

export const insertarDocenteBLL = async (modDocente) => {
    try {
        const result = await insertarDocenteDAL(modDocente);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarDocenteBLL = async (modDocente) => {
    try {
        const roles = await actualizarDocenteDAL(modDocente);
        return roles;
    } catch (error) {
        throw error;
    }
};