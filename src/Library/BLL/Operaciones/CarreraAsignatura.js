import { 
    obtenerCarreraAsignaturaDAL, 
    insertarCarreraAsignaturaDAL, 
    actualizarCarreraAsignaturaDAL, 
    obtenerCarreraAsignaturaxIdDAL 
} from "../../DAL/Operaciones/CarreraAsignatura";

export const obtenerCarreraAsignaturaBLL = async (idCarrera) => {
    try {
        const result = await obtenerCarreraAsignaturaDAL(idCarrera);
        return result;
    } catch (error) {
        throw error;
    }
};

export const obtenerCarreraAsignaturaxIdBLL = async (idCarreraAsignatura) => {
    try {
        const result = await obtenerCarreraAsignaturaxIdDAL(idCarreraAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertarCarreraAsignaturaBLL = async (modCarreraAsignatura) => {
    try {
        const result = await insertarCarreraAsignaturaDAL(modCarreraAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarCarreraAsignaturaBLL = async (modCarreraAsignatura) => {
    try {
        const result = await actualizarCarreraAsignaturaDAL(modCarreraAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};