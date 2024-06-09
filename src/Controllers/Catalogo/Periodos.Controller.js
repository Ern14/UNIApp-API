import { obtenerPeriodosBLL, insertarPeriodoBLL, actualizarPeriodoBLL, obtenerPeriodoxIdBLL, filtrarPeriodosxBusquedaBLL } from '../../Library/BLL/Catalogo/Periodos';
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
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarPeriodoxId = async ( req, res ) => {
    try {
        const idPeriodo = req.params.idPeriodo;
        const data = await obtenerPeriodoxIdBLL(idPeriodo);
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
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarPeriodosxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarPeriodosxBusquedaBLL(busqueda);

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
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarPeriodo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modPeriodo = new Periodos(userData);
        if (modPeriodo.Nombre == null) {
            throw new Error("Información incompleta");
        };
        
        modPeriodo.Activo = 1;
        modPeriodo.FechaCreacion = fechaHoraActual;
        modPeriodo.FechaModificacion = fechaHoraActual;
        modPeriodo.UsuarioCreacion = usuarioLog.idUsuario;
        modPeriodo.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarPeriodoBLL(modPeriodo);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Registro creado con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const actualizarPeriodo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idPeriodo = req.body.IdPeriodo;
        const Nombre = req.body.Nombre;
        const userData = await obtenerPeriodoxIdBLL(idPeriodo);
        if (userData.length > 0){
            const modPeriodo = new Periodos(userData[0]);

            modPeriodo.idPeriodo = idPeriodo;
            modPeriodo.Nombre = Nombre;
            modPeriodo.Activo = 1;
            modPeriodo.FechaModificacion = fechaHoraActual;
            modPeriodo.UsuarioModificacion = usuarioLog.idUsuario;
            await actualizarPeriodoBLL(modPeriodo);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: {
                    mensaje: "Registro actualizado con éxito"
                }
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: {
                    mensaje: "Registro no encontrado"
                }
            }
            res.status(response.statusCode).send(response);
        }

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const eliminarPeriodo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idPeriodo = req.body.IdPeriodo;
        const userData = await obtenerPeriodoxIdBLL(idPeriodo);
        if (userData.length > 0){
            const modPeriodo = new Periodos(userData[0]);

            modPeriodo.Activo = 0;
            modPeriodo.FechaModificacion = fechaHoraActual;
            modPeriodo.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarPeriodoBLL(modPeriodo);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: {
                    mensaje: "Registro eliminado con éxito"
                }
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: {
                    mensaje: "Registro no encontrado"
                }
            }
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};