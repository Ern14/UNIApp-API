import { 
    obtenerDocenteAsignaturaDAL, 
    insertarDocenteAsignaturaDAL, 
    actualizarDocenteAsignaturaDAL, 
    obtenerDocenteAsignaturaxIdDAL 
} from "../../DAL/Operaciones/DocenteAsignatura";

export const obtenerDocenteAsignaturaBLL = async () => {
    try {
        const result = await obtenerDocenteAsignaturaDAL();
        return result;
    } catch (error) {
        throw error;
    }
};

export const obtenerDocenteAsignaturaxIdBLL = async (idDocenteAsignatura) => {
    try {
        const result = await obtenerDocenteAsignaturaxIdDAL(idDocenteAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertarDocenteAsignaturaBLL = async (modDocenteAsignatura) => {
    try {
        const result = await insertarDocenteAsignaturaDAL(modDocenteAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarDocenteAsignaturaBLL = async (modDocenteAsignatura) => {
    try {
        const result = await actualizarDocenteAsignaturaDAL(modDocenteAsignatura);
        return result;
    } catch (error) {
        throw error;
    }
};