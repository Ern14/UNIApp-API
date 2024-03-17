import { obtenerGruposBLL, insertarGrupoBLL, actualizarGrupoBLL, obtenerGrupoxIdBLL } from '../../Library/BLL/Catalogo/Grupos';
import { Grupos } from '../../Library/Models/Catalogo/Grupos';

export const obtenerGrupos = async ( req, res ) => {
    try {
        const data = await obtenerGruposBLL();
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

export const insertarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modGrupo = new Grupos(userData);
        if (modGrupo.Nombre == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modGrupo.Activo = 1;
        modGrupo.FechaCreacion = fechaHoraActual;
        modGrupo.FechaModificacion = fechaHoraActual;
        modGrupo.UsuarioCreacion = usuarioLog.idUsuario;
        modGrupo.UsuarioModificacion = usuarioLog.idUsuario;

        const data = await insertarGrupoBLL(modGrupo);
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

export const actualizarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idGrupo = req.body.idGrupo;
        const Nombre = req.body.Nombre;
        const userData = await obtenerGrupoxIdBLL(idGrupo);

        if (userData.length > 0){
            const modGrupo = new Grupos(userData[0]);

            modGrupo.idGrupo = idGrupo;
            modGrupo.Nombre = Nombre;
            modGrupo.Activo = 1;
            modGrupo.FechaModificacion = fechaHoraActual;
            modGrupo.UsuarioModificacion = usuarioLog.idUsuario;
    
            const data = await actualizarGrupoBLL(modGrupo);

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

export const eliminarGrupo = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idGrupo = req.body.idGrupo;
        const userData = await obtenerGrupoxIdBLL(idGrupo);

        if (userData.length > 0){
            const modGrupo = new Grupos(userData[0]);

            modGrupo.Activo = 0;
            modGrupo.FechaModificacion = fechaHoraActual;
            modGrupo.UsuarioModificacion = usuarioLog.idUsuario;
    
            const data = await actualizarGrupoBLL(modGrupo);

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