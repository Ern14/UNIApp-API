import { obtenerDocenteDepartamentoBLL, insertarDocenteDepartamentoBLL, actualizarDocenteDepartamentoBLL, obtenerDocenteDepartamentoxIdBLL } from '../../capas/BLL/operaciones/DocenteDepartamento';
import { DocenteDepartamento } from '../../modelos/Operaciones/DocenteDepartamento';

export const obtenerDocenteDepartamento = async ( req, res ) => {
    try {
        const data = await obtenerDocenteDepartamentoBLL();
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

export const insertarDocenteDepartamento = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocenteDepartamento = new DocenteDepartamento(userData);
        if (modDocenteDepartamento.idDocente == null || modDocenteDepartamento.idDepartamento == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocenteDepartamento.Activo = 1;
        modDocenteDepartamento.FechaCreacion = fechaHoraActual;
        modDocenteDepartamento.FechaModificacion = fechaHoraActual;
        modDocenteDepartamento.UsuarioCreacion = 1;
        modDocenteDepartamento.UsuarioModificacion = 1;

        const data = await insertarDocenteDepartamentoBLL(modDocenteDepartamento);
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

export const actualizarDocenteDepartamento = async ( req, res ) => {
    try {
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
            modDocenteDepartamento.UsuarioModificacion = 1;
            const data = await actualizarDocenteDepartamentoBLL(modDocenteDepartamento);

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

export const eliminarDocenteDepartamento = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocenteDepartamento = req.body.idDocenteDepartamento;
        const userData = await obtenerDocenteDepartamentoxIdBLL(idDocenteDepartamento);
        if (userData.length > 0){
            const modDocenteDepartamento = new DocenteDepartamento(userData[0]);

            modDocenteDepartamento.Activo = 0;
            modDocenteDepartamento.FechaModificacion = fechaHoraActual;
            modDocenteDepartamento.UsuarioModificacion = 1;
    
            const data = await actualizarDocenteDepartamentoBLL(modDocenteDepartamento);

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