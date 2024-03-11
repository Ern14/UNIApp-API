import { obtenerRolesBLL, insertarRolesBLL, actualizarRolesBLL, obtenerRolxIdBLL } from '../capas/BLL/roles';
import { Roles } from '../modelos/Seguridad/Roles';

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
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modRoles = new Roles(userData);
        if (modRoles.Nombre == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modRoles.Activo = 1;
        modRoles.FechaCreacion = fechaHoraActual;
        modRoles.FechaModificacion = fechaHoraActual;
        modRoles.UsuarioCreacion = 1;
        modRoles.UsuarioModificacion = 1;

        const data = await insertarRolesBLL(modRoles);
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

export const actualizarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idRol = req.body.idRol;
        const Nombre = req.body.Nombre;
        const Descripcion = req.body.Descripcion;
        const userData = await obtenerRolxIdBLL(idRol);

        if (userData.length > 0){
            const modRoles = new Roles(userData[0]);

            modRoles.idRol = idRol;
            modRoles.Nombre = Nombre;
            modRoles.Descripcion = Descripcion;
            modRoles.Activo = 1;
            modRoles.FechaModificacion = fechaHoraActual;
            modRoles.UsuarioModificacion = 1;
    
            const data = await actualizarRolesBLL(modRoles);

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

export const eliminarRoles = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idRol = req.body.idRol;
        const userData = await obtenerRolxIdBLL(idRol);

        if (userData.length > 0){
            const modRoles = new Roles(userData[0]);

            modRoles.Activo = 0;
            modRoles.FechaModificacion = fechaHoraActual;
            modRoles.UsuarioModificacion = 1;
    
            const data = await actualizarRolesBLL(modRoles);

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