import { obtenerCarrerasDAL, insertarCarreraDAL, actualizarCarreraDAL, obtenerCarreraxIdDAL, filtrarCarrerasxBusquedaDAL } from "../../DAL/Catalogo/Carreras";

export const obtenerCarrerasBLL = async () => {
    try {
        const carreras = await obtenerCarrerasDAL();
        return carreras;
    } catch (error) {
        throw error;
    }
};

export const obtenerCarreraxIdBLL = async (idCarrera) => {
    try {
        const carrera = await obtenerCarreraxIdDAL(idCarrera);
        return carrera;
    } catch (error) {
        throw error;
    }
};

export const filtrarCarrerasxBusquedaBLL = async (busqueda) => {
    try {
        const carreras = await filtrarCarrerasxBusquedaDAL(busqueda);
        return carreras;
    } catch (error) {
        throw error;
    }
};

export const insertarCarreraBLL = async (modCarrera) => {
    try {
        const result = await insertarCarreraDAL(modCarrera);
        return result;
    } catch (error) {
        throw error;
    }
};

export const actualizarCarreraBLL = async (modCarrera) => {
    try {
        const result = await actualizarCarreraDAL(modCarrera);
        return result;
    } catch (error) {
        throw error;
    }
};