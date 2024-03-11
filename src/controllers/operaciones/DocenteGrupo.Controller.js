import { obtenerDocenteGrupoBLL, insertarDocenteGrupoBLL, actualizarDocenteGrupoBLL, obtenerDocenteGrupoxIdBLL } from '../../capas/BLL/operaciones/DocenteGrupo';
import { DocenteGrupo } from '../../modelos/Operaciones/DocenteGrupo';

export const obtenerDocenteGrupo = async ( req, res ) => {
    try {
        const data = await obtenerDocenteGrupoBLL();
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

export const insertarDocenteGrupo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocenteGrupo = new DocenteGrupo(userData);
        if (modDocenteGrupo.idDocente == null || modDocenteGrupo.idGrupo == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocenteGrupo.Activo = 1;
        modDocenteGrupo.FechaCreacion = fechaHoraActual;
        modDocenteGrupo.FechaModificacion = fechaHoraActual;
        modDocenteGrupo.UsuarioCreacion = 1;
        modDocenteGrupo.UsuarioModificacion = 1;

        const data = await insertarDocenteGrupoBLL(modDocenteGrupo);
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

export const actualizarDocenteGrupo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocenteGrupo = req.body.idDocenteGrupo;
        const idDocente = req.body.idDocente;
        const idGrupo = req.body.idGrupo;
        const userData = await obtenerDocenteGrupoxIdBLL(idDocenteGrupo);
        if (userData.length > 0){
            const modDocenteGrupo = new DocenteGrupo(userData[0]);

            modDocenteGrupo.idDocente = idDocente;
            modDocenteGrupo.idGrupo = idGrupo;
            modDocenteGrupo.Activo = 1;
            modDocenteGrupo.FechaModificacion = fechaHoraActual;
            modDocenteGrupo.UsuarioModificacion = 1;
            const data = await actualizarDocenteGrupoBLL(modDocenteGrupo);

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

export const eliminarDocenteGrupo = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocenteGrupo = req.body.idDocenteGrupo;
        const userData = await obtenerDocenteGrupoxIdBLL(idDocenteGrupo);
        if (userData.length > 0){
            const modDocenteGrupo = new DocenteGrupo(userData[0]);

            modDocenteGrupo.Activo = 0;
            modDocenteGrupo.FechaModificacion = fechaHoraActual;
            modDocenteGrupo.UsuarioModificacion = 1;
    
            const data = await actualizarDocenteGrupoBLL(modDocenteGrupo);

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