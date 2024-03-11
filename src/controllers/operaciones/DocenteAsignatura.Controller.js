import { obtenerDocenteAsignaturaBLL, insertarDocenteAsignaturaBLL, actualizarDocenteAsignaturaBLL, obtenerDocenteAsignaturaxIdBLL } from '../../Library/BLL/operaciones/DocenteAsignatura';
import { DocenteAsignatura } from '../../Library/Models/Operaciones/DocenteAsignatura';

export const obtenerDocenteAsignatura = async ( req, res ) => {
    try {
        const data = await obtenerDocenteAsignaturaBLL();
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

export const insertarDocenteAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocenteAsignatura = new DocenteAsignatura(userData);
        if (modDocenteAsignatura.idDocente == null || modDocenteAsignatura.idAsignatura == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocenteAsignatura.Activo = 1;
        modDocenteAsignatura.FechaCreacion = fechaHoraActual;
        modDocenteAsignatura.FechaModificacion = fechaHoraActual;
        modDocenteAsignatura.UsuarioCreacion = 1;
        modDocenteAsignatura.UsuarioModificacion = 1;

        const data = await insertarDocenteAsignaturaBLL(modDocenteAsignatura);
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

export const actualizarDocenteAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocenteAsignatura = req.body.idDocenteAsignatura;
        const idDocente = req.body.idDocente;
        const idAsignatura = req.body.idAsignatura;
        const userData = await obtenerDocenteAsignaturaxIdBLL(idDocenteAsignatura);
        if (userData.length > 0){
            const modDocenteAsignatura = new DocenteAsignatura(userData[0]);

            modDocenteAsignatura.idDocente = idDocente;
            modDocenteAsignatura.idAsignatura = idAsignatura;
            modDocenteAsignatura.Activo = 1;
            modDocenteAsignatura.FechaModificacion = fechaHoraActual;
            modDocenteAsignatura.UsuarioModificacion = 1;
            const data = await actualizarDocenteAsignaturaBLL(modDocenteAsignatura);

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

export const eliminarDocenteAsignatura = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocenteAsignatura = req.body.idDocenteAsignatura;
        const userData = await obtenerDocenteAsignaturaxIdBLL(idDocenteAsignatura);
        if (userData.length > 0){
            const modDocenteAsignatura = new DocenteAsignatura(userData[0]);

            modDocenteAsignatura.Activo = 0;
            modDocenteAsignatura.FechaModificacion = fechaHoraActual;
            modDocenteAsignatura.UsuarioModificacion = 1;
    
            const data = await actualizarDocenteAsignaturaBLL(modDocenteAsignatura);

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