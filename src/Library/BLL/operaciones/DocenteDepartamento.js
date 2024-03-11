import { obtenerDocenteDepartamentoDAL, insertarDocenteDepartamentoDAL, actualizarDocenteDepartamentoDAL, obtenerDocenteDepartamentoxIdDAL } from "../../DAL/Operaciones/DocenteDepartamento";

export const obtenerDocenteDepartamentoBLL = async () => {
    try {
        const result = await obtenerDocenteDepartamentoDAL();
        return result;
    } catch (error) {
        throw error;
    }
};

export const obtenerDocenteDepartamentoxIdBLL = async (idDocenteDepartamento) => {
    try {
        const result = await obtenerDocenteDepartamentoxIdDAL(idDocenteDepartamento);
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertarDocenteDepartamentoBLL = async (modDocenteDepartamento) => {
    try {
        const result = await insertarDocenteDepartamentoDAL(modDocenteDepartamento);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarDocenteDepartamentoBLL = async (modDocenteDepartamento) => {
    try {
        const result = await actualizarDocenteDepartamentoDAL(modDocenteDepartamento);
        return result;
    } catch (error) {
        throw error;
    }
};