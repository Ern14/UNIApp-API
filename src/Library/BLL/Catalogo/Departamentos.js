import { obtenerDepartamentosDAL, insertarDepartamentoDAL, actualizarDepartamentoDAL, obtenerDepartamentoxIdDAL, filtrarDepartamentosxBusquedaDAL } from "../../DAL/Catalogo/Departamentos";

export const obtenerDepartamentosBLL = async () => {
    try {
        const departamentos = await obtenerDepartamentosDAL();
        return departamentos;
    } catch (error) {
        throw error;
    }
};

export const obtenerDepartamentoxIdBLL = async (idDepartamento) => {
    try {
        const departamento = await obtenerDepartamentoxIdDAL(idDepartamento);
        return departamento;
    } catch (error) {
        throw error;
    }
};

export const filtrarDepartamentosxBusquedaBLL = async (busqueda) => {
    try {
        const departamentos = await filtrarDepartamentosxBusquedaDAL(busqueda);
        return departamentos;
    } catch (error) {
        throw error;
    }
};

export const insertarDepartamentoBLL = async (modDepartamento) => {
    try {
        const result = await insertarDepartamentoDAL(modDepartamento);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarDepartamentoBLL = async (modDepartamento) => {
    try {
        const result = await actualizarDepartamentoDAL(modDepartamento);
        return result;
    } catch (error) {
        throw error;
    }
};