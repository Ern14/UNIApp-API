import { obtenerDocentesBLL, insertarDocenteBLL, actualizarDocenteBLL, obtenerDocentexIdBLL, filtrarDocentesxBusquedaBLL } from '../../Library/BLL/Catalogo/Docentes';
import { Docentes } from '../../Library/Models/Catalogo/Docentes';

export const obtenerDocentes = async ( req, res ) => {
    try {
        const data = await obtenerDocentesBLL();
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

export const filtrarDocentexId = async ( req, res ) => {
    try {
        const idDocente = req.params.idDocente;
        const data = await obtenerDocentexIdBLL(idDocente);
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

export const filtrarDocentesxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarDocentesxBusquedaBLL(busqueda);

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

export const insertarDocente = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocente = new Docentes(userData);
        if (modDocente.Nombre == null || modDocente.Apellido == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocente.Activo = 1;
        modDocente.FechaCreacion = fechaHoraActual;
        modDocente.FechaModificacion = fechaHoraActual;
        modDocente.UsuarioCreacion = usuarioLog.idUsuario;
        modDocente.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarDocenteBLL(modDocente);
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

export const actualizarDocente = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDocente = req.body.IdDocente;
        const Nombre = req.body.Nombre;
        const Apellido = req.body.Apellido;
        const userData = await obtenerDocentexIdBLL(idDocente);

        if (userData.length > 0){
            const modDocente = new Docentes(userData[0]);

            modDocente.idDocente = idDocente;
            modDocente.Nombre = Nombre;
            modDocente.Apellido = Apellido;
            modDocente.Activo = 1;
            modDocente.FechaModificacion = fechaHoraActual;
            modDocente.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarDocenteBLL(modDocente);

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

export const eliminarDocente = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDocente = req.body.IdDocente;
        const userData = await obtenerDocentexIdBLL(idDocente);

        if (userData.length > 0){
            const modDocente = new Docentes(userData[0]);

            modDocente.Activo = 0;
            modDocente.FechaModificacion = fechaHoraActual;
            modDocente.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarDocenteBLL(modDocente);

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