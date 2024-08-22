import { 
    obtenerCarreraAsignaturaBLL, 
    insertarCarreraAsignaturaBLL, 
    actualizarCarreraAsignaturaBLL, 
    obtenerCarreraAsignaturaxIdBLL 
} from '../../Library/BLL/Operaciones/CarreraAsignatura';
import { CarreraAsignatura } from '../../Library/Models/Operaciones/CarreraAsignatura';

export const obtenerCarreraAsignatura = async ( req, res ) => {
    try {
        const data = await obtenerCarreraAsignaturaBLL();
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

export const insertarCarreraAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modCarreraAsignatura = new CarreraAsignatura(userData);
        if (modCarreraAsignatura.idCarrera == null || modCarreraAsignatura.idAsignatura == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modCarreraAsignatura.Activo = 1;
        modCarreraAsignatura.FechaCreacion = fechaHoraActual;
        modCarreraAsignatura.FechaModificacion = fechaHoraActual;
        modCarreraAsignatura.UsuarioCreacion = usuarioLog.idUsuario;
        modCarreraAsignatura.UsuarioModificacion = usuarioLog.idUsuario;

        const data = await insertarCarreraAsignaturaBLL(modCarreraAsignatura);
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

export const actualizarCarreraAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idCarreraAsignatura = req.body.idCarreraAsignatura;
        const idCarrera = req.body.idCarrera;
        const idAsignatura = req.body.idAsignatura;
        const userData = await obtenerCarreraAsignaturaxIdBLL(idCarreraAsignatura);
        if (userData.length > 0){
            const modCarreraAsignatura = new CarreraAsignatura(userData[0]);

            modCarreraAsignatura.idCarrera = idCarrera;
            modCarreraAsignatura.idAsignatura = idAsignatura;
            modCarreraAsignatura.Activo = 1;
            modCarreraAsignatura.FechaModificacion = fechaHoraActual;
            modCarreraAsignatura.UsuarioModificacion = usuarioLog.idUsuario;
            const data = await actualizarCarreraAsignaturaBLL(modCarreraAsignatura);

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

export const eliminarCarreraAsignatura = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idCarreraAsignatura = req.body.idCarreraAsignatura;
        const userData = await obtenerDocenteAsignaturaxIdBLL(idCarreraAsignatura);
        if (userData.length > 0){
            const modCarreraAsignatura = new CarreraAsignatura(userData[0]);

            modCarreraAsignatura.Activo = 0;
            modCarreraAsignatura.FechaModificacion = fechaHoraActual;
            modCarreraAsignatura.UsuarioModificacion = usuarioLog.idUsuario;
    
            const data = await actualizarCarreraAsignaturaBLL(modCarreraAsignatura);

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