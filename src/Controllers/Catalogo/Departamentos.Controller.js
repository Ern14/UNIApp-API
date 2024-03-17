import { obtenerDepartamentosBLL, insertarDepartamentoBLL, actualizarDepartamentoBLL, obtenerDepartamentoxIdBLL } from '../../Library/BLL/Catalogo/Departamentos';
import { Departamentos } from '../../Library/Models/Catalogo/Departamentos';

export const obtenerDepartamentos = async ( req, res ) => {
    try {
        const data = await obtenerDepartamentosBLL();
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

export const insertarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDepartamento = new Departamentos(userData);
        if (modDepartamento.Nombre == null) {
            throw new Error("Bad request: incomplete information");
        };
        
        modDepartamento.Activo = 1;
        modDepartamento.FechaCreacion = fechaHoraActual;
        modDepartamento.FechaModificacion = fechaHoraActual;
        modDepartamento.UsuarioCreacion = usuarioLog.idUsuario;
        modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;

        const data = await insertarDepartamentoBLL(modDepartamento);
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

export const actualizarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDepartamento = req.body.idDepartamento;
        const Nombre = req.body.Nombre;
        const userData = await obtenerDepartamentoxIdBLL(idDepartamento);
        if (userData.length > 0){
            const modDepartamento = new Departamentos(userData[0]);

            modDepartamento.Nombre = Nombre;
            modDepartamento.Activo = 1;
            modDepartamento.FechaModificacion = fechaHoraActual;
            modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
            const data = await actualizarDepartamentoBLL(modDepartamento);

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

export const eliminarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;
        
        const fechaHoraActual = new Date();
        const idDepartamento = req.body.idDepartamento;
        const userData = await obtenerDepartamentoxIdBLL(idDepartamento);
        if (userData.length > 0){
            const modDepartamento = new Departamentos(userData[0]);

            modDepartamento.Activo = 0;
            modDepartamento.FechaModificacion = fechaHoraActual;
            modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
    
            const data = await actualizarDepartamentoBLL(modDepartamento);

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