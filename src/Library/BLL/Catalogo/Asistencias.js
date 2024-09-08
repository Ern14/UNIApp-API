import { obtenerAsistenciasDAL, insertarAsistenciaDAL, actualizarAsistenciaDAL, obtenerAsistenciaxIdDAL } from "../../DAL/Catalogo/Asistencias";

export const obtenerAsistenciasBLL = async (idDepartamento,idAsignatura) => {
    try {
        const asistencias = await obtenerAsistenciasDAL(idDepartamento,idAsignatura);
        return asistencias;
    } catch (error) {
        throw error;
    }
};

export const obtenerAsistenciaxIdBLL = async (idAsistencia) => {
    try {
        const asistencia = await obtenerAsistenciaxIdDAL(idAsistencia);
        return asistencia;
    } catch (error) {
        throw error;
    }
};

export const insertarAsistenciaBLL = async (modAsistencia) => {
    try {
        const result = await insertarAsistenciaDAL(modAsistencia);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarAsistenciaBLL = async (modAsistencia) => {
    try {
        const result = await actualizarAsistenciaDAL(modAsistencia);
        return result;
    } catch (error) {
        throw error;
    }
};