import { 
    obtenerDocenteDepartamentoBLL, 
    insertarDocenteDepartamentoBLL, 
    actualizarDocenteDepartamentoBLL, 
    obtenerDocenteDepartamentoxIdBLL 
} from '../../Library/BLL/Operaciones/DocenteDepartamento';
import { DocenteDepartamento } from '../../Library/Models/Operaciones/DocenteDepartamento';

export const obtenerDocenteDepartamento = async ( req, res ) => {
    try {
        const idDocente = req.params.idDocente;
        const data = await obtenerDocenteDepartamentoBLL(idDocente);
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

export const filtrarDocenteDepartamentoxId = async ( req, res ) => {
    try {
        const idDocenteDepartamento = req.params.idDocenteDepartamento;
        const data = await obtenerDocenteDepartamentoxIdBLL(idDocenteDepartamento);
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

export const insertarDocenteDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocenteDepartamento = new DocenteDepartamento(userData);
        if (modDocenteDepartamento.idDocente == null || modDocenteDepartamento.idDepartamento == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocenteDepartamento.Activo = 1;
        modDocenteDepartamento.FechaCreacion = fechaHoraActual;
        modDocenteDepartamento.FechaModificacion = fechaHoraActual;
        modDocenteDepartamento.UsuarioCreacion = usuarioLog.idUsuario;
        modDocenteDepartamento.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarDocenteDepartamentoBLL(modDocenteDepartamento);
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
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const actualizarDocenteDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDocenteDepartamento = req.body.idDocenteDepartamento;
        const idDocente = req.body.idDocente;
        const idDepartamento = req.body.idDepartamento;
        const userData = await obtenerDocenteDepartamentoxIdBLL(idDocenteDepartamento);
        if (userData.length > 0){
            const modDocenteDepartamento = new DocenteDepartamento(userData[0]);

            modDocenteDepartamento.idDocente = idDocente;
            modDocenteDepartamento.idDepartamento = idDepartamento;
            modDocenteDepartamento.Activo = 1;
            modDocenteDepartamento.FechaModificacion = fechaHoraActual;
            modDocenteDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
            await actualizarDocenteDepartamentoBLL(modDocenteDepartamento);

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
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};

export const eliminarDocenteDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDocenteDepartamento = req.body.idDocenteDepartamento;
        const userData = await obtenerDocenteDepartamentoxIdBLL(idDocenteDepartamento);
        if (userData.length > 0){
            const modDocenteDepartamento = new DocenteDepartamento(userData[0]);

            modDocenteDepartamento.Activo = 0;
            modDocenteDepartamento.FechaModificacion = fechaHoraActual;
            modDocenteDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarDocenteDepartamentoBLL(modDocenteDepartamento);

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
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }

};