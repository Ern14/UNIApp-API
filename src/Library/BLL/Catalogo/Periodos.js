import { obtenerPeriodosDAL, insertarPeriodoDAL, actualizarPeriodoDAL, obtenerPeriodoxIdDAL, filtrarPeriodosxBusquedaDAL } from "../../DAL/Catalogo/Periodos";

export const obtenerPeriodosBLL = async () => {
    try {
        const periodos = await obtenerPeriodosDAL();
        return periodos;
    } catch (error) {
        throw error;
    }
};

export const obtenerPeriodoxIdBLL = async (idPeriodo) => {
    try {
        const periodo = await obtenerPeriodoxIdDAL(idPeriodo);
        return periodo;
    } catch (error) {
        throw error;
    }
};

export const filtrarPeriodosxBusquedaBLL = async (busqueda) => {
    try {
        const periodos = await filtrarPeriodosxBusquedaDAL(busqueda);
        return periodos;
    } catch (error) {
        throw error;
    }
};

export const insertarPeriodoBLL = async (modPeriodo) => {
    try {
        const result = await insertarPeriodoDAL(modPeriodo);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarPeriodoBLL = async (modPeriodo) => {
    try {
        const result = await actualizarPeriodoDAL(modPeriodo);
        return result;
    } catch (error) {
        throw error;
    }
};