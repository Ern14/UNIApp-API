import { obtenerAsignaturasDAL, insertarAsignaturaDAL, actualizarAsignaturaDAL, obtenerAsignaturaxIdDAL } from "../../DAL/Catalogo/Asignaturas";

export const obtenerAsignaturasBLL = async () => {
    try {
        const asignaturas = await obtenerAsignaturasDAL();
        return asignaturas;
    } catch (error) {
        throw error;
    }
};

export const obtenerAsignaturaxIdBLL = async (idAsignatura) => {
    try {
        const asignatura = await obtenerAsignaturaxIdDAL(idAsignatura);
        return asignatura;
    } catch (error) {
        throw error;
    }
};

export const insertarAsignaturaBLL = async (modAsignatura) => {
    try {
        const result = await insertarAsignaturaDAL(modAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarAsignaturaBLL = async (modAsignatura) => {
    try {
        const result = await actualizarAsignaturaDAL(modAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};