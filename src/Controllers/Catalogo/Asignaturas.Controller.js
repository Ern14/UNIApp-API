import { obtenerAsignaturasBLL, insertarAsignaturaBLL, actualizarAsignaturaBLL, obtenerAsignaturaxIdBLL, filtrarAsignaturasxBusquedaBLL } from '../../Library/BLL/Catalogo/Asignaturas';
import { Asignaturas } from '../../Library/Models/Catalogo/Asignaturas';

export const obtenerAsignaturas = async ( req, res ) => {
    try {
        const data = await obtenerAsignaturasBLL();
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

export const filtrarAsignaturaxId = async ( req, res ) => {
    try {
        const idAsignatura = req.params.idAsignatura;
        const data = await obtenerAsignaturaxIdBLL(idAsignatura);
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

export const filtrarAsignaturasxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarAsignaturasxBusquedaBLL(busqueda);

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

export const insertarAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modAsignatura = new Asignaturas(userData);
        if (modAsignatura.Nombre == null) {
            throw new Error("Información incompleta");
        };
        modAsignatura.Activo = 1;
        modAsignatura.FechaCreacion = fechaHoraActual;
        modAsignatura.FechaModificacion = fechaHoraActual;
        modAsignatura.UsuarioCreacion = usuarioLog.idUsuario;
        modAsignatura.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarAsignaturaBLL(modAsignatura);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Registro insertado con éxito"
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

export const actualizarAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idAsignatura = req.body.IdAsignatura;
        const Nombre = req.body.Nombre;
        const Descripcion = req.body.Descripcion;
        const userData = await obtenerAsignaturaxIdBLL(idAsignatura);
        if (userData.length > 0){
            const modAsignatura = new Asignaturas(userData[0]);

            modAsignatura.idAsignatura = idAsignatura;
            modAsignatura.Nombre = Nombre;
            modAsignatura.Descripcion = Descripcion;
            modAsignatura.Activo = 1;
            modAsignatura.FechaModificacion = fechaHoraActual;
            modAsignatura.UsuarioModificacion = usuarioLog.idUsuario;
            await actualizarAsignaturaBLL(modAsignatura);

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

export const eliminarAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idAsignatura = req.body.IdAsignatura;
        const userData = await obtenerAsignaturaxIdBLL(idAsignatura);
        if (userData.length > 0){
            const modAsignatura = new Asignaturas(userData[0]);

            modAsignatura.Activo = 0;
            modAsignatura.FechaModificacion = fechaHoraActual;
            modAsignatura.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarAsignaturaBLL(modAsignatura);

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