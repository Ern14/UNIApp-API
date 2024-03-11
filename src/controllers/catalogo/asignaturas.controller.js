import { obtenerAsignaturasBLL, insertarAsignaturaBLL, actualizarAsignaturaBLL, obtenerAsignaturaxIdBLL } from '../../capas/BLL/catalogo/asignaturas';
import { Asignaturas } from '../../modelos/Catalogo/Asignaturas';

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
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modAsignatura = new Asignaturas(userData);
        if (modAsignatura.Nombre == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modAsignatura.Activo = 1;
        modAsignatura.FechaCreacion = fechaHoraActual;
        modAsignatura.FechaModificacion = fechaHoraActual;
        modAsignatura.UsuarioCreacion = 1;
        modAsignatura.UsuarioModificacion = 1;

        const data = await insertarAsignaturaBLL(modAsignatura);
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

export const actualizarAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idAsignatura = req.body.idAsignatura;
        const idPeriodo = req.body.idPeriodo;
        const Nombre = req.body.Nombre;
        const userData = await obtenerAsignaturaxIdBLL(idAsignatura);
        if (userData.length > 0){
            const modAsignatura = new Asignaturas(userData[0]);

            modAsignatura.idAsignatura = idAsignatura;
            modAsignatura.idPeriodo = idPeriodo;
            modAsignatura.Nombre = Nombre;
            modAsignatura.Activo = 1;
            modAsignatura.FechaModificacion = fechaHoraActual;
            modAsignatura.UsuarioModificacion = 1;
            const data = await actualizarAsignaturaBLL(modAsignatura);

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

export const eliminarAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idAsignatura = req.body.idAsignatura;
        const userData = await obtenerAsignaturaxIdBLL(idAsignatura);
        if (userData.length > 0){
            const modAsignatura = new Asignaturas(userData[0]);

            modAsignatura.Activo = 0;
            modAsignatura.FechaModificacion = fechaHoraActual;
            modAsignatura.UsuarioModificacion = 1;
    
            const data = await actualizarAsignaturaBLL(modAsignatura);

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