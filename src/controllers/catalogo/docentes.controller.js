import { obtenerDocentesBLL, insertarDocenteBLL, actualizarDocenteBLL, obtenerDocentexIdBLL } from '../../capas/BLL/catalogo/docentes';
import { Docentes } from '../../modelos/catalogo/docentes';

export const obtenerDocentes = async ( req, res ) => {
    try {
        const data = await obtenerDocentesBLL();
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

export const insertarDocente = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDocente = new Docentes(userData);
        if (modDocente.Nombre == null || modDocente.Apellido == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDocente.Activo = 1;
        modDocente.FechaCreacion = fechaHoraActual;
        modDocente.FechaModificacion = fechaHoraActual;
        modDocente.UsuarioCreacion = 1;
        modDocente.UsuarioModificacion = 1;

        const data = await insertarDocenteBLL(modDocente);
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

export const actualizarDocente = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocente = req.body.idDocente;
        const Nombre = req.body.Nombre;
        const Apellido = req.body.Apellido;
        const userData = await obtenerDocentexIdBLL(idDocente);

        if (userData.length > 0){
            const modDocente = new Docentes(userData[0]);

            modDocente.idDocente = idDocente;
            modDocente.Nombre = Nombre;
            modDocente.Apellido = Apellido;
            modDocente.Activo = 1;
            modDocente.FechaModificacion = fechaHoraActual;
            modDocente.UsuarioModificacion = 1;
    
            const data = await actualizarDocenteBLL(modDocente);

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

export const eliminarDocente = async ( req, res ) => {
    try {
        const fechaHoraActual = new Date();
        const idDocente = req.body.idDocente;
        const userData = await obtenerDocentexIdBLL(idDocente);

        if (userData.length > 0){
            const modDocente = new Docentes(userData[0]);

            modDocente.Activo = 0;
            modDocente.FechaModificacion = fechaHoraActual;
            modDocente.UsuarioModificacion = 1;
    
            const data = await actualizarDocenteBLL(modDocente);

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