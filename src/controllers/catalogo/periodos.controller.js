import { obtenerPeriodosBLL, insertarPeriodoBLL, actualizarPeriodoBLL, obtenerPeriodoxIdBLL } from '../../Library/BLL/Catalogo/Periodos';
import { Periodos } from '../../Library/Models/Catalogo/Periodos';

export const obtenerPeriodos = async ( req, res ) => {
    try {
        const data = await obtenerPeriodosBLL();
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarPeriodo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modPeriodo = new Periodos(userData);
        if (modPeriodo.Nombre == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modPeriodo.Activo = 1;
        modPeriodo.FechaCreacion = fechaHoraActual;
        modPeriodo.FechaModificacion = fechaHoraActual;
        modPeriodo.UsuarioCreacion = 1;
        modPeriodo.UsuarioModificacion = 1;

        const data = await insertarPeriodoBLL(modPeriodo);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const actualizarPeriodo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idPeriodo = req.body.idPeriodo;
        const Nombre = req.body.Nombre;
        const userData = await obtenerPeriodoxIdBLL(idPeriodo);
        if (userData.length > 0){
            const modPeriodo = new Periodos(userData[0]);

            modPeriodo.idPeriodo = idPeriodo;
            modPeriodo.Nombre = Nombre;
            modPeriodo.Activo = 1;
            modPeriodo.FechaModificacion = fechaHoraActual;
            modPeriodo.UsuarioModificacion = 1;
            const data = await actualizarPeriodoBLL(modPeriodo);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: data
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: req.body
            }
            res.status(response.statusCode).send(response);
        }

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const eliminarPeriodo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idPeriodo = req.body.idPeriodo;
        const userData = await obtenerPeriodoxIdBLL(idPeriodo);
        if (userData.length > 0){
            const modPeriodo = new Periodos(userData[0]);

            modPeriodo.Activo = 0;
            modPeriodo.FechaModificacion = fechaHoraActual;
            modPeriodo.UsuarioModificacion = 1;
    
            const data = await actualizarPeriodoBLL(modPeriodo);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: data
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: req.body
            }
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};