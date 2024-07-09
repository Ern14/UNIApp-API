import { obtenerCarrerasBLL, insertarCarreraBLL, actualizarCarreraBLL, obtenerCarreraxIdBLL, filtrarCarrerasxBusquedaBLL } from '../../Library/BLL/Catalogo/Carreras';
import { Carreras } from '../../Library/Models/Catalogo/Carreras';

export const obtenerCarreras = async ( req, res ) => {
    try {
        const data = await obtenerCarrerasBLL();
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

export const filtrarCarreraxId = async ( req, res ) => {
    try {
        const idCarrera = req.params.idCarrera;
        const data = await obtenerCarreraxIdBLL(idCarrera);
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

export const filtrarCarrerasxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarCarrerasxBusquedaBLL(busqueda);

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

export const insertarCarrera = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modCarrera = new Carreras(userData);
        if (modCarrera.Nombre == null || modCarrera.Abreviatura == null) {
            throw new Error("Información incompleta");
        };
        
        modCarrera.Activo = 1;
        modCarrera.FechaCreacion = fechaHoraActual;
        modCarrera.FechaModificacion = fechaHoraActual;
        modCarrera.UsuarioCreacion = usuarioLog.idUsuario;
        modCarrera.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarCarreraBLL(modCarrera);
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

export const actualizarCarrera = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idCarrera = req.body.idCarrera;
        const idDepartamento = req.body.idDepartamento;
        const Abreviatura = req.body.Abreviatura;
        const Nombre = req.body.Nombre;
        const Descripcion = req.body.Descripcion;
        const userData = await obtenerCarreraxIdBLL(idCarrera);
        if (userData.length > 0){
            const modCarrera = new Carreras(userData[0]);

            modCarrera.idDepartamento = idDepartamento
            modCarrera.Abreviatura = Abreviatura
            modCarrera.Nombre = Nombre;
            modCarrera.Descripcion = Descripcion
            modCarrera.Activo = 1;
            modCarrera.FechaModificacion = fechaHoraActual;
            modCarrera.UsuarioModificacion = usuarioLog.idUsuario;
            await actualizarCarreraBLL(modCarrera);

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

export const eliminarCarrera = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;
        
        const fechaHoraActual = new Date();
        const idCarrera = req.body.idCarrera;
        const userData = await obtenerCarreraxIdBLL(idCarrera);
        if (userData.length > 0){
            const modCarrera = new Carreras(userData[0]);

            modCarrera.Activo = 0;
            modCarrera.FechaModificacion = fechaHoraActual;
            modCarrera.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarCarreraBLL(modCarrera);

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