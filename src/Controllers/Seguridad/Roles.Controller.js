import { obtenerRolesBLL, insertarRolesBLL, actualizarRolesBLL, obtenerRolxIdBLL, filtrarRolesxBusquedaBLL } from '../../Library/BLL/Seguridad/Roles';
import { Roles } from '../../Library/Models/Seguridad/Roles';

export const obtenerRoles = async ( req, res ) => {
    try {
        const data = await obtenerRolesBLL();
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

export const filtrarRolxId = async ( req, res ) => {
    try {
        const idRol = req.params.idRol;
        const data = await obtenerRolxIdBLL(idRol);
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

export const filtrarRolesxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarRolesxBusquedaBLL(busqueda);

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

export const insertarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const usuarioLog = req.decoded;
        const modRoles = new Roles(userData);
        if (modRoles.Nombre == null) {
            throw new Error("Información incompleta");
        };
        
        modRoles.Activo = 1;
        modRoles.FechaCreacion = fechaHoraActual;
        modRoles.FechaModificacion = fechaHoraActual;
        modRoles.UsuarioCreacion = usuarioLog.idUsuario;
        modRoles.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarRolesBLL(modRoles);
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

export const actualizarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idRol = req.body.IdRol;
        const Nombre = req.body.Nombre;
        const Descripcion = req.body.Descripcion;
        const usuarioLog = req.decoded;
        const userData = await obtenerRolxIdBLL(idRol);

        if (userData.length > 0){
            const modRoles = new Roles(userData[0]);

            modRoles.idRol = idRol;
            modRoles.Nombre = Nombre;
            modRoles.Descripcion = Descripcion;
            modRoles.Activo = 1;
            modRoles.FechaModificacion = fechaHoraActual;
            modRoles.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarRolesBLL(modRoles);

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

export const eliminarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idRol = req.body.IdRol;
        const usuarioLog = req.decoded;
        const userData = await obtenerRolxIdBLL(idRol);

        if (userData.length > 0){
            const modRoles = new Roles(userData[0]);

            modRoles.Activo = 0;
            modRoles.FechaModificacion = fechaHoraActual;
            modRoles.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarRolesBLL(modRoles);

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