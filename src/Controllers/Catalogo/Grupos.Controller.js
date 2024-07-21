import { obtenerGruposBLL, insertarGrupoBLL, actualizarGrupoBLL, obtenerGrupoxIdBLL, filtrarGruposxBusquedaBLL } from '../../Library/BLL/Catalogo/Grupos';
import { Grupos } from '../../Library/Models/Catalogo/Grupos';

export const obtenerGrupos = async ( req, res ) => {
    try {
        const data = await obtenerGruposBLL();
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

export const filtrarGruposxId = async ( req, res ) => {
    try {
        const idGrupo = req.params.idGrupo;
        const data = await obtenerGrupoxIdBLL(idGrupo);
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

export const filtrarGruposxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarGruposxBusquedaBLL(busqueda);

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

export const insertarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modGrupo = new Grupos(userData);
        if (modGrupo.idPeriodo == null || modGrupo.idCarrera == null || modGrupo.Nombre == null) {
            throw new Error("Información incompleta");
        };
        
        modGrupo.Activo = 1;
        modGrupo.FechaCreacion = fechaHoraActual;
        modGrupo.FechaModificacion = fechaHoraActual;
        modGrupo.UsuarioCreacion = usuarioLog.idUsuario;
        modGrupo.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarGrupoBLL(modGrupo);
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

export const actualizarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idGrupo = req.body.IdGrupo;
        const idPeriodo = req.body.IdPeriodo;
        const idCarrera = req.body.IdCarrera;
        const Nombre = req.body.Nombre;
        const userData = await obtenerGrupoxIdBLL(idGrupo);

        if (userData.length > 0){
            const modGrupo = new Grupos(userData[0]);

            modGrupo.idGrupo = idGrupo;
            modGrupo.idPeriodo = idPeriodo;
            modGrupo.idCarrera = idCarrera;
            modGrupo.Nombre = Nombre;
            modGrupo.Activo = 1;
            modGrupo.FechaModificacion = fechaHoraActual;
            modGrupo.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarGrupoBLL(modGrupo);

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

export const eliminarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idGrupo = req.body.IdGrupo;
        const userData = await obtenerGrupoxIdBLL(idGrupo);

        if (userData.length > 0){
            const modGrupo = new Grupos(userData[0]);

            modGrupo.Activo = 0;
            modGrupo.FechaModificacion = fechaHoraActual;
            modGrupo.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarGrupoBLL(modGrupo);

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