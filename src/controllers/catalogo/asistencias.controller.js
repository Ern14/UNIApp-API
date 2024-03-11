import { obtenerAsistenciasBLL, insertarAsistenciaBLL, actualizarAsistenciaBLL, obtenerAsistenciaxIdBLL } from '../../Library/BLL/catalogo/asistencias';
import { Asistencias } from '../../Library/Models/Catalogo/Asistencias';

export const obtenerAsistencias = async ( req, res ) => {
    try {
        const data = await obtenerAsistenciasBLL();
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

export const insertarAsistencia = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const fechaActual = `${fechaHoraActual.getFullYear()}-${(fechaHoraActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaHoraActual.getDate().toString().padStart(2, '0')}`;
        const userData = req.body;
        const modAsistencia = new Asistencias(userData);
        console.log(modAsistencia)
        if (modAsistencia.idDocente == null || modAsistencia.Asistencia == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modAsistencia.Fecha = fechaActual;
        modAsistencia.Activo = 1;

        const data = await insertarAsistenciaBLL(modAsistencia);
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

export const actualizarAsistencia = async ( req, res ) => {
    try {
        const idAsistencia = req.body.idAsistencia;
        const idDocente = req.body.idDocente;
        const observaciones = req.body.Observaciones;
        const userData = await obtenerAsistenciaxIdBLL(idAsistencia);
        if (userData.length > 0){
            const modAsistencia = new Asistencias(userData[0]);

            modAsistencia.idAsistencia = idAsistencia;
            modAsistencia.idDocente = idDocente;
            modAsistencia.Observaciones = observaciones;
            modAsistencia.Activo = 1;
            const data = await actualizarAsistenciaBLL(modAsistencia);

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

export const eliminarAsistencia = async ( req, res ) => {
    try {
        const idAsistencia = req.body.idAsistencia;
        const userData = await obtenerAsistenciaxIdBLL(idAsistencia);
        if (userData.length > 0){
            const modAsistencia = new Asistencias(userData[0]);

            modAsistencia.Activo = 0;
    
            const data = await actualizarAsistenciaBLL(modAsistencia);

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