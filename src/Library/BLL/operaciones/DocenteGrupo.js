import { obtenerDocenteGrupoDAL, insertarDocenteGrupoDAL, actualizarDocenteGrupoDAL, obtenerDocenteGrupoxIdDAL } from "../../DAL/operaciones/DocenteGrupo";

export const obtenerDocenteGrupoBLL = async () => {
    try {
        const result = await obtenerDocenteGrupoDAL();
        return result;
    } catch (error) {
        throw error;
    }
};

export const obtenerDocenteGrupoxIdBLL = async (idDocenteGrupo) => {
    try {
        const result = await obtenerDocenteGrupoxIdDAL(idDocenteGrupo);
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertarDocenteGrupoBLL = async (modDocenteGrupo) => {
    try {
        const result = await insertarDocenteGrupoDAL(modDocenteGrupo);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarDocenteGrupoBLL = async (modDocenteGrupo) => {
    try {
        const result = await actualizarDocenteGrupoDAL(modDocenteGrupo);
        return result;
    } catch (error) {
        throw error;
    }
};